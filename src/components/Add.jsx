import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import upload from '../assets/upload.png'


const Add = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <button onClick={handleShow} className="btn btn-primary">+ New Projects</button>
    <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Detailes!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <label >
              <input type="file" style={{display:"none"}} />
              <img className='img-fluid ' height={'200px'} src={upload} alt="" />
            </label>
            <div className="text-warning fw-bolder">*Upload Only the Following file type (jpeg,jpg,png) here !!</div>
          
          </div>
          <div className="col-lg-8">
             <div className="mb-2"><input type="text" className='form-control' placeholder='Project Title' /> </div>
             <div className="mb-2"><input type="text" className='form-control' placeholder='Project languages' /></div>
             <div className="mb-2"><input type="text" className='form-control' placeholder='Project Overview' /></div>
             <div className="mb-2"><input type="text" className='form-control' placeholder='Project github Link' /></div>
             <div className="mb-2"><input type="text" className='form-control' placeholder='Project Website Link' /></div>

          
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add