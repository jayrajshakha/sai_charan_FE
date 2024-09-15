"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import nookies from "nookies";
import { toast } from "react-toastify";
// import { useSelector } from "react-redux";
import { DeletBox, UpdateBox, UserNotFound } from "../helper";
import { DeleteIcon, EditIcon } from "../assets";
import { useRouter } from "next/navigation";
// import { UseGetSearchUserByName, UseGetUserData } from "../api";
// import { useDeletUser, useUpdateUser } from "../api/useSuperApi";
// import { UseSearchBooking } from "../../Package/api";
// import SearchBox from "../../../components/helper/SearchBox";
// import PlusIcon from "../../Package/Assets/PlusIcon";

const ListTable = () => {
  const [user, setUser] = useState([]);
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

  // const UserData = useSelector((state) => state.UserData.value);

  const router = useRouter();

  // const fetchUserData = async () => {
  //   const response = await UseGetUserData(UserData?.role, page, 10, token);
  //   setOffset(response?.offset);
  //   setUser(response?.users);
  //   setTotalPages(response?.totalPages);
  //   setIsLoading(false);
  //   setEditBox(false);
  // };

  // useEffect(() => {
  //   if (search === "") {
  //     setTimeout(() => {
  //       UserData !== null && fetchUserData();
  //     }, 200);
  //   }
  // }, [UserData, page, search]);

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
              <th scope="col" className="p-4 text-center ">
                Sr.
              </th>
              <th scope="col" className="px-6 py-3 text-center ">
                Bill No.
              </th>
              <th scope="col" className="px-6 text-center py-3">
                Name
              </th>
              <th scope="col" className=" text-center px-6 py-3">
                GSTIN
              </th>
              <th scope="col" className="px-6 text-center  py-3">
                Total
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {[...Array(6)]?.map((item, index) => {
              return (
                <tr
                  onClick={() => router.push("/admin/list/new1")}
                  key={index}
                  className="bg-white  border-b  userTable:table-row  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="w-4 p-4 text-center ">{offset + index + 1}</td>
                  <td className="px-6 py-4 text-center  ">00786</td>
                  <th
                    scope="row"
                    className="px-6 py-4 text-center  font-medium text-gray-900 whitespace-nowrap "
                  >
                    Jovial Group Of Company
                  </th>
                  <td className="px-6 py-4 text-center ">JDSHG90809SF</td>{" "}
                  <td className="px-6 py-4 text-center ">4500096</td>{" "}
                  <td className="px-6 py-4">
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

export default ListTable;

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
