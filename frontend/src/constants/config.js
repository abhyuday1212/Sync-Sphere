// API_NOTIFICATION_MESSAGES

export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is being loaded, Please wait",
  },
  success: {
    title: "Success",
    message: "Data successfully Loaded",
  },
  responseFailure: {
    title: "Error",
    message:
      "An error occured while fetching response from the server. Please try again",
  },
  requestFailure: {
    title: "Error",
    message: "An Error occured while parsing request data",
  },
  networkError: {
    title: "Error",
    message: "Unable to connect with the server. Please check Internet",
  },
};


// API service CAll
// SAMPLE REQUEST 
// NEED SERVICE CALL: { url: '/', method: 'POST/GET/PUT/DELETE' params: true / false } 

export const SERVICE_URLS = {
  // signup_api
  // userSignup->key ,{url: '/signup',method:'POST'} -> value
  userSignup: { url: "/signup", method: "POST" },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*
  //Login_Api
  userLogin: { url: "/login", method: "POST" }

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*
};