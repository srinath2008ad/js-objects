const monthNumber = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12,
}

const weekdayNumber = {
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
    "Sunday": 7
}

const countryContinent = {
    "India": "Asia",
    "USA": "North America",
    "South Africa": "Africa",
    "Italy": "Europe",
}

const colorAndWavelength = {
    "Red": 1,
    "Blue": 2,
    "Green": 3
}

const languageAndGreeting = {
    "Telugu": "Namskaram",
    "Malayalam": "Namaskaram",
    "Bengali": "Nomoskar",
    "English": "Hi",
    "Marathi": "Namaskar"
}

function Month(number) {
    return monthNumber[number];
}

function weekday(number) {
    return weekdayNumber[number]
}

function continentOf(country) {
    return countryContinent[country]
}

function wavelengthOf(color) {
    return colorAndWavelength[color]
}

function greetingOf(language) {
    return languageAndGreeting[language]
}

console.log("fenruary", Month("February"))
console.log("Sunday", weekday("Sunday"))
console.log("India", continentOf("India"))
console.log("Red", wavelengthOf("Red"))
console.log("telugu", greetingOf("Telugu"))