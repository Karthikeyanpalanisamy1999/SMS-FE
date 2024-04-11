import React from "react"
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
function Studentsearchpage() {
  return (
    <div className="mb-5">
        <h3 className="d-flex justify-content-center align-items-center mt-3">Student Record Search</h3>
    <div className="row g-0 mt-3 justify-content-center">
      <div className="col-md-6 p-3 border rounded">
          <form className="col form-floating m-3">
             <InputText
              className="form-control"
              type="text"
              placeholder="RollNo"/>
              <label>RollNo</label>
              <div className="col">
                <Button className="col-12 mt-4 p-3 btn text-white bg-primary">
                    Search
                </Button>
              </div>
          </form>
          <h5 className="d-flex justify-content-center align-items-center">OR</h5>
          <form className="m-3">
             <div className="form-floating">
             <InputText
              className="form-control"
              type="text"
              placeholder="Name"/>
              <label>Name</label>
             </div>
              <h3 className="d-flex justify-content-center align-items-center">+</h3>
              <div className="form-floating">
             <InputText
              className="form-control mt-3"
              type="text"
              placeholder="Department"/>
              <label>Department</label>
             </div>
              <div>
                <Button className="col-12 mt-4 p-3 btn text-white bg-primary">
                    Search
                </Button>
              </div>
          </form>
      </div>
    </div>
    </div>
  )
};

export default Studentsearchpage;
