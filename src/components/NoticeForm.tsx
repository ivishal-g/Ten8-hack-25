"use client";
import { useState } from "react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useAppState } from "../context/AppStateContext";

export default function NoticeForm() {
  const { createNotice } = useAppState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    createNotice({ title, content });
    setTitle(""); setContent("");
    alert("Notice published (demo).");
  };
  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow space-y-2">
      <Input placeholder="Title" value={title} onChange={(e:any)=>setTitle(e.target.value)} />
      <Textarea placeholder="Content" value={content} onChange={(e:any)=>setContent(e.target.value)} />
      <div className="flex justify-end">
        <Button type="submit">Publish</Button>
      </div>
    </form>
  );
}