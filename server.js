import path from "path"
import express from "express"
import { Server } from "socket.io"

const PORT = process.env.PORT || 9020
const app = express()
app.use(express.static(path.join(process.cwd(), "public")))

const server = app.listen(PORT, console.log(PORT))

const io = new Server(server)

io.on("connection", socket => {
    socket.on("user-joined", name => {
        socket
            .broadcast
            .emit("new-user-join", name)
    })

    socket.on("new-msg", msg => {
        socket
            .broadcast
            .emit("new-user-msg", msg)
    })
})