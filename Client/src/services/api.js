import axios from "axios";
import firebase from "firebase/app";
import { user } from "./store";

const api = axios.create({
  baseURL: "/",
  timeout: 1000
});

const updateUser = () => {
  const fbUser = firebase.auth().currentUser;
  user.loaded = true;
  user.authenticated = fbUser && true;
  user.email = fbUser && fbUser.email;
  user.uid = fbUser && fbUser.uid;
  fbUser &&
    fbUser.getIdToken().then(token => {
      user.token = token;
    });
};

const getToken = () => {
  if (firebase.auth().currentUser) {
    updateUser();
    return firebase.auth().currentUser.getIdToken();
  }

  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(() => {
      updateUser();

      if (firebase.auth().currentUser) {
        firebase
          .auth()
          .currentUser.getIdToken()
          .then(token => {
            return resolve(token);
          });
      }
      return resolve(false);
    });
  });
};

api.interceptors.request.use(config => {
  return new Promise((resolve, reject) => {
    return getToken().then(token => {
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return resolve(config);
    });
  });
});

firebase.auth().onAuthStateChanged(fbUser => {
  console.log(fbUser);
  updateUser();
});

export default api;
