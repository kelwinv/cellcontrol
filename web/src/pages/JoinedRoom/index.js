import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { socket } from "../../services/socket";
import "./joined.css";

export function JoinedRoom() {
  let { room } = useParams();

  const [name, setName] = useState("");

  useEffect(() => {
    socket.emit("joinInRoom", room);
    console.log(room);
  }, []);

  function click(color) {
    socket.emit("changeColor", color);
  }

  function sendName() {
    socket.emit("sendName", { name, room });
  }

  return (
    <div className="container">
      <main>
        <div className="flex">
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu Nome"
          />

          <button onClick={sendName}>Enviar</button>
        </div>
      </main>
    </div>
  );
}
