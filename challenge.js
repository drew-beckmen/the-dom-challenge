document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter")
    const backCounter = document.getElementById("-")
    const forwardCounter = document.getElementById("+")
    const liker = document.getElementById("<3")
    const likes = document.getElementsByClassName("likes")[0]
    const commentForm = document.getElementById("comment-form")
    const listComments = document.getElementById("list")

    //get rid of the pause/resume button because we don't want to disable it
    const buttons = document.getElementsByTagName("button")

    function nextNumber() {
        counter.innerText = parseInt(counter.innerText) + 1 
    }

    //using let to allow for reassignment when pause button is pressed
    let interval = setInterval(nextNumber, 1000)

    const pause = document.getElementById("pause")
    pause.addEventListener("click", () => {
        if (event.target.innerText === "pause") {
            for (const button of buttons) {
                button.disabled = true 
            }
            pause.disabled = false 
            event.target.innerText = "resume"
            clearInterval(interval)
        }
        else {
            interval = setInterval(nextNumber, 1000)
            // debugger 
            for (const button of buttons) {
                button.disabled = false 
            }
            event.target.innerText = "pause"
        }
    })

    commentForm.addEventListener("submit", () => {
        event.preventDefault()
        const comment = event.target[0].value 
        const newComment = document.createElement("p")
        newComment.innerText = comment
        listComments.append(newComment)
        commentForm.reset() 
    })

    backCounter.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) - 1 
    })

    forwardCounter.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) + 1 
    })

    liker.addEventListener("click", () => {
        const newListElement = document.createElement("li")
        if (document.getElementById(counter.innerText)) {
            //can't hardocode because numbers goes to double digits. need to split by space!!
            const strToParse = document.getElementById(counter.innerText).innerText
            const strArr = strToParse.split(/(\s+)/);
            // debugger 
            const tempLikes = parseInt(strArr[8]) + 1
            const tempCounter = strArr[0]
            // debugger 
            document.getElementById(counter.innerText).remove() 
            newListElement.innerText = `${tempCounter} has been liked ${tempLikes} times`
            newListElement.id = tempCounter
        }
        else {
            newListElement.innerText = `${counter.innerText} has been liked 1 time`
            newListElement.id = counter.innerText 
        }
        likes.append(newListElement)
    })
})