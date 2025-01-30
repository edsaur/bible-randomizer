import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  width: 100%;
  height: 100%; /* Fill the available space inside the layout */
  position: relative;
  overflow: hidden;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${({ $currentIndex }) => $currentIndex * 100}%);
  height: 100%;
  width: 100%;
`;

const CarouselItem = styled.div`
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ $background }) =>
    `url(${$background}) no-repeat center center`};
  background-size: cover;
  text-align: center;
  position: relative;
  color: white;
  padding: 2rem; /* Padding for smaller screens */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4); /* Dark overlay for better text contrast */
  }

  h2 {
    z-index: 2;
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    z-index: 2;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    max-width: 600px;
  }

  button {
    z-index: 2;
    padding: 0.8rem 2rem;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      font-size: 0.9rem;
      padding: 0.6rem 1.5rem;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.9rem;
    }

    button {
      font-size: 0.8rem;
      padding: 0.5rem 1.2rem;
    }
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  &.left {
    left: 20px;
  }

  &.right {
    right: 20px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselWrapper>
      {items.length > 1 && (
        <NavigationButton className="left" onClick={handlePrev}>
          {"<"}
        </NavigationButton>
      )}
      <CarouselContent $currentIndex={currentIndex}>
        {items.map((item, index) => (
          <CarouselItem key={index} $background={item.image}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            {item.buttonText && item.buttonLink && (
              <button onClick={() => navigate('/bible/JOHN/3')}>
                {item.buttonText}
              </button>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      {items.length > 1 && (
        <NavigationButton className="right" onClick={handleNext}>
          {">"}
        </NavigationButton>
      )}
    </CarouselWrapper>
  );
}
