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
    <div className="space-y-2 rounded-lg">
      <ReactQuill value={value} onChange={onChange} className="" />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};

export default TextEditor;
