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
  // signup_api_Call
  // userSignup->key ,{url: '/signup',method:'POST'} -> value
  userSignup: { url: '/signup', method: 'POST' },

  checkUsername: { url: '/username', method: 'POST' },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  //Login_Api
  userLogin: { url: '/login', method: 'POST' },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  // image_Api
  uploadFile: { url: 'file/upload', method: 'POST' },

  //pdf_api
  uploadPdfFile: { url: 'csr/pdfupload', method: 'POST' },

  handleViewerDetails: { url: '/csrviewer', method: 'POST' },
  getPdfDetailById: { url: '/pdfdetails', method: 'GET', query: true },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  createPost: { url: '/create', method: 'POST' },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  // Fetch Projects
  getAllPosts: { url: '/posts', method: 'GET', params: true },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  // fetchprojects via there id
  getPostById: { url: '/post', method: 'GET', query: true },

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*
  // Aditya Sponsor Donation

  sponsorDonate: { url: '/sponsordonate', method: 'POST' },
  individualDonate: { url: '/individualdonate', method: 'POST' },

  getTotalDonation: {url:'/gettotaldonation', method: 'GET', params:true},
  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  checkCsrNumber: {url:'/checkCsrNumber', method: 'GET', params:true},

  // ==**=*=*=*=*=*=**=**=*=*=*=*=*=*=*

  // gemini
  gemini: { url: "/gemini", method: "POST" }

};
