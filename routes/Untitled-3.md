

Refactored code:

// Ensure any code that modifies the response headers is executed before any other code that sends data to the client.
if (responseHeadersModified) {
  sendResponseHeaders();
} 
// Send data to the client. 
sendDataToClient();