import { Outlet } from "react-router-dom";

import styled from "styled-components";

const ShopSection = styled.section `
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

const ShopBrightnessBox = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(35, 35, 35, 0.35);
`

const ShopContents = styled.div `
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
`

const ShopTitle = styled.div `
  width: 100%;
  height: 45px;
  font-size: 32px;
  color: #fff;
  text-align: center;
  line-height: 45px;
  margin-bottom: 188px;
`

const ProductSheet = styled.div `
  width: 1070px;
  height: 1056px;
  margin: 0 auto;
  margin-bottom: 150px;
  background-color: #ccc;
`

const ProbabilityBox = styled.div `
  width: 1070px;
  height: 238px;
  margin: 0 auto;
`

const ProbabilityTable = styled.div `
  width: 530px;
  height: 238px;
  background-color: #ccc;
`

export default function Shop() {
  return (
    <>
      <ShopSection targetImg={process.env.PUBLIC_URL+ '/images/sub_background.jpg'}>
        <ShopBrightnessBox />
        <ShopContents>
          <ShopTitle>Get your Dragon!</ShopTitle>
          <ProductSheet>

          </ProductSheet>

          <ProbabilityBox>
            <ProbabilityTable>

            </ProbabilityTable>
          </ProbabilityBox>

        </ShopContents>
      </ShopSection>
      <Outlet></Outlet>
    </>

  )
}