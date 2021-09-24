import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GameBanner } from "../../componens/GameBanner";

import { socket } from "../../services/socket";

import './styles.css'

export function RoomHost() {
  let { room } = useParams();

  useEffect(() => {
    socket.emit("reeconectIfnotConnected", room);
  }, [room]);

  return (
    <div className="roomHost-container">
      <main>
        <ul className="games-container">
          <GameBanner
            imgUrl="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/051a7e42b75c08e.png"
            name="Snake"
            url="games/snake"
            descripiton="jogo da cobrinha"
          />
          <GameBanner
            imgUrl="https://preview.pixlr.com/images/800wm/100/1/1001519925.jpg"
            name="box game"
            url="games/box"
            disable
            descripiton="não sei tem uma caixa ae."
          />
          <GameBanner
            imgUrl="https://store-images.s-microsoft.com/image/apps.18195.14259955503324792.fee0f975-9292-4852-ad19-c6ec880d57d3.35e9f104-1086-48a4-a429-c1c8dd863347"
            name="hollow knight"
            url="games/hollowKnight"
            descripiton="simplismente o jogo mais pika do mundo."
            disable
          />
          <GameBanner
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/1/13/Silksong_cover.jpg"
            name="hollow knight silksong"
            url="games/hollowKnightSilksong"
            descripiton="simplismente o jogo mais pika do mundo só q esse não lança."
            disable
          />
        </ul>
      </main>
    </div>
  );
}
