//'use strict' to check any error or if the variables is not a good one , global scopes , local scopes
//'use strict'

//Read existing notes from localStorage
const getSavedNotes = ()=> {
    const notesJSON = localStorage.getItem('notes')
    try {
        return notesJSON !== null ? JSON.parse(notesJSON) : []
    }catch (e) {
       return []
    }
}
//Remove a Note from the list
const removeNote = (id)=> {
    const noteIndex = notes.findIndex( (note)=> {
        return note.id === id
    })
    if (noteIndex > -1){
        notes.splice(noteIndex,1)
    }
}

// Generate the DOM structure for note
const generateNoteDOM = (note)=> {
    const noteEl = document.createElement('a')
    const textEl = document.createElement('p')
   const statusEl = document.createElement('p')
    //set up the note title text
    if (note.title.length > 0){
        textEl.textContent = note.title
    }else{
        textEl.textContent = 'Unnamed note'
    }
    textEl.classList.add('list-item__title')
    noteEl.appendChild(textEl)

    //setup the link
    noteEl.setAttribute('href',`./edit.html?=${note.id}`)
    noteEl.classList.add('list-item')
    // TO DO: after URL if there is ?= it means query params

    //setup the status message
    statusEl.textContent = generateLastEdited(note.updateAt)
    statusEl.classList.add('list-item__subtitle')
    noteEl.appendChild(statusEl)

    return noteEl
}

//sort your notes by one of three ways
const sortNotes = (notes,sortBy) => {
    if (sortBy === 'byEdited'){
        return notes.sort((a,b)=>{
            if (a.updateAt > b.updateAt){
                return-1
            } else if (a.updateAt < b.updateAt){
                return 1
            } else {
                return 0
            }
        })
    }else if (sortBy === 'byCreated'){
        return notes.sort((a,b)=>{
            if (a.createdAt > b.createdAt){
                return-1
            } else if (a.createdAt < b.createdAt){
                return 1
            }
            else {
                return 0
            }
        })

    }
    else if (sortBy === 'alphabetical'){
        return notes.sort( (a,b)=> {
            if (a.title.toLowerCase()>b.title.toLowerCase()){
                return -1
            }
            else if (a.title.toLowerCase()<b.title.toLowerCase()){
                return 1
            }
            else {
                return 0
            }
        })
    }else{
        return notes
    }

}

//Render application notes
const renderNotes = (notes,filters)=> {
    const notesEl = document.querySelector('#notes')
    notes = sortNotes(notes,filters.sortBy)
    const filterNotes = notes.filter((note)=>
        note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    )
    document.querySelector('#notes').innerHTML =''

    if (filterNotes.length > 0){
        filterNotes.forEach( (note)=> {
            const noteEl = generateNoteDOM(note)
            notesEl.appendChild(noteEl)
        })
    }else {
        const emptyMessage = document.createElement('p')
        emptyMessage.textContent = ' No Notes to Show'
        emptyMessage.classList.add('empty-message')
        notesEl.appendChild(emptyMessage)
    }

}

//save the notes on the localstorage
const savedNotes = (notes)=> {
    return localStorage.setItem('notes', JSON.stringify(notes))
}

//generate the last edited message
const generateLastEdited = (timestamp)=> `Last edited ${moment(timestamp).fromNow()}`

const people = [{
    name : 'Berlin',
    age : 25 },
    { name : 'tokyo',age: 22},
    { name: 'denver', age: 31}
]
//arrow function and short hands on arrow function => use them when there is no a const.
const find22 = people.find((person)=> person.age === 22)
console.log(find22);
const youngPeople = people.filter((person)=>person.age<30)
console.log(youngPeople);

//conditional operators are ? with '' , an condition follow by ? true string : false string ,like '': '' like that
const age = 21
const showPage = ()=>{
    return 'You can have a driver license'
}
const errorShowPage = ()=>{
    return 'You are underage'
}
const message = age>=18 ? showPage() : errorShowPage()
console.log(message);

const team = ['Tyler','Porter']
console.log(team.length<=4 ? `Team size :${team.length}` :'Too many people on your team')


