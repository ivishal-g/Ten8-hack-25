"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { useAppState } from "../context/AppStateContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";
import { QRCodeCanvas } from "qrcode.react";

export default function CreateEventForm() {
  const { createEvent } = useAppState();
  const router = useRouter();
  const [form, setForm] = useState({ title: "", description: "", start_time: "", location: "", tags: "" });
  const [created, setCreated] = useState<any>(null);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const ev = createEvent({
      title: form.title,
      description: form.description,
      start_time: form.start_time ? new Date(form.start_time).toISOString() : new Date().toISOString(),
      location: form.location,
      tags: form.tags ? form.tags.split(",").map(s => s.trim()) : []
    });
    setCreated(ev);
  };

  return (
    <>
      <form onSubmit={submit} className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <Label>Title</Label>
          <Input required value={form.title} onChange={(e: any) => setForm({ ...form, title: e.target.value })} />
        </div>

        <div>
          <Label>Description</Label>
          <Textarea value={form.description} onChange={(e: any) => setForm({ ...form, description: e.target.value })} />
        </div>

        <div>
          <Label>Date & time</Label>
          <Input type="datetime-local" value={form.start_time} onChange={(e: any) => setForm({ ...form, start_time: e.target.value })} />
        </div>

        <div>
          <Label>Location</Label>
          <Input value={form.location} onChange={(e: any) => setForm({ ...form, location: e.target.value })} />
        </div>

        <div>
          <Label>Tags (comma separated)</Label>
          <Input value={form.tags} onChange={(e: any) => setForm({ ...form, tags: e.target.value })} />
        </div>

        <div className="flex justify-end">
          <Button type="submit">Create Event</Button>
        </div>
      </form>

      <Dialog open={!!created} onOpenChange={(open) => { if (!open) setCreated(null); }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Event created</DialogTitle>
            <DialogDescription>Share the link or QR code to let students join.</DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-3">
            <div className="font-medium">{created?.title}</div>
            <div className="text-sm text-slate-500">Link: <code className="px-2 py-1 bg-slate-100 rounded">{created?.public_link}</code></div>
            <div className="flex items-center gap-4">
              <div>
                {/* QRCodeCanvas requires `value` prop; use created.public_link or fallback */}
                <QRCodeCanvas value={String(created?.public_link || "")} size={120} />
              </div>
              <div className="text-sm">Scan this QR to open the event link (demo).</div>
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => { setCreated(null); router.push(`/events/${created?.id}`); }}>Open event</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}