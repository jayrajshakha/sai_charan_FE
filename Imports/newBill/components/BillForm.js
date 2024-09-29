"use client";

import { useState } from "react";
import UseAddBill from "../api/UseAddBill";
import nookies from "nookies";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { BillStore } from "@/data/BillStore";

// Styled Components
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: white; /* Changed to white */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #1f2937; /* Dark Gray */
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Reduced gap */
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #4b5563; /* Cool Gray */
`;

const Input = styled.input`
  padding: 0.5rem; /* Reduced padding */
  font-size: 0.9rem; /* Slightly smaller font */
  border: 1.5px solid #d1d5db; /* Light Gray */
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb; /* Blue focus */
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  font-size: 1rem;
  background-color: #3b82f6; /* Blue */
  color: #ffffff;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2563eb;
    transform: translateY(-1px);
  }

  &:active {
    background-color: #1d4ed8;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem; /* Space between inputs */
  width: 100%;
`;

const BillForm = () => {
  const { bill_no } = BillStore();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    gstin: "",
    bill_no: "",
  });

  const { token } = nookies.get({});
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addBill = async (data) => {
    const response = await UseAddBill(token, data);
    if (response) {
      return router.push("/admin/list");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBill = {
      bill_no: formData?.bill_no,
      name: formData?.name,
      address: formData.address,
      date: formData.date,
      GSTIN: formData.gstin,
      total_ammount: 0,
      bill_entry: [],
    };

    addBill(newBill);
  };

  return (
    <Container>
      <Title>Create New Bill</Title>
      <Form onSubmit={handleSubmit}>
        <Div>
          <Label htmlFor="billNo">Bill No</Label>
          <Input
            type="number"
            id="billNo"
            name="bill_no"
            value={formData?.bill_no}
            onChange={handleChange}
            required
          />
        </Div>
        <Div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Div>
        <Div>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </Div>
        <FlexRow>
          <Div style={{ flex: 1 }}>
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </Div>
          <Div style={{ flex: 1 }}>
            <Label htmlFor="gstin">GSTIN</Label>
            <Input
              type="text"
              id="gstin"
              name="gstin"
              value={formData.gstin}
              onChange={handleChange}
              required
            />
          </Div>
        </FlexRow>
        <Div>
          <Button type="submit">Submit</Button>
        </Div>
      </Form>
    </Container>
  );
};

export default BillForm;
