import { Button } from "@/components/ui/button";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const rooms = await db.query.room.findMany();

  return (
    <main className="min-h-screen container mx-auto py-16">
      <div className="flex justify-between items-center mx-">
        <h1 className="text-4xl font-bold">Find Dev Rooms</h1>
        <Button asChild>
          <Link href="/create-room">Create Room</Link>
        </Button>
      </div>
      {rooms.map((room) => {
        return (
          <div key={room.id}>
            <h1>{room.name}</h1>
            <h3>{room.description}</h3>
          </div>
        );
      })}
    </main>
  );
}
