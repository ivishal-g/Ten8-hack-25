"use client";

import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function GuestPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-4">
      <h2 className="text-2xl font-bold">👋 Welcome Guest</h2>

      <Card>
        <CardHeader>
          <CardTitle>Public Events</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="border p-3 rounded">
            <div className="font-medium">Hackathon 2025</div>
            <div className="text-sm text-slate-600">RSVP requires login</div>
          </div>
        </CardContent>
      </Card>

      <Button asChild>
        <Link href="/">Login / Sign up</Link>
      </Button>
    </div>
  );
}