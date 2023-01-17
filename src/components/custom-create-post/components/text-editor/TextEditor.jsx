import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import parse from "html-react-parser";
import { useAtom } from "jotai";

import "./text-editor.css";
import { contentFieldAtom } from "../../store/content-field";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "code-block",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

const TextEditor = () => {
  const [contentField, setContentField] = useAtom(contentFieldAtom);

  return (
    <>
      <ReactQuill
        className="text-editor"
        style={{
          height: "calc(100vh - 48px - 48px - 310px)",
        }}
        placeholder="Write your post content here..."
        theme="snow"
        value={contentField}
        onChange={(value) => setContentField(value)}
        modules={modules}
        formats={formats}
      />
    </>
  );
};

export default TextEditor;

/*
 when you get content from database you should do that :
 i download html-react-paser package to convert string to html. i know there away to do with react 
        <div dangerouslySetInnerHTML={{ __html: content }}>
 from it name look dangerous.
 this is the way u can do it with html-react-parser

       <div className="ql-snow">
        <div className="ql-editor">{parse(content)}</div>
      </div> 

*/