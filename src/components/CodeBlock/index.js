import PropTypes from "prop-types";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      customStyle={{ padding: "2em" }}
      language={language}
      style={dracula}
    >
      {value}
    </SyntaxHighlighter>
  );
};

CodeBlock.defaultProps = {
  language: "",
};

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string,
};

export default CodeBlock;
