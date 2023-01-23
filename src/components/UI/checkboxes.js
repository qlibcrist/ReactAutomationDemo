import { useEffect, useState } from "react"
import { v4 } from "uuid"

export const Checkboxes = (props) => {
  const [data, setData] = useState([])

  // GET request w/ hooks; calls when component loads
  useEffect(() => {
    getCheckboxData()
  }, [])

  const getCheckboxData = () => {
    fetch('/api/checkboxes')
      .then(res => res.json().then(data => {setData(data[0].data)}))
  }

  return (
    <div className="CheckboxWrapper">
     {data.map(v => <label key={v4()}><input type="checkbox" key={v4()}></input> {v} </label>)}
    </div>
  )
}

