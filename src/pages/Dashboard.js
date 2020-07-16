import React, { Fragment } from 'react'
import CreateNPProfile from "../components/CreateNPProfile"
import Navbar from "../components/Navbar"


const Dashboard = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10">
            <CreateNPProfile />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard