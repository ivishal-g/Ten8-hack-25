// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { Bell, Plus, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { useAppState } from "../context/AppStateContext";
import Image from "next/image";

export default function Navbar() {
  const { role, setRole } = useAppState();

  return (
    <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/home" className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary" />
            <span className="font-bold text-lg">EventSimplifier</span>
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/events" className="hover:text-primary">Events</Link>
          <Link href="/calendar" className="hover:text-primary">Calendar</Link>
          <Link href="/discover" className="hover:text-primary">Discover</Link>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block text-xs text-slate-500 mono">
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}{" "}
            GMT+5:30
          </div>

          {role === "organizer" && (
            <Button asChild size="sm">
              <Link href="/organizer/create">
                <Plus className="h-4 w-4 mr-1" /> Create Event
              </Link>
            </Button>
          )}

          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon">
            <Bell className="h-4 w-4" />
          </Button>

          {/* Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden border">
            <Image
            src={"/images/boom.png"}
              alt="avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </div>

          {/* Role switcher */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as any)}
            className="border rounded px-2 py-1 text-xs"
          >
            <option value="student">Student</option>
            <option value="organizer">Organizer</option>
            <option value="club-admin">Club Admin</option>
            <option value="guest">Guest</option>
          </select>
        </div>
      </div>
    </nav>
  );
}