import React from "react"
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
function Studentsearchpage() {
  return (
    <div className="mb-5">
        <h3 className="d-flex justify-content-center align-items-center mt-3">Student Record Search</h3>
      <div className="row g-0 justify-content-center">
        <div className="col-md-6 m-3 p-3 border rounded">
            <form>
              <div className="row m-3">
              <div className="col form-floating m-2">
              <InputText 
               type="text"
               className="form-control"
               placeholder="Roll-NO" />
               <label>Roll-No</label>
              </div>
              <div className="col-md-4 p-2 d-flex flex-column flex-grow-*">
                            <Button
                                className="flex-grow-1 p-2 btn btn-primary"
                                type="submit"
                            >
                              Search
                            </Button>
                        </div>
              </div>
            </form>
            <h5 className="d-flex justify-content-center align-items-center">Or</h5>
            <form>
            <div className="col m-2 form-floating">
              <InputText 
               type="text"
               className="form-control"
               placeholder="Name" />
               <label>Name</label>
              </div>
              <p className="d-flex justify-content-center align-items-center">+</p>
              <div className="col m-2 form-floating">
              <InputText 
               type="text"
               className="form-control"
               placeholder="Department" />
               <label>Department</label>
              </div>
              <div className="row">
                            <Button
                                className="col p-3 m-3 btn btn-primary"
                                type="submit"
                            >                              Search
                            </Button>
                        </div>
            </form>
        </div>
      </div>
    </div>
  )
};

export default Studentsearchpage;
