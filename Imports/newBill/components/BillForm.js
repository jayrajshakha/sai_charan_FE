"use client";

import { useState } from "react";
import UseAddBill from "../api/UseAddBill";
import nookies from "nookies";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { BillStore } from "@/data/BillStore";

const Container = styled.div`
  margin: auto;
  padding: 1rem;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: medium;
  color: #4a5568; /* gray-700 */
`;

const Input = styled.input`
  margin-top: 0.25rem;
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db; /* gray-300 */
  border-radius: 0.375rem; /* rounded-md */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: #2563eb; /* blue-600 */
  color: white;
  font-weight: 600; /* font-semibold */
  border-radius: 0.375rem; /* rounded-md */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8; /* blue-700 */
  }
`;

const Div = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const FlexRow = styled.div`
  display: flex;
  gap: 1.5rem;
  width: 80%;
`;

const BillForm = () => {
  const { bill_no } = BillStore();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    gstin: "",
    city: "",
    stateCode: "",
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
      toast.success("New Bill added successfully", {
        theme: "colored",
        autoClose: 1000,
      });
      return router.push("/admin/list");
    } else {
      toast.error("Failed to add new bill", {
        theme: "colored",
        autoClose: 1000,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBill = {
      bill_no: bill_no + 1,
      name: formData?.name,
      address: formData.address,
      date: formData.date,
      city: formData.city,
      state_code: formData.stateCode,
      GSTIN: formData.gstin,
      total_ammount: 0,
      bill_entry: [],
    };

    addBill(newBill);
  };

  return (
    <Container>
      <Title>Bill Form</Title>
      <Form onSubmit={handleSubmit}>
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
          <div className="w-full">
            <Label htmlFor="date">Date</Label>
            <Input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <Label htmlFor="gstin">GSTIN</Label>
            <Input
              type="text"
              id="gstin"
              name="gstin"
              value={formData.gstin}
              onChange={handleChange}
              required
            />
          </div>
        </FlexRow>
        <FlexRow>
          <div className="w-full">
            <Label htmlFor="city">City</Label>
            <Input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full">
            <Label htmlFor="stateCode">State Code</Label>
            <Input
              type="text"
              id="stateCode"
              name="stateCode"
              value={formData.stateCode}
              onChange={handleChange}
              required
            />
          </div>
        </FlexRow>

        <Div>
          <Button type="submit">Submit</Button>
        </Div>
      </Form>
    </Container>
  );
};

export default BillForm;
