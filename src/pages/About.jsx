import styled from "styled-components";
import Article from "../ui/Article";

const StyledAbout = styled.div`
  outline: 1px solid black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4rem 4.8rem 6.4rem;

  h1 {
    font-size: 4rem;
  }
`;

const ArticleLink = styled.div`
display: flex;
align-items: center;
`

export default function About() {
  return (
    <StyledAbout>
      <h1>About This Web App</h1>

      <Article>
        <h2>Concept:</h2>
        <p>
          The idea behind this is to make an web Bible App that is useful. Where
          people who will use this will have the chance to take notes per verses
          and save verses.
        </p>
      </Article>

      <Article>
        <h2>To make the Word known:</h2>
        <p>
          Maximizing the technologies God given us, this app make uses to
          continue and further God&apos;s message to the nations.
        </p>
      </Article>

      <Article>
        <h3>Meet the creator:</h3>
        <ArticleLink>
          <img
            src="https://www.shareicon.net/data/2016/06/20/606964_github_4096x4096.png"
            alt="github logo"
          />
          <h4>
            <a href="https://github.com/edsaur/">https://github.com/edsaur/</a>
          </h4>
        </ArticleLink>

        <ArticleLink>
          <img
            src="https://static.vecteezy.com/system/resources/previews/021/460/490/original/linkedin-logo-free-download-free-png.png"
            alt="linkedin logo"
          />
          <h4>
            <a href="https://www.linkedin.com/in/edzerdionido/">https://www.linkedin.com/in/edzerdionido/</a>
          </h4>
        </ArticleLink>

        <div>
          <h5>
            Credits: <a href="https://bible-api.com/">https://bible-api.com</a>{" "}
            (for their Bible API)
          </h5>
        </div>
      </Article>
    </StyledAbout>
  );
}
