import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  margin: 0 20px; /* Add margin on both sides */
  pointer-events: none; /* Prevent buttons from covering other content */
`;

const NavButton = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#ccc" : "#007bff")};
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: auto; /* Enable clicks on buttons */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${({ disabled }) =>
      disabled ? "#ccc" : "#0056b3"}; /* Darken on hover */
  }
`;

export default function NavigationButton({ previous, next, onNavigate }) {
  return (
    <ButtonContainer>
      {/* Left Button */}
      <NavButton
        onClick={() => onNavigate(previous)}
        disabled={!previous} // Disable if no previous item
      >
        &lt;
      </NavButton>

      {/* Right Button */}
      <NavButton
        onClick={() => onNavigate(next)}
        disabled={!next} // Disable if no next item
      >
        &gt;
      </NavButton>
    </ButtonContainer>
  );
}

// Prop validation
NavigationButton.propTypes = {
  previous: PropTypes.any, // Previous item (can be null)
  next: PropTypes.any, // Next item (can be null)
  onNavigate: PropTypes.func.isRequired, // Function to handle navigation
};
