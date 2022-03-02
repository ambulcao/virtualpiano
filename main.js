// get all keys
const keys = document.querySelectorAll(".key")

console.log(keys)

// play notes
function playNote(event){
  // keyCode
  
  // typed or pressed key

  // if key exists
  // console.log(event)

  // play audio
}

// click with mouse
keys.forEach(function(key){
  console.log(key.dataset.note)
})

// keyboard type
window.addEventListener("keydown", playNote)