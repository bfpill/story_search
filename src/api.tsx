export const BASE_URL = "http://127.0.0.1:8000"; // Localhost

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

    // console.log("this was the response", response)
    return response.json();
  } catch (error) {
    console.error('Error with request:', error);

    throw error;
  }
}

// Function to encode email
function encodeEmail(email) {
  return email.replace('.', ',');
}

export const getGenerateBook = async (userId: string, search: string) => {
  const url = `${BASE_URL}/book`;
  try {
    const responseData = await makeAuthenticatedRequest(url, 'POST', { search_query: search, user_id: userId });
    console.log(responseData)
    return responseData
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

export const createUser = async (email: string) => {
  const url = `${BASE_URL}/api/create_user/${email}`;

  try {
    const responseData = await makeAuthenticatedRequest(url, 'POST', { "og_email": email });
    return responseData;
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

export const getUser = async (email) => {
  // console.log("getting user")
  const url = `${BASE_URL}/api/get_user/${encodeEmail(email)}`;
  try {
    const responseData = await makeAuthenticatedRequest(url, 'GET');
    return responseData;
  } catch (error) {
    console.error('Error sending data:', error);
  }
};

// export const getBook = async (bookId: string, email: string) => {
//   const url = `${BASE_URL}/api/get_book/${encodeEmail(email)}/${bookId}`;
//   try {
//     const responseData = await makeAuthenticatedRequest(url, 'GET');
//     return responseData;
//   } catch (error) {
//     console.error('Error sending data:', error);
//   }
// }

export const addBookToUser = async (userId: string, bookId: string, book: any) => {
  console.log("sending this", book)
  const url = `${BASE_URL}/api/set_book/${userId}/${bookId}`;
  // console.log(url);
  try {
    const responseData = await makeAuthenticatedRequest(url, 'POST', {book: book});
    return responseData;
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

export const getAllBooks = async () => {
  const url = `${BASE_URL}/api/get_all_books'`;
  try {
    const responseData = await makeAuthenticatedRequest(url, 'GET');
    return responseData;
  } catch (error) {
    console.error('Error sending data:', error);
  }
}

export const getAllUserBooks = async (email: string) => {
  const url = `${BASE_URL}/api/get_all_user_books/${encodeEmail(email)}`;
  try {
    const responseData = await makeAuthenticatedRequest(url, 'GET');
    return responseData;
  } catch (error) {
    console.error('Error sending data:', error);
  }
}


// // Function to decode email
// function decodeEmail(encodedEmail) {
//     return encodedEmail.replace(',', '.');
// }