import styled, { keyframes } from "styled-components";
import { useNavigate } from 'react-router-dom';


const VisualMain = styled.section `
  width: 100%;
  height: 820px;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.targetImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  user-select: none;
`
const VisualBrightnessBox = styled.div `
  width: 100%;
  height: 100%;
  background-color: rgba(35, 35, 35, 0.55);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`
const VisualTextBox = styled.div `
  width: 1070px;
  height: 760px;
  font-size: 48px;
  color: #fff;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`
const TextWelcome = styled.div `font-size: 32px; position: absolute; top: 220px; left: 370px;`
const TextbigD = styled.div `font-size: 350px; position: absolute; top: 210px; left: 605px;`
const TextRagon = styled.div `position: absolute; top: 480px; left: 820px;`
const TextWorld = styled.div `position: absolute; top: 560px; left: 860px;`




const Description = styled.section `
  width: 100%;
  height: 800px;
  padding-top: 120px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-color: #D6D6D6;
  cursor: default;
`
const DescriptionTitle = styled.div `
  width: 1070px;
  height: 45px;
  font-size: 32px;
  text-align: center;
  line-height: 45px;
  margin: 0 auto;
  margin-bottom: 80px;
  color: #111;
`
const DescriptionSheet = styled.div `
  display: flex;
  width: 1070px;
  height: 370px;
  margin: 0 auto;
`
const DescriptionImageBox = styled.div `
  width: 50%;
  border-radius: 5px;
  overflow: hidden;
  background-color: black;
`
const DescriptionImage = styled.img `
  display: block;
  width: 100%;
`
const DescriptionTextBox = styled.div `
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  padding-left: 50px;
  padding-right: 32px;
  box-sizing: border-box;
  font-size: 20px;
  color: #4B4B4B;
`
const DescriptionUnit01 = styled.div `width: 100%;`
const DescriptionUnit02 = styled.div `width: 100%;`
const DescriptionUnit03 = styled.div `width: 100%;`




const Promotion = styled.section `
  width: 100%;
  height: 986px;
  padding-top: 125px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  cursor: default;
`
const PromotionTitle = styled.div `
  width: 1070px;
  height: 55px;
  font-size: 32px;
  text-align: center;
  line-height: 55px;
  margin: 0 auto;
  margin-bottom: 120px;
  color: #111;
`
const PromotionSheet = styled.div `
  display: flex;
  justify-content: space-between;
  width: 1070px;
  height: 452px;
  font-size: 25px;
  color: #4B4B4B;
  margin: 0 auto;
  margin-bottom: 55px;
`

const PromotionUnit = styled.div `width: 340px;`

const PromotionUnit01 = styled(PromotionUnit) `display: block;`
const PromotionUnit02 = styled(PromotionUnit) `display: block;`
const PromotionUnit03 = styled(PromotionUnit) `display: block;`

const CharImageBox = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 340px;
  border: 1px solid #DCB7B7;
  border-radius: 20px;
  box-sizing: border-box;
  position: relative;
`
const CharImage = styled.img `display:block; width: 70%;`
const CharName = styled.div `width: 100%; height: 112px; text-align: center; line-height: 112px;`

const floatingChar = keyframes `
  0% {transform: translateY(6px)}
  50% {transform: translateY(-6px)}
  100% {transform: translateY(6px)}
`

const floatingCharReverse = keyframes `
  0% {transform: translateY(-3px)}
  50% {transform: translateY(8px)}
  100% {transform: translateY(-3px)}
`

const floatingCharSlow = keyframes `
  0% {transform: translateY(0)}
  50% {transform: translateY(-15px)}
  100% {transform: translateY(0)}
`

const CharImageBox01 = styled(CharImageBox) `width: 340px;`
const CharImage01 = styled(CharImage) `width: 70%; animation: 5s infinite ${floatingChar} ease-in-out;`
const CharName01 = styled(CharName) `width: 100%;`


const CharImageBox02 = styled(CharImageBox) `width: 340px;`
const CharImage02 = styled(CharImage) `width: 70%; animation: 5s infinite ${floatingCharReverse} ease-in-out;`
const CharName02 = styled(CharName) `width: 100%;`

const CharImageBox03 = styled(CharImageBox) `width: 340px;`
const CharImage03 = styled(CharImage) `width: 100%; position: absolute; top: 50px; left: 0; animation: 5s infinite ${floatingCharSlow} ease-in-out; animation-delay: 1s;`
const CharName03 = styled(CharName) `width: 100%;`

const PromotionBtn = styled.button `
  display: block;
  width: 250px;
  height: 60px;
  color: #111;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  background-color: #fff;
  border: 1px solid #707070;
  border-radius: 3px;
  box-sizing: border-box;
  margin: 0 auto;
  cursor: pointer;
`



const EventOuterBox = styled.div `
  width: 100%;
  height: 428px;
  position: relative;
