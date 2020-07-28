import styled from 'styled-components';
import { COLORS } from '../../styles';

export const PageContainer = styled.div`
  margin-top: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.WHITE};
`;

export const CenterContent = styled.div`
  width: 100%;
  max-width: 400px;
`;
