const hexToRgba = require("hex-to-rgba")

console.log(hexToRgba("#000000"))
const color = {
    black: "#000000",
    silver: "#C0C0C0",
    yellow: "#FFFF00",
    green: "#008000",
    red: "#FF0000",
    gray: "#808080"
}
const hexToArray = (str) => {

    return hexToRgba(color[str])
                .replace("rgba(", "")
                .replace(")", "").split(",")
                .map((item) => Number(item))


}
console.log(hexToArray("black"))