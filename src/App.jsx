import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./App.css";

function App() {
  const [markCode, setMarkCode] = useState(DEFAULT_MARKUP);

  function handleTextChange(event) {
    setMarkCode(event.target.value);
  }

  return (
    <>
      <div className="container">
        <Editor markCode={markCode} onTextChange={handleTextChange}></Editor>
        <Preview markCode={markCode}></Preview>
      </div>
      <p className="myName">Made by ❤️ Yash Junagade</p>
    </>
  );
}

const DEFAULT_MARKUP = `
# Heading 1
## Heading 2
[Link](https://www.example.com)
\`Inline code\`

\`\`\`
Code block
\`\`\`

- List item
> Blockquote

![Image](https://via.placeholder.com/150)

**Bold text**

Here's a line break:
This should be on a new line.
`;

export default App;
