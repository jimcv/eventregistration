import axios from "axios";

const config = require("../../config");

const getBackendUrl = function() {
  switch (process.env.NODE_ENV) {
    case "development":
      // use https if developing using hosted backend, else use http
      if (config.dev.backendHost === "eventreg-backend-100.herokuapp.com") {
        return "https://" + config.dev.backendHost + ":" + config.dev.backendPort;
      } else {
        return "http://" + config.dev.backendHost + ":" + config.dev.backendPort;
      }
    case "production":
      return "https://" + config.build.backendHost + ":" + config.build.backendPort;
  }
};

const getFrontendUrl = function() {
  switch (process.env.NODE_ENV) {
    case "development":
      return "http://" + config.dev.host + ":" + config.dev.port;
    case "production":
      return "https://" + config.build.host + ":" + config.build.port;
  }
};

const backendUrl = getBackendUrl();
const frontendUrl = getFrontendUrl();

export const AXIOS = axios.create({
  baseURL: backendUrl,
  headers: { "Access-Control-Allow-Origin": frontendUrl }
});
