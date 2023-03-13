'use strict'

const postDriver = async (json) => {
    const url = `http://localhost:3030/driver`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(json)
    })
    const driverData = await response.json()
    return driverData
}

export {
    postDriver
}
