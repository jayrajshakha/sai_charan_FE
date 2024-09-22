"use client";

import React, { useState, useEffect } from "react";
// import Wrapper from "../../../components/helper/Wrapper";
// import PlusIcon from "../../Package/Assets/PlusIcon";
import { useParams, useRouter } from "next/navigation";
import nookies from "nookies";
import PlusIcon from "../assets/PlusIcon";
import styled from "styled-components";
import Bill from "./Bill";
import BillComponent from "@/Imports/bill/components/BillComponent";
import useGetOneBill from "../api/useGetOneBill";
import { BillStore } from "@/data/BillStore";
const BillWrapper = () => {
  const { router, push } = useRouter();
  const [data, setData] = useState();
  const { token } = nookies.get({});
  const { listID } = useParams();
  const { bill } = BillStore();

  return (
    // <Wrapper className="relative" user={userdata.user}>
    <>
      <Container className="mb-4 ">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
          {bill?.name}
        </h3>
        <h3 className="text-xl mr-4 font-bold text-gray-800 dark:text-gray-200">
          {bill?.bill_no}
        </h3>
      </Container>
      <div className="w-full fixed bottom-3 right-[25px] z-40 flex justify-end my-3">
        <button
          onClick={() => push("/admin/entry")}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2"
        >
          <PlusIcon />
          Add Entry
        </button>
      </div>

      <div className="w-full fixed bottom-3 right-[160px] z-40 flex justify-end my-3">
        {bill?.bill_entry?.length > 0 && <BillComponent data={bill} />}
      </div>
      <Bill />
    </>

    // </Wrapper>
  );
};

export default BillWrapper;

const Container = styled.div`
  background: white;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
