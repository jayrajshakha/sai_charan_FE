"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../lib/data/features/getUserData/UserDataSlice";

const Wrapper = ({ user, children }) => {
  const dispatch = useDispatch();
  const UserData = useSelector((state) => state.UserData.value);

  useEffect(() => {
    UserData === null && dispatch(getUserData(user));
  }, []);

  return <>{children}</>;
};

export default Wrapper;
