function formToAPI(event, typeOfSending) {
    
    event.preventDefault()

    var data = {
        typeOfSending: typeOfSending,
        destinationEmail: document.getElementsByName('email')[0].value,
        phoneNumber: document.getElementsByName('sms')[0].value,
        message: document.getElementsByName('message')[0].value
    }

    fetch( "https://tpw2drphi1.execute-api.ap-southeast-2.amazonaws.com/resumeSite-contactUser-sendingStage/sending" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        mode: "no-cors"
    })
}
