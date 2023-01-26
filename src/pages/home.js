import { useState } from "react"
import { Checkboxes } from "../components/UI/checkboxes"
import { Delete } from "../components/UI/delete"
import { Input } from "../components/UI/input"
import logo from "../images/lambda.png"

export const Home = () => {
  const [updated, setUpdated] = useState(false)

  const update = () => {
    setUpdated(!updated)
  }

  return (
    <main id="Home">
      <div id="HomeContainer">
        <div id="TitleWrapper">
          <img src={logo}/>
          <h1>Lambda Shopping List</h1>
        </div>
        <Delete update={update}></Delete>
        <hr className="DividingLine"/>
        <Input render={updated} update={update} inputLabel="Add an item to your list!" buttonName="Submit"></Input>
        <div id="CheckboxContainer">
          <Checkboxes update={update}></Checkboxes>
        </div> 
        <hr className="DividingLine"/>
      </div>
    </main>
  )
}
