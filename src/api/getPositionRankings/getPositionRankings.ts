import axios from 'axios';
import { API_ROOT_URL } from '../index';
import { createAuthenticationHeaders } from '../helpers';

export const getPositionRankings = async (scoringType: ScoringType) => {
  try {
    const { data } = await axios.get(
      `${API_ROOT_URL}/position_rankings/${scoringType}`,
      createAuthenticationHeaders()
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
