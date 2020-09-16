import styled from "styled-components";

export const Trending = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: row;
    margin: 20px;
    cursor: pointer;

    div#top {
      margin-right: 10px;

      svg {
        width: 50px;
        height: 50px;
        color: var(--mention-detail);
      }
    }

    div#bottom {
      div strong {
        color: ${(props) => (props.mode === `dark` ? "#FFF" : `initial`)};
      }
      p {
        /* color: ${(props) =>
          props.mode === `dark` ? "var(--reports);" : `initial`}; */
        color: var(--support);
        font-size: 14px;
        max-width: 240px;
        max-height: 200px;
      }
    }
  }
`;
