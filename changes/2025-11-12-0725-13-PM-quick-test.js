/**
 * Quick WebSocket Test Script
 * 
 * This script tests the WebSocket connection without uploading a video.
 * Run with: node quick-test.js
 */

const io = require('socket.io-client');

const userId = process.argv[2] || 'test-user-123';
const serverUrl = process.env.SERVER_URL || 'http://localhost:3001';

console.log('═'.repeat(60));
console.log('🧪 Quick WebSocket Test');
console.log('═'.repeat(60));
console.log(`Server: ${serverUrl}`);
console.log(`User ID: ${userId}`);
console.log('═'.repeat(60));

const socket = io(`${serverUrl}/events`, {
  transports: ['websocket', 'polling'],
  query: { userId },
});

socket.on('connect', () => {
  console.log('\n✅ CONNECTED!');
  console.log(`Socket ID: ${socket.id}`);
  
  // Test ping
  console.log('\n📤 Sending ping...');
  socket.emit('ping');
});

socket.on('connection-success', (data) => {
  console.log('\n📨 Connection Success:');
  console.log(JSON.stringify(data, null, 2));
});

socket.on('pong', (data) => {
  console.log('\n🏓 Pong Received:');
  console.log(JSON.stringify(data, null, 2));
  console.log('\n✅ WebSocket is working correctly!');
  console.log('\nNow upload a video to test the clip-processed event.');
  console.log('Keep this script running and you\'ll see the notification here.\n');
});

socket.on('clip-processed', (data) => {
  console.log('\n🎉 VIDEO READY! Clip Processed:');
  console.log('═'.repeat(60));
  console.log(JSON.stringify(data, null, 2));
... (truncated for brevity)