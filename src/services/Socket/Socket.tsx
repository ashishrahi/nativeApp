// socket.ts

import { io, Socket } from 'socket.io-client';

// Replace with your actual server URL and port
const SOCKET_URL = 'http://localhost:3000';

// Create a Socket.IO instance with type annotation
const socket: Socket = io(SOCKET_URL, {
  transports: ['websocket'], // Use WebSocket over other transport methods
});

export default socket;
