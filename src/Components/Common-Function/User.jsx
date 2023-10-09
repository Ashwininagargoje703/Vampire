import { Cookies } from "react-cookie";
const User = () => {
  const cookie = new Cookies();
  const user = cookie.get("user");
  return user;
};

export default User;
