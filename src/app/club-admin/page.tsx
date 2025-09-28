"use client";

import { Card, CardHeader, CardTitle, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

export default function ClubAdminPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-4">
      <h2 className="text-2xl font-bold">🏛️ Club Admin Panel</h2>

      <Card>
        <CardHeader>
          <CardTitle>Club: Coding Club</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button>+ Create Club Event</Button>
          <div className="border p-3 rounded">
            <div className="font-medium">Members: 52</div>
            <Button size="sm" variant="outline" className="mt-2">Manage Members</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}