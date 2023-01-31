import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { addCount, subCount, deleteItem, calulateTotalPrice } from "./store";


import AlertPopup from "./AlertPopup";
import store from "./store";







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
const CartUnit = styled.div `
  width: 100%;
  height: 300px;
  display: flex;
  margin-bottom: 110px;
`
const CartImageBox = styled.div `
  width: 300px;
  height: 300px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 50px;
  background-image: linear-gradient(${(props) => props.targetGradient || 'to top, #858585, #DEDEDE'});
`

const CartImage = styled.img `display: block; width: 100%; height: 100%;`

const CartDescriptionBox = styled.div `
  width: 320px;
  height: 100%;
  padding-top: 42px;
  box-sizing: border-box;
`
const CartNameBox = styled.div `
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 24px;
  line-height: 50px;
`
const CartName = styled.div `width: 150px;`
const CartQuantity = styled.div `width: calc(100% - 150px); text-indent: 30px;`

const CartPriceBox = styled.div `
  width: 100%;
  height: 50px;
  display: flex;
  font-size: 20px;
  line-height: 50px;
`
const CartPrice = styled.div `width: 163px;`
const CartPriceValue = styled.div `width: calc(100% - 163px);`



const CartUnitRightBox = styled.div `
  width: calc(100% - 300px - 50px - 320px);
  padding-top: 175px;
  box-sizing: border-box;
`
const CartRemoveBox = styled.div `
  width: 100%;
  height: 40px;
  margin-bottom: 38px;
`
const CartRemoveBtn = styled.button `
  width: 230px;
  height: 40px;
  font-size: 19px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 40px;
  background-color: transparent;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`

const CartControlBox = styled.div `
  width: 100%;
  height: 40px;
  display: flex;
`
const CartControlText = styled.div `
  width: calc(100% - 65px - 65px - 65px);
  height: 40px;
  font-size: 32px;
`
const CartControlBtn = styled.button `
  width: 65px;
  height: 40px;
  display: flex;
  font-size: 24px;
  color: #fff;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`
const CartControlMinusBtn = styled(CartControlBtn) `width: 65px;`
const CartControlPlusBtn = styled(CartControlBtn) `width: 65px;`
const CartCurrentQuantity = styled.div `
  width: 65px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  line-height: 40px;
`

const TotalOuterBox = styled.div `
  width: 1070px;
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  margin: 0 auto;
  margin-bottom: 235px;
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
`
const BtnMoreShopping = styled(CartFinalButton) `width: 260px;`
const BtnBuyNow = styled(CartFinalButton) `color: #DFFF00; border: 2px solid #DFFF00;`

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
              state.cart.map((item, i) => {
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
                        <CartPrice>Current Price</CartPrice>
                        <CartPriceValue>{state.cart[i].count*state.cart[i].price}</CartPriceValue>
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

          <TotalOuterBox>
            <TotalInnerBox>
              <TotalText>Total</TotalText>
              <TotalValueBox>
                <TotalPrice className="spoqa">{sumValue}</TotalPrice>ATL Coin
              </TotalValueBox>
            </TotalInnerBox>
          </TotalOuterBox>

          <ButtonOuterBox className="spoqa">
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

        </CartContents>
        {alertPopup === true ? <AlertPopup setAlertPopup={setAlertPopup} alertMessage={alertMessage} bg='to top, rgba(20, 20, 20, 0.95), rgba(35, 35, 35, 0.95)' /> : null}
        <CartBottomPadding />
      </CartSection>
    </>
  )
}