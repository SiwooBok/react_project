import styled from "styled-components";
import { useState } from 'react'
import data from "./productData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { addItem } from "./store";

import { useNavigate } from 'react-router-dom';

import AlertPopup from "./AlertPopup";


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
  background-color: rgba(35, 35, 35, 0.45);
  backdrop-filter: blur(3px);
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
  margin-bottom: 128px;
`

const ProductUnit = styled.div `
  width: 340px;
  height: 455px;
  margin-bottom: 146px;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    filter: drop-shadow(0 0 10px #FC0);
  }
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






const ProbabilityOuterBox = styled.div `
  width: 1070px;
  height: 262px;
  margin: 0 auto;
`
const ProbabilityInnerBox = styled.div `
  width: 530px;
  height: 262px;
`
const ProbabilityTitle = styled.div `
  width: 100%;
  height: 20px;
  font-size: 14px;
  color: #C4C4C4;
  text-indent: 5px;
  margin-bottom: 32px;
`
const ProbabilityTable = styled.div `
  display: flex;
  width: 100%;
  height: 210px;
`
const ProbTableLeftArea = styled.div `
  width: 110px;
  height: 100%;
`
const TableCategoryUnit = styled.div `width: 100%; height: 30px; font-size: 14px; color: #fff; line-height: 30px;`
const TableCategoryUnit01 = styled(TableCategoryUnit) `color: #EF63E1; text-shadow: rgba(205, 212, 239, 0.25) 1px 0 10px;`
const TableCategoryUnit02 = styled(TableCategoryUnit) `color: #F9DCB0; text-shadow: rgba(184, 127, 233, 0.5) 1px 0 10px;`
const TableCategoryUnit03 = styled(TableCategoryUnit) `color: #C1C7F1; text-shadow: rgba(138, 154, 55, 0.4) 1px 0 10px;`
const TableCategoryUnit04 = styled(TableCategoryUnit) `color: #DCCB5E;`
const TableCategoryUnit05 = styled(TableCategoryUnit) `color: #6CC87B;`
const TableCategoryUnit06 = styled(TableCategoryUnit) `color: #fff;`

const probabilityCategoryData = ["Epic Box", "Legend Box", "Unique Box", "SuperRare Box", "Rare Box", "Normal Box"];

function GetProbCategory(props) {
  const {tableCategories, index} = props

  switch(index) {
    case 0:
      return <>
              <TableCategoryUnit01></TableCategoryUnit01>
              <TableCategoryUnit01 className="spoqa_bold">{tableCategories[index]}</TableCategoryUnit01>
            </>
    case 1:
      return <TableCategoryUnit02 className="spoqa_bold">{tableCategories[index]}</TableCategoryUnit02>
    case 2:
      return <TableCategoryUnit03 className="spoqa_bold">{tableCategories[index]}</TableCategoryUnit03>
    case 3:
      return <TableCategoryUnit04>{tableCategories[index]}</TableCategoryUnit04>
    case 4:
      return <TableCategoryUnit05>{tableCategories[index]}</TableCategoryUnit05>
    case 5:
      return <TableCategoryUnit06>{tableCategories[index]}</TableCategoryUnit06>
    default:
      return <TableCategoryUnit06>{tableCategories[index]}</TableCategoryUnit06>
  }
}





const ProbTableRightArea = styled.div `
  width: calc(100% - 110px);
  text-align: center;
`

const ProbabilityTableRow = styled.div `width: 100%; height: 30px; line-height: 30px; display: flex;`

const TableUnitName = styled.div `font-size: 14px;`

const TableUnitName01 = styled(TableUnitName) `width: 65px; color: #EF63E1; text-shadow: rgba(205, 212, 239, 0.25) 1px 0 10px;`
const TableUnitName02 = styled(TableUnitName) `width: 70px; color: #F9DCB0; text-shadow: rgba(184, 127, 233, 0.5) 1px 0 10px;`
const TableUnitName03 = styled(TableUnitName) `width: 64px; color: #C1C7F1; text-shadow: rgba(138, 154, 55, 0.4) 1px 0 10px;`
const TableUnitName04 = styled(TableUnitName) `width: 100px; color: #DCCB5E;`
const TableUnitName05 = styled(TableUnitName) `width: 53px; color: #6CC87B;`
const TableUnitName06 = styled(TableUnitName) `width: 68px; color: #fff;`

