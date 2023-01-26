import styled, { keyframes } from "styled-components";

const VisualMain = styled.section `
  width: 100%;
  height: 760px;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.targetImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const VisualBrightnessBox = styled.div `
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
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
const TextWelcome = styled.div `font-size: 32px; position: absolute; top: 170px; left: 370px;`
const TextbigD = styled.div `font-size: 350px; position: absolute; top: 160px; left: 605px;`
const TextRagon = styled.div `position: absolute; top: 430px; left: 820px;`
const TextWorld = styled.div `position: absolute; top: 510px; left: 860px;`




const Description = styled.section `
  width: 100%;
  height: 800px;
  padding-top: 130px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-color: #D6D6D6;
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
const PromotionUnit01 = styled.div `width: 340px;`
const PromotionUnit02 = styled.div `width: 340px;`
const PromotionUnit03 = styled.div `width: 340px;`

const CharImageBox01 = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 340px;
  border: 1px solid #DCB7B7;
  border-radius: 20px;
  box-sizing: border-box;
`
const CharImage01 = styled.img `display: block; width: 70%;`
const CharName01 = styled.div `width: 100%; height: 112px; text-align: center; line-height: 112px;`

const CharImageBox02 = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 340px;
  border: 1px solid #DCB7B7;
  border-radius: 20px;
  box-sizing: border-box;
`
const CharImage02 = styled.img `display: block; width: 70%;`
const CharName02 = styled.div `width: 100%; height: 112px; text-align: center; line-height: 112px;`

const CharImageBox03 = styled.div `
  width: 340px;
  height: 340px;
  border: 1px solid #DCB7B7;
  border-radius: 20px;
  box-sizing: border-box;
`
const CharImage03 = styled.img ` display: block; width: 100%; transform: translate(0, 30px);`
const CharName03 = styled.div `width: 100%; height: 112px; text-align: center; line-height: 112px;`

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
`
const EventImgBox = styled.div `width: 196px; height: 196px;`
const EventImg = styled.img `display: block; width: 100%;`
const EventIconText = styled.div `
  width: 100%;
  height: 33px;
  font-size: 24px;
  color: #65FF00;
  text-align: center;
  line-height: 33px;
`




export default function Home() {
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
        <DescriptionTitle>What is Atlasia?</DescriptionTitle>
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

      <Promotion>
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
        <PromotionBtn>Go Shopping</PromotionBtn>
      </Promotion>

      <EventOuterBox>
        <EventImageBox targetImg={process.env.PUBLIC_URL+ '/images/event.jpg'} />
        <EventBrightnessBox />
        <Event>
          <EventText>Recharge your Coin<br/>for this week's "Special Discount Event"</EventText>
            <EventIcon>
              <EventImgBox>
                <EventImg src={process.env.PUBLIC_URL+ '/images/coin.png'} />
              </EventImgBox>
            <EventIconText>33% discount!</EventIconText>
          </EventIcon>
        </Event>
      </EventOuterBox>
    </>
  )
}