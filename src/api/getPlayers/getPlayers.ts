import axios from 'axios';
import { API_ROOT_URL } from '../index';
import { createAuthenticationHeaders } from '../helpers';

export const getPlayers = async () => {
  try {
    const { data } = await axios.get(
      `${API_ROOT_URL}/players`,
      createAuthenticationHeaders()
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
