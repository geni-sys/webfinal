import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }
  
  html {
    font-size: 62.4%;
  }

  *, button, input {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    outline: 0;

    ::-webkit-scrollbar {
      width: 4px;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--dominate);
      border-radius: 0;
    }

    ::-webkit-scrollbar-track {
      background-color: #6633cc;
    }
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  ul li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }

  :root { /* #36393f */

    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;
    --desfoque: #999;

    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;

    --link: #5d80d6;
    --force: #ebf3ff;
    --new: #2ea44f;
    --support: #6a737d;
    --Notify: #1b1f23;

    /* LOGIN-BUTTON */
    --ENTER: #7ed376;
    --UNANTER: #50fa7b;

    --grey-dark: #24292e;
    --dominate: #f6f8fa;
    --reports: #4764f1;
    --dominating: #9eaac2;

    --rocketseat: #6633cc;
    --purple: #bd93f9;
    --unpurple: #bd93f911;
  }

  div#transcription.issue-limitaion img {
    width: 100%;
    height: 400px;
  }
  div#transcription h1,
  div#transcription h2,
  div#transcription h3,
  div#transcription h4,
  div#transcription h5,
  div#transcription p {
    margin: 10px 0;
    color: var(--grey-dark);
  }
  div#transcription h1 {
    font-size: 25px;
  }
  div#transcription h2 {
    font-size: 20px;
    font-weight: 500;
  }
  div#transcription h3 {
    font-size: 18px;
    font-weight: 500;
  }
  div#transcription h4 {
    font-size: 16px;
  }
  div#transcription h5 {
    font-size: 15px;
  }
  div#transcription p {
    line-height: 1.6em;
    font-size: 1.3em;
  }
  div#transcription a {
    color: var(--reports);
  }
  div#transcription pre {
    border-radius: 5px;
    font-size: 15px;
    line-height: 22px;
  }
  div#transcription ul li {
    margin: 5px 0;
    display: flex;
    align-items: center;
  }

  div#transcription ul li input {
    margin-right: 3px;
  }

`;
