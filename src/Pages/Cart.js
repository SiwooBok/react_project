import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CartSection = styled.section `
  width: 100%;
  height: 2000px;
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
  background-color: rgba(35, 35, 35, 0.4);
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
  height: 889px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  margin: 0 auto;
  margin-bottom: 91px;
  border-bottom: 2px solid #fff;
`

const CartUnit = styled.div `
  width: 100%;
  height: 340px;
  display: flex;
  margin-bottom: 97px;
`

const CartImageBox = styled.div `
  width: 340px;
  height: 340px;
  border-radius: 20px;
  overflow: hidden;
  margin-right: 50px;
`

const CartImageBox01 = styled(CartImageBox) `background-image: linear-gradient(to top, #3A7EC2, #E2E5CB);`
const CartImageBox02 = styled(CartImageBox) `background-image: linear-gradient(to top, #6D6B4D, #E5E9DB);`
const CartImageBox03 = styled(CartImageBox) `background-image: linear-gradient(to top, #858585, #DEDEDE);`


const CartImage = styled.img `
  display: block;
  width: 100%;
  height: 100%;
`

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
  font-size: 32px;
  line-height: 50px;
`

const CartName = styled.div `
  width: 150px;
`

const CartQuantity = styled.div `
  width: calc(100% - 150px);
  text-indent: 30px;
`





const CartUnitRightBox = styled.div `
  width: calc(100% - 340px - 50px - 320px);
  padding-top: 215px;
  box-sizing: border-box;
`

const CartRemoveBox = styled.div `
  width: 100%;
  height: 40px;
  margin-bottom: 38px;
`

const CartRemoveBtn = styled.button `
  width: 248px;
  height: 40px;
  font-size: 20px;
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
  font-size: 32px;
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
  font-size: 34px;
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

const TotalText = styled.div `
  width: 80px;
  height: 50px;
`

const TotalValueBox = styled.div `
  height: 50px;
`













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
  font-size: 20px;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 60px;
  box-sizing: border-box;
  cursor: pointer;
`

const BtnMoreShopping = styled(CartFinalButton) `
  width: 260px;
`

const BtnBuyNow = styled(CartFinalButton) `
  color: #DFFF00;
  border: 2px solid #DFFF00;
`










export default function Cart() {
  return (
    <>
      <CartSection targetImg={process.env.PUBLIC_URL+ '/images/sub_background.jpg'}>
        <CartBrightnessBox />
        <CartContents>
          <CartTitle className="spoqa">Cart</CartTitle>

          <CartSheet>
            <CartUnit>
              <CartImageBox01>
                <CartImage src={process.env.PUBLIC_URL+ '/images/box.png'}></CartImage>
              </CartImageBox01>
              <CartDescriptionBox>
                <CartNameBox>
                  <CartName>Epic Box</CartName>
                  <CartQuantity>x 1</CartQuantity>
                </CartNameBox>
              </CartDescriptionBox>
              <CartUnitRightBox>
                <CartRemoveBox>
                  <CartRemoveBtn>remove from the cart</CartRemoveBtn>
                </CartRemoveBox>
                <CartControlBox>
                  <CartControlText>count</CartControlText>
                  <CartControlMinusBtn>
                  <FontAwesomeIcon icon={faMinus} size='sm' />
                  </CartControlMinusBtn>
                  <CartCurrentQuantity>1</CartCurrentQuantity>
                  <CartControlPlusBtn>
                  <FontAwesomeIcon icon={faPlus} size='sm' />
                  </CartControlPlusBtn>
                </CartControlBox>
              </CartUnitRightBox>
            </CartUnit>

            <CartUnit>
              <CartImageBox03>
                <CartImage src={process.env.PUBLIC_URL+ '/images/box.png'}></CartImage>
              </CartImageBox03>
              <CartDescriptionBox>
                <CartNameBox>
                  <CartName>Rare Box</CartName>
                  <CartQuantity>x 1</CartQuantity>
                </CartNameBox>
              </CartDescriptionBox>
              <CartUnitRightBox>
                <CartRemoveBox>
                  <CartRemoveBtn>remove from the cart</CartRemoveBtn>
                </CartRemoveBox>
                <CartControlBox>
                  <CartControlText>count</CartControlText>
                  <CartControlMinusBtn>
                  <FontAwesomeIcon icon={faMinus} size='sm' />
                  </CartControlMinusBtn>
                  <CartCurrentQuantity>1</CartCurrentQuantity>
                  <CartControlPlusBtn>
                  <FontAwesomeIcon icon={faPlus} size='sm' />
                  </CartControlPlusBtn>
                </CartControlBox>
              </CartUnitRightBox>
            </CartUnit>
          </CartSheet>

          <TotalOuterBox>
            <TotalInnerBox>
              <TotalText>Total</TotalText>
              <TotalValueBox>2,400 ATL Coin</TotalValueBox>
            </TotalInnerBox>
          </TotalOuterBox>

          <ButtonOuterBox>
            <ButtonInnerBox>
              <BtnMoreShopping>MORE SHOPPING</BtnMoreShopping>
              <BtnBuyNow>BUY NOW</BtnBuyNow>
            </ButtonInnerBox>
          </ButtonOuterBox>

        </CartContents>
      </CartSection>
    </>
  )
}