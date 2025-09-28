"use client";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { useAppState } from "../context/AppStateContext";

export default function AnnouncementComposer({ eventId }: { eventId?: string }) {
  const { createAnnouncement } = useAppState();
  const [text, setText] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    createAnnouncement({ eventId: eventId || null, content: text });
    setText("");
    alert("Announcement created (demo).");
  };
  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow">
      <Textarea placeholder="Write an announcement..." value={text} onChange={(e:any)=>setText(e.target.value)} />
      <div className="flex justify-end mt-2">
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}