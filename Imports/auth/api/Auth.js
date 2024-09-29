import { UseGetRole } from "./UseGetRole";

const useAuth = async (token) => {
  if (token) {
    const user = await UseGetRole(token);
    // console.log("user----------------->", user);
    return {
      user,
    };
  }
  return { user: "" };
};

export default useAuth;
