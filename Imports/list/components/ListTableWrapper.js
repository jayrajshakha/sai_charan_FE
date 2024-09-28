"use client";

import React from "react";
import ListTable from "./ListTable";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 1rem; /* mb-4 */
`;

const ListTableWrapper = () => {
  return (
    <Wrapper>
      <ListTable />
    </Wrapper>
  );
};

export default ListTableWrapper;
