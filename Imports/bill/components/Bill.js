"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import nookies from "nookies";
import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
import { DeletBox, UpdateBox, UserNotFound } from "../helper";
import { DeleteIcon, EditIcon } from "../assets";
import { useParams } from "next/navigation";
import useGetOneBill from "../api/useGetOneBill";
import { BillStore } from "@/data/BillStore";
// import { UseGetSearchUserByName, UseGetUserData } from "../api";
// import { useDeletUser, useUpdateUser } from "../api/useSuperApi";
// import { UseSearchBooking } from "../../Package/api";
// import SearchBox from "../../../components/helper/SearchBox";
// import PlusIcon from "../../Package/Assets/PlusIcon";

const Bill = () => {
  // const [bill, setBill] = useState([]);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [totalPages, setTotalPages] = useState(null);
  const [openDeletBox, setopenDeletBox] = useState(false);
  const [id, setId] = useState(null);
  const [editBox, setEditBox] = useState(false);
  const [editableUser, setEditableUser] = useState(null);
  const { token } = nookies.get({});
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { listID } = useParams();
  const { setBill: SetBill, bill } = BillStore();
  console.log("bill_id", listID);

  // const UserData = useSelector((state) => state.UserData.value);

  const fetchBillData = async () => {
    const response = await useGetOneBill(listID, token);
    console.log("response", response);
    // setBill(response[0]);
    SetBill(response[0]);

    setEditBox(false);
  };

  useEffect(() => {
    fetchBillData();
  }, []);

  const HandlerEdit = (id) => {
    OpenEditBox(true);
    // setEditableUser(user.filter((user) => user._id === id)[0]);
  };

  const OpenEditBox = (state) => {
    setEditBox(state);
  };

  const updatedUserData = (data) => {
    // const fetchUpdate = async () => {
    //   const response = await useUpdateUser(data._id, data, token);
    //   if (response) {
    //     toast.success("Successfully update  userData", {
    //       theme: "colored",
    //       autoClose: 1000,
    //     });
    //   }
    // };
    // fetchUpdate();

    // const replaceableIndex = user.findIndex((item) => item._id === data._id);
    // user[replaceableIndex] = data;
    setEditBox(false);
  };

  const OpenPopUpBox = (id) => {
    setId(id);
    setopenDeletBox(true);
  };

  return (
    <Container>
      <div className=" userTable:shadow-md sm:rounded-lg w-full">
        {/* <div className="flex justify-center items-center h-32">
          <div className="loader border-t-4 border-blue-500 rounded-full w-12 h-12 animate-spin"></div>
        </div> */}

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className=" hidden userTable:contents">
              <th scope="col" className="p-4">
                Sr.
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Vahicle No
              </th>
              <th scope="col" className=" px-6 py-3">
                Place
              </th>
              <th scope="col" className="px-6 py-3">
                Weight
              </th>
              <th scope="col" className="px-6 py-3">
                Per Rate
              </th>
              <th scope="col" className="px-6 py-3">
                Ammount
              </th>{" "}
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {bill?.bill_entry?.length > 0 &&
              bill?.bill_entry?.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b  userTable:table-row  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-4 p-4">{index + 1}</td>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item?.date}
                    </td>
                    <td className="px-6 py-4">{item?.vahicle_no}</td>
                    <td className="px-6 py-4">{item?.place}</td>
                    <td className="px-6 py-4">{item?.tone}</td>
                    <td className="px-6 py-4">{item?.per_rate}</td>
                    <td className="px-6 py-4">{item?.ammount}</td>
                    <td className="px-6 py-4">
                      <div className="font-medium flex gap-1 hover:underline">
                        <Span onClick={() => HandlerEdit(item.id)}>
                          <EditIcon />
                        </Span>
                        <Span
                          className="hover:text-red-300"
                          onClick={() => OpenPopUpBox(item.id)}
                        >
                          <DeleteIcon />
                        </Span>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>

          {/* Mobile View */}
          {/* <tbody className="flex flex-col userTable:hidden gap-3">
            {[...Array(5)]?.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b rounded-xl  gap-3  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <div className="px-6 py-[6px]  gap-3 text-center flex   font-medium text-gray-900 dark:text-white">
                    <div className="uppercase font-bold">Count :</div>
                    <div>{offset + index + 1}</div>
                  </div>
                  <div className="px-6 py-[6px]   text-center flex  gap-3 font-medium text-gray-900 dark:text-white">
                    <div className="uppercase font-bold">Date :</div>
                    <div> {20 - 11 - 2001}</div>
                  </div>
                  <div className="px-6 py-[6px]   text-center flex  gap-3 font-medium text-gray-900 dark:text-white">
                    <div className="uppercase font-bold">Vahicle No :</div>
                    <div> {"GJ 25 A 7822"}</div>
                  </div>

                  <div className="px-6 py-[6px]   text-center flex  gap-3 font-medium text-gray-900 dark:text-white">
                    <div className="uppercase font-bold">Place :</div>
                    <div> Gujrat</div>
                  </div>

                  <div className="px-6 py-[6px]   text-center flex  gap-3 font-medium text-gray-900 dark:text-white">
                    <div className="uppercase font-bold">Weight :</div>
                    <div> 300 Tone</div>
                  </div>

                  <div className="px-6 py-[6px]   text-center flex  gap-3 font-medium text-gray-900 dark:text-white">
                    <div className="uppercase font-bold">Rate :</div>
                    <div> 2200</div>
                  </div>
                  <div className="px-6 py-[6px]   text-center flex  gap-3 font-medium text-gray-900 dark:text-white">
                    <div className="uppercase font-bold">Ammount :</div>
                    <div> 78000</div>
                  </div>

                  <div className="px-6 py-[6px]   text-center flex  gap-3 font-medium text-gray-900 dark:text-white">
                    <div className="uppercase font-bold">Action :</div>
                    <div className="font-medium flex gap-1 hover:underline">
                      <Span onClick={() => HandlerEdit(item._id)}>
                        <EditIcon />
                      </Span>
                      <Span
                        className="hover:text-red-300"
                        onClick={() => OpenPopUpBox(item._id)}
                      >
                        <DeleteIcon />
                      </Span>
                    </div>
                  </div>
                </tr>
              );
            })}
          </tbody> */}
        </table>
      </div>

      {bill?.bill_entry?.length === 0 && (
        <div>No Bill Entry Pleas Add New Entries</div>
      )}

      {openDeletBox && <DeletBox HandlerDelet={HandlerDelet} />}

      {editBox && (
        <UpdateBox
          updatedUserData={updatedUserData}
          editableUser={editableUser}
          OpenEditBox={OpenEditBox}
        />
      )}
    </Container>
  );
};

export default Bill;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }

  svg {
    &:hover {
      scale: 1.1;
    }
  }
`;
