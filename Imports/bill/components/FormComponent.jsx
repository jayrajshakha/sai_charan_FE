"use client";

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import nookies from "nookies";
import { useRouter } from "next/navigation";
import UseAddEntry from "../api/UseAddEntry";
import styled from "styled-components";

const FormComponent = ({ bill_id, toggleModal }) => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    date: "",
    vahicle_no: "",
    tone: "",
    place: "",
    per_rate: "",
    ammount: "",
  });

  const { token } = nookies.get({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const addEntry = async (data) => {
    const response = await UseAddEntry(token, data, bill_id);
    if (response) {
      toggleModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEntry(formData);
    setFormData({
      id: uuidv4(),
      date: "",
      vahicle_no: "",
      tone: "",
      place: "",
      per_rate: "",
      ammount: "",
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <FormField>
            <Label>Vahicle No.</Label>
            <Input
              type="text"
              name="vahicle_no"
              value={formData.vahicle_no.toUpperCase()}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>Place</Label>
            <Input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleChange}
              required
            />
          </FormField>
        </FormGroup>
        <FormGroup>
          <FormField>
            <Label>Date</Label>
            <Input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>Tone</Label>
            <Input
              type="Number"
              name="tone"
              value={formData.tone}
              onChange={handleChange}
              required
            />
          </FormField>
        </FormGroup>
        <FormGroup>
          <FormField>
            <Label>Per Rate</Label>
            <Input
              type="number"
              name="per_rate"
              value={formData.per_rate}
              onChange={handleChange}
              required
            />
          </FormField>
          <FormField>
            <Label>Ammount</Label>
            <Input
              type="number"
              name="ammount"
              value={formData.ammount}
              onChange={handleChange}
              required
            />
          </FormField>
        </FormGroup>
        <ButtonContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FormComponent;

// Styled Components
const Container = styled.div`
  max-width: 600px; // Limit max width for better layout
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
`;

const FormField = styled.div`
  flex: 1; // Take equal space
  min-width: 220px; // Minimum width for smaller screens
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  color: #4b5563; // text-gray-700
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d1d5db; // border-gray-300
  border-radius: 4px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #2563eb; // border-blue-600
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.5); // focus ring
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #2563eb; // bg-blue-600
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #1e40af; // hover:bg-blue-700
  }
`;
