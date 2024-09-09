import Storage from "./Storage";

/**
 * Retrieves the common API headers including authentication token if available.
 *
 * @returns A Promise that resolves to an object representing the headers to be used in API
 * requests.
 */
const getHeaders = async (contentType) => {
  const token = await Storage.get(Storage.KEYS.TOKEN);
  const headers = {
    Accept: "application/json",
    "Content-Type": contentType,
    origin: "*",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
};

/**
 * Handles the response from an API request and returns the parsed JSON data if the response is
 * successful.
 * If the response is not successful, throws an error with the error message from the response body.
 *
 * @param response - The response object from the API request.
 * @returns A Promise that resolves to the parsed JSON data from the response.
 * @throws An error with the error message from the response body if the response is not successful.
 */
const handleResponse = async (response) => {
  if (response.ok) {
    return response.json();
  }
  if (response.status === 401) {
    await Storage.remove(Storage.KEYS.TOKEN);
    await Storage.remove(Storage.KEYS.IS_LOGGED_IN);
  }
  const body = await response.json();
  throw new Error(body.errors[0].message);
};

const handleError = (e) => {
  throw new Error(
    "Could not connect to AMES services. Please check your Internet connection and try again."
  );
};

/**
 * Performs a GET request to the specified URL with the common API headers and handles the response.
 *
 * @param url - The URL to send the GET request to.
 * @returns A Promise that resolves to the parsed JSON data from the response.
 */
const get = async (url) => {
  return fetch(url, {
    headers: await getHeaders(),
  })
    .then((response) => handleResponse(response))
    .catch(handleError);
};

/**
 * Performs a POST request to the specified URL with the provided data and the common API headers,
 * and handles the response.
 *
 * @param url - The URL to send the POST request to.
 * @param data - The data to be included in the request body.
 * @returns A Promise that resolves to the parsed JSON data from the response.
 */
const post = async (url, data, contentType = "application/json") => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: await getHeaders(contentType),
  })
    .catch(handleError)
    .then((response) => handleResponse(response));
};

/**
 * Performs a DELETE request to the specified URL with the common API headers,
 * and handles the response.
 *
 * @param url - The URL to send the POST request to.
 * @returns A Promise that resolves to the parsed JSON data from the response.
 */
const destroy = async (url) => {
  return fetch(url, {
    method: "DELETE",
    headers: await getHeaders(),
  })
    .catch(handleError)
    .then((response) => handleResponse(response));
};

/**
 * Performs a POST request with formData to the specified URL with the provided data and the common API headers,
 * and handles the response.
 *
 * @param url - The URL to send the POST request to.
 * @param formData - The formdata to be included in the request body.
 * @returns A Promise that resolves to the parsed JSON data from the response.
 */
const postFormData = async (
  url,
  formData,
  contentType = "multipart/form-data"
) => {
  return fetch(url, {
    method: "POST",
    body: formData,
    headers: await getHeaders(contentType),
  })
    .catch(handleError)
    .then((response) => handleResponse(response));
};

/**
 * Performs a PUT request to the specified URL with the provided data and the common API headers,
 * and handles the response.
 *
 * @param url - The URL to send the PUT request to.
 * @param data - The data to be included in the request body.
 * @returns A Promise that resolves to the parsed JSON data from the response.
 */
const put = async (url, data, contentType = "application/json") => {
  return fetch(url, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: await getHeaders(contentType),
  })
    .catch(handleError)
    .then((response) => handleResponse(response));
};

const http = {
  destroy,
  get,
  post,
  postFormData,
  put,
};

export default http;
