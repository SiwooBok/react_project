import styled from "styled-components";


const AlertOuterBox = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  backdrop-filter: blur(2px);
`
const AlertOutOfArea = styled.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0; left: 0;
  z-index: -1;
`
const AlertInnerBox = styled.div `
  width: 380px;
  height: 220px;
  padding-top: 35px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(180, 180, 180, 0.2);
  background-image: linear-gradient(${(props) => props.bg || 'to top, rgba(20, 20, 20, 0.95), rgba(35, 35, 35, 0.95)'});
  position: relative;
  transform: translateY(-65px);
`
const AlertText = styled.div `
  width: 100%;
  height: 50px;
  font-size: 15.5px;
  color: #eee;
  text-align: center;
  line-height: 50px;
  margin-bottom: 45px;
`
const AlertCloseBtn = styled.button `
  display: block;
  width: 90px;
  height: 40px;
  font-size: 12px;
  color: #eee;
  text-align: center;
  line-height: 40px;
  background-color: transparent;
  border: 1px solid #eee;
  border-radius: 40px;
  margin: 0 auto;
  cursor: pointer;
`

export default function AlertPopup(props) {

  const {setAlertPopup, alertMessage, bg} = props

  return (
    <AlertOuterBox>
      <AlertOutOfArea onClick={() => {setAlertPopup(false)}} />
      <AlertInnerBox bg={bg}>
        <AlertText>{alertMessage}</AlertText>
        <AlertCloseBtn onClick={() => {setAlertPopup(false)}}>CLOSE</AlertCloseBtn>
        </AlertInnerBox>
    </AlertOuterBox>
  )
}