import { Storage } from "../../localStorage/storage"
import { useEffect, useState } from "react"
import { v4 } from "uuid"

export const Checkboxes = (props) => {
  const [data, setData] = useState([])
  const [render, setRender] = useState(false)

  useEffect(() => {
    getCheckboxData()
  }, [])

  const getCheckboxData = () => {
    fetch('/api/items')
      .then(res => res.json().then(data => {setData(data[0].data)}))
  }

  const updateStorage = (event) => {
    let checked = event.target.checked
    let name = event.target.name
    if (checked && !Storage.values.includes(name))
      Storage.values.push(name)
  }

  if (render != props.render) {
    getCheckboxData()
    setRender(props.render)
  }

  return (
    <div className="CheckboxWrapper">
     {data.map(v => <label className={"Checkbox"} key={v4()}><input type="checkbox" key={v4()} name={v} onChange={updateStorage}></input> {v} </label>)}
    </div>
  )
}

