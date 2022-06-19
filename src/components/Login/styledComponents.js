import styled from 'styled-components'

export const LoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginImageLg = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 50%;
    max-width: 582px;
  }
`
export const LoginContainer = styled.div`
  width: 85%;
  @media screen and (min-width: 768px) {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`
export const LoginTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`
export const LoginWebsiteLogo = styled.img`
  width: 78px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 60px;
  }
`
export const LoginWebsiteTitle = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 24px;
  color: #262626;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const LoginLabel = styled.label`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 12px;
  color: #262626;
`
export const LoginInput = styled.input`
  width: 100%;
  font-family: 'Roboto';
  font-size: 15px;
  color: #262626;
  background: #eeeeee;
  border-radius: 2px;
  border: 0px;
  height: 40px;
  padding-left: 16px;
  outline: none;
  margin-top: 6px;
  @media screen and (min-width: 768px) {
    height: 30px;
  }
`

export const LoginErrorMsg = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  color: #ef4444;
  margin-top: 6px;
`
export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  border: 0px;
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background: #4094ef;
  border-radius: 8px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    height: 30px;
  }
`
export const LoginCard = styled.form`
  @media screen and (min-width: 768px) {
    padding: 40px 30px 40px 30px;
    box-shadow: 0px 3px 10px rgba(7, 7, 7, 0.1);
    max-width: 45%;
  }
`
export const LineBreak = styled.br``
