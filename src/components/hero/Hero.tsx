import styled from "styled-components"
import { HeroButtons } from "./Button"
import { Title } from "./Title"

const HeroSection = styled.section`
  width: 100%;
  height: 125vh;
  background-image: url("/src/assets/Rectangle 14.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
`;

export const Hero = () => {
  return (
    <HeroSection>
      <Title />
      <HeroButtons />
    </HeroSection>
  );
};
