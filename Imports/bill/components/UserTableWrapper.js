"use client";

import React from "react";
import UserTable from "./UserTable";
// import Wrapper from "../../../components/helper/Wrapper";
// import PlusIcon from "../../Package/Assets/PlusIcon";
import { useRouter } from "next/navigation";
import PlusIcon from "../assets/PlusIcon";
import styled from "styled-components";

const UserTableWrapper = () => {
  const { router, push } = useRouter();
  return (
    // <Wrapper className="relative" user={userdata.user}>
    <>
      <Container className="mb-4 ">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Mahi Logistic
        </h3>
        <h3 className="text-xl mr-4 font-bold text-gray-800 dark:text-gray-200">
          Bill No. 000767
        </h3>
      </Container>
      <div className="w-full fixed bottom-3 right-[25px] z-40 flex justify-end my-3">
        <button
          onClick={() => push("/admin/form")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2"
        >
          <PlusIcon />
          Add Entry
        </button>
      </div>
      <UserTable />
    </>

    // </Wrapper>
  );
};

export default UserTableWrapper;

const Container = styled.div`
  background: white;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
