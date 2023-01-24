import { useState } from "react"
import { Checkboxes } from "./checkboxes"

export const Input = (props) => {
  const label = props.inputLabel
  const buttonName = props.buttonName

  const [formData, setFormData] = useState('')
  const [lastRequest, setLastRequest] = useState('')

  const sendInput = () => {
    let jsonBody = JSON.stringify({name: formData})
    console.log(jsonBody)
    fetch('/api/input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: jsonBody
    }).then(response => setLastRequest(response))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    sendInput()
  }

  const handleChange = (event) => {
    setFormData(event.target.value)
  }

  return (
    <div id="InputContainer">
      <div id="InputLabelContainer">
        <p>{label}</p>
      </div>
      <div id="InputWrapper">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={formData} onChange={handleChange}></input>
          <button type="submit">{buttonName}</button>
        </form>
      </div>
      <div id="CheckboxContainer">
        <Checkboxes value={lastRequest}></Checkboxes> 
      </div>  
    </div>
  )
}
