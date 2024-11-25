import React from 'react'
import Add from '../components/Add'
import Edit from '../components/Edit'

const View = () => {
  return (
    <>
<div className="d-flex justify-content-between mt-3">
  <h2 className="text-warning">All Projects</h2>
  <div><Add/></div>
</div>
<div className="mt-2">
  <div className="border rounded p-2 mb-3">
    <div className="d-flex justify-content-between align-items-center">
      <h3>title</h3>
      <div className="d-flex align-items-center">
        <Edit />
        <button className="btn" aria-label="GitHub">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </button>
        <button className="btn" aria-label="Delete">
          <i className="fa-solid fa-trash text-danger"></i>
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default View