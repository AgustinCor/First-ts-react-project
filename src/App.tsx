import { useEffect, useState,useRef } from "react";
import './App.css'
import List from "./components/List";
import Form from "./components/Form"
import {Sub, SubsResponseFromApi} from './types'
import axios from "axios";


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
  const divRef =useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const fetchSubs =():Promise<SubsResponseFromApi> => {
      return axios
      .get('http://localhost:3001/subs')
      .then(response => response.data)
    }

   const mapFromApiToSubs =(apiResponse:SubsResponseFromApi):
   Array<Sub> => {
    return apiResponse.map(subFromApi => {
      const {
        months:months,
        profileUrl:avatar,
        nick,
        description
      } =subFromApi

      return {
        nick,
        description,
        avatar,
        months
      }
    })
   }

    fetchSubs()
    .then(mapFromApiToSubs)
    .then(setSubs)
  },[])

  const handleNewSub =(newSub: Sub): void =>{
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }

  return(
    <div className="App" ref={divRef}>
       <List subs={subs}/>
       New subs: {newSubsNumber}
       <Form onNewSub={handleNewSub}/>
    </div>
  )
}
export default App;