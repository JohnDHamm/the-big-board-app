import axios from 'axios';
import { COMMISH_ROOT_URL } from '../index';
import { createAuthenticationHeaders } from '../../helpers';

export const reopenDraft = async (leagueId: string, message: string) => {
  try {
    const { data } = await axios.patch(
      `${COMMISH_ROOT_URL}/reopen_draft`,
      {
        leagueId,
        message,
      },
      createAuthenticationHeaders()
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
