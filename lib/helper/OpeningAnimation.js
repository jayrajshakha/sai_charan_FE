"use client";
import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

// Define keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

// Main component
const OpeningAnimation = ({ onFinish }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      if (onFinish) {
        onFinish();
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!showAnimation) {
    return null;
  }

  return (
    <Container>
      <Title className="fade-in">Welcome to</Title>
      <Subtitle className="slide-up">Sai Charan Transport</Subtitle>
      <Tagline className="pulse">
        Let&apos;s reach new heights together!
      </Tagline>
    </Container>
  );
};

export default OpeningAnimation;

// Styled components

const Title = styled.div`
  font-size: 3rem; /* Equivalent to text-5xl */
  font-weight: bold;
  margin-bottom: 1rem; /* Equivalent to mb-4 */
`;

const Subtitle = styled.div`
  font-size: 3.75rem; /* Equivalent to text-6xl */
  font-weight: 800; /* Equivalent to font-extrabold */
`;

const Tagline = styled.div`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  margin-top: 1.5rem; /* Equivalent to mt-6 */
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    90deg,
    #3b82f6,
    #1d4ed8
  ); /* from-blue-500 to-blue-900 */
  color: white;
  z-index: 100;
  animation: ${fadeIn} 0.5s ease-in;

  .fade-in {
    animation: ${fadeIn} 1s ease-in;
  }

  .slide-up {
    animation: ${slideUp} 1s ease-out;
  }

  .pulse {
    animation: ${pulse} 1.5s infinite;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    /* Adjust font sizes for tablets and mobile */
    font-size: 1rem; /* Base font size */

    ${Title} {
      font-size: 2rem; /* Adjusted for mobile */
    }

    ${Subtitle} {
      font-size: 2.5rem; /* Adjusted for mobile */
    }

    ${Tagline} {
      font-size: 1.2rem; /* Adjusted for mobile */
    }
  }

  @media (max-width: 480px) {
    /* Further adjustments for smaller devices */
    ${Title} {
      font-size: 1.5rem; /* Further adjusted for small screens */
    }

    ${Subtitle} {
      font-size: 2rem; /* Further adjusted for small screens */
    }

    ${Tagline} {
      font-size: 1rem; /* Further adjusted for small screens */
    }
  }
`;
