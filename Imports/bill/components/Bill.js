"use client";
import styled from "styled-components";

const Bill = ({ bill }) => {
  return (
    <Container>
      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Sr.</TableHeader>
              <TableHeader>Date</TableHeader>
              <TableHeader>Vehicle No</TableHeader>
              <TableHeader>Place</TableHeader>
              <TableHeader>Weight</TableHeader>
              <TableHeader>Per Rate</TableHeader>
              <TableHeader>Amount</TableHeader>
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
                </TableRow>
              ))}

            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>{bill?.total_ammount}</TableCell>
            </TableRow>
          </tbody>
        </Table>
      </TableContainer>

      <DivContainer>
        {bill?.bill_entry?.length > 0 &&
          bill?.bill_entry?.map((item, index) => (
            <DivRow key={index}>
              <DivCell>
                <strong>Sr:</strong> {index + 1}
              </DivCell>
              <DivCell>
                <strong>Date:</strong> {item?.date}
              </DivCell>
              <DivCell>
                <strong>Vehicle No:</strong> {item?.vahicle_no}
              </DivCell>
              <DivCell>
                <strong>Place:</strong> {item?.place}
              </DivCell>
              <DivCell>
                <strong>Weight:</strong> {item?.tone}
              </DivCell>
              <DivCell>
                <strong>Per Rate:</strong> {item?.per_rate}
              </DivCell>
              <DivCell>
                <strong>Amount:</strong> {item?.ammount}
              </DivCell>
            </DivRow>
          ))}

        <DivRow>
          <DivCell>
            <strong>Total:</strong> {bill?.total_ammount}
          </DivCell>
        </DivRow>
      </DivContainer>

      {bill?.bill_entry?.length === 0 && (
        <NoBillMessage>No Bill Entry, Please Add New Entries</NoBillMessage>
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

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
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

// Div-based structure for mobile view
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

const NoBillMessage = styled.div`
  margin-top: 20px;
  color: #ef4444;
  font-size: 1rem;
  text-align: center;
`;
