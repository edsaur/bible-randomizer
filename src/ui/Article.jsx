import styled from "styled-components";

const StyledArticle = styled.article`
  max-width: 800px; /* Limit the article width for better readability */
  width: 100%;
  margin: 1rem auto; /* Center the article and add vertical spacing */
  padding: 2rem;
  background-color:rgb(44, 44, 44); /* Set a white background */
  color: white;
  border-radius: 8px; /* Add rounded corners */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */

  h1, h2, h3, h4, h5, h6 {
    margin-top: 1.5rem;
    margin-bottom: .5rem;
    line-height: 1.2;
    font-weight: bold;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.6;
  }

  ul, ol {
    margin: 1rem 0 1rem 2rem;
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
      color: #0056b3;
    }
  }

  blockquote {
    margin: 1.5rem 0;
    padding: 1rem 1.5rem;
    background-color: #f9f9f9;
    border-left: 4px solid #007bff;
    font-style: italic;
    color: #555;
  }

  img {
    max-width: 7%;
    height: auto;
    margin: 1rem 0;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    font-size: 0.9rem;

    h1 {
      font-size: 1.8rem;
    }

    h2 {
      font-size: 1.6rem;
    }

    p, li {
      font-size: 0.95rem;
    }
  }
`;

export default function Article({ children }) {
  return <StyledArticle>{children}</StyledArticle>;
}
