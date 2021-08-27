import React from 'react';
import { ButtonWrapper, CommishBlock, Welcome } from './MorePage.styles';
import { DraftStatusContext, UserContext } from '../../contexts';
import { Button, Input } from '../../components';
import { pauseDraft, reopenDraft, startDraft } from '../../api';
import { ThreeUpLayout, MobileContentContainer } from '../layouts';

const MorePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const { draftStatus } = React.useContext(DraftStatusContext);
  const [message, setMessage] = React.useState<string>('');

  const logout = (): void => {
    setCurrentUser(null);
  };

  const handleStartDraft = () => {
    if (user) {
      startDraft(user?.leagueId, message)
        .then((res) => null)
        .catch((err) => console.log('err', err));
    }
  };

  const handlePauseDraft = () => {
    if (user) {
      pauseDraft(user?.leagueId, message)
        .then((res) => null)
        .catch((err) => console.log('err', err));
    }
  };

  const handleReopenDraft = () => {
    if (user) {
      reopenDraft(user?.leagueId, message)
        .then((res) => null)
        .catch((err) => console.log('err', err));
    }
  };

  return (
    <ThreeUpLayout
      left={<div></div>}
      center={
        <MobileContentContainer>
          <ButtonWrapper>
            <Button onClick={() => logout()}>log out</Button>
          </ButtonWrapper>
          {user?.isCommish && (
            <CommishBlock>
              <Welcome>Hello Commish!</Welcome>
              <Input
                placeholder="add message"
                type="text"
                onTextChange={(text) => setMessage(text)}
              />
              {draftStatus === 'not started' && (
                <ButtonWrapper >
                  <Button onClick={() => handleStartDraft()}>start draft</Button>
                </ButtonWrapper>
              )}
              {draftStatus === 'open' && (
                <ButtonWrapper >
                  <Button onClick={() => handlePauseDraft()}>pause draft</Button>
                </ButtonWrapper>
              )}
              {draftStatus === 'paused' && (
                <ButtonWrapper >
                  <Button onClick={() => handleReopenDraft()}>re-open draft</Button>
                </ButtonWrapper>
              )}
            </CommishBlock>
          )}
        </MobileContentContainer>
      }
      right={<div></div>}
    />
  );
};

export default MorePage;
