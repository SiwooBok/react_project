import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const NotFoundSection = styled.section `
  width: 100%;
  height: 1000px;
  padding-top: 220px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  background-image: url(${(props) => props.targetImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const NotFoundBrightnessBox = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(50, 50, 50, 0.55);
  backdrop-filter: blur(5px);
`

const NotFoundContents = styled.div `
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  z-index: 2;
`

const NotFoundLogoBox = styled.div `
  width: 300px;
  height: 214px;
  margin: 0 auto;
  margin-bottom: 40px;
`

const NotFoundLogo = styled.div `
  display: block;
  width: 100%;
  height: 100%;
  filter: invert(100%);
  background-image: url(${(props) => props.targetImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const NotFoundTitle = styled.div `
  width: 1070px;
  height: 60px;
  font-size: 32px;
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
  margin-bottom: 70px;
`

const NotFoundText = styled.div `
  width: 1070px;
  height: 60px;
  font-size: 18px;
  text-align: center;
  line-height: 60px;
  margin: 0 auto;
  margin-bottom: 45px;
`

const BtnGoHome = styled.button `
  display: block;
  width: 200px;
  height: 60px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 60px;
  border: 1px solid #fff;
  border-radius: 60px;
  box-sizing: border-box;
  background-color: transparent;
  margin: 0 auto;
  cursor: pointer;
`




export default function NotFound() {

  const navigate = useNavigate()

  return (
    <>
      <NotFoundSection targetImg={process.env.PUBLIC_URL+ '/images/sub_background.jpg'}>
        <NotFoundBrightnessBox />
        <NotFoundContents>
          <NotFoundLogoBox>
            <NotFoundLogo targetImg={process.env.PUBLIC_URL+ '/images/text_404.png'} />
          </NotFoundLogoBox>
          <NotFoundTitle className="spoqa_bold">
            Ooops, Page Not Found
          </NotFoundTitle>
          <NotFoundText>
            Sorry, but the requested page is not found. You might try go home below
          </NotFoundText>
          <BtnGoHome onClick={()=>{navigate('/')}}>
            Go Home
          </BtnGoHome>
        </NotFoundContents>
      </NotFoundSection>
    </>

  )
}