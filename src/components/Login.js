import React from "react";
import {
  Container,
  Content,
  BgImage,
  CTA,
  CTALogoOne,
  SignUp,
  Description,
  CTALogoTwo,
} from "../styles/Login";

function Login() {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="logo-One" />
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="logo-Two" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

export default Login;
