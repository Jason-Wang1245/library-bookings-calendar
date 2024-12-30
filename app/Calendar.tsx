"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import { booking } from "@prisma/client";

export default function Calendar({ bookings }: { bookings: booking[] }) {
  return (
    <div className="h-screen w-screen">
      <FullCalendar
        plugins={[dayGridPlugin, listPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2024-12-01T11:30:00" },
          ...bookings.map((booking) => ({ title: booking.room, start: booking.startingTime, end: booking.endingTime })),
        ]}
        height={800}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,dayGridWeek,dayGridDay listMonth,listWeek", // user can switch between the two
        }}
        buttonText={{
          dayGridMonth: "Month",
          dayGridWeek: "Week",
          dayGridDay: "Day",
          listWeek: "Week (list)",
          listMonth: "Month (list)",
        }}
      />
    </div>
  );
}
