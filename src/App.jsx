import { useState } from 'react'
import Options from './components/Options';
import Preview from './components/Preview';
import './App.css'

function App() {
  let edu=[{start:'2009',end: '2013',name: 'London University',qual:'Bachelor of Technology',grade: '9.8'},{start:'2004',end: '2009',name: 'Rockford High',qual:'High School',grade: '90%'},{start:'1999',end: '2004',name: 'Primary School',qual:'Primary',grade: '9.5'}]
  let det={name: 'John Doe', email: 'abcdefghijk@gmail.com', phno: '1234567890'}
  let exp=[{company: 'Company',position: 'Engineer',start: '2021',end: '2023',desc: 'Worked as an engineer',loc: 'United Kingdom'}]
  if(localStorage.getItem('education')!=undefined)
      edu=JSON.parse(localStorage.getItem('education'))
  if(localStorage.getItem('details')!=undefined)
      det=JSON.parse(localStorage.getItem('details'))
  if(localStorage.getItem('experience')!=undefined)
      exp=JSON.parse(localStorage.getItem('experience'))
  const [person,setPerson] = useState({details:det,education:edu,experience:exp})

  function handleDataChange(field,property,newValue){
    let newPerson={...person}
    newPerson[field][property]=newValue
    localStorage.setItem('details',JSON.stringify(newPerson.details))
    setPerson(newPerson)
  }
  function handleEducationChange(ed){
    let newPerson={...person}
    newPerson.education=ed;
    setPerson(newPerson)
  }
  function handleExpChange(ex){
    let newPerson={...person}
    newPerson.experience=ex;
    console.log(newPerson.experience)
    setPerson(newPerson)
  }

  return (
    <>
      <Options onChange = {handleDataChange} person={person} onEdChange={handleEducationChange} onExpChange={handleExpChange}/>
      <Preview person={person}/>
    </>
  )
}

export default App
