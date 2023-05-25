"use client";

import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface CodeInputProps {
  code: string;
  language: string;
}

const CodeInput: React.FC<CodeInputProps> = (props) => {
  const { code, language } = props;

  return (
    <SyntaxHighlighter language={language} style={nightOwl}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeInput;
