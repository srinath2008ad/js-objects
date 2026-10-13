const capital = {
    "India": "New Delhi",
    "Afghanistan": "Kabul",
    "China": "Beijing",
    "Japan": "Tokyo",
    "Russia": "Moscow"
}

function capitalof(country) {
    return capital[country]
}

console.log("Russia", capitalof("Russia"))
console.log("Japan", capitalof("Japan"))
console.log("Afghanistan", capitalof("Afghanistan"))