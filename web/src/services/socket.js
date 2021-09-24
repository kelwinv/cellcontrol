import { io } from "socket.io-client";
import { baseUrlServer } from "../config/baseUrl";

export const socket = io(baseUrlServer);
