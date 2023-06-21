const Form =() =>{
  const handleSubmit =() =>{
  
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <input type="text" name='nick' placeholder="nick" />
       <input type="text" name='subMonths' />
      </form>
    </div>
  )
}
export default Form