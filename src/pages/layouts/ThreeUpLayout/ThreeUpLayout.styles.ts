import styled from 'styled-components';
import { HEIGHTS, SCREEN_WIDTHS } from '../../../styles';

export const Container = styled.div`
  width: 100%;
  padding-top: ${HEIGHTS.NAVBAR_TABLET};
  padding-bottom: calc(${HEIGHTS.BOTTOM_TICKER} + 2rem);
  display: flex;
  justify-content: center;
  @media screen and (${SCREEN_WIDTHS.MOBILE}) {
    padding-top: ${HEIGHTS.NAVBAR_MOBILE};
  }
`;

export const CenterContent = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
  max-width: 440px;
`;

export const LeftContent = styled(CenterContent)`
  @media screen and (${SCREEN_WIDTHS.DESKTOP}) {
    display: none;
  }
`;

export const RightContent = styled(LeftContent)``;
