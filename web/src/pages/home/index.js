import { useState } from "react";
import { useHistory } from "react-router-dom";

import QRCode from "react-qr-code";

import { v4 as uuid } from "uuid";

import { socket } from "../../services/socket";
import { baseUrl } from "../../config/baseUrl";

import './styles.css'

export function Home() {
  const history = useHistory();

  const [hostName, setHostName] = useState("");
  const [nameInputError, setNameInputError] = useState(false);
  const [roomID, setRoomID] = useState();

  function createNewRoom(e) {
    e.preventDefault();
    if (hostName.length <= 0) return setNameInputError(true);

    const newIdRoom = uuid();
    setRoomID(newIdRoom);
    socket.emit("createRoom", {
      roomId: newIdRoom,
      hostName,
      baseUrl: `${baseUrl}/MobileRoom/${newIdRoom}`,
    });

    socket.on("userIntoInRoom", () => {
      history.push(`/RoomHost/${newIdRoom}`);
    });
  }

  return (
    <div className="home-container">
      <main>
        {!roomID ? (
          <>
            <h1>olá como podemos te chamar?</h1>
            <form onSubmit={createNewRoom}>
              {nameInputError && <span>Preencha seu nome!</span>}
              <input
                className={nameInputError && "error"}
                type="text"
                value={hostName}
                onChange={(e) => setHostName(e.target.value)}
              />
              <button type="submit">Confirmar </button>
            </form>
          </>
        ) : (
          <>
            <h2>olá {hostName} aponte seu celular para o qr code</h2>
            <div className="qrCodeContainer">
              <QRCode value={`${baseUrl}/MobileRoom/${roomID}`} />
            </div>
          </>
        )}
      </main>
    </div>
  );
}
