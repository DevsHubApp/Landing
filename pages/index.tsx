import Head from 'next/head'
import { useContext } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import DarkTheme from "../styles/theme/DarkTheme";
import LightTheme from "../styles/theme/LightTheme";
import PropsTheme from "../styles/theme/PropsTheme";
import { ThemeContext } from "styled-components"
import NotificationContainer from '../context/NotificationContext';
import { CustomMeta } from "../components/CustomMeta";
import NotificationType from '../context/NotificationType';
import Axios from 'axios';

export default function Home() {

  const router = useRouter();

  const [email, setEmail] = useState("")
  const notificationContext = NotificationContainer.useContainer();

  return (
    <Wrapper>
      <CustomMeta 
         title="Dev Hub"
         description="The information sharing community made for developers and programmers alike."
         imageURL="/img/navbar/Logo.png"
         siteName="Dev Hub"
      />
      <ContentContainer>
        <h1>Welcome to Dev Hub</h1>
        <br />
        <p>
          Our website is actively being developed but should be available soon.
          You can join us on the following platforms to stay up-to date with our progress!
        </p>
        <NotifyContainer>

          <PrimaryButton type={"submit"} onClick={(e) => {
            e.preventDefault();
            router.push("https://discord.gg/6pRxaNeRX8")
          }}><strong>Discord</strong></PrimaryButton>
           <PrimaryButton type={"submit"} onClick={(e) => {
            e.preventDefault();
            router.push("https://twitter.com/DevsHubApp")
          }}><strong>Twitter</strong></PrimaryButton>
           <PrimaryButton type={"submit"} onClick={(e) => {
            e.preventDefault();
            router.push("https://github.com/DevsHubApp")
          }}><strong>Github</strong></PrimaryButton>
          
        </NotifyContainer>
      </ContentContainer>
      <SplashImage src="/img/dev-splash.png" alt="Splash" />
    </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media(max-width: 1200px) {
    flex-direction: column;
  }

  @media(max-width: 400px) {
    justify-content: center;
  }
`

const SplashImage = styled.img`
  height: 450px;

  @media(max-width: 700px) {
    display: none;
  }

`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 700px) {
    text-align: center;
  }
`

const NotifyContainer = styled.form`
  display: flex;
  padding-top: 50px;
  width: 100%;

  @media(max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const SizedInput = styled.input`
  width: 60%;

  @media(max-width: 700px) {
    width: 100%;
    margin-bottom: 5px;
  }
`

const PrimaryButton = styled.button`
  margin: 0 20px;
  color: white;
  background: ${(props: PropsTheme) => props.theme.accentColor};
  border: ${(props: PropsTheme) => props.theme.accentColor};
  border-radius: 5px;
  width: 25%;
  box-shadow: 0px 15px 35px ${(props: PropsTheme) => props.theme.boxShadowAccentColor};

  @media(max-width: 700px) {
    width: 100%;
    margin-bottom: 5px;
  }
`

const SecondaryButton = styled.button`
  color: ${(props: PropsTheme) => props.theme.accentColor};
  background: ${(props: PropsTheme) => props.theme.background};
  border: 1px solid ${(props: PropsTheme) => props.theme.accentColor};
  border-radius: 5px;
  width: 15%;
  box-shadow: 0px 15px 31px ${(props: PropsTheme) => props.theme.boxShadowAccentColor};

  @media(max-width: 700px) {
    width: 100%;
    margin-bottom: 5px;
  }
`