const TableUnitValue = styled.div `font-size: 13px;`

const TableUnitValue01 = styled(TableUnitValue) `width: 65px;`
const TableUnitValue02 = styled(TableUnitValue) `width: 70px;`
const TableUnitValue03 = styled(TableUnitValue) `width: 64px;`
const TableUnitValue04 = styled(TableUnitValue) `width: 100px;`
const TableUnitValue05 = styled(TableUnitValue) `width: 53px;`
const TableUnitValue06 = styled(TableUnitValue) `width: 68px;`

const probabilityData = [
  {"category": ["Epic", "Legend", "Unique", "Super Rare", "Rare", "Normal"]},
  {"epicBox": [10, 15, 20, 20, 20, 15]},
  {"legendBox": [3, 10, 15, 15, 15, 42]},
  {"uniqueBox": [0.5, 3, 10, 15, 15, 56.5]},
  {"superRareBox": [0.3, 1.5, 3, 15, 10, 70.2]},
  {"rareBox": [0.2, 0.8, 1.5, 4, 10, 83.5]},
  {"normalBox": [0.1, 0.5, 1, 2, 5, 91.4]}
]

function GetTableUnit(props) {
  const {tableUnits, index} = props;
  
  switch(index) {
    case 0:
      return <ProbabilityTableRow>
              {
                tableUnits[0]["category"].map((categoryUnit, indexP) => {
                  switch(indexP) {
                    case 0:
                      return <TableUnitName01 key={indexP} className="spoqa_bold">{categoryUnit}</TableUnitName01>
                    case 1:
                      return <TableUnitName02 key={indexP} className="spoqa_bold">{categoryUnit}</TableUnitName02>
                    case 2:
                      return <TableUnitName03 key={indexP} className="spoqa_bold">{categoryUnit}</TableUnitName03>
                    case 3:
                      return <TableUnitName04 key={indexP}>{categoryUnit}</TableUnitName04>
                    case 4:
                      return <TableUnitName05 key={indexP}>{categoryUnit}</TableUnitName05>
                    case 5:
                      return <TableUnitName06 key={indexP}>{categoryUnit}</TableUnitName06>
                    default:
                      return <TableUnitName06 key={indexP}>{categoryUnit}</TableUnitName06>
                  }
                })
              }
            </ProbabilityTableRow>
        case 1:
          return <ProbabilityTableRow>
                  {
                    tableUnits[1]["epicBox"].map((categoryUnit, indexP) => {
                      switch(indexP) {
                        case 0:
                          return <TableUnitValue01 key={indexP}>{categoryUnit}%</TableUnitValue01>
                        case 1:
                          return <TableUnitValue02 key={indexP}>{categoryUnit}%</TableUnitValue02>
                        case 2:
                          return <TableUnitValue03 key={indexP}>{categoryUnit}%</TableUnitValue03>
                        case 3:
                          return <TableUnitValue04 key={indexP}>{categoryUnit}%</TableUnitValue04>
                        case 4:
                          return <TableUnitValue05 key={indexP}>{categoryUnit}%</TableUnitValue05>
                        case 5:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                        default:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                      }
                    })
                  }
                </ProbabilityTableRow>
        case 2:
          return <ProbabilityTableRow>
                  {
                    tableUnits[2]["legendBox"].map((categoryUnit, indexP) => {
                      switch(indexP) {
                        case 0:
                          return <TableUnitValue01 key={indexP}>{categoryUnit}%</TableUnitValue01>
                        case 1:
                          return <TableUnitValue02 key={indexP}>{categoryUnit}%</TableUnitValue02>
                        case 2:
                          return <TableUnitValue03 key={indexP}>{categoryUnit}%</TableUnitValue03>
                        case 3:
                          return <TableUnitValue04 key={indexP}>{categoryUnit}%</TableUnitValue04>
                        case 4:
                          return <TableUnitValue05 key={indexP}>{categoryUnit}%</TableUnitValue05>
                        case 5:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                        default:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                      }
                    })
                  }
                </ProbabilityTableRow>
        case 3:
          return <ProbabilityTableRow>
                  {
                    tableUnits[3]["uniqueBox"].map((categoryUnit, indexP) => {
                      switch(indexP) {
                        case 0:
                          return <TableUnitValue01 key={indexP}>{categoryUnit}%</TableUnitValue01>
                        case 1:
                          return <TableUnitValue02 key={indexP}>{categoryUnit}%</TableUnitValue02>
                        case 2:
                          return <TableUnitValue03 key={indexP}>{categoryUnit}%</TableUnitValue03>
                        case 3:
                          return <TableUnitValue04 key={indexP}>{categoryUnit}%</TableUnitValue04>
                        case 4:
                          return <TableUnitValue05 key={indexP}>{categoryUnit}%</TableUnitValue05>
                        case 5:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                        default:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                      }
                    })
                  }
                </ProbabilityTableRow>
        case 4:
          return <ProbabilityTableRow>
                  {
                    tableUnits[4]["superRareBox"].map((categoryUnit, indexP) => {
                      switch(indexP) {
                        case 0:
                          return <TableUnitValue01 key={indexP}>{categoryUnit}%</TableUnitValue01>
                        case 1:
                          return <TableUnitValue02 key={indexP}>{categoryUnit}%</TableUnitValue02>
                        case 2:
                          return <TableUnitValue03 key={indexP}>{categoryUnit}%</TableUnitValue03>
                        case 3:
                          return <TableUnitValue04 key={indexP}>{categoryUnit}%</TableUnitValue04>
                        case 4:
                          return <TableUnitValue05 key={indexP}>{categoryUnit}%</TableUnitValue05>
                        case 5:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                        default:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                      }
                    })
                  }
                </ProbabilityTableRow>
        case 5:
          return <ProbabilityTableRow>
                  {
                    tableUnits[5]["rareBox"].map((categoryUnit, indexP) => {
                      switch(indexP) {
                        case 0:
                          return <TableUnitValue01 key={indexP}>{categoryUnit}%</TableUnitValue01>
                        case 1:
                          return <TableUnitValue02 key={indexP}>{categoryUnit}%</TableUnitValue02>
                        case 2:
                          return <TableUnitValue03 key={indexP}>{categoryUnit}%</TableUnitValue03>
                        case 3:
                          return <TableUnitValue04 key={indexP}>{categoryUnit}%</TableUnitValue04>
                        case 4:
                          return <TableUnitValue05 key={indexP}>{categoryUnit}%</TableUnitValue05>
                        case 5:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                        default:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                      }
                    })
                  }
                </ProbabilityTableRow>
        case 6:
          return <ProbabilityTableRow>
                  {
                    tableUnits[6]["normalBox"].map((categoryUnit, indexP) => {
                      switch(indexP) {
                        case 0:
                          return <TableUnitValue01 key={indexP}>{categoryUnit}%</TableUnitValue01>
                        case 1:
                          return <TableUnitValue02 key={indexP}>{categoryUnit}%</TableUnitValue02>
                        case 2:
                          return <TableUnitValue03 key={indexP}>{categoryUnit}%</TableUnitValue03>
                        case 3:
                          return <TableUnitValue04 key={indexP}>{categoryUnit}%</TableUnitValue04>
                        case 4:
                          return <TableUnitValue05 key={indexP}>{categoryUnit}%</TableUnitValue05>
                        case 5:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                        default:
                          return <TableUnitValue06 key={indexP}>{categoryUnit}%</TableUnitValue06>
                      }
                    })
                  }
                </ProbabilityTableRow>
    default:
      return <ProbabilityTableRow>Data Loading Failed</ProbabilityTableRow>
  }
}











