const fs = require("fs")
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"))


const VerifyToken = (req, res) => {
    alert("hola mundo")

    try {
        var accessToken = "IYI4O6345H6IU45646"
        var token = req.query["hub.verify_token"]
        var challenge = req.query["hub.challenge"]

        if(challenge != null && token != null && token == accessToken){
            res.send(challenge)
        }else{
            res.status(400).send()
        }
        
    } catch (e) {
        res.status(400).send()
    }
    
}

const ReceivedMessage = (req, res) => {
    try {
        var entry = (req.body["entry"])[0]
        var changes = (entry["changes"])[0]
        var value = changes["value"]
        var messageObjet = value["messages"]

        // if(typeof messageObject != "undefined"){
        //     var messages = messageObjet[0]
        //     var text = GetTextUser(messages)
        //     myConsole.log(text)
        // }
        myConsole.log(messageObjet)
        console.log(messageObjet)
        

        res.send("EVENT_RECEIVED")
    } catch (e) {
        myConsole.log(e)
        myConsole.log(messageObjet)
        res.send("EVENT_RECEIVED")
    }
}

function GetTextUser(messages){
    var text = ""
    var typeMessge = messages["type"]
    if(typeMessge == "text"){
        text = (messages["text"])["body"]
    }
    else if(typeMessge == "interactive"){
        var interactiveObject = messages["interactive"]
        var typeInteractive = interactiveObject["type"]
        if (typeInteractive == "button_reply") {
            text = (interactiveObject["button_reply"])["tittle"]
        } else if(typeInteractive == "list_reply") {
            text = (interactiveObject["list_reply"])["tittle"]
        }else{
            myConsole.log("sin mensaje")
        }
        return text
    }
    else{
        myConsole.log("sin mensaje")
    }
}

module.exports = {
    VerifyToken,
    ReceivedMessage
}