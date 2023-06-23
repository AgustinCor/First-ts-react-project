import {useState} from 'react'
import {Sub} from '../types'

interface FormState {
  inputValues:Sub
}

interface FormProps {
  onNewSub: (newSub:Sub) => void
}

const Form = ({onNewSub}:FormProps) =>{
  
  const [inputValues,setInputValues] =useState<FormState["inputValues"]>({
    nick: '',
    months: 0,
    avatar: '',
    description:'',
  })

  const handleSubmit =(e:React.FormEvent<HTMLFormElement>) => {
   e.preventDefault()
   onNewSub(inputValues)
  }


  const handleChange =(e:React.ChangeEvent<HTMLInputElement | 
    HTMLTextAreaElement >) => {
    setInputValues({
      ...inputValues,
      [e.target.name] :e.target.value
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>s
        <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder="nick"/>
        <input onChange={handleChange} value={inputValues.months} type="text" name='months' placeholder="months"/>
        <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder="avatar"/>
        <textarea onChange={handleChange} value={inputValues.description} name='description' placeholder="description"/>
        <button>Save new subs!</button>
      </form>
    </div>
  )
}

export default Form