const PopupOuterBox = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`
const PopupOutOfArea = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0;
  z-index: -1;
  backdrop-filter: blur(8px);
`
const PopupInnerBox = styled.div `
  width: 700px;
  height: 700px;
  padding-top: 50px;
  box-sizing: border-box;
  border-radius: 20px;
  background-color: rgba(40, 40, 40, 0.9);
  position: relative;
`
const PopupImageBackground = styled.div `
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-image: linear-gradient(${(props) => props.targetGradient || 'to top, #858585, #DEDEDE'});
  margin: 0 auto;
  margin-bottom: 30px;
  overflow: hidden;
`
const PopupImage = styled.img `display: block; width: 100%;`

const PopupMiddleBox = styled.div `
  width: 100%;
  height: 200px;
  padding: 0 50px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 20px;
`
const PopupProbabilityBox = styled.div `
  width: 50%;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  margin-bottom: 20px;
`
const PopupProbabilityUnit = styled.div `
  width: 100%;
  height: 20px;
  padding-left: 60px;
  box-sizing: border-box;
  display: flex;
  text-align: left;
`
const PopupProbText = styled.div `
  width: 130px;
  color: ${(props) => props.targetColor};
`
const PopupProbValue = styled.div `
  width: calc(100% - 130px);
  color: ${(props) => props.targetColor};
`

