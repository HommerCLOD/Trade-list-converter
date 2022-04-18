const file = require('fs')

function converter() {

    console.log("_start")

    const data = file.readFileSync("./Unhandled/list.txt", (error, data) => {
        if (error) throw error

        return data
    })

    const settings = file.readFileSync("./settings.txt", (error, data) => {
        if (error) throw error

        return data
    })

    const parsed_data = JSON.parse(data.toString())

    const parsed_settings = JSON.parse(settings.toString())

    const handled = []

    for (let element of parsed_data) {
        handled.push({
            appid: parsed_settings.appid,
            game_name: parsed_settings.game_name,
            hash_name: element
        })
    }

    file.writeFileSync("./Handled_Arrays/list.json", JSON.stringify(handled))

    console.log("_finish")
}

converter()