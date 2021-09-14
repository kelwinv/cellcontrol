let isMobile = false;

const url = new URL(window.location.href);
const isLocal = url.searchParams.get("local");

let serverUrl = "http://localhost:3333/";
let baseUrl = `http://localhost:5500`;

if(!!isLocal){
  serverUrl = "http://192.168.15.2:3333/";
  baseUrl = `http://192.168.15.2:5500/client/public/`;
}

const socket = io(serverUrl);

socket.emit("createRoom");

socket.on("roomCreated", (roomName) => {
  const path = `${baseUrl}/client/public/joinInTheRoom.html?id=${roomName}`;

  new QRCode(document.getElementById("qrcode-2"), {
    text: path,
    width: 128,
    height: 128,
    colorDark: "#5868bf",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
});

socket.on("userIntoInRoom", () => {
  
});
