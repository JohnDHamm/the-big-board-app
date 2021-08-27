import React from 'react';
import {
  ActionWrapper,
  Container,
  Message,
  Status,
  Title,
  TitleText,
} from './CommishModal.styles';
import { Button } from '../../components';

const CommishModal: React.FC<CommishModal> = ({
  visible,
  status,
  message,
  onActionCall,
}) => {
  return visible ? (
    <Container onClick={(e) => e.stopPropagation()}>
      <Title>
        <TitleText>A MESSAGE FROM THE COMMISH...</TitleText>
      </Title>
      <Status>{status}</Status>
      <Message>{message}</Message>
      <ActionWrapper>
        <Button onClick={onActionCall}>please restart app</Button>
      </ActionWrapper>
    </Container>
  ) : null;
};

export default CommishModal;
