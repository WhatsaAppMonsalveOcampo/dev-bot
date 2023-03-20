const https = require("https")

function SendMessageWhatsApp(textResponse, number){
    const data = JSON.stringify({
        "messaging_product": "whatsapp",    
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text"
    })
    const options = {
        host: "graph.facebook.com",
        path: "/v16.0/119667121068884/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EAANUCwxK6O0BAGZCtZCbc0x81u7vgjIKpRWpVpNeCmObTgMvIZBjO3ZBE6BiZCZBkN3wQYZCsOgBpGMITnZC7Yaak9ZCafNn6GSd5VrmViX02mnqrgIAAmZA5fyZBWqgygj1hK8fmt1vWBOf2jQRtZA1cngLq3LCcrCouEtntOJS42Y2C3PRJZA43pniZB"
        }
    }
    const req = https.request(options, res => {
        res.on("data", d=>{
            process.stdout.write(d)
        })
    })

    req.on("error", error => {
        console.error(error)
    })

    req.write(data)
    req.end()
    
}


module.exports = {
    SendMessageWhatsApp
}