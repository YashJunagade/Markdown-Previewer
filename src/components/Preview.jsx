import { marked } from "marked";

function Preview({ markCode }) {
  return (
    <div className="preview-container">
      <div className="heading">Preview</div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markCode) }}
      ></div>
    </div>
  );
}

export default Preview;
