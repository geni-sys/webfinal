import React from "react";
import ReactMarkdown from "react-markdown";
import { FiUser } from "react-icons/fi";
// COMPONENTS
import CodeBlock from "../CodeBlock";
// STYLUS | STATIC
import { List, Item, Transcription, Link } from "./styles";

const lesson = `
<p align="center">
<img src="https://raw.githubusercontent.com/uiwjs/react-markdown-editor/4884f29f2aad59bf7f512184ba3726d76bbd7170/website/logo.svg?sanitize=true">
</p>

### Features

- 📑 Indent line or selected text by pressing tab key, with customizable indentation.
- ♻️ Based on textarea encapsulation, does not depend on any modern code editors.
- 🚧 Does not depend on the [uiw](https://github.com/uiwjs/uiw) component library.
- 🚘 Automatic list on new lines.

### Quick Start

### Using

- [Demo preview for CodeSandbox](https://codesandbox.io/s/markdown-editor-for-react-izdd6)  
- [Demo preview for Github gh-pages](https://uiwjs.github.io/react-md-editor/)  
- [Demo preview for Gitee gh-pages](https://uiw.gitee.io/react-md-editor/)  

### Custom Toolbars

- 📑 Indent line or selected text by pressing tab key, with customizable indentation.
- ♻️ Based on textarea encapsulation, does not depend on any modern code editors.
- 🚧 Does not depend on the [uiw](https://github.com/uiwjs/uiw) component library.
- 🚘 Automatic list on new lines.

- 📑 Indent line or selected text by pressing tab key, with customizable indentation.
- ♻️ Based on textarea encapsulation, does not depend on any modern code editors.
- 🚧 Does not depend on the [uiw](https://github.com/uiwjs/uiw) component library.
- 🚘 Automatic list on new lines.

`;

function IssueList() {
  return (
    <List class="unique" id="publications" style={{}}>
      <Item id="issue-publication">
        <header>
          <span>
            <FiUser color="#333" />
          </span>
          <strong>DotNet Initial</strong>
        </header>

        <div id="tags">
          <span>c#</span>
          <span>.NET</span>
          <span>language</span>
          <span>programming</span>{" "}
        </div>

        <Transcription id="transcription" className="issue-limitaion">
          <ReactMarkdown renderers={{ code: CodeBlock }} source={lesson} />
        </Transcription>

        <Link
          className="commun"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver completo
        </Link>
      </Item>

      <Item id="issue-publication">
        <header>
          <span>
            <FiUser color="#333" />
          </span>
          <strong>DotNet Initial</strong>
        </header>

        <div id="tags">
          <span>c#</span>
          <span>.NET</span>
          <span>language</span>
          <span>programming</span>{" "}
        </div>

        <Transcription id="transcription" className="issue-limitaion">
          <ReactMarkdown renderers={{ code: CodeBlock }} source={lesson} />
        </Transcription>

        <Link
          className="commun"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver completo
        </Link>
      </Item>

      <Item id="issue-publication">
        <header>
          <span>
            <FiUser color="#333" />
          </span>
          <strong>DotNet Initial</strong>
        </header>

        <div id="tags">
          <span>c#</span>
          <span>.NET</span>
          <span>language</span>
          <span>programming</span>{" "}
        </div>

        <Transcription id="transcription" className="issue-limitaion">
          <ReactMarkdown renderers={{ code: CodeBlock }} source={lesson} />
        </Transcription>

        <Link
          className="commun"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver completo
        </Link>
      </Item>
    </List>
  );
}

export default IssueList;
