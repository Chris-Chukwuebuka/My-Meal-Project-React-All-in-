import React from 'react'
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className='container-md about-section text-center'>
      <h1>OOPS! Error 404;</h1>
      <p >Page does not exist</p>
      <Link to="/">
        <button className=" btn btn-successtext-decoration-none text-primary fs-5 fw-bold bg-tertiary">
          Return Home
        </button>
      </Link>
    </div>
  );
}

export default Error