var socket = new WebSocket("ws://localhost:8080/ws")

let connect = () => {
    console.log("Attemping connection...")

    socket.onopen = () => {
        console.log("Successfully connected")
    }

    socket.onmessage = msg => {
        console.log(msg)
    }

    socket.onclose = event => {
        console.log("Socket closed connection", event)
    }

    socket.onerror = error => {
        console.log("Socket error: ", error)
    }
}

let sendMessage = msg => {
    console.log("Sending message: ", msg)
    socket.send(msg)
}

export { connect, sendMessage }