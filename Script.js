var ToDoListButton = document.getElementById("op1")
var op2Button = document.getElementById("op2")
var op3Button = document.getElementById("op3")
var ToDoListSubmit
var ToDoListTextBox
var TDOutput
var ScreenReplace = document.getElementById("SceneDisplay")
var buttonCount = 0
const currentId = `Btn${buttonCount}`
var lastList = ""
var buttonfunccount = []
ToDoListButton.addEventListener("click",switchscreen1)
op2Button.addEventListener("click",switchscreen2)
op3Button.addEventListener("click",switchscreen3)

function switchscreen1 () {
    
    ScreenReplace.innerHTML = `<h2 class="mx-auto mb-10 text-2xl underline font-bold bg-red-100 w-1/5 w-1/3 mx-auto rounded-xl border-2 border-red-200">To Do List</h2>
       <p> <input type="text" id="TextBox" class="border-5 rounded-xl w-1/5 text-center"> <button id="submit" class="ml-5 pl-10 pr-10 border-5 mb-10">Submit</button> </p>
       <div id="TDOutput" class="mb-10 "></div>`
       TDOutput = document.getElementById("TDOutput")
       ToDoListTextBox = document.getElementById("TextBox")
       ToDoListSubmit = document.getElementById("submit")
       
       ToDoListSubmit.addEventListener("click",SubmitTDtext)
       if (lastList != "") {
        TDOutput.innerHTML = lastList
    }
}

function switchscreen2 () {
    ScreenReplace.innerHTML = `<h1 class="text-7xl border-5 w-1/6 mx-auto p-2 rounded-xl bg-blue-200 border-blue-300 font-bold ">Clock</h1>
        <div class="text-9xl m-5 border-5 w-1/2 mx-auto" id="clockDisplay">9:00</div>`
startTime()
}


function switchscreen3 () {
    ScreenReplace.innerHTML = ``
    window.open(""); 
}



function SubmitTDtext () {
    
    var out = ToDoListTextBox.value
    if (out != ""){
        buttonCount++
            TDOutput.innerHTML += `<p id="Btn`+ String(buttonCount) + `" class="ml-20 mb-10"><button class="bg-red-100 border-2 border-red-200 pl-2 pr-2 rounded-xl mr-10">Done!</button>`+ String(out) + `</p></div>
       </p>`
       
       document.getElementById("SceneDisplay")
       ToDoListTextBox.value = ""
       document.getElementById(`Btn`+ String(buttonCount) + ``).addEventListener("click", function() { document.getElementById(`Btn`+ String(buttonCount) + ``).innerHTML = ""
        
        lastList = TDOutput.innerHTML
       })
    }
    lastList = TDOutput.innerHTML

}

function startTime() {
    // 1. Get the current date and time
    const day = new Date();
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clockDisplay').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

