"use server";

import Calendar from "./Calendar";
import { PrismaClient } from "@prisma/client";
export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export default async function page() {
  const bookings = await prisma.booking.findMany({});

  return (
    <>
      <Calendar bookings={bookings} />
    </>
  );
}
