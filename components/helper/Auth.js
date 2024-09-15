import { cookies } from "next/headers";
import { UseGetRole } from "../api/UseGetRole";

const useAuth = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const role = cookieStore.get("role")?.value;

  if (token) {
    const user = await UseGetRole(role, token);
    return {
      user,
    };
  }
  return { user: "" };
};

export default useAuth;
