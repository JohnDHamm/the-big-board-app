import axios from 'axios';
import { API_ROOT_URL } from '../index';
import { createAuthenticationHeaders } from '../helpers';

export const updateDraftStatus = async (
  leagueId: string,
  draftStatus: DraftStatus
) => {
  try {
    const { data } = await axios.patch(
      `${API_ROOT_URL}/draft_status/${leagueId}`,
      {
        draftStatus,
      },
      createAuthenticationHeaders()
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};
