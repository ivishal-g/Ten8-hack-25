// src/utils/sampleData.ts
import { EventItem, Announcement, Notice } from "../context/AppStateContext";

export const sampleEvents: EventItem[] = [
  {
    id: "ev_demo1",
    title: "Robotics Workshop",
    description: "Intro to Arduino and sensors. Bring your laptop.",
    start_time: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString(),
    location: "Main Auditorium",
    tags: ["Robotics", "2nd Year"],
    public_link: "link_demo1",
  },
  {
    id: "ev_demo2",
    title: "Coding Club Meetup",
    description: "Lightning talks and pizza.",
    start_time: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
    location: "Lab 2",
    tags: ["Coding", "1st Year"],
    public_link: "link_demo2",
  },
];

export const sampleAnnouncements: Announcement[] = [
  { id: "an_1", eventId: "ev_demo1", content: "Workshop moved to 4 PM.", createdAt: new Date().toISOString() },
];

export const sampleNotices: Notice[] = [
  { id: "no_1", title: "Guest Lecture", content: "Guest lecture on AI on Nov 20. All 3rd year students invited.", createdAt: new Date().toISOString(), targetTags: ["3rd Year"] },
];