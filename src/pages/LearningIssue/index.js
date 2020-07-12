import React from "react";
import ReactMarkdown from "react-markdown";
// COMPONENTS
import CodeBlock from "../../components/CodeBlock";
import Header from "../../components/Header";
// STYLUS | STATIC
import { Container, Main, Card, Great, Body } from "./styles";

const lesson = `
A simple markdown editor with preview, implemented with React.js and TypeScript. This React Component aims to provide a simple Markdown editor with syntax highlighting support. This is based on textarea encapsulation, so it does not depend on any modern code editors such as Acs, CodeMirror, Monaco etc.

### Features

- 📑 Indent line or selected text by pressing tab key, with customizable indentation.
- ♻️ Based on textarea encapsulation, does not depend on any modern code editors.
- 🚧 Does not depend on the [uiw](https://github.com/uiwjs/uiw) component library.
- 🚘 Automatic list on new lines.

### Quick Start

### Using

- [X] value: string: The Markdown value.
- [X] onChange?: (value: string): Event handler for the onChange event.
- [X] commands?: ICommand[]: An array of ICommand, which, each one, contain a commands property. If no commands are specified, the default will be used. Commands are explained in more details below.
- [X] autoFocus?: number=true: Can be used to make Markdown Editor focus itself on initialization.
- [X] previewOptions?: ReactMarkdown.ReactMarkdownProps: This is reset react-markdown settings.
- [X] textareaProps?: TextareaHTMLAttributes: Set the textarea related props.
- [X] height?: number=200: The height of the editor.
- [X] visiableDragbar?: boolean=true: Show drag and drop tool. Set the height of the editor.
- [X] fullscreen?: boolean=false: Show markdown preview.
- [X] preview?: 'live' | 'edit' | 'preview': Default value live, Show markdown preview.
- [X] maxHeight?: number=1200: Maximum drag height. The visiableDragbar=true value is valid.
- [X] minHeights?: number=100: Minimum drag height. The visiableDragbar=true value is valid.
- [X] tabSize?: number=2: The number of characters to insert when pressing tab key. Default 2 spaces.

### License

Licensed under the MIT License.`;

const LearningIssue = () => {
  return (
    <Container>
      <Header />

      <Main id="learn-main">
        <Card>
          <strong>C# DotNet</strong>

          <div id="tags">
            <spa>code</spa>
            <spa>linux</spa>
            <spa>web</spa>
            <spa>csharp</spa>
          </div>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            main document
          </a>

          <div id="featureds">
            <div id="stars">
              <span>*</span>
              <p>33242</p>
            </div>

            <div id="avorage">
              <span>*</span>
              <p>33242</p>
            </div>
          </div>

          <small>Creator: Elias alexandre</small>

          <Great>Marcar</Great>
        </Card>

        <Body id="learn-app">
          <div id="transcription">
            <ReactMarkdown renderers={{ code: CodeBlock }} source={lesson} />
          </div>
        </Body>
      </Main>
    </Container>
  );
};

export default LearningIssue;
