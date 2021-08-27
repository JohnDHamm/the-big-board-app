import React from 'react';
import {
  ButtonBlock,
  ButtonWrapper,
  Container,
  Logo,
  Name,
  NameBlock,
  Position,
  Title,
} from './PickConfirmModal.styles';
import Backdrop from '../Backdrop/Backdrop';
import Button from '../Button/Button';

const PickConfirmModal: React.FC<PickConfirmModal> = ({
  visible,
  player,
  team,
  onCancel,
  onConfirm,
}) => {
  return visible ? (
    <>
      <Container color={team.colors.primary}>
        <Title>CONFIRM SELECTION:</Title>
        <NameBlock>
          <Position color={team.colors.secondary}>{player.position}</Position>
          <Name color={team.colors.secondary}>{player.name}</Name>
        </NameBlock>
        <Logo team={team.abbv} />
        <ButtonBlock>
          <ButtonWrapper>
            <Button onClick={onCancel} alternate={true}>CANCEL</Button>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button onClick={onConfirm}>CONFIRM</Button>
          </ButtonWrapper>
        </ButtonBlock>
      </Container>
      <Backdrop color={team.colors.secondary} />
    </>
  ) : null;
};

export default PickConfirmModal;
