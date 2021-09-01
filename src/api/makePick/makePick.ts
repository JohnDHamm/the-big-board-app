import axios from 'axios';
import { API_ROOT_URL } from '../index';
import { createAuthenticationHeaders } from '../helpers';

export const makePick = async (pickData: DraftSelection) => {
  try {
    const { data } = await axios.post(
      `${API_ROOT_URL}/pick`,
      pickData,
      createAuthenticationHeaders()
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
