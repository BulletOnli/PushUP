const container = document.querySelector(".container")
const img = document.getElementById("img")
const repBtn = document.getElementById("repBtn")
const stopBtn = document.getElementById("stopBtn")
const count = document.getElementById("count")

reps = 0

repBtn.addEventListener("click", function() {
    goUp()
    goDown()
    pushUp = setInterval(goUp, 1000)
    pushDown = setInterval(goDown, 2000)
})

stopBtn.addEventListener("click", function() {
    reps = 0 
    count.textContent = `Count: 0`
    clearInterval(pushUp)
    clearInterval(pushDown)
})

function goUp() {
    img.style.backgroundImage = "url('up.png')";

    reps++
    count.textContent = `Count: ${reps}`
}

function goDown() {
    img.style.backgroundImage = "url('down.png')";
}