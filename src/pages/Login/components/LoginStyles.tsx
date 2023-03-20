import styled from 'styled-components'

export const LoginWrapper = styled.div`
  background: #074d4a;
  height: 100vh;
  display: grid;
  place-items: center;
`

export const LoginContainer = styled.div`
  min-width: 700px;
  box-shadow: 0px 40px 60px -30px #2727279c;
`

export const TextContainer = styled.div`
  padding: 50px 20px;
  background: #046a62;
  color: #fff;
  height: 100%;
  border-radius: 8px 0 0 8px;
  h3 {
    margin-top: 40px;
    font-size: 30px;
  }
`

export const FormWrapper = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 0 8px 8px 0;
  h3 {
    color: #046a62;
    margin: 20px 0;
  }
  .logo-container {
    margin: auto;
    width: 80px;
    height: 80px;
    img {
      height: 100%;
      width: 100%;
    }
  }
  button {
    width: 100%;
    background-color: #046a62;
  }
`
