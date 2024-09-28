"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import nookies from "nookies";
import { DeletBox, UpdateBox } from "../helper";
import { DeleteIcon, EditIcon } from "../assets";
import { useRouter } from "next/navigation";
import useGetAllBills from "../api/useGetAllBills";

const ListTable = () => {
  const [bill, setBill] = useState([]);
  const [openDeletBox, setOpenDeletBox] = useState(false);
  const [id, setId] = useState(null);
  const [editBox, setEditBox] = useState(false);
  const [editableUser, setEditableUser] = useState(null);
  const { token } = nookies.get({});
  const router = useRouter();

  const fetchUserData = async () => {
    const response = await useGetAllBills(token);
    setBill(response?.bills);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handlerEdit = (id) => {
    openEditBox(true);
  };

  const openEditBox = (state) => {
    setEditBox(state);
  };

  const updatedUserData = (data) => {
    setEditBox(false);
  };

  const openPopUpBox = (id) => {
    setId(id);
    setOpenDeletBox(true);
  };

  return (
    <Container>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Sr.</TableHeader>
              <TableHeader>Bill No.</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>GSTIN</TableHeader>
              <TableHeader>Total</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {bill?.length > 0 &&
              bill?.map((item, index) => (
                <TableRow
                  key={index}
                  onClick={() => router.push(`/admin/list/${item?._id}`)}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item?.bill_no}</TableCell>
                  <TableCell>{item?.name}</TableCell>
                  <TableCell>{item?.GSTIN}</TableCell>
                  <TableCell>{item?.total_ammount}</TableCell>
                  <TableCell>
                    <ActionContainer>
                      <ActionSpan onClick={() => handlerEdit(item._id)}>
                        <EditIcon />
                      </ActionSpan>
                      <ActionSpan onClick={() => openPopUpBox(item._id)}>
                        <DeleteIcon />
                      </ActionSpan>
                    </ActionContainer>
                  </TableCell>
                </TableRow>
              ))}
          </tbody>
        </Table>
      </TableContainer>

      {openDeletBox && <DeletBox HandlerDelet={HandlerDelet} />}

      {editBox && (
        <UpdateBox
          updatedUserData={updatedUserData}
          editableUser={editableUser}
          openEditBox={openEditBox}
        />
      )}
    </Container>
  );
};

export default ListTable;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto; // Allows horizontal scrolling for small screens
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  color: #6b7280; /* text-gray-500 */
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  background-color: #f9fafb; /* bg-gray-50 */
  color: #374151; /* text-gray-900 */
  text-transform: uppercase;
  font-size: 0.875rem; /* text-sm */
`;

const TableRow = styled.tr`
  background-color: white; /* bg-white */
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f1f5f9; /* hover:bg-gray-50 */
  }
`;

const TableCell = styled.td`
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb; /* border-gray-200 */
`;

const ActionContainer = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

const ActionSpan = styled.span`
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  svg {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
