const titleEl = document.querySelector('#note-title')
const bodyEl = document.querySelector('#note-body')
const noteID = location.search.substring(2)
const removeEl = document.querySelector('#remove-button')
const dateElement = document.querySelector('#last-edited')
console.log(noteID);
let notes = getSavedNotes()
let note = notes.find((note)=> note.id ===noteID)
if (note === undefined){
    location.assign('./arrays.html')
}

titleEl.value = note.title
bodyEl.value = note.body
dateElement.textContent = generateLastEdited(note.updateAt)

titleEl.addEventListener('input', (e)=> {
    note.title = e.target.value
    note.updateAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updateAt)
    savedNotes(notes)
})
console.log(note.title)
bodyEl.addEventListener('input', (e)=> {
    note.body = e.target.value
    note.updateAt = moment().valueOf()
    dateElement.textContent = generateLastEdited(note.updateAt)
    savedNotes(notes)
})

removeEl.addEventListener('click', (e)=> {
    removeNote(note.id)
    savedNotes(notes)
    location.assign('./arrays.html')
})

window.addEventListener('storage', (e)=> {
    if (e.key==='notes'){
        notes = JSON.parse(e.newValue)
        note = notes.find((note)=>
             note.id ===noteID
        )
        if (note === undefined){
            location.assign('./arrays.html')
        }

        titleEl.value = note.title
        bodyEl.value = note.body
        dateElement.textContent = generateLastEdited(note.updateAt)
    }
})

