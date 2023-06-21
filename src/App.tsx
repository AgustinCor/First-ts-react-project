import { useEffect, useState } from "react";
import './App.css'
import List from "./components/List";
import Form from "./components/Form"

interface Sub{
  nick:string
  avatar:string
  months:number
  description?:string
}

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

  return(
    <div className="App">
       <List subs={subs}/>
       <Form />
    </div>
  )
}
export default App;