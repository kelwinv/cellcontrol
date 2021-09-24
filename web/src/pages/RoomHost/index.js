import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { socket } from "../../services/socket";

export function RoomHost() {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [clientName, setClientName] = useState("");
  let { room } = useParams();

  useEffect(() => {
    socket.emit("reeconectIfnotConnected", room);

    socket.on("newColor", (newColor) => {
      console.log(newColor);
      setBackgroundColor(newColor);
    });

    socket.on("newName", (name) => {
      setClientName(name);
    });
  }, []);

  return (
    <>
      <div styles={{ width: "100vw", height: "100vh" }}>{clientName}</div>
    </>
  );
}
