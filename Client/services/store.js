import { store } from "react-easy-state";

const user = store({
  loaded: false,
  authenticated: false,
  uid: false,
  email: false,
  token: false
});

export { user };
