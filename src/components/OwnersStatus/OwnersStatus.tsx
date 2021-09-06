import React from 'react';
import {
  Container,
  Title,
  ActiveButton,
  ButtonWrapper,
  OwnerName,
  OwnerBlock,
} from './OwnersStatus.styles';
import Button from '../Button/Button';

interface Props {
  owners: Owner[];
  activeOwners: string[];
  onButtonPress: () => void;
}

const OwnersStatus: React.FC<Props> = ({
  owners,
  activeOwners,
  onButtonPress,
}) => {
  const renderOwners = () => {
    return owners.map((owner) => {
      return (
        <OwnerBlock key={owner._id}>
          <ActiveButton active={activeOwners.includes(owner._id)} />
          <OwnerName active={activeOwners.includes(owner._id)}>
            {owner.name}
          </OwnerName>
        </OwnerBlock>
      );
    });
  };

  return (
    <Container>
      <Title>OWNERS STATUS</Title>
      {renderOwners()}
      <ButtonWrapper>
        <Button onClick={onButtonPress}>ping owners</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default OwnersStatus;
