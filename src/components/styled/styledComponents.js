import styled from '@emotion/styled'

export const Title = styled.h1`
  color: #FFF;
  text-align: center;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.8rem;
  @media (min-width: 768px) {
    font-size: 2.2rem;
  }

  span{
    color: #E8BC43;
  }

  &::after{
    content: '';
    width: 100%;
    height: 5px;
    background-color: #4189b9;
    display: block;
    margin: 1rem auto 0 auto;
  }
`
export const Logo = styled.img`
  position: absolute;
  z-index: -999;
  opacity: .1;
  top: 40%;
  left: 50%;
  width: 80%;
  max-width: 700px;
  transform: translate(-50%, -50%);
  object-fit: cover;
`
export const Pattern = styled.img`
  position: absolute;
  opacity: .2;
  bottom: 0;
  z-index: -999;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`
export const Background = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
  margin: 0 auto;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 80%;
  max-width: 700px;
  padding-top: 10vh;
`
export const ErrorText = styled.div`
  background-color: #AC233C;
  color: #FFF;
  padding: 0.5rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  text-align: center;
  border-radius: .5rem;
`
export const Label = styled.label`
  display: block;
  color: white;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 400;
  font-size: 1.4rem;
  margin: 1rem 0;
  @media (min-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1.8rem;
  }
  span{
    color: #E8BC43;
  }
`
export const Select = styled.select`
  width: 100%;
  font-size: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
  padding: .5rem;
  font-weight: 400;
  border-radius: .5rem;
  font-family: 'Oswald', sans-serif;
`
export const ButtonSubmitContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media (min-width: 768px) {
      flex-direction: row;
  }
`
export const Footer = styled.footer`
  position: absolute;
  bottom: 5%;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  z-index: -999;
  p{
    color: #a9a9a9;
    font-size: 1rem;
    text-align: center;
    margin: 0;
  }
`
export const ButtonSubmit = styled.button`
  all: unset;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  overflow: hidden; // debug
  font-size: 1.4rem;
  padding: 1rem 3rem;
  cursor: pointer;
  border-radius: .5rem;
  text-decoration: none;
  color: #f4f4f4;
  background: #2272A6;
  transition: all .5s;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    left: -100%;
    pointer-events: none;
    transition: all 0.65s ease-in-out;
  }
  &:hover::before {
    left: 100%;
    color: #4189b9;
  }
`
