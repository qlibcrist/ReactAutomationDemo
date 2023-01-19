import { Checkboxes } from "../components/UI/checkboxes"

export const Home = () => {
  return (
    <main id="Home">
      <div id="HomeContainer">
        <h1>Demo Page</h1>
        <div id="CheckboxContainer">
          <Checkboxes values={["Hello", "World"]}></Checkboxes>
        </div>
      </div>
    </main>
  )
}
