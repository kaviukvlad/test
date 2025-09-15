import styled from "styled-components"
import { Logo } from "./Logo"
import { Navigation } from "./Navigation"

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background: transparent;
  padding-top: 2.125rem;
  padding-bottom: 2.813rem;
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 72px;
  padding-right: 72px;
`;

const Border = styled.div`
  height: 1px;
  background-color: #fff;
  margin-left: 72px;
  margin-right: 72px;
`;

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo />
        <Navigation />
      </Container>
      <Border />
    </HeaderWrapper>
  );
};
