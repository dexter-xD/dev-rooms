import { getRoom } from "@/services/rooms";

export default async function RoomPage(props: { params: { roomId: string } }) {
  const roomId = props.params.roomId;
  const room = await getRoom(roomId);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4 min-h-screen">
        <div className="col-span-3 bg-blue-400">VIDEO PLAYER</div>
        <div className="bg-red-400">INFO PANEL</div>
      </div>
    </div>
  );
}
