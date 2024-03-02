const BASE_URL = "http://127.0.0.1:8000"; // Localhost

export async function makeAuthenticatedRequest(url, method, data = null) {
  try {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: data ? JSON.stringify(data) : null,
    };
    if (method === 'GET') delete options.body;

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    console.log("this was the response", response)
    return response.json();
  } catch (error) {
    console.error('Error with request:', error);

    throw error;
  }
}

export const getGenerateBook = async (userId: string, search: string) => {
  const url = `${BASE_URL}/book`;
  try {
    const responseData = await makeAuthenticatedRequest(url, 'POST', { search_query: search, user_id: userId} );
    return responseData
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

export const createUser = async (email: string) => {
  const url = `${BASE_URL}/api/users`;
  console.log("creating user")
  try {
    const responseData = await makeAuthenticatedRequest(url, 'POST', { email: email });
    return responseData;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

export const getUser = async (email: string) => {
  const url = `${BASE_URL}/api/users/${email}`;
  console.log("getting user")
  try {
    const responseData = await makeAuthenticatedRequest(url, 'GET');
    return responseData;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

export const getBook = async (bookId: string, userId) => {
  const url = `${BASE_URL}/api/get_book/${userId}/${bookId}`;
  try {
    const responseData = await makeAuthenticatedRequest(url, 'GET');
    return responseData;
  } catch (error) {
    console.error('Error sending data:', error);
  }
}


export const setBook = async (userId: string, bookId: string, book: any) => {
  const url = `${BASE_URL}/api/set_book/${userId}/${bookId}`;
  // console.log(url);
  try {
    const responseData = await makeAuthenticatedRequest(url, 'POST', book);
    return responseData;
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

