const socket = io()
const name = prompt("vvedite vashe imya!")

const elDiv = document.querySelector(".div")

const elmh3 = document.createElement("h3")
elmh3.textContent = "You joined"
elDiv.appendChild(elmh3)


socket.emit("user-joined", name)

socket.on("new-user-join", joinname => {
    const elmh3 = document.createElement("h3")
    elmh3.textContent = `${joinname} -  joined`
    elDiv.appendChild(elmh3)
})

btn.addEventListener("click", evt => {
    const elP = document.createElement("p")
    elP.textContent = `You: ${input.value}`
    elP.className = "you_chat"
    elDiv.appendChild(elP)


    socket.emit("new-msg", { name, msg: input.value })

    input.value = null
})

socket.on("new-user-msg", newMsg => {
    const elmP = document.createElement("p")
    elmP.textContent = `${newMsg.name}: ${newMsg.msg}`
    elmP.className = "user_chat"
    elDiv.appendChild(elmP)

})