`
const EventImageBox = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-image: url(${(props) => props.targetImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const EventBrightnessBox = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.35);
`
const Event = styled.section `
  width: 1070px;
  height: 428px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
`
const EventText = styled.div `
  width: 700px;
  height: 110px;
  color: #fff;
  font-size: 32px;
  line-height: 48px;
  position: absolute;
  top: 165px;
  left: 20px;
`
const EventIcon = styled.div `
  width: 196px;
  height: 233px;
  position: absolute;
  top: 100px;
  right: 90px;
  cursor: pointer;
`
const EventImgBox = styled.div `width: 196px; height: 196px; position: relative; perspective: 300px;`

const rotateFront = keyframes `
  0% {transform: rotateY(0);}
  20% {transform: rotateY(0);}
  80% {transform: rotateY(360deg);}
  100% {transform: rotateY(360deg);}
`
const rotateBack = keyframes `
  0% {transform: rotateY(180deg);}
  20% {transform: rotateY(180deg);}
  80% {transform: rotateY(540deg);}
  100% {transform: rotateY(540deg);}
`

const Coin = styled.img `
  display: block;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
`
const CoinFront = styled(Coin) `
  transform: rotateY(0);
  animation: 5s infinite ${rotateFront} ease-in-out;
`
const CoinBack = styled(Coin) `
  transform: rotateY(180deg);
  animation: 5s infinite ${rotateBack} ease-in-out;
`

const EventIconText = styled.div `
  width: 100%;
  height: 33px;
  font-size: 24px;
  color: #65FF00;
  text-align: center;
  line-height: 33px;
`




export default function Home() {

  const navigate = useNavigate()

  return (
    <>
      <VisualMain targetImg={process.env.PUBLIC_URL+ '/images/visual_main.jpg'}>
        <VisualBrightnessBox />
        <VisualTextBox>
          <TextWelcome>Welcome to the awesome</TextWelcome>
          <TextbigD>D</TextbigD>
          <TextRagon>ragon</TextRagon>
          <TextWorld>World!</TextWorld>
        </VisualTextBox>
      </VisualMain>

      <Description>
        <DescriptionTitle className="spoqa">What is Atlasia?</DescriptionTitle>
        <DescriptionSheet>
          <DescriptionImageBox>
            <DescriptionImage src={process.env.PUBLIC_URL+ '/images/about.jpg'}></DescriptionImage>
          </DescriptionImageBox>
          <DescriptionTextBox>
            <DescriptionUnit01>Atlasia is a wonderful dragon world full of tons of dragons. There are ancient dragons of the sea, tyrannosaurs of the land, and even pterosaurs flying in the sky.</DescriptionUnit01>
            <DescriptionUnit02>Choose the dragon you want and grow it. Then the dragon will smile at you. A well-loved dragon may become so strong that it may overcome all other dragons.</DescriptionUnit02>
            <DescriptionUnit03>Don't miss this one-time opportunity only available this week. After that, you might not be able to meet that dragon again.</DescriptionUnit03>
          </DescriptionTextBox>
        </DescriptionSheet>
      </Description>

      <Promotion className="spoqa">
        <PromotionTitle>Get Your Own Dragon!</PromotionTitle>
        <PromotionSheet>
          <PromotionUnit01>
            <CharImageBox01>
              <CharImage01 src={process.env.PUBLIC_URL+ '/images/dragon_01.png'} />
            </CharImageBox01>
            <CharName01>Lyra</CharName01>
          </PromotionUnit01>
          <PromotionUnit02>
            <CharImageBox02>
              <CharImage02 src={process.env.PUBLIC_URL+ '/images/dragon_02.png'} />
            </CharImageBox02>
            <CharName02>Mickey</CharName02>
          </PromotionUnit02>
          <PromotionUnit03>
            <CharImageBox03>
              <CharImage03 src={process.env.PUBLIC_URL+ '/images/dragon_03.png'} />
            </CharImageBox03>
            <CharName03>Draco</CharName03>
          </PromotionUnit03>
        </PromotionSheet>
        <PromotionBtn onClick={()=>{navigate('/shop')}}>Go Shopping</PromotionBtn>
      </Promotion>

      <EventOuterBox>
        <EventImageBox targetImg={process.env.PUBLIC_URL+ '/images/event.jpg'} />
        <EventBrightnessBox />
        <Event>
          <EventText>Recharge your Coin<br/>for this week's "Special Discount Event"</EventText>
            <EventIcon onClick={()=>{navigate('/shop')}}>
              <EventImgBox>
                <CoinFront src={process.env.PUBLIC_URL+ '/images/coin.png'} />
                <CoinBack src={process.env.PUBLIC_URL+ '/images/coin.png'} />
              </EventImgBox>
            <EventIconText className="spoqa">33% discount!</EventIconText>
          </EventIcon>
        </Event>
      </EventOuterBox>
    </>
  )
}