"use client";

import React from "react";

// import Wrapper from "../../../components/helper/Wrapper";
// import PlusIcon from "../../Package/Assets/PlusIcon";
import { useRouter } from "next/navigation";
import PlusIcon from "../assets/PlusIcon";
import ListTable from "./ListTable";

const ListTableWrapper = () => {
  const { router, push } = useRouter();
  return (
    // <Wrapper className="relative" user={userdata.user}>
    <>
      <div className="mb-4 ">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Mahi Logistic
        </h3>
      </div>
      <ListTable />
    </>

    // </Wrapper>
  );
};

export default ListTableWrapper;
