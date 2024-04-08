import React from "react"
import './home.scss'
function Home() {
  return (
    <div className="row mb-5 g-0 justify-content-center">
      <div className="col-md-4  m-5 p-5 rounded-2 option-container cursor-pointer">
        <h3 className="d-flex justify-content-center">
           Search Student
        </h3>
        <p className="d-flex justify-content-center">
          You have to search & view particular student's details 
        </p>
      </div>
      <div className="col-md-4  m-5 p-5 rounded-2 option-container cursor-pointer">
        <h3 className="d-flex justify-content-center">
           Add Student's Details
        </h3>
        <p className="d-flex justify-content-center">
          You are add new student record
        </p>
      </div>
    </div>
  )
};

export default Home;
