import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";

const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTopButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Fragment>
      {showScrollTopButton && (
        <StyledScrollToTopButton onClick={scrollToTop}>
          Arorw
        </StyledScrollToTopButton>
      )}
    </Fragment>
  );
};

export default ScrollToTop;

const StyledScrollToTopButton = styled.div`
  position: fixed;
  right: 20px;
  bottom: 100px;
  padding: 14px;
  cursor: pointer;
  border-radius: 50%;
  background: rgb(236 240 243/1);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
