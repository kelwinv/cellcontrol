import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import QRCode from "react-qr-code";

import { v4 as uuid } from "uuid";

import { socket } from "../../services/socket";
import { baseUrl } from "../../config/baseUrl";

import "./home.css";

export function Home() {
  const history = useHistory();

  const [hostName, setHostName] = useState("");
  const [roomID, setRoomID] = useState();

  function createNewRoom() {
    const newIdRoom = uuid();
    setRoomID(newIdRoom);
    socket.emit("createRoom", { roomId: newIdRoom, hostName });

    socket.on("userIntoInRoom", () => {
      history.push(`/RoomHost/${newIdRoom}`);
    });
  }

  const firstLoading = useRef();

  return (
    <div className="container">
      <main>
        {!roomID ? (
          <>
            <h1>olá como podemos te chamar?</h1>
            <input
              type="text"
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
            />
            <button onClick={createNewRoom}>Confirmar </button>{" "}
          </>
        ) : (
          <QRCode
            value={`${baseUrl}/JoinedRoom/${roomID}`}
            className="qrCodeContainer"
          />
        )}
      </main>
    </div>
  );
}
