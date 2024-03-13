const hostname = '127.0.0.1';
const port = 3000;
const MESSAGE_SERVER_RUNNING = `Server running at http://${hostname}:${port}`;
const MESSAGE_FILE_NOT_FOUND = "file not found"

module.exports = {
    hostname: hostname,
    port: port,
    MESSAGE_SERVER_RUNNING: MESSAGE_SERVER_RUNNING,
    MESSAGE_FILE_NOT_FOUND: MESSAGE_FILE_NOT_FOUND
}