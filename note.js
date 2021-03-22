let notes = getSavedNotes()

const filters = {
    searchText : '',
    sortBy : 'byEdited'
}
renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click',(e)=>{
    const id = uuidv4()
    const timeStamp =  moment()
    notes.push({
        id : id,
        title : '',
        body: '',
        createdAt : timeStamp,
        updateAt : timeStamp
    })
    savedNotes(notes)
    location.assign(`./edit.html?=${id}`)
})

document.querySelector('#search-text').addEventListener('input',function (e) {
    filters.searchText =e.target.value
    renderNotes(notes,filters)

})

document.querySelector('#filter-by').addEventListener('change', (e)=> {
    filters.sortBy = e.target.value
    renderNotes(notes,filters)
})

window.addEventListener('storage', (e)=> {
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes,filters)
    }
})
//storage is for the use to make changes at the same time on other page

//unix epoch - january 1st 1970 00:00:00
// const now = new Date()
// const timeStamp = now.getTime()
//
// const myDate = new Date(timeStamp)
// console.log(myDate.getFullYear())
//
// const timeOne = new Date('March 1 2018 12:50:05')
// const timeTwo = new Date('October 8 2010 5:30:15')
// const timeStampOne = timeOne.getTime()
// const timeStampTwo = timeTwo.getTime()
//
// console.log(timeStampOne,timeStampTwo)
// if (timeStampOne>timeStampTwo){
//     console.log(timeOne.toString())
// }else  if(timeStampTwo>timeStampOne){
//     console.log(timeStampTwo.toString())
// }

// const now = moment()
// console.log(now.toString());
// now.add(1,'year').subtract(1,'months')
// console.log(now.format('MMMM Do, YYYY'))
// console.log(now.fromNow())
// //fromNow gives the summary
// //moments can be used on many ways add,format,subtract,etc)
// const nowTimestamp = now.valueOf()
//
// console.log(moment(nowTimestamp).toString())

const myBirthday = moment()
const myBirthday2 = moment()
myBirthday.year(2020).month(9).day(-10)
myBirthday2.year(2020).month(5).day(6)
// TO DO: 0 is sunday and 6 is saturday on the current week
console.log(myBirthday.format('MMM D, YYYY'))
console.log(myBirthday2.format('MMM D, YYYY'))



const peopleName =[
    {name: 'Jesus Herrera', age : 30},
    {name:'Daniela Espinoza' ,age: 24}
    ]



const findPerson = function(name,findByName){
    return name.find(function (persons) {
        return persons.name.toLowerCase()===findByName.toLowerCase()
    })

}
console.log(findPerson(peopleName,'Jesus Herrera' ));

const otherWay = peopleName.find((names)=>names.name==='Daniela Espinoza')
console.log(otherWay)

const anotherWay = function (find,name) {
    const foundedP = find.find(function (founded) {
        if (founded.name === name.includes(name)){
            return foundedP
        }else{
            return 'Not Founded'
        }
    })
}

console.log(anotherWay(peopleName,'Jes'));