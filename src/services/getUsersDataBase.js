import transformDataBase from "./transformDataBase";

const API_URL = "https://randomuser.me/api/";
const usersLimit = 1000;

export default async function getUsersDataBase() {
  const response = await fetch(`${API_URL}?results=${usersLimit}`);
  if (response.ok) {
    const data = await response.json();
    return transformDataBase(data);
  } else {
    throw new Error("Error fetching data");
  }
}
