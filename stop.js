const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
    "September",
    "October",
    "November",
    "December"
]

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
]



const lunching = document.querySelector(".lunching")
const time = document.querySelector(".time")
const Air = document.querySelectorAll(".air h4")


let furtureDate = new Date(2028, 9, 22, 12, 30, 0)

const year= furtureDate.getFullYear()
const minutes = furtureDate.getMinutes()
const hours = furtureDate.getHours()
const date = furtureDate.getDate()

let month = furtureDate.getMonth()
month = months[month]

let day = furtureDate.getDay()
day= (weekday[day])


lunching.textContent = `Lunching time will start from ${day}, ${date} ${month} ${year} ${hours}:${minutes}am `

const furtureTime = furtureDate.getTime()
// console.log (furtureTime)

function getReminingTime(){
const today = new Date().getTime()

const t = furtureTime - today

//1s = 1000ms
//1minute= 60seconds
//1hour = 60 minutes
//1day = 24 hours

const oneDay = 24*60*60*1000
const oneHour= 60*60*1000
const oneMinutes=  60*1000

let days = t/oneDay
days = Math.floor(days)
let hour= Math.floor((t%oneDay)/oneHour)
let minute = Math.floor((t%oneHour)/oneMinutes)
let second = Math.floor((t%oneMinutes)/1000)
// console.log(second)

const value =[days,hour,minute,second]

function format (air){
    if(air<10){
        return (air = `0${air}`)
    }
 return air
}
Air.forEach(function(air,index){
air.innerHTML = format(value[index])
})
}

let coundown = setInterval(getReminingTime,1000)


getReminingTime()