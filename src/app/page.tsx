"use client";

import { useAppState } from "../context/AppStateContext";
import StudentPage from "./student/page";
import OrganizerPage from "./organizer/page";
import ClubAdminPage from "./club-admin/page";
import GuestPage from "./guest/page";

export default function HomePage() {
  const { role } = useAppState();

  if (role === "student") return <StudentPage />;
  if (role === "organizer") return <OrganizerPage />;
  if (role === "club-admin") return <ClubAdminPage />;
  if (role === "guest") return <GuestPage />;

  return <div className="p-8">Unknown role</div>;
}