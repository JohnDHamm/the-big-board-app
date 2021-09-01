import axios from 'axios';
import { COMMISH_ROOT_URL } from '../index';
import { createAuthenticationHeaders } from '../../helpers';

export const pauseDraft = async (leagueId: string, message: string) => {
  try {
    const { data } = await axios.patch(
      `${COMMISH_ROOT_URL}/pause_draft`,
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
