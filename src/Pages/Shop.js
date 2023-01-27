import styled from "styled-components";
import { useState } from 'react'
import data from "./productData";



const ShopSection = styled.section `
  width: 100%;
  height: 2000px;
  padding-top: 248px;
  box-sizing: border-box;
  color: #fff;
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
  background-color: rgba(35, 35, 35, 0.4);
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
  user-select: none;
`

const ProductSheet = styled.div `
  width: 1070px;
  height: 1056px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 150px;
`

const ProductUnit = styled.div `
  width: 340px;
  height: 455px;
  margin-bottom: 146px;
  cursor: pointer;
`

const ProductImageBox = styled.div `
  width: 340px;
  height: 340px;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
`
const ProductImageBackground = styled.div `width: 100%; height: 100%;`
const ProductImageBackground01 = styled(ProductImageBackground) `background-image: linear-gradient(to top, #3A7EC2, #E2E5CB);`
const ProductImageBackground02 = styled(ProductImageBackground) `background-image: linear-gradient(to top, #6D6B4D, #E5E9DB);`
const ProductImageBackground03 = styled(ProductImageBackground) `background-image: linear-gradient(to top, #858585, #DEDEDE);`

const ProductImage = styled.img `
  display: block;
  width: 100%;
`
function GetProductShape(props) {
  const {products, index} = props
  switch(index) {
    case 0:
      return <ProductImageBackground01><ProductImage src={products[index].img} alt={products[index].imgName} /></ProductImageBackground01>
    case 1:
      return <ProductImageBackground02><ProductImage src={products[index].img} alt={products[index].imgName} /></ProductImageBackground02>
    default:
      return <ProductImageBackground03><ProductImage src={products[index].img} alt={products[index].imgName} /></ProductImageBackground03>
  }
}

const ProductNameBox = styled.div `
  width: 100%;
  height: 40px;
  font-size: 22px;
  text-align: center;
  line-height: 40px;
  margin-bottom: 15px;
  user-select: none;
`
const ProductName = styled.div `width: 100%; height: 100%;`
const ProductName01 = styled(ProductName) `color: #EF63E1; text-shadow: rgba(205, 212, 239, 0.25) 1px 0 10px;`
const ProductName02 = styled(ProductName) `color: #F9DCB0; text-shadow: rgba(184, 127, 233, 0.5) 1px 0 10px;`
const ProductName03 = styled(ProductName) `color: #C1C7F1; text-shadow: rgba(138, 154, 55, 0.4) 1px 0 10px;`
const ProductName04 = styled(ProductName) `color: #DCCB5E;`
const ProductName05 = styled(ProductName) `color: #6CC87B;`
const ProductName06 = styled(ProductName) `color: #fff;`

function GetProductName(props) {
  const {products, index} = props
  switch(index) {
    case 0:
      return <ProductName01 className="spoqa_bold">{products[index].name}</ProductName01>
    case 1:
      return <ProductName02 className="spoqa_bold">{products[index].name}</ProductName02>
    case 2:
      return <ProductName03 className="spoqa_bold">{products[index].name}</ProductName03>
    case 3:
      return <ProductName04>{products[index].name}</ProductName04>
    case 4:
      return <ProductName05>{products[index].name}</ProductName05>
    case 5:
      return <ProductName06>{products[index].name}</ProductName06>
    default:
      return <ProductName06>{products[index].name}</ProductName06>
  }
}

const ProductPriceBox = styled.div `
  width: 100%;
  height: 40px;
  font-size: 21px;
  text-align: center;
  line-height: 40px;
  user-select: none;
`

const ProductPrice = styled.div `width: 100%; height: 100%;`

function GetProductPrice(props) {

  const {products, index} = props

  let StringifiedPrice = `${products[index].price}`;
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
  /* StringifiedPrice 문자열의 총길이가 3으로 나누어 떨어질경우 맨 왼쪽의 ',' 1개 제거 */
  if (StringifiedPrice.length%3 === 0) {
    let washedString = '';
    for (let k=1; k<modifiedPriceString.length; k++) {
      washedString += modifiedPriceString[k];
    }
    modifiedPriceString = washedString;
  }
  let finalPrice = `${modifiedPriceString} ATL Coin`;

  return (
    <>
      <ProductPrice className="spoqa_bold">{finalPrice}</ProductPrice>
    </>
  )
}









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

  const [products] = useState(data)

  return (
    <>
      <ShopSection targetImg={process.env.PUBLIC_URL+ '/images/sub_background.jpg'}>
        <ShopBrightnessBox />
        <ShopContents>
          <ShopTitle className="spoqa">Get your Dragon!</ShopTitle>

          <ProductSheet>
            {
              products.map((product, index)=>{
                return(
                  <ProductUnit key={index}>
                    <ProductImageBox>
                      <GetProductShape products={products} index={index} />
                    </ProductImageBox>

                    <ProductNameBox>
                      <GetProductName products={products} index={index} />
                    </ProductNameBox>

                    <ProductPriceBox>
                      <GetProductPrice products={products} index={index} />
                    </ProductPriceBox>

                  </ProductUnit>
                )
              })
            }
          </ProductSheet>

          <ProbabilityBox>
            <ProbabilityTable>
              probability
            </ProbabilityTable>
          </ProbabilityBox>

        </ShopContents>
      </ShopSection>
    </>

  )
}