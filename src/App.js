import React from "react"
import CreateNPProfile from "./components/CreateNPProfile"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            <CreateNPProfile/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
