const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  env: {
    firebaseApiKey:
      process.env.firebaseApiKey || "AIzaSyCZeumB35TMEcrInQ92-nx2RFPjxM_Fljc",
    authDomain: process.env.authDomain || "loves-pounding.firebaseapp.com",
    databaseURL:
      process.env.databaseURL || "https://loves-pounding.firebaseio.com",
    projectId: process.env.projectId || "loves-pounding",
    storageBucket: process.env.storageBucket || "loves-pounding.appspot.com",
    messagingSenderId: process.env.messagingSenderId || "936240455899",
    apiUrl: process.env.apiUrl || "https://localhost:5001/"
  }
});
