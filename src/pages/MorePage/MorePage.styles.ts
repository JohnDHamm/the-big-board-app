import styled from 'styled-components';
import { FONTS, COLORS } from '../../styles';

export const CommishBlock = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

export const Welcome = styled.p`
  font-family: ${FONTS.BLOCKLETTER};
  font-size: 2.25rem;
  color: ${COLORS.SECONDARY_GRAY};
`;

export const ButtonWrapper = styled.div`
  margin: 1rem 0;
  text-align: center;
`;

export const StatusMessage = styled.p<{ statusError: boolean }>`
  font-family: ${FONTS.NAMES};
  font-size: 1.25rem;
  text-align: center;
  color: ${(props) => (props.statusError ? COLORS.ERR : COLORS.SUCCESS)};
`;