const PopupDescription = styled.div `
  width: 50%;
  padding-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`
const PopupName = styled.div `
  width: 100%;
  height: 50px;
  color: ${(props) => props.targetColor};
  text-shadow: ${(props) => props.targetShadow};
  font-family: ${(props) => props.targetFont};
  font-size: 32px;
  text-align: center;
  line-height: 50px;
  margin-bottom: 20px;
`
const PopupPrice = styled.div `
  width: 100%;
  height: 50px;
  font-size: 20px;
  text-align: center;
  line-height: 50px;
`
const PopupButtonBox = styled.div `
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`
const PopupButton = styled.button `
  display: block;
  width: 200px;
  height: 56px;
  display: flex;
  font-size: 18px;
  color: #fff;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 2px solid #fff;
  border-radius: 56px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all .3s;
`
const PopupCartBtn = styled(PopupButton) `
  margin-right: 50px;
  &:hover {
    color: #fff;
    background-color: #51859c;
    border: 2px solid #87ceeb;
  }
`
const PopupBuyBtn = styled(PopupButton) `
  color: #DFFF00;
  border: 2px solid #DFFF00;
  &:hover {
    color: #fff;
    background-color: #95a52b;
  }
`
const PopupCloseBtn = styled.div `
  width: 27px;
  height: 27px;
  text-align: center;
  line-height: 27px;
  border-radius: 5px;
  background-color: rgb(255, 0, 0);
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`

