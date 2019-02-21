import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
`;

export const Flex = styled.div`
  flex: ${props => (props.flex ? props.flex : 1)};
`;

export const VerticalAlignFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const CenteredFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
