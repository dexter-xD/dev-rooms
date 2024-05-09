import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function RoomCard({ room }: { room: Room }) {
  return (
    <Card className=" shadow-lg">
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {room.githubrepo && (
          <Link
            href={room.githubrepo}
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon /> GitHub Repository
          </Link>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
