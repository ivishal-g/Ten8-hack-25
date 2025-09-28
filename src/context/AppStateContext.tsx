"use client"; // must be first

import React, { createContext, useContext, useEffect, useState } from "react";

export type EventItem = {
  id: string;
  title: string;
  description?: string;
  start_time?: string;
  location?: string;
  tags?: string[];
  public_link?: string;
};

export type Announcement = {
  id: string;
  eventId?: string | null;
  content: string;
  createdAt: string;
};

export type Notice = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  targetTags?: string[];
};

export type Role = "student" | "organizer" | "club-admin" | "guest";

type AppState = {
  events: EventItem[];
  announcements: Announcement[];
  notices: Notice[];
  role: Role;
  setRole: (r: Role) => void;
  createEvent: (ev: Omit<EventItem, "id">) => EventItem;
  rsvp: (eventId: string, userId: string, status: "yes" | "maybe" | "no") => void;
  createAnnouncement: (a: Omit<Announcement, "id" | "createdAt">) => Announcement;
  createNotice: (n: Omit<Notice, "id" | "createdAt">) => Notice;
};

const initial = {} as AppState;
const AppContext = createContext<AppState>(initial);

function uid(prefix = "") {
  return prefix + Math.random().toString(36).slice(2, 9);
}

const ROLE_KEY = "es_role_v1";

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [role, setRoleState] = useState<Role>("student");

  // load role from localStorage
  useEffect(() => {
    try {
      const r = localStorage.getItem(ROLE_KEY) as Role | null;
      if (r) setRoleState(r);
    } catch (e) {}
  }, []);

  const setRole = (r: Role) => {
    try { localStorage.setItem(ROLE_KEY, r); } catch (e) {}
    setRoleState(r);
  };

  // state persistence & seeding
  useEffect(() => {
    try {
      const raw = localStorage.getItem("es_state_v1");
      if (raw) {
        const parsed = JSON.parse(raw);
        setEvents(parsed.events || []);
        setAnnouncements(parsed.announcements || []);
        setNotices(parsed.notices || []);
        return;
      }
    } catch (e) {}
    import("../utils/sampleData").then((m) => {
      setEvents(m.sampleEvents);
      setAnnouncements(m.sampleAnnouncements);
      setNotices(m.sampleNotices);
    });
  }, []);

  useEffect(() => {
    const payload = { events, announcements, notices };
    try { localStorage.setItem("es_state_v1", JSON.stringify(payload)); } catch (e) {}
  }, [events, announcements, notices]);

  const createEvent = (ev: Omit<EventItem, "id">) => {
    const item: EventItem = { id: uid("ev_"), ...ev, public_link: ev.public_link || uid("link_") };
    setEvents((s) => [item, ...s]);
    return item;
  };

  const rsvp = (eventId: string, userId: string, status: "yes" | "maybe" | "no") => {
    const key = `rsvps_${eventId}`;
    const raw = localStorage.getItem(key);
    const map = raw ? JSON.parse(raw) : {};
    map[userId] = { status, at: new Date().toISOString() };
    localStorage.setItem(key, JSON.stringify(map));
  };

  const createAnnouncement = (a: Omit<Announcement, "id" | "createdAt">) => {
    const ann: Announcement = { id: uid("an_"), createdAt: new Date().toISOString(), ...a };
    setAnnouncements((s) => [ann, ...s]);
    return ann;
  };

  const createNotice = (n: Omit<Notice, "id" | "createdAt">) => {
    const note: Notice = { id: uid("no_"), createdAt: new Date().toISOString(), ...n };
    setNotices((s) => [note, ...s]);
    return note;
  };

  return (
    <AppContext.Provider value={{
      events, announcements, notices, role, setRole,
      createEvent, rsvp, createAnnouncement, createNotice
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppState = () => useContext(AppContext);