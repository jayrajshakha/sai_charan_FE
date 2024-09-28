"use client";

import BillComponent from "@/Imports/bill/components/BillComponent";
import { BillStore } from "@/data/BillStore";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import PlusIcon from "../assets/PlusIcon";
import Bill from "./Bill";

const BillWrapper = () => {
  const { push } = useRouter();
  const { bill } = BillStore();

  return (
    <>
      <Container>
        <BillTitle>{bill?.name}</BillTitle>
        <BillNumber>{bill?.bill_no}</BillNumber>
      </Container>

      <ButtonContainer>
        <AddButton onClick={() => push("/admin/entry")}>
          <PlusIcon />
          Add Entry
        </AddButton>
      </ButtonContainer>

      <BillComponentContainer>
        {bill?.bill_entry?.length > 0 && <BillComponent data={bill} />}
      </BillComponentContainer>

      <Bill />
    </>
  );
};

export default BillWrapper;

// Styled Components
const Container = styled.div`
  background: white;
  padding: 12px; /* Equivalent to p-3 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem; /* Equivalent to mb-4 */
`;

const BillTitle = styled.h3`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 700; /* Equivalent to font-bold */
  color: #374151; /* Equivalent to text-gray-800 */

  // @media (prefers-color-scheme: dark) {
  //   color: #e2e8f0; /* Equivalent to dark:text-gray-200 */
  // }
`;

const BillNumber = styled.h3`
  font-size: 1.25rem; /* Equivalent to text-xl */
  margin-right: 1rem; /* Equivalent to mr-4 */
  font-weight: 700; /* Equivalent to font-bold */
  color: #374151; /* Equivalent to text-gray-800 */

  // @media (prefers-color-scheme: dark) {
  //   color: #e2e8f0; /* Equivalent to dark:text-gray-200 */
  // }
`;

const ButtonContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 12px; /* Equivalent to bottom-3 */
  right: 25px; /* Equivalent to right-[25px] */
  z-index: 40;
  display: flex;
  justify-content: flex-end;
  margin: 0.75rem 0; /* Equivalent to my-3 */
`;

const AddButton = styled.button`
  background-color: #3b82f6; /* Equivalent to bg-blue-700 */
  color: white;
  border: none;
  border-radius: 0.5rem; /* Equivalent to rounded-lg */
  padding: 0.625rem 0.625rem; /* Equivalent to p-2.5 */
  font-size: 0.875rem; /* Equivalent to text-sm */
  display: flex;
  align-items: center;

  &:hover {
    background-color: #2563eb; /* Equivalent to hover:bg-blue-800 */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(59, 130, 247, 0.3); /* Equivalent to focus:ring-4 focus:ring-blue-300 */
  }
`;

const BillComponentContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 12px; /* Equivalent to bottom-3 */
  right: 160px; /* Equivalent to right-[160px] */
  z-index: 40;
  display: flex;
  justify-content: flex-end;
  margin: 0.75rem 0; /* Equivalent to my-3 */
`;
