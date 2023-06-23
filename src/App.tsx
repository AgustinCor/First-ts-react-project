import { useEffect, useState } from "react";
import './App.css'
import List from "./components/List";
import Form from "./components/Form"
import {Sub} from './types'


interface AppState {
  subs:Array<Sub>
  newSubsNumber:number
}

const INITIAL_STATE =[
  {
    nick:'ernestin',
    months:3,
    avatar:'https://i.pravatar.cc/150?u=ernestin',
    description:'Ernestin is good'
  },
  {
    nick:'sergin',
    months:6,
    avatar:'https://i.pravatar.cc/150?u=sergin'
  }
]

function App(){
  const [subs, setSubs] =useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] =useState<AppState["newSubsNumber"]>(0)
 
  useEffect(()=>{
    setSubs(INITIAL_STATE)
  },[])

  const handleNewSub =(newSub: Sub): void =>{
    setSubs(subs => [...subs, newSub])
  }

  return(
    <div className="App">
       <List subs={subs}/>
       <Form onNewSub={handleNewSub}/>
    </div>
  )
}
export default App;