import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { addCount, subCount, deleteItem } from "./store";


import AlertPopup from "./AlertPopup";







const CartSection = styled.section `
  width: 100%;
  padding-top: 248px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.targetImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`
const CartBrightnessBox = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(50, 50, 50, 0.55);
  backdrop-filter: blur(6px);
`
const CartContents = styled.div `
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  z-index: 2;
`
const CartTitle = styled.div `
  width: 100%;
  height: 45px;
  font-size: 32px;
  color: #fff;
  text-align: center;
  line-height: 45px;
  margin-bottom: 188px;
`

const CartSheet = styled.div `
  width: 1070px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  margin: 0 auto;
  margin-bottom: 91px;
  border-bottom: 2px solid #fff;
`
const CartEmptyUnit = styled.div `
  width: 100%;
  height: 200px;
  font-size: 16px;
  text-align: center;
`
const CartUnit = styled.div `
  width: 100%;
  height: 210px;
  display: flex;
  margin-bottom: 110px;
`
const CartImageBox = styled.div `
  width: 210px;
  height: 210px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 50px;
  background-image: linear-gradient(${(props) => props.targetGradient || 'to top, #858585, #DEDEDE'});
`

const CartImage = styled.img `display: block; width: 100%; height: 100%;`

const CartDescriptionBox = styled.div `
  width: 450px;
  height: 100%;
  padding-top: 10px;
  box-sizing: border-box;
`
const CartNameBox = styled.div `
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 20px;
  line-height: 50px;
`
const CartName = styled.div `width: 150px;`
const CartQuantity = styled.div `width: calc(100% - 150px); text-indent: 30px;`

const CartPriceBox = styled.div `
  width: 500px;
  height: 50px;
  display: flex;
  font-size: 17px;
  line-height: 50px;
`
const CartPriceText = styled.div `width: 163px;`
const CartPriceValueBox = styled.div `width: calc(100% - 163px);;`
const CartPriceValue = styled.span `margin-right: 15px;`
const CartPriceMonetary = styled.span `font-size: 14px; vertical-align: 0%;`


const CartUnitRightBox = styled.div `
  width: calc(100% - 300px - 50px - 450px);
  padding-top: 120px;
  box-sizing: border-box;
`
const CartRemoveBox = styled.div `
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
`
const CartRemoveBtn = styled.button `
  width: 200px;
  height: 30px;
  font-size: 16px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 30px;
  background-color: transparent;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    color: #fff;
    background-color: #51859c;
    border: 1px solid #b5ddee;
  }
`

const CartControlBox = styled.div `
  width: 100%;
  height: 30px;
  display: flex;
`
const CartControlText = styled.div `
  width: calc(100% - 40px - 40px - 40px);
  height: 30px;
  font-size: 20px;
`
const CartControlBtn = styled.button `
  width: 40px;
  height: 30px;
  display: flex;
  font-size: 20px;
  color: #fff;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    color: #87ceeb;
  }
`
const CartControlMinusBtn = styled(CartControlBtn) `width: 40px;`
const CartControlPlusBtn = styled(CartControlBtn) `width: 40px;`
const CartCurrentQuantity = styled.div `
  width: 40px;
  height: 30px;
  font-size: 22px;
  text-align: center;
  line-height: 30px;
`

const TotalOuterBox = styled.div `
  width: 1070px;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
  margin-bottom: 200px;
`
const TotalInnerBox = styled.div `
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 32px;
  line-height: 50px;
`
const TotalText = styled.div `width: 80px; height: 50px;`
const TotalValueBox = styled.div `height: 50px;`
const TotalPrice = styled.span `color: #C1C7F1; text-shadow: rgba(138, 154, 55, 0.4) 1px 0 10px; margin-right: 18px;`

const ButtonOuterBox = styled.div `
  display: flex;
  flex-direction: row-reverse;
  width: 1070px;
  height: 60px;
  margin: 0 auto;
`
const ButtonInnerBox = styled.div `
  width: 557px;
  height: 60px;
  display: flex;
  justify-content: space-between;
`
const CartFinalButton = styled.button `
  width: 260px;
  height: 60px;
  display: flex;
  font-size: 18px;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 60px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all .3s;
`
const BtnMoreShopping = styled(CartFinalButton) `
  width: 260px;
  &:hover {
    color: #fff;
    background-color: #51859c;
    border: 2px solid #87ceeb;
  }
`
const BtnBuyNow = styled(CartFinalButton) `
  color: #DFFF00;
  border: 2px solid #DFFF00;
  &:hover {
    color: #fff;
    background-color: #95a52b;
  }
`

const CartBottomPadding = styled.div `width: 100%; height: 235px;`




