import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { socket } from "../../services/socket";

import './styles.css'

export function MobileRoom() {
  let { room } = useParams();

  const [name, setName] = useState("");

  useEffect(() => {
    socket.emit("joinInRoom", room);
    console.log(room);
  }, [room]);

  function sendName() {
    socket.emit("sendName", { name, room });
  }

  return (
    <div className="mobileRoom-container">
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
