"use client";
import { BillStore } from "@/data/BillStore";
import { useParams } from "next/navigation";
import nookies from "nookies";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetOneBill from "../api/useGetOneBill";
import { DeleteIcon, EditIcon } from "../assets";
import { DeletBox, UpdateBox } from "../helper";

const Bill = () => {
  const [openDeletBox, setOpenDeletBox] = useState(false);
  const [editBox, setEditBox] = useState(false);
  const [editableUser, setEditableUser] = useState(null);
  const { token } = nookies.get({});

  const { listID } = useParams();
  const { setBill: SetBill, bill } = BillStore();

  const fetchBillData = async () => {
    const response = await useGetOneBill(listID, token);
    console.log("response", response);
    SetBill(response[0]);
    setEditBox(false);
  };

  useEffect(() => {
    fetchBillData();
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
              <TableHeader>Date</TableHeader>
              <TableHeader>Vahicle No</TableHeader>
              <TableHeader>Place</TableHeader>
              <TableHeader>Weight</TableHeader>
              <TableHeader>Per Rate</TableHeader>
              <TableHeader>Ammount</TableHeader>
              <TableHeader>Action</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {bill?.bill_entry?.length > 0 &&
              bill?.bill_entry?.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item?.date}</TableCell>
                  <TableCell>{item?.vahicle_no}</TableCell>
                  <TableCell>{item?.place}</TableCell>
                  <TableCell>{item?.tone}</TableCell>
                  <TableCell>{item?.per_rate}</TableCell>
                  <TableCell>{item?.ammount}</TableCell>
                  <TableCell>
                    <ActionContainer>
                      <ActionSpan onClick={() => handlerEdit(item.id)}>
                        <EditIcon />
                      </ActionSpan>
                      <ActionSpan onClick={() => openPopUpBox(item.id)}>
                        <DeleteIcon />
                      </ActionSpan>
                    </ActionContainer>
                  </TableCell>
                </TableRow>
              ))}
          </tbody>
        </Table>
      </TableContainer>

      {bill?.bill_entry?.length === 0 && (
        <NoBillMessage>No Bill Entry, Please Add New Entries</NoBillMessage>
      )}

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

export default Bill;

// Styled Components
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto; // Enables horizontal scrolling for smaller screens
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  color: #6b7280; /* text-gray-500 */
  @media (max-width: 768px) {
    font-size: 0.875rem; /* Smaller font-size for smaller screens */
  }
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

const NoBillMessage = styled.div`
  margin-top: 20px;
  color: #ef4444; /* text-red-600 */
  font-size: 1rem;
  text-align: center;
`;
