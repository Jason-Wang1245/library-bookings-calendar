import Calendar from "./Calendar";
import { PrismaClient } from "@prisma/client";

export const revalidate = 0; //Very important

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


async function getBookings() {
  const prisma = new PrismaClient();

  return await prisma.booking.findMany({})
}

export default async function page() {
  const bookings = await getBookings();

  return (
    <>
      <Calendar bookings={bookings} />
    </>
  );
}
