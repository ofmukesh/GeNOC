export default async function authSignIn() {
  console.log("sigining in...");
  console.log("production is",process.env.REACT_APP_PRODUCTION);
  if (process.env.REACT_APP_PRODUCTION === "false") {
    sessionStorage.setItem("_token", "test");
    console.log("temprory signing done for developement.");
    return;
  }
}
