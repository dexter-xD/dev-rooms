import { getRoom } from "@/services/rooms";
import { GithubIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default async function RoomPage(props: { params: { roomId: string } }) {
  const roomId = props.params.roomId;
  const room = await getRoom(roomId);

  if (!room) {
    return <div>No room of this ID found.</div>;
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 min-h-screen">
        <div className="col-span-3 p-4 pr-2">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
            VIDEO PLAYER
          </div>
        </div>
        <div className="col-span-1 p-4 pl-2">
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4">
            <h1 className="text-xl font-sans font-semibold">{room?.name}</h1>
            {room?.githubrepo && (
              <Link
                href={room.githubrepo}
                className="flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon /> GitHub Repository
              </Link>
            )}
            <p className="text-base font-sans text-gray-600">
              {room?.description}
            </p>
            <Badge
              variant="outline"
              className="w-fit bg-gray-800 text-gray-100 dark:bg-gray-100 dark:text-black"
            >
              {room.language}
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
