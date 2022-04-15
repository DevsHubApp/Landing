import styled from "styled-components";
import Head from "next/head";
import DropDownQuestion from "./../components/FaqDropDownQuestion";
import { CustomMeta } from "../components/CustomMeta";

export default function FAQ(props) {
    return <Wrapper>
       <CustomMeta 
         title="Faq's - Dev Hub"
         description="Find answers to some Frequently Asked Questions."
         imageURL="/img/navbar/Logo.png"
         siteName="Dev Hub"
      />
        <ContentContainer>
            <br /><br /> <br /><br />
            <h1>FAQ's and Info</h1>
            <p>You can probably find answers to any Questions you may have here.</p>
            <p></p>
            <QuestionsContainer layout>
                <DropDownQuestion
                    question={"What is Dev Hub?"}
                    answer={"🔥 The information sharing community made for developers and programmers alike. Share your experience, insights and ideas with people from all around the world."}
                />
                <DropDownQuestion
                    question={"Why should I use Dev Hub over other services?"}
                    answer={"😎 You get the best user experience possible available on all platforms. We make it easier for you to share your thoughts and opinions we even offer one on one support via our Discord Server"}
                />
                <DropDownQuestion
                    question={"How will my Data be Handled?"}
                    answer={"🔐 All user Data is Hashed and Encrypted prior to being sent to our Firebase Authentication Services. Even after it is sent to Firebase the info that is available to those with access is extremely limited (Username, Avatar etc)"}
                />
            </QuestionsContainer>
        </ContentContainer>
        <QuestionMark>?</QuestionMark>
    </Wrapper>
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media(max-width: 700px) {
        align-items: flex-start;
    }

    @media(max-height: 720px) {
        padding-top: 120px;
    }
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  @media(max-width: 700px) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`

const QuestionsContainer = styled.div`
    width: 100%;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
`

const QuestionMark = styled.h1`
    font-size: 30em;

    @media(max-width: 700px) {
        display: none;
    }
`