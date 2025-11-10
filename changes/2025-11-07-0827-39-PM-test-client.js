/**
 * Socket.IO Test Client - Node.js
 * 
 * This script connects to the WebSocket server and listens for events
 * 
 * Usage:
 *   node test-client.js [userId]
 * 
 * Example:
 *   node test-client.js user123
 */

const io = require('socket.io-client');

// Get userId from command line or use default
const userId = process.argv[2] || 'test-user-123';
const serverUrl = process.env.SERVER_URL || 'http://localhost:3001';

console.log('='.repeat(60));
console.log('🚀 Socket.IO Test Client');
console.log('='.repeat(60));
console.log(`Server URL: ${serverUrl}`);
console.log(`User ID: ${userId}`);
console.log(`Namespace: /events`);
console.log('='.repeat(60));

// Create socket connection
const socket = io(`${serverUrl}/events`, {
  transports: ['websocket', 'polling'],
  query: {
    userId: userId,
  },
});

// Connection established
socket.on('connect', () => {
  console.log('\n✅ Connected to server!');
  console.log(`Socket ID: ${socket.id}`);
  console.log('\nListening for events...\n');
  
  // Send a ping to test bidirectional communication
  console.log('📤 Sending ping...');
  socket.emit('ping');
});

// Connection success event (custom from server)
socket.on('connection-success', (data) => {
  console.log('📨 Received connection-success:');
  console.log(JSON.stringify(data, null, 2));
});
... (truncated for brevity)