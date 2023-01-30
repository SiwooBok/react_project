import styled from "styled-components";

const AboutSection = styled.section `
  width: 100%;
  height: 1150px;
  padding-top: 208px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.targetImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const AboutBrightnessBox = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(35, 35, 35, 0.35);
`

const AboutContents = styled.div `
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  z-index: 2;
`

const AboutTitle = styled.div `
  width: 100%;
  height: 45px;
  font-size: 30px;
  color: #fff;
  text-align: center;
  line-height: 45px;
  margin-bottom: 100px;
`

const AboutSheet = styled.div `
  width: 776px;
  height: 360px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  margin: 0 auto;
  margin-bottom: 90px;
`
const AboutSheetText = styled.div `width: 100%; font-size: 19px; line-height: 25px;`
const FirstOfPhrase = styled.span `font-size: 38px; margin-right: 2px;`

const AboutPostscriptBox = styled.div `
  width: 530px;
  height: 120px;
  display: flex;
  margin: 0 auto;
`

const AboutPostscriptImgBox = styled.div `
  width: 120px;
  height: 120px;
  filter: invert(30%);
`

const AboutPostscriptImg = styled.img `
  display: block;
  width: 100%;
`

const AboutPostscriptText = styled.div `
  width: calc(100% - 120px);
  height: 100%;
  padding-left: 25px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  font-size: 16px;
  color: #ccc;
`

const AboutPostscriptPhrase01 = styled.div `width: 100%; height: 35px; line-height: 35px;`
const AboutPostscriptPhrase02 = styled.div `width: 100%; height: 35px; line-height: 35px; text-indent: 10px;`

const AboutMarginSpan = styled.span `margin-right: 8px;`





export default function About() {
  return (
    <>
      <AboutSection targetImg={process.env.PUBLIC_URL+ '/images/cave.jpg'}>
        <AboutBrightnessBox />
        <AboutContents>
          <AboutTitle className="spoqa">About Atlasia...</AboutTitle>
          <AboutSheet>
            <AboutSheetText><FirstOfPhrase className="spoqa">A</FirstOfPhrase>tlasia was created by a God named Odin. Odin was banished from the Celestial Realm, but still possessed great power. He molded The Earth with his remaining power and created a world of dinosaurs called Atlasia.</AboutSheetText>
            <AboutSheetText>After that day, Odin died, but most of the dinosaurs still living in that paradise praise Odin. But there are some dragons who rebel against Odin's Reign. The Red Dragons of the South and the Ice Dragons of the North have recently betrayed Odin's belief and began building their own Armies.</AboutSheetText>
            <AboutSheetText>You came to Atlasia at this desperate moment. The time has come and destiny has come to you. Do you have the courage to face your destiny? Atlasia is no longer under the protection of Odin, and is headed for an unstoppable Whirlwind of Fate.</AboutSheetText>
          </AboutSheet>
          <AboutPostscriptBox>
              <AboutPostscriptImgBox>
                <AboutPostscriptImg src={process.env.PUBLIC_URL+ '/images/dragonbone.png'} />
              </AboutPostscriptImgBox>
              <AboutPostscriptText>
                <AboutPostscriptPhrase01 className="spoqa"><AboutMarginSpan>-</AboutMarginSpan>A Papyrus written by The Last Prophet.</AboutPostscriptPhrase01>
                <AboutPostscriptPhrase02 className="spoqa">12.11.8. Year of Genesis.</AboutPostscriptPhrase02>
              </AboutPostscriptText>
            </AboutPostscriptBox>
        </AboutContents>
      </AboutSection>
    </>
  )
}