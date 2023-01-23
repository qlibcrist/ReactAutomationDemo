import { Checkboxes } from "../components/UI/checkboxes"
import { Input } from "../components/UI/input"
import logo from "../images/lambda.png"

export const Home = () => {
  return (
    <main id="Home">
      <div id="HomeContainer">
        <div id="TitleWrapper">
          <img src={logo}/>
          <h1>Lambda Demo Page</h1>
        </div>
        <hr className="DividingLine"/>
        <Input inputLabel="Enter the Name of a Fruit" buttonName="Submit"></Input>
        <hr className="DividingLine"/>
        <div id="CheckboxContainer">
          <Checkboxes values={["Hello", "World"]}></Checkboxes>
        </div>
      </div>
    </main>
  )
}
