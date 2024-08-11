import { marked } from "marked";

function Editor({ markCode, onTextChange }) {
  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="editor-container">
      <div className="heading">Editor</div>
      <textarea id="editor" onChange={onTextChange} value={markCode}></textarea>
    </div>
  );
}

export default Editor;
