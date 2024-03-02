import { BASE_URL, makeAuthenticatedRequest } from "./api";

export const getGenerateBackgroundImage = async (userId: string, search: string, color: "blue") => {
  const url = `${BASE_URL}/bg_image`;
  try {
    const responseData = await makeAuthenticatedRequest(url, 'POST', { search_query: search, user_id: userId, color: color} );
    return responseData
  } catch (error) {
    console.error('Error sending data:', error);
  }
}