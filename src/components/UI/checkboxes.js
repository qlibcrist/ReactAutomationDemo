import { useEffect, useState } from "react"
import { v4 } from "uuid"

export const Checkboxes = (props) => {
  const [getData, setGetData] = useState([])

  // GET request w/ hooks; calls when component loads
  useEffect(() => {
    fetch('/api/checkboxes')
      .then(res => res.json().then(data => {setGetData(data[0].data)}))
  }, [])

  return (
    <div className="CheckboxWrapper">
     {getData.map(v => <label key={v4()}><input type="checkbox" key={v4()}></input> {v} </label>)}
    </div>
  )
}

