import React from 'react'
import Img from '../assests/img/hotal.jpg'
import Img2 from '../assests/img/backimg.jpg'
const SubHeader = () => {
  return (
   
    <div id="carouselExampleIndicators" className="carousel slide" style={{marginTop:"80px"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Img} className="d-block w-100 img-fluid" style={{height:"20vh"}} alt="1..."/>
    </div>
    <div className="carousel-item">
      <img src={Img2} className="d-block w-100 img-fluid" style={{height:"20vh"}} alt=".2.."/>
    </div>
    <div className="carousel-item">
      <img src={Img} className="d-block w-100 img-fluid" style={{height:"20vh"}} alt="..3."/>
    </div>
  </div>
</div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   
  )
}

export default SubHeader
