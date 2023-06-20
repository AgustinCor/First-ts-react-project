import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import {Sub} from './types'


interface AppState {
  subs:Array<Sub>
  newSubsNumber:number
}

const INITIAL_STATE =[
  {
    nick:'dapelu',
    subMonths:3,
    avatar:'https://i.pravatar.cc/150?u=dapelu',
    description:'Dapelu is chad'
  },
  {
    nick: 'sergio_jorge',
    subMonths:7,
    avatar:'https://i.pravatar.cc/150?u=jorge',
    description:'jorge is tier 3'
  }
]



function App() {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber,setNewSubsNumber]=useState<AppState["newSubsNumber"]>(0)

  useEffect(() =>{
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <div className='App'>
       <h1>Jorge subs</h1>
        <List subs= {subs}/>
        <Form onNewSub={setSubs}/>
    </div>
  )
}

export default App
