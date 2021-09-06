import axios from 'axios';
import { API_ROOT_URL } from '../index';
import { createAuthenticationHeaders } from '../helpers';

export const answerPing = async (leagueId: string, ownerId: string) => {
  try {
    const { data } = await axios.post(
      `${API_ROOT_URL}/ping_answer`,
      {
        leagueId,
        ownerId,
      },
      createAuthenticationHeaders()
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
