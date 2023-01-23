import { useState } from "react"

export const Input = (props) => {
  const label = props.inputLabel
  const buttonName = props.buttonName

  const [formData, setFormData] = useState({})

  const sendInput = () => {
    let jsonBody = JSON.stringify({name: formData})
    console.log(jsonBody)
    fetch('/api/fruit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: jsonBody
    }).then(response => console.log(response))
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
    </div>
  )
}
