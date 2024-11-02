"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface EditorProps {
  content: string;
}
export function Editor({ content }: EditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });

  return <EditorContent editor={editor} />;
}
