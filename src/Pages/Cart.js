import styled from "styled-components";

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
  height: 1023px;
  margin: 0 auto;
  margin-bottom: 245px;
  background-color: #ccc;
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
  background-color: #ccc;
`






export default function Cart() {
  return (
    <>
      <CartSection targetImg={process.env.PUBLIC_URL+ '/images/sub_background.jpg'}>
        <CartBrightnessBox />
        <CartContents>
          <CartTitle className="spoqa">Cart</CartTitle>

          <CartSheet>

          </CartSheet>

          <ButtonOuterBox>
            <ButtonInnerBox>

            </ButtonInnerBox>
          </ButtonOuterBox>

        </CartContents>
      </CartSection>
    </>
  )
}