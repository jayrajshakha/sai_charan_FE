"use client";

import React from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { UseNumberToWords } from "../hook/UseNumberToWords";

const BillComponent = ({ data }) => {
  console.log("data", data);

  const billData = {
    company: {
      name: "Sai Charan Transport",
      tagline: "Transport Contractor & Commission Agent",
      address: "N. H. No 8, Near Gundlav Chokadi, Valsad (Gujarat-24)",
      mobile: "Mo: 1234567890",
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
    totalInWords: UseNumberToWords(Number(data?.total_ammount)),
  };

  console.log("first", UseNumberToWords(Number("781978")));

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
        item?.vahicle_no,
        item?.place,
        item?.tone,
        item?.peer_rate,
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

    // Properly Format the Total Amount with Currency
    const formattedAmount = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(billData.totalAmount);

    // Increase spacing for the Total Amount by moving it towards the left
    doc.text(
      `Total Amount: ${formattedAmount}`,
      140, // Changed from 150 to 140 for better alignment (reduce x-coordinate)
      finalY + 20
    );

    // Footer (Amount in Words)
    doc.text(`Amount in Words: ${billData.totalInWords}`, 10, finalY + 40);

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
    <div className="flex justify-center">
      <button
        onClick={generatePDF}
        className="mt-6 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
      >
        Download Bill as PDF
      </button>
    </div>
  );
};

export default BillComponent;
