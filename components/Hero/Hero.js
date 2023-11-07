import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container,MainHeading } from '../../globalStyles'
import {HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton} from './HeroStyles'

const Hero = () => {
  return (
     <HeroSection>
    <HeroVideo src="./assets/hero.mp4" autoPlay muted/>
    <Container>
        <MainHeading> Score Caster </MainHeading>
        
        <HeroText>
            We provide the best Scoring Systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
            <Link to="Signup">
            <Button> create card </Button>
            </Link>
            <HeroButton>View More</HeroButton>
        </ButtonWrapper>
    </Container>
  </HeroSection>
  );
};

export default Hero