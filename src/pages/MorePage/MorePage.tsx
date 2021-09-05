import React from 'react';
import {
  ButtonWrapper,
  CommishBlock,
  StatusMessage,
  Welcome,
} from './MorePage.styles';
import {
  CurrentPickContext,
  DraftStatusContext,
  UserContext,
} from '../../contexts';
import { Button, Input } from '../../components';
import { getPicks, pauseDraft, reopenDraft, startDraft } from '../../api';
import { ThreeUpLayout, MobileContentContainer } from '../layouts';

const MorePage: React.FC = () => {
  const { user, setCurrentUser } = React.useContext(UserContext);
  const { currentDraftPick } = React.useContext(CurrentPickContext);
  const { draftStatus } = React.useContext(DraftStatusContext);
  const [commishMessage, setCommishMessage] = React.useState<string>('');
  const [statusMessage, setStatusMessage] = React.useState<string>('');
  const [statusError, setStatusError] = React.useState<boolean>(false);

  const logout = (): void => {
    setCurrentUser(null);
    //TODO: need to clear modals? see SocketListener 163?
  };

  const checkAppStatus = () => {
    if (user) {
      setStatusMessage('');
      getPicks(user.leagueId).then((picks) => {
        if (currentDraftPick.selectionNumber === picks.length + 1) {
          setStatusMessage("You are up to date. Keep on draftin'!");
          setStatusError(false);
        } else {
          setStatusMessage('Uh oh, something went wrong, please log out.');
          setStatusError(true);
        }
      });
    }
  };

  const handleStartDraft = () => {
    if (user) {
      startDraft(user?.leagueId, commishMessage)
        .then((res) => null)
        .catch((err) => console.log('err', err));
    }
  };

  const handlePauseDraft = () => {
    if (user) {
      pauseDraft(user?.leagueId, commishMessage)
        .then((res) => null)
        .catch((err) => console.log('err', err));
    }
  };

  const handleReopenDraft = () => {
    if (user) {
      reopenDraft(user?.leagueId, commishMessage)
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
          <ButtonWrapper>
            <Button onClick={() => checkAppStatus()}>check app status</Button>
          </ButtonWrapper>
          {statusMessage && (
            <StatusMessage statusError={statusError}>
              {statusMessage}
            </StatusMessage>
          )}
          {user?.isCommish && (
            <CommishBlock>
              <Welcome>Hello Commish!</Welcome>
              <Input
                placeholder="add message"
                type="text"
                onTextChange={(text) => setCommishMessage(text)}
              />
              {draftStatus === 'not started' && (
                <ButtonWrapper>
                  <Button onClick={() => handleStartDraft()}>
                    start draft
                  </Button>
                </ButtonWrapper>
              )}
              {draftStatus === 'open' && (
                <ButtonWrapper>
                  <Button onClick={() => handlePauseDraft()}>
                    pause draft
                  </Button>
                </ButtonWrapper>
              )}
              {draftStatus === 'paused' && (
                <ButtonWrapper>
                  <Button onClick={() => handleReopenDraft()}>
                    re-open draft
                  </Button>
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
