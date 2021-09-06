import styled from 'styled-components';
import { COLORS, FONTS } from '../../styles';

export const Container = styled.div`
  text-align: center;
  width: auto;
  border: 1px solid ${COLORS.SECONDARY_GRAY};
  padding: 0 1rem;
`;

export const Title = styled.h1`
  margin-top: 0.25rem;
  font-family: ${FONTS.BLOCKLETTER};
  color: ${COLORS.PRIMARY_GREEN};
`;

export const OwnerBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ActiveButton = styled.div<{ active: boolean }>`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  background-color: ${(props) =>
    props.active ? COLORS.PRIMARY_GREEN : COLORS.WHITE};
  border-color: ${(props) =>
    props.active ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
`;

export const OwnerName = styled.p<{ active: boolean }>`
  margin: 0;
  padding-left: 0.5rem;
  font-family: ${FONTS.NAMES};
  font-size: 1.5rem;
  color: ${(props) =>
    props.active ? COLORS.PRIMARY_GREEN : COLORS.DISABLED_GRAY};
`;

export const ButtonWrapper = styled.div`
  margin: 1rem 0;
  text-align: center;
`;
