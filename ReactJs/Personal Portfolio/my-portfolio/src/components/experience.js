import React from "react";
import styled from "styled-components";
import {skills} from "../Data/constants";
import { experiences } from "../Data/constants";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExpCards from "./ExpCards";
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 50px 0px;

`;

const Wrapper = styled.div`
max-width: 1100px;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 100%;
gap: 12px;
`;

const Title = styled.div`
font-size: 42px;
font-weight: 600;
text-align: center;
margin-top: 20px;
color: ${({ theme }) => theme.text_primary};

@media screen and (max-width: 768px){
    font-size: 32px;
    margin-top: 12px;
}
`;


const Description = styled.div`
font-size: 18px;
max-width: 600px;
text-align: center;
color: ${({ theme }) => theme.text_secondary};

@media screen and(max-width: 768px){
    font-size: 16px;
}
`;

const TimeLineSection = styled.div`
width: 100%;
max-width: 1000px;
margin-top: 10px;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
gap: 12px;
`;

const TimeLine = styled.div`

`;

const Experience = () =>{
    return(
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Description>Here are some of my Projects</Description>
                <TimeLineSection>
                    <Timeline>
                        {experiences.map((exp,index)=>(
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary"/>
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}                                </TimelineSeparator>
                                <TimelineContent sx={{py: '12px', px:'2'}}>
                                    <ExpCards experience={exp}/>
                                </TimelineContent>
                            </TimelineItem>
                            ))}
                    </Timeline>
                </TimeLineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience;