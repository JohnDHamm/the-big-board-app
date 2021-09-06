import axios from 'axios';
import { COMMISH_ROOT_URL } from '../index';
import { createAuthenticationHeaders } from '../../helpers';

export const pingOwners = async (leagueId: string) => {
  try {
    const { data } = await axios.get(
      `${COMMISH_ROOT_URL}/ping_owners/${leagueId}`,
      createAuthenticationHeaders()
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
