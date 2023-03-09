let hiddenForm = document.getElementById('hiddenForm')
let toggleBtn = document.getElementById("formButton")

let deleteArea = document.querySelector(".delete")
let delBtn = document.querySelector(".delBtn")

toggleBtn.addEventListener("click", function(e) {
    hiddenForm.style.display = 'block'
})

deleteArea.addEventListener("mouseover", function(e) {
    deleteArea.style.backgroundColor = '#FFFFFF'
    delBtn.style.backgroundColor = '#FFFFFF'
})

deleteArea.addEventListener("mouseout", function(e) {
    deleteArea.style.backgroundColor = '#FEFAE0'
    delBtn.style.backgroundColor = "#FEFAE0"
})

