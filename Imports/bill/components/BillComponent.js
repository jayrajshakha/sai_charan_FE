"use client";

import { jsPDF } from "jspdf";
import "jspdf-autotable";
import styled from "styled-components";

const BillComponent = ({ data }) => {
  const billData = {
    company: {
      name: "Sai Charan Transport",
      tagline: "Transport Contractor & Commission Agent",
      address: "N. H. No 8, Near Gundlav Chokadi, Valsad (Gujarat-24)",
      mobile: "Mo: +91 8181959595",
      gstin: "24ABC2349F1RL",
    },
    customer: {
      name: data?.name,
      address: data?.address,
      gstin: data?.GSTIN,
    },
    billInfo: {
      number: data?.bill_no,
      date: data?.date,
    },
    items: data?.bill_entry,
    bankDetails: {
      bankName: "ICICI Bank - Valsad",
      ifsc: "ICIC0002613",
      accountNo: "261305500144",
    },
    totalAmount: data?.total_ammount,
  };

  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    doc.setFontSize(12);

    // Header Section
    doc.text(billData.company.name, 105, 20, null, null, "center");
    doc.setFontSize(10);
    doc.text(billData.company.tagline, 105, 25, null, null, "center");
    doc.text(billData.company.address, 105, 30, null, null, "center");
    doc.text(billData.company.mobile, 105, 35, null, null, "center");

    // Bill Info
    doc.text(`Bill No: ${billData.billInfo.number}`, 150, 40);
    doc.text(`Date: ${billData.billInfo.date}`, 150, 45);

    // Customer Info
    doc.text(`Customer: ${billData.customer.name}`, 10, 40);
    doc.text(`Address: ${billData.customer.address}`, 10, 45);
    doc.text(`GSTIN: ${billData.customer.gstin}`, 10, 50);

    // Table
    doc.autoTable({
      startY: 60,
      head: [["Date", "Truck No", "Place", "Weight", "Rate", "Amount"]],
      body: billData.items.map((item) => [
        item?.date,
        item?.vahicle_no.toUpperCase(),
        item?.place,
        item?.tone,
        item?.per_rate,
        item?.ammount,
      ]),
      styles: {
        lineWidth: 0.1,
        fontSize: 10,
        halign: "center",
        valign: "middle",
      },
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 40 },
        2: { cellWidth: 30 },
        3: { cellWidth: 25 },
        4: { cellWidth: 25 },
        5: { cellWidth: 30 },
      },
      margin: { top: 60 },
      theme: "grid",
    });

    const finalY = doc.lastAutoTable.finalY;

    // Bank Details
    doc.text(`Bank: ${billData.bankDetails.bankName}`, 10, finalY + 20);
    doc.text(`IFSC: ${billData.bankDetails.ifsc}`, 10, finalY + 25);
    doc.text(`Account No: ${billData.bankDetails.accountNo}`, 10, finalY + 30);

    // Increase spacing for the Total Amount by moving it towards the left
    doc.text(`Total Amount: ${billData?.totalAmount}`, 140, finalY + 20);

    // Footer (Amount in Words)
    // doc.text(`Amount in Words: ${189876}`, 10, finalY + 40);

    // Signature
    doc.text("For, Sai Charan Transport", 140, finalY + 50); // Move signature closer

    // Terms & Conditions
    doc.setFontSize(9);
    doc.text(
      "Terms & Conditions: Subject to Valsad Jurisdiction Only",
      10,
      finalY + 60
    );

    doc.save("bill.pdf");
  };

  return (
    <Container>
      <DownloadButton onClick={generatePDF}>
        Download Bill as PDF
      </DownloadButton>
      <DownloadButton2 onClick={generatePDF}>Download Bill</DownloadButton2>
    </Container>
  );
};

export default BillComponent;

// Styled Components
const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const DownloadButton = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;
  display: none;

  @media (min-width: 400px) {
    display: block;
  }

  &:hover {
    background-color: #1e40af; // hover:bg-blue-700
  }
`;

const DownloadButton2 = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  @media (min-width: 400px) {
    display: none;
  }

  &:hover {
    background-color: #1e40af; // hover:bg-blue-700
  }
`;
