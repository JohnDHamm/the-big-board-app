import axios from 'axios';
import { API_ROOT_URL } from '../index';
import { createAuthenticationHeaders } from '../helpers';

export const getOwners = async (leagueId: string) => {
  try {
    const { data } = await axios.get(
      `${API_ROOT_URL}/owners/${leagueId}`,
      createAuthenticationHeaders()
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
