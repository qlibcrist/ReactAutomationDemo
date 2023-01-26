import { Storage } from "../../localStorage/storage"

export const Delete = (props) => {

  const sendInput = () => {
    let jsonBody = JSON.stringify({values: Storage.values})
    fetch('/api/item', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: jsonBody
    }).then(response => props.update())
  }

  return (
    <div id="DeleteContainer">
       <button type="submit" onClick={sendInput}>Delete</button>
    </div>
  )
}
