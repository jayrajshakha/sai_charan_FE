"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import nookies from "nookies";
import { useRouter } from "next/navigation";
import useGetAllBills from "../api/useGetAllBills";
import { BillStore } from "@/data/BillStore";
import Loading from "@/components/helper/Loading";

const ListTable = () => {
  const { bill_list, setBill_list, setBill_no } = BillStore();
  const { token } = nookies.get({});
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const fetchUserData = async () => {
    try {
      const response = await useGetAllBills(token);
      setBill_list(response);
      setBill_no(response?.totalBills);
    } catch (error) {
      console.error("Error fetching bills", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <LoaderContainer>
        <Loading />
      </LoaderContainer>
    );
  }

  return (
    <Container>
      {bill_list?.bills?.length === 0 ? (
        <NoBillsMessage>
          No bills available. Please add some entries!
        </NoBillsMessage>
      ) : (
        <>
          <TableContainer>
            <Table>
              <thead>
                <TableRow>
                  <TableHeader>Sr.</TableHeader>
                  <TableHeader>Bill No.</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>GSTIN</TableHeader>
                  <TableHeader>Total</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {bill_list?.bills?.map((item, index) => (
                  <TableRow
                    key={index}
                    onClick={() => router.push(`/admin/list/${item?._id}`)}
                  >
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{item?.bill_no}</TableCell>
                    <TableCell>{item?.name}</TableCell>
                    <TableCell>{item?.GSTIN}</TableCell>
                    <TableCell>{item?.total_ammount}</TableCell>
                  </TableRow>
                ))}
              </tbody>
            </Table>
          </TableContainer>

          {/* Div-based structure for mobile view */}
          <DivContainer>
            {bill_list?.bills?.map((item, index) => (
              <DivRow
                key={index}
                onClick={() => router.push(`/admin/list/${item?._id}`)}
              >
                <DivCell>
                  <strong>Sr:</strong> {index + 1}
                </DivCell>
                <DivCell>
                  <strong>Bill No:</strong> {item?.bill_no}
                </DivCell>
                <DivCell>
                  <strong>Name:</strong> {item?.name}
                </DivCell>
                <DivCell>
                  <strong>GSTIN:</strong> {item?.GSTIN}
                </DivCell>
                <DivCell>
                  <strong>Total:</strong> {item?.total_ammount}
                </DivCell>
              </DivRow>
            ))}
          </DivContainer>
        </>
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
  display: block;

  @media (max-width: 700px) {
    display: none;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  color: #6b7280;
`;

const TableHeader = styled.th`
  padding: 12px;
  text-align: center;
  background-color: #f9fafb;
  color: #374151;
  text-transform: uppercase;
  font-size: 0.875rem;
`;

const TableRow = styled.tr`
  background-color: white;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #f1f5f9;
  }
`;

const TableCell = styled.td`
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #e5e7eb;
`;

const DivContainer = styled.div`
  width: 100%;
  display: none;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const DivRow = styled.div`
  background-color: white;
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f5f9;
  }
`;

const DivCell = styled.div`
  padding: 6px 0;
  color: #374151;

  strong {
    text-transform: uppercase;
    font-weight: bold;
  }
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = styled.div`
  font-size: 1.5rem;
  color: #374151;
`;

const NoBillsMessage = styled.div`
  margin-top: 20px;
  font-size: 1.25rem;
  color: #ef4444;
  text-align: center;
`;
