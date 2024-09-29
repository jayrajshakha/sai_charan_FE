"use client";

import BillComponent from "@/Imports/bill/components/BillComponent";
import { BillStore } from "@/data/BillStore";
import { useParams } from "next/navigation";
import nookies from "nookies";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetOneBill from "../api/useGetOneBill";
import PlusIcon from "../assets/PlusIcon";
import Bill from "./Bill";
import FormComponent from "./FormComponent";

const BillWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { token } = nookies.get({});
  const { listID } = useParams();
  const { setBill, bill } = BillStore();

  const fetchBillData = async () => {
    const response = await useGetOneBill(listID, token);
    setBill(response);
  };

  useEffect(() => {
    fetchBillData();
  }, [isModalOpen]);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Container>
        <BillTitle>{bill?.name}</BillTitle>
        <BillNumber>{bill?.bill_no}</BillNumber>
      </Container>

      <ButtonContainer>
        {bill?.bill_entry?.length < 10 && (
          <AddButton onClick={toggleModal}>
            <PlusIcon />
            Add Entry
          </AddButton>
        )}
      </ButtonContainer>

      <BillComponentContainer>
        {bill?.bill_entry?.length > 0 && <BillComponent data={bill} />}
      </BillComponentContainer>

      <Bill bill={bill} />

      {/* Modal */}
      {isModalOpen && (
        <ModalOverlay onClick={toggleModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={toggleModal}>×</CloseButton>
            <FormComponent bill_id={bill?._id} toggleModal={toggleModal} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default BillWrapper;

// Styled Components
const Container = styled.div`
  background: white;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const BillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #374151;
`;

const BillNumber = styled.h3`
  font-size: 1.25rem;
  margin-right: 1rem;
  font-weight: 700;
  color: #374151;
`;

const ButtonContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 12px;
  right: 25px;
  z-index: 40;
  display: flex;
  justify-content: flex-end;
  margin: 0.75rem 0;
`;

const AddButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  padding: 0.625rem 0.625rem;
  font-size: 0.875rem;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2563eb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(59, 130, 247, 0.3);
  }
`;

const BillComponentContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 12px;
  right: 160px;
  z-index: 40;
  display: flex;
  justify-content: flex-end;
  margin: 0.75rem 0;
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const ModalContent = styled.div`
  background: white;
  // padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 600px;
  width: 100%;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #374151;
`;