function ShopPopup(props) {
  const {setShopPopup, products, index, setAlertPopup, alertPopup} = props
  const [alertMessage, setAlertMessage] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <PopupOuterBox>
      <PopupOutOfArea onClick={() => setShopPopup(false)} />
      <PopupInnerBox>
        <PopupImageBackground targetGradient={products[index].gradient}>
          <PopupImage src={products[index].img} />
        </PopupImageBackground>
        <PopupMiddleBox>
          <PopupProbabilityBox>
            <PopupProbabilityUnit>
              <PopupProbText targetColor={products[0].textColor}>Epic</PopupProbText>
              <PopupProbValue targetColor={products[0].textColor}>{products[index].probability[0]}%</PopupProbValue>
            </PopupProbabilityUnit>
            <PopupProbabilityUnit>
              <PopupProbText targetColor={products[1].textColor}>Legend</PopupProbText>
              <PopupProbValue targetColor={products[1].textColor}>{products[index].probability[1]}%</PopupProbValue>
            </PopupProbabilityUnit>
            <PopupProbabilityUnit>
              <PopupProbText targetColor={products[2].textColor}>Unique</PopupProbText>
              <PopupProbValue targetColor={products[2].textColor}>{products[index].probability[2]}%</PopupProbValue>
            </PopupProbabilityUnit>
            <PopupProbabilityUnit>
              <PopupProbText targetColor={'#fff'}>SuperRare</PopupProbText>
              <PopupProbValue targetColor={'#fff'}>{products[index].probability[3]}%</PopupProbValue>
            </PopupProbabilityUnit>
            <PopupProbabilityUnit>
              <PopupProbText targetColor={'#fff'}>Rare</PopupProbText>
              <PopupProbValue targetColor={'#fff'}>{products[index].probability[4]}%</PopupProbValue>
            </PopupProbabilityUnit>
            <PopupProbabilityUnit>
              <PopupProbText targetColor={'#fff'}>Normal</PopupProbText>
              <PopupProbValue targetColor={'#fff'}>{products[index].probability[5]}%</PopupProbValue>
            </PopupProbabilityUnit>
          </PopupProbabilityBox>
          <PopupDescription>
            <PopupName targetColor={products[index].textColor} targetShadow={products[index].textShadow} targetFont={products[index].fontFamily}>{products[index].name}</PopupName>
            <PopupPrice>Price : {products[index].price} ATL Coin</PopupPrice>
          </PopupDescription>
        </PopupMiddleBox>
        <PopupButtonBox>
          <PopupCartBtn onClick={() => {
            setAlertPopup(true); setAlertMessage('The item has been added to your cart');
            dispatch(addItem({
              id: products[index].id,
              img: products[index].img,
              imgName: products[index].imgName,
              gradient: products[index].gradient,
              textColor: products[index].textColor,
              textShadow: products[index].textShadow,
              fontFamily: products[index].fontFamily,
              name: products[index].name,
              price: products[index].price,
              count: 1
            }))
            }}>CART</PopupCartBtn>
          <PopupBuyBtn onClick={() => {
            dispatch(addItem({
              id: products[index].id,
              img: products[index].img,
              imgName: products[index].imgName,
              gradient: products[index].gradient,
              textColor: products[index].textColor,
              textShadow: products[index].textShadow,
              fontFamily: products[index].fontFamily,
              name: products[index].name,
              price: products[index].price,
              count: 1
            }));
            navigate('/cart');
            }}>BUY</PopupBuyBtn>
        </PopupButtonBox>
        <PopupCloseBtn onClick={() => setShopPopup(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </PopupCloseBtn>
      </PopupInnerBox>
      {alertPopup === true ? <AlertPopup setAlertPopup={setAlertPopup} alertMessage={alertMessage} bg='to top, rgba(0, 0, 0, 1), rgba(25, 25, 25, 1)' /> : null}
    </PopupOuterBox>
  )
}















export default function Shop() {

  const [products] = useState(data)
  const [tableCategories] = useState(probabilityCategoryData)
  const [tableUnits] = useState(probabilityData)

  const [shopPopup, setShopPopup] = useState(false)
  const [index, setIndex] = useState(0)

  const [alertPopup, setAlertPopup] = useState(false)

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
                  <ProductUnit key={index} onClick={() => {
                    setShopPopup(true)
                    setIndex(index)
                  }}>
                    <ProductImageBox>
                      <GetProductShape products={products} index={index} />
                    </ProductImageBox>
                    <ProductNameBox>
                      <GetProductName products={products} index={index} />
                    </ProductNameBox>
                    <ProductPriceBox>
                      <GetProductPrice products={products} index={index} className="price_text" />
                    </ProductPriceBox>
                  </ProductUnit>
                )
              })
            }
          </ProductSheet>

          <ProbabilityOuterBox>
            <ProbabilityInnerBox>
              <ProbabilityTitle className="spoqa_bold">* Probability per Box</ProbabilityTitle>

              <ProbabilityTable>
                <ProbTableLeftArea>
                  {
                    tableCategories.map((tableCategory, index) => {
                      return (
                        <div key={index}>
                          <GetProbCategory tableCategories={tableCategories} index={index} />
                        </div>
                      )
                    })
                  }
                </ProbTableLeftArea>

                <ProbTableRightArea>
                  {
                    tableUnits.map((tableUnit, index) => {
                      return (
                        <div key={index}>
                          <GetTableUnit tableUnits={tableUnits} index={index} />
                        </div>
                      )
                    })
                  }
                </ProbTableRightArea>
              </ProbabilityTable>

            </ProbabilityInnerBox>
          </ProbabilityOuterBox>

        </ShopContents>
        {shopPopup === true ? <ShopPopup setShopPopup={setShopPopup} products={products} index={index} setAlertPopup={setAlertPopup} alertPopup={alertPopup} /> : null}
      </ShopSection>
    </>

  )
}