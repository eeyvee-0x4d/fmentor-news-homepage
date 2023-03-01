import './App.css'
import Navigation from "./components/Navigation.jsx"
import Content from "./components/Content.jsx"

function App() {

  return (
    <div className="App">
      <div className="wrapper">
        <Navigation />
        <Content />
      </div>  
    </div>
  )
}

export default App
