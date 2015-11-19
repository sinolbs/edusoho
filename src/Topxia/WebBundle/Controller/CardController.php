<?php

namespace Topxia\WebBundle\Controller;

use Topxia\Common\ArrayToolkit;
use Symfony\Component\HttpFoundation\Request;
use Topxia\WebBundle\Controller\BaseController;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CardController extends BaseController
{
    public function indexAction(Request $request)
    {
        $user     = $this->getCurrentUser();
        $cardType = $request->query->get('cardType');

        if (!$user->isLogin()) {
            return $this->createMessageResponse('error', '用户未登录，请先登录！');
        }

        if (($cardType == 'coupon' || empty($cardType)) && !$this->isPluginInstalled('Coupon')) {
            return $this->render('TopxiaWebBundle:Card:index.html.twig', array(
                'cards' => null
            ));
        }

        if ($cardType == 'moneyCard' && !$this->isPluginInstalled('moneyCard')) {
            return $this->render('TopxiaWebBundle:Card:index.html.twig', array(
                'cards' => null
            ));
        }

        if (empty($cardType) || !in_array($cardType, array('coupon', 'moneyCard'))) {
            $cardType = "coupon";
        }

        $cards   = $this->getCardService()->findCardsByUserIdAndCardType($user['id'], $cardType);
        $cardIds = ArrayToolkit::column($cards, 'cardId');
        $cards   = $this->sortCards($cards);
        $filter  = $request->query->get('filter');

        if (!empty($filter)) {
            $groupCards = ArrayToolkit::group($cards, 'status');

            if ($filter == 'useable') {
                $cards = isset($groupCards['useable']) ? $groupCards['useable'] : null;
            } elseif ($filter == 'used') {
                $cards = isset($groupCards['used']) ? $groupCards['used'] : null;
            } elseif ($filter == 'outdate') {
                $cards = isset($groupCards['outdate']) ? $groupCards['outdate'] : null;
            } elseif ($filter == 'invalid') {
                $cards = isset($groupCards['invalid']) ? $groupCards['invalid'] : null;
            } else {
                $cards = isset($groupCards['useable']) ? $groupCards['useable'] : null;
            }
        }

        $cardsDetail = $this->getCardService()->findCardDetailsByCardTypeAndCardIds($cardType, $cardIds);
        return $this->render('TopxiaWebBundle:Card:index.html.twig', array(
            'cards'       => empty($cards) ? null : $cards,
            'cardDetails' => ArrayToolkit::index($cardsDetail, 'id')
        ));
    }

    public function useableCouponsAction($targetType, $targetId, $totalPrice, $priceType)
    {
        $user = $this->getCurrentUser();

        if (!$user->isLogin()) {
            return $this->redirect($this->generateUrl('login'));
        }

        $cards      = $this->getCardService()->findCardsByUserIdAndCardType($user['id'], 'coupon');
        $cards      = $this->sortCards($cards);
        $groupCards = ArrayToolkit::group($cards, 'status');

        if (isset($groupCards['useable'])) {
            $cardIds      = ArrayToolkit::column($groupCards['useable'], 'cardId');
            $cardDetails  = $this->getCardService()->findCardDetailsByCardTypeAndCardIds('coupon', $cardIds);
            $useableCards = array();

            foreach ($cardDetails as $key => $value) {
                if ($value['targetType'] == $targetType && ($value['targetId'] == 0 || $value['targetId'] == $targetId)) {
                    if ($value['type'] == 'minus') {
                        $cardDetails[$key]['truePrice'] = $totalPrice > $value['rate'] ? $totalPrice - $value['rate'] : 0;
                        $useableCards[]                 = $cardDetails[$key];
                    } else {
                        $cardDetails[$key]['truePrice'] = $totalPrice * ($value['rate'] / 10);
                        $useableCards[]                 = $cardDetails[$key];
                    }
                }
            }

            $useableCards = array_reverse($this->getCardService()->sortArrayByField($useableCards, 'truePrice'));
        }

        return $this->render('TopxiaWebBundle:Order:order-item-coupon.html.twig', array(
            'targetType' => $targetType,
            'targetId'   => $targetId,
            'totalPrice' => $totalPrice,
            'priceType'  => $priceType,
            'coupons'    => isset($useableCards) ? $useableCards : null
        ));
    }

    protected function sortCards($cards)
    {
        $cards       = $this->getCardService()->sortArrayByfield($cards, 'createdTime');
        $cards       = ArrayToolkit::group($cards, 'status');
        $sortedCards = array();

        $currentTime  = time();
        $usedCards    = isset($cards['used']) ? $cards['used'] : array();
        $invalidCards = isset($cards['invalid']) ? $cards['invalid'] : array();
        $outDateCards = array();
        $receiveCards = array();

        if (isset($cards['receive'])) {
            foreach ($cards['receive'] as $card) {
                if ($card['deadline'] < $currentTime) {
                    $card['status'] = 'outdate';
                    $outDateCards[] = $card;
                } else {
                    $card['status'] = 'useable';
                    $receiveCards[] = $card;
                }
            }
        }

        $sortedCards = array_merge($receiveCards, $usedCards, $outDateCards, $invalidCards);

        return $sortedCards;
    }

    protected function getCardService()
    {
        return $this->getServiceKernel()->createService('Card.CardService');
    }
}