let sumValue = 0;
function calculateSumValue(numList) {

  if (numList.length > 0) {
    numList.forEach((targetNumber, i) => {
      if (i === 0) {
        sumValue = targetNumber.price * targetNumber.count;
      } else {
        sumValue += targetNumber.price * targetNumber.count;
      }
    })
    let StringifiedPrice = `${sumValue}`;
    let modifiedPriceString = '';
    for(let k=0; k<StringifiedPrice.length; k++) {
      let priceTextIndex = StringifiedPrice.length-k-1
      let slicedText = StringifiedPrice[priceTextIndex];
      if ((k+1)%3 !== 0) {
        modifiedPriceString = slicedText + modifiedPriceString;
      } else if ((k+1)%3 === 0) {
        modifiedPriceString = slicedText + modifiedPriceString;
        modifiedPriceString = ',' + modifiedPriceString;
      }
    }
    if (StringifiedPrice.length%3 === 0) {
      let washedString = '';
      for (let k=1; k<modifiedPriceString.length; k++) {
        washedString += modifiedPriceString[k];
      }
      modifiedPriceString = washedString;
    }
    sumValue = `${modifiedPriceString}`;
  } else {
    sumValue = 0;
  }
}









export default function Cart() {

  const navigate = useNavigate()

  const [alertPopup, setAlertPopup] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  const state = useSelector((state) => {return state})
  const dispatch = useDispatch()

  calculateSumValue(state.cart)

  return (
    <>
      <CartSection targetImg={process.env.PUBLIC_URL+ '/images/sub_background.jpg'}>
        <CartBrightnessBox />
        <CartContents>
          <CartTitle className="spoqa">Cart</CartTitle>

          <CartSheet>
            {
             sumValue === 0
             ? <CartEmptyUnit>The Cart is Empty</CartEmptyUnit>
             : state.cart.map((item, i) => {
                return (
                  <CartUnit key={i}>
                    <CartImageBox targetGradient={state.cart[i].gradient}>
                      <CartImage src={state.cart[i].img}></CartImage>
                    </CartImageBox>
                    <CartDescriptionBox>
                      <CartNameBox>
                        <CartName>{state.cart[i].name}</CartName>
                        <CartQuantity>x {state.cart[i].count}</CartQuantity>
                      </CartNameBox>
                      <CartPriceBox>
                        <CartPriceText>Current Price</CartPriceText>
                        <CartPriceValueBox>
                          <CartPriceValue>{state.cart[i].count*state.cart[i].price}</CartPriceValue>
                          <CartPriceMonetary>ATL Coin</CartPriceMonetary>
                        </CartPriceValueBox>
                      </CartPriceBox>
                    </CartDescriptionBox>
                    <CartUnitRightBox>
                      <CartRemoveBox>
                        <CartRemoveBtn onClick={() => {
                            dispatch(deleteItem(state.cart[i].id))
                            calculateSumValue(state.cart);
                          }}>
                          remove from the cart
                        </CartRemoveBtn>
                      </CartRemoveBox>
                      <CartControlBox>
                        <CartControlText>count</CartControlText>
                        <CartControlMinusBtn onClick={() => {
                            dispatch(subCount(state.cart[i].id));
                            calculateSumValue(state.cart);
                          }}>
                          <FontAwesomeIcon icon={faMinus} size='sm' />
                        </CartControlMinusBtn>
                        <CartCurrentQuantity className="spoqa_bold">{state.cart[i].count}</CartCurrentQuantity>
                        <CartControlPlusBtn onClick={() => {
                          dispatch(addCount(state.cart[i].id));
                          calculateSumValue(state.cart);
                        }}>
                          <FontAwesomeIcon icon={faPlus} size='sm' />
                        </CartControlPlusBtn>
                      </CartControlBox>
                    </CartUnitRightBox>
                  </CartUnit>
                )
              })
            }

          </CartSheet>

          {
             sumValue === 0
             ? null
             : <TotalOuterBox>
                <TotalInnerBox>
                  <TotalText>Total</TotalText>
                  <TotalValueBox>
                    <TotalPrice className="spoqa">{sumValue}</TotalPrice>ATL Coin
                  </TotalValueBox>
                </TotalInnerBox>
             </TotalOuterBox>
          }

          {
            sumValue === 0
            ? <ButtonOuterBox className="spoqa">
                <BtnMoreShopping onClick={()=>{navigate('/shop')}}>MORE SHOPPING</BtnMoreShopping>
            </ButtonOuterBox>
            : <ButtonOuterBox className="spoqa">
                <ButtonInnerBox>
                  <BtnMoreShopping onClick={()=>{navigate('/shop')}}>MORE SHOPPING</BtnMoreShopping>
                  <BtnBuyNow onClick={() => {
                    if (sumValue === 0) {
                      setAlertPopup(true); setAlertMessage('The cart is empty');
                    } else {
                      setAlertPopup(true); setAlertMessage('The System is under maintenance');
                    }
                    }}>BUY NOW</BtnBuyNow>
                </ButtonInnerBox>
            </ButtonOuterBox>
          }

        </CartContents>
        {alertPopup === true ? <AlertPopup setAlertPopup={setAlertPopup} alertMessage={alertMessage} bg='to top, rgba(20, 20, 20, 0.95), rgba(35, 35, 35, 0.95)' /> : null}
        <CartBottomPadding />
      </CartSection>
    </>
  )
}