const socket = io("http://localhost:3333");

const url = new URL(window.location.href);
const roomName = url.searchParams.get("id");

socket.emit("joinInRoom", roomName)
