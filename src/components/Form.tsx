import {useState} from 'react'
import {Sub} from '../types'

interface FormState{
    inputValues:Sub
}

interface FormProps {
  onNewSub:React.Dispatch <React.SetStateAction<Sub[]>>
}

const Form = ({onNewSub}: FormProps) =>{
   const [inputValues, setInputValues] =useState<FormState['inputValues']
   >({
    nick:'',
    subMonths:0,
    avatar:'',
    description:''
 })

    const handleSubmit =(evt:React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onNewSub(subs => ([...subs, inputValues]))
    }

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement |
        HTMLTextAreaElement>) => {
      setInputValues({
        ...inputValues,
        [evt.target.name]:evt.target.value
      })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
              <input 
              onChange={evt => {
                setInputValues({
                    ...inputValues,
                    [evt.target.name]:evt.target.value
                })
              }} 
              value={inputValues.nick} 
              type='text' name="nick" placeholder="nick" />
              <input onChange={handleChange}  value={inputValues.subMonths} name="subMonths" placeholder="subMonths" />
              <input onChange={handleChange}  value={inputValues.avatar} name="avatar" placeholder="avatar" />
              <textarea onChange={handleChange}  value={inputValues.description} name="description" placeholder="description" />
              <button>Save new Sub!</button>
            </form>
        </div>
    )
}
export default Form