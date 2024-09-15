import { cookies } from "next/headers";
import React from "react";
import { redirect } from "next/navigation";
import useAuth from "./Auth";

const PrivateRoute = async ({ children }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const role = cookieStore.get("role")?.value;

  if (!token) {
    return redirect("/login");
  }

  const userdata = await useAuth();

  if (userdata?.user?.role !== role) {
    return redirect("/login");
  }

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { userdata })
  );

  return <>{childrenWithProps}</>;
};

export default PrivateRoute;
