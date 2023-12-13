import dummyStudentData from "../../mockData";

export default async function getStudetnInfo() {
  console.log("getting info...");
  if (process.env.REACT_APP_PRODUCTION === "false") {
    console.log("sending mockdata for testing!");
    return dummyStudentData;
  }
}
