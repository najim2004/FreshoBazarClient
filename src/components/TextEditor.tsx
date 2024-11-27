import React from "react";
import ReactQuill from "react-quill";
import { FieldError } from "react-hook-form";
import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  error?: FieldError;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, onChange, error }) => {
  return (
    <>
      <ReactQuill
        value={value}
        onChange={onChange}
        className="custom-editor shadow-sm h-[225px] rounded-md"
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </>
  );
};

export default TextEditor;
