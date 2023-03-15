const VerifyToken = (req, res) => {
    res.send("Hola Verfi")
}

const ReceivedMessage = (req, res) => {
    res.send("Hola Received")
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}