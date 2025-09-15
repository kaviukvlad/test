import styled from "styled-components"

const LogoWrapper = styled.div`
  flex-shrink: 0;
`;

const LogoText = styled.h1`
  font-family: "Montserrat", sans-serif;
  margin: 0;
  font-size: 3.563rem;
  color: #fff;
`;

export const Logo = () => {
  return (
    <LogoWrapper>
      <LogoText>Logo</LogoText>
    </LogoWrapper>
  );
};
