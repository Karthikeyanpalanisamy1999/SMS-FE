import React from "react"
import './home.scss'
import { useNavigate }from 'react-router-dom'
import { ROUTES } from "../../Constant"

function Home() {

  const navigate = useNavigate()
  return (
    <div className="row g-0 mt-3 justify-content-center option-container">
      <div className="col-md-4 m-3 p-5 rounded-2 bg-primary cursor-pointer col-height"
      onClick={()=>navigate(ROUTES.STUDENT_SEARCH_PAGE)}>
        <h3 className="d-flex justify-content-center">
           Search Student
        </h3>
        <p className="d-flex justify-content-center">
          You have to search & view particular student's details 
        </p>
      </div>
      <div className="col-md-4 m-3 p-5 bg-success rounded-2 cursor-pointer col-height">
        <h3 className="d-flex justify-content-center">
           Add Student's Details
        </h3>
        <p className="d-flex justify-content-center">
          You are add new student record
        </p>
      </div>
      <div className="col-md-4 m-3 p-5 bg-warning rounded-2 cursor-pointer col-height">
        <h3 className="d-flex justify-content-center">
           Update Student's Details
        </h3>
        <p className="d-flex justify-content-center">
          You are Update a student record
        </p>
      </div>
      <div className="col-md-4 m-3 p-5 bg-danger rounded-2 cursor-pointer col-height">
        <h3 className="d-flex justify-content-center">
           Delete Student's Details
        </h3>
        <p className="d-flex justify-content-center">
          You are Delete a new student record
        </p>
      </div>
    </div>
  )
};

export default Home;
