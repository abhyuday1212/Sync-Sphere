import axios from "axios";
import { API_NOTIFICATION_MESSAGES, SERVICE_URLS } from "../constants/config";

const API_URL = "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
});

// get
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

// post
axiosInstance.interceptors.response.use(
  function (response) {
    //    stop global loader here
    return processResponse(response);
  },

  function (error) {
    //    stop global loader here

    return Promise.reject(processError(error));
  }
);

// ==========================
// if success -> return {isSuccess:true,data:object}
// if fail -> return{isFailure:true,status:string, msg: string , code : int}
// ==========================

const processResponse = (response) => {
  if (response?.status === 200) {
    return { isSuccess: true, data: response.data };
  } else {
    return {
      isFailure: true,
      status: response?.status,
      msg: response?.msg,
      code: response?.code,
    };
  }
};
//=*=*=*=*=*=*=*=*=*=*=*=*=*=*=***=*==*=**=*=*=*=*=*=*=*=*=

// ==========================
// if success -> return {isSuccess:true,data:object}
// if fail -> return{isFailure:true,status:string, msg: string , code : int}
// ==========================
const processError = (error) => {
  if (error.response) {
    //   Request made and server responded with a status other that falls out of the range 2.x.x

    console.log(`Error in RESPONSE :`, error.toJSON());
    return {
      isError: true,
      msh: API_NOTIFICATION_MESSAGES.responseFailure,
      code: error.response.status,
    };
  } else if (error.request) {
    //   Request made but no response was received
    // connectivity issue such that frontend backend se connected na ho

    console.log(`Error in REQUEST :`, error.toJSON());
    return {
      isError: true,
      msh: API_NOTIFICATION_MESSAGES.requestFailure,
      code: "",
    };
  } else {
    //   something happend in setting up request that triggers an error
  }
  console.log(`Error in NETWORK :`, error.toJSON());
  return {
    isError: true,
    msh: API_NOTIFICATION_MESSAGES.networkError,
    code: "",
  };
};

// is object k through hm api ko call kr skte hai
const API = {};

for (const [key, value] of Object.entries(SERVICE_URLS)) {
  API[key] = (body, showUploadProgress, showDownloadProgress) =>
    axiosInstance({
      method: value.method,
      url: value.url,
      data: body,
      responseType: value.responseType,
      onUploadProgress: function (progressEvent) {
        if (showUploadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showUploadProgress(percentageCompleted);
        }
      },
      onDownloadProgress: function (progressEvent) {
        if (showDownloadProgress) {
          let percentageCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          showDownloadProgress(percentageCompleted);
        }
      },
    });
}

export { API };
