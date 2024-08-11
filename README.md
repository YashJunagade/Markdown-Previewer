# Markdown Previewer

This is a React-based Markdown Previewer project. The app allows users to write GitHub-flavored Markdown in an editor and see a live preview of the rendered HTML.

## Project Features

- **Live Markdown Preview:** The editor updates the preview as you type, rendering Markdown into HTML.
- **GitHub Flavored Markdown:** Supports various Markdown elements like headings, links, code blocks, lists, images, and more.
- **Carriage Returns:** Line breaks in Markdown are rendered as `<br>` elements in the preview.
- **Responsive Design:** The layout is responsive and works well on both desktop and mobile devices.

## Live Demo

You can view the live project here: [Markdown Previewer](https://main--markdownpreviewer-yashjunagade.netlify.app/)

## User Stories

1. **#editor** - A `textarea` element where users can enter Markdown.
2. **#preview** - A `div` element that displays the HTML-rendered Markdown.
3. The preview updates in real-time as the user types into the editor.
4. The preview supports GitHub-flavored Markdown, including:
   - Headings (`#`, `##`, etc.)
   - Inline code and code blocks
   - Links and images
   - Lists
   - Blockquotes
   - Bold text
5. On initial load, the editor contains sample Markdown covering all the supported elements.
6. The preview initially displays the HTML-rendered version of the default Markdown.

## How to Run the Project

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/markdown-previewer.git
   cd markdown-previewer
   ```
