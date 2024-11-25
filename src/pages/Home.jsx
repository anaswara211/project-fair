import React from 'react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { Card, CardBody, CardText } from 'react-bootstrap'
import landingImg from '../assets/landingImg.png'

const Home = () => {
  return (
    <>
    {/* landing */}
    <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h1 style={{fontSize:'80px'}}><i className="fa-brands fa-docker"></i>Project Fair</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error sit laborum ipsa repellat incidunt similique! Accusamus, possimus reiciendis dolorum quos fuga id exercitationem facilis, optio necessitatibus molestiae consequuntur beatae.</p>
          <Link to={'/login'} className='btn btn-warning'> START TO EXPLORE</Link>
        </div>
        <div className="col-lg-6">
          <img style={{width:'999px'}} className='img-fluild ' src={landingImg} alt="" />
        </div>
      </div>
    </div>
    </div>
    {/* explore Projects */}
    <div className="my-5 text-center">
      <h1 className="mb-5">Explore Our Projects</h1>
      <marquee >
     <div className="d-flex">
      <div className="me-5">
        <ProjectCard/>
      </div>
     </div>
      </marquee>
      <button className="btn btn-link mt-5">CLICK HERE TO VIEW MORE PROJECTS...</button>
    </div>
    {/* Our testimonial */}
    <div className="d-flex justify-content-center align-items-center my-5 flex-column">
      <h1>Our Testimonials</h1>
      <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
        {/* card */}
      <Card style={{width:'18rem'}}>
      <CardBody>
        <CardText className='d-flex justify-content-center align-items-center flex-column'>
      <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nqsUNHPOFal6QXq5VkMgzBXrqGiSo_43AMQf5L9iezak1wIU6oAVg8hyoHwkWjZx9Qk&usqp=CAU" alt="" />
      <div className='d-flex justify-content-center my-2'>
      <i class="fa-solid fa-star text-warning"></i>
      <i class="fa-solid fa-star text-warning"></i>
      <i class="fa-solid fa-star text-warning"></i>
      <i class="fa-solid fa-star text-warning"></i>
      <i class="fa-solid fa-star text-warning"></i>
     
      
      </div>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius, quas amet, cum, aut praesentium dicta atque enim facilis quod doloremque.</p>
        </CardText>
      </CardBody>
      </Card>
      <Card style={{width:'18rem'}}>
      <CardBody>
        <CardText className='d-flex justify-content-center align-items-center flex-column'>
      <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nqsUNHPOFal6QXq5VkMgzBXrqGiSo_43AMQf5L9iezak1wIU6oAVg8hyoHwkWjZx9Qk&usqp=CAU" alt="" />
      <div className='d-flex justify-content-center my-2'>
      <i class="fa-solid fa-star text-warning"></i>
      <i class="fa-solid fa-star text-warning"></i>
      <i class="fa-solid fa-star text-warning"></i>
      </div>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius, quas amet, cum, aut praesentium dicta atque enim facilis quod doloremque.</p>
        </CardText>
      </CardBody>
      </Card>
      <Card style={{width:'18rem'}}>
      <CardBody>
        <CardText className='d-flex justify-content-center align-items-center flex-column'>
      <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nqsUNHPOFal6QXq5VkMgzBXrqGiSo_43AMQf5L9iezak1wIU6oAVg8hyoHwkWjZx9Qk&usqp=CAU" alt="" />
      <div className='d-flex justify-content-center my-2'>
      <i class="fa-solid fa-star text-warning"></i>
      <i class="fa-solid fa-star text-warning"></i>
      <i class="fa-solid fa-star text-warning"></i>
      <i class="fa-solid fa-star text-warning"></i>
      </div>
      <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius, quas amet, cum, aut praesentium dicta atque enim facilis quod doloremque. </p>
        </CardText>
      </CardBody>
      </Card>
      </div>

    </div>
    </>
  )
}

export default Home