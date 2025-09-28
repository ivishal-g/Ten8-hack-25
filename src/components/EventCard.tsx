// src/components/EventCard.tsx
"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Avatar from "react-avatar";

type Event = {
  id: string;
  title: string;
  time: string;
  organizer: string;
  location: string;
  status: "Pending" | "Going" | "Closed";
};

export default function EventCard({
  event,
  children,
}: {
  event: Event;
  children?: ReactNode;
}) {
  return (
    <Link
      href={`/events/${event.id}`}
      className="flex items-center justify-between bg-slate-900/70 border border-slate-800 rounded-xl p-4 hover:shadow-lg transition w-full max-w-2xl"
    >
      {/* Left info */}
      <div className="flex-1 min-w-0">
        <div className="text-sm text-slate-400">{event.time}</div>
        <h3 className="text-lg font-semibold text-white truncate">{event.title}</h3>
        <div className="text-sm text-slate-400">By {event.organizer}</div>
        <div className="text-sm text-slate-500">{event.location}</div>

        <div className="mt-2 flex items-center gap-2">
          {/* Status */}
          <span
            className={`px-2 py-0.5 rounded text-xs ${
              event.status === "Pending"
                ? "bg-amber-600/80 text-black"
                : event.status === "Going"
                ? "bg-green-600/80 text-white"
                : "bg-slate-600/80 text-white"
            }`}
          >
            {event.status}
          </span>

          {/* Avatars */}
          <div className="flex -space-x-2">
            <Avatar
              name="Alice Doe"
              size="28"
              round
              className="border-2 border-slate-900"
            />
            <Avatar
              name="Bob Smith"
              size="28"
              round
              className="border-2 border-slate-900"
            />
            <div className="w-7 h-7 flex items-center justify-center bg-slate-700 text-xs text-white rounded-full border-2 border-slate-900">
              +87
            </div>
          </div>
        </div>
      </div>

      {/* Right content (image ya kuch aur) */}
      <div className="ml-4 w-30 h-30 rounded-lg overflow-hidden flex-shrink-0">
        {children}
      </div>
    </Link>
  );
}