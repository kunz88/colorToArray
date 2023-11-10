const hexToRgba = require("hex-to-rgba")
const strToColors = require("colors")

const color = {
    black: "#000000",
    silver: "#C0C0C0",
    yellow: "#FFFF00",
    green: "#008000",
    red: "#FF0000",
    gray: "#808080",
    blue: "#0000FF",
    purple: "#800080",
    orange: "#FFA500",
    pink: "#FFC0CB",
    brown: "#A52A2A",
    cyan: "#00FFFF",
    magenta: "#FF00FF",
    lime: "#00FF00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    teal: "#008080"
}

const hexToArray = (str) => {
    console.log(strToColors[str](str))
    return hexToRgba(color[str])
        .replace("rgba(", "")
        .replace(")", "").split(",")
        .map((item) => Number(item))


}
module.exports = hexToArray;

