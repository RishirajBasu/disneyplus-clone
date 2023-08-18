import React from "react";
import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="CTA-One" />
          <SignUp> Get all here </SignUp>
          <Description>
            Welcome to Infinite Entertainment: Your Gateway to a World of
            Unbounded Stories! Immerse yourself in the magic of cinema, embrace
            binge-worthy series, and explore the diverse flavors of global
            content, all at your fingertips!
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="CTA-two" />
        </CTA>
        <BgImg />
      </Content>
    </Container>
  );
};
const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;
const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;
const BgImg = styled.div`
  height: 100%;
  position: absolute;
  background-position: top;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/login-background.jpg");
  z-index: -1;
`;
const CTA = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vw;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  transition-timing-function: ease-in-out;
  transition: opacity 0.2s;
  width: 50%;
`;
const CTALogoOne = styled.img`
  margin-bottom: 24px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`;
const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5db;
  margin-bottom: 12px;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 20px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  color: #ffffffcd;
  font-size: 11px;
  margin: 0 0 24px;
  margin-bottom: 40px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: left;
`;
const CTALogoTwo = styled.img`
  max-width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  /* height: 100%; */
`;

export default Login;
