"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function OrganizerPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-4">
      <h2 className="text-2xl font-bold">📋 Organizer Dashboard</h2>

      <Card>
        <CardHeader>
          <CardTitle>My Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border p-3 rounded">
            <div className="font-medium">Hackathon 2025</div>
            <div className="text-sm">RSVPs: 20 Yes / 5 Maybe / 2 No</div>
            <div className="mt-2 flex gap-2">
              <Button size="sm">View Attendees</Button>
              <Button size="sm" variant="outline">Send Announcement</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button asChild>
        <Link href="/organizer/create">+ Create New Event</Link>
      </Button>
    </div>
  );
}