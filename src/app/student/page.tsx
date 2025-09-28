// src/app/events/page.tsx
"use client";

import AnimatedBackground from "@/components/AnimatedBackground";
import EventCard from "@/components/EventCard";
import Image from "next/image";

const events = [
  {
    id: "hackathon-main",
    title: "College Hackathon 2025 — Main Event",
    time: "09:30",
    organizer: "Computer Club",
    location: "Auditorium A",
    status: "Going",
    date: "2025-10-15",
    cover: "/images/hackathon1.jpg",
  },
  {
    id: "tech-talk-ai",
    title: "Tech Talk: Future of AI & Robotics",
    time: "14:00",
    organizer: "Innovation Society",
    location: "Seminar Hall B",
    status: "Maybe",
    date: "2025-10-20",
    cover: "/images/hackathon2.jpg",
  },
  {
    id: "cultural-fest",
    title: "Annual Cultural Fest — Night Fiesta",
    time: "18:30",
    organizer: "Cultural Committee",
    location: "Open Ground Stage",
    status: "Going",
    date: "2025-11-02",
    cover: "/images/party.jpg",
  },
  {
    id: "sports-day",
    title: "Inter-College Sports Day",
    time: "08:00",
    organizer: "Sports Council",
    location: "Main Stadium",
    status: "No",
    date: "2025-11-10",
    cover: "/images/sport.jpg",
  },
];


function formatDateIso(iso: string) {
  const d = new Date(iso + "T00:00:00");
  const date = d.toLocaleDateString(undefined, { day: "numeric", month: "short" });
  const weekday = d.toLocaleDateString(undefined, { weekday: "short" });
  return { date, weekday };
}

export default function EventsPage() {
  return (
    <div className="relative min-h-screen text-white">
      <AnimatedBackground />
      <nav className="w-full px-4 py-3 z-[200] backdrop-blur-[16px] sticky top-0 border-b-rgba(255,255,255,0.8)
">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          lovda

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="/events" className="flex items-center gap-2 text-gray-300 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mt-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.204 1.25C1.44 1.25.251 2.938.251 4.692v1.454c-.001.068-.001.163.007.247a.96.96 0 0 0 .162.466c.142.205.348.298.411.327l.005.002c.083.038.185.076.277.11l.016.007c.177.066.394.309.394.696s-.217.63-.394.696l-.017.007c-.091.034-.193.072-.276.11l-.005.002c-.063.029-.269.122-.411.327a.96.96 0 0 0-.162.465c-.008.084-.008.18-.008.247v1.453c0 1.755 1.188 3.443 2.954 3.443h9.592c1.766 0 2.954-1.688 2.954-3.443V9.854c0-.068 0-.163-.008-.247a.96.96 0 0 0-.162-.465c-.142-.205-.348-.298-.411-.327l-.005-.003a5 5 0 0 0-.276-.11l-.017-.006c-.177-.066-.394-.309-.394-.696s.217-.63.394-.696l.017-.007c.091-.034.193-.072.276-.11l.005-.002a1 1 0 0 0 .411-.327.96.96 0 0 0 .162-.466c.008-.084.008-.179.008-.247V4.693c0-1.755-1.19-3.443-2.954-3.443zM1.751 4.693c0-1.221.784-1.943 1.453-1.943H9.25v3.008a.75.75 0 0 0 1.5 0V2.75h2.046c.669 0 1.453.722 1.453 1.943v1.244c-.788.344-1.272 1.178-1.272 2.063s.484 1.72 1.273 2.063v1.244c0 1.221-.784 1.943-1.454 1.943H10.75v-2.492a.75.75 0 0 0-1.5 0v2.492H3.204c-.67 0-1.454-.722-1.454-1.943v-1.244C2.54 9.719 3.023 8.885 3.023 8S2.539 6.28 1.75 5.937z"></path></svg>
              Events
            </a>

            <a href="/calendar" className="flex items-center gap-2 text-gray-500 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>

              Calendar
            </a>

            <a href="/discover" className="flex items-center gap-2 text-gray-500 hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 16 16" 
                  className="w-4 h-4">
                <path fill="currentColor" fillRule="evenodd" d="M2 8a6 6 0 1 1 12 0A6 6 0 0 1 2 8m6-7.5a7.5 7.5 0 1 0 0 15A7.5 7.5 0 0 0 8 .5m3.32 5.08a.75.75 0 0 0-.91-.91l-3.55.89c-.64.16-1.14.66-1.3 1.3l-.89 3.55a.75.75 0 0 0 .91.91l3.55-.89c.64-.16 1.14-.66 1.3-1.3zM7.23 7.02l2.33-.58-.58 2.34a.3.3 0 0 1-.21.21l-2.33.58.58-2.34a.3.3 0 0 1 .21-.21"/>
              </svg>
              Discover
            </a>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block text-xs text-slate-500 mono">
              {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}{" "}
              GMT+5:30
            </div>

            <button className="btn-ghost btn-icon btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>   
          </div>
        </div>
      </nav>
      <div className=" max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-8">Events</h2>

        <div className="space-y-12">
          {events.map((event) => {
            const { date, weekday } = formatDateIso(event.date);
            return (
              <div
                key={event.id}
                className="flex w-full relative pb-12 gap-6 items-start" // <- timeline-section CSS
              >

                {/* Left date */}
                <div className="w-28 text-left ">
                  <div className="text-xl font-semibold">{date}</div>
                  <div className="text-sm text-slate-400">{weekday}</div>
                </div>
                    
                  <div
                     className="absolute top-1 bottom-0 border-l-2 border-dashed border-slate-500"
                      style={{ left: "7rem" }}
                  />

                <EventCard
                  event={{
                    id: event.id,
                    title: event.title,
                    time: event.time,
                    organizer: event.organizer,
                    location: event.location,
                    status: event.status as "Going" | "Pending" | "Closed",
                  }}
                >
                  
                  <Image
                      src={event.cover}
                      alt={event.title}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                </EventCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}