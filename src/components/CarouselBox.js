import React, {components} from "react";
import Carousel from "react-bootstrap/Carousel"
import header1 from "../assets/header2.svg"
import header2 from "../assets/header3.svg"


function CarouselBox() {
 
  return (
   <div>
     <Carousel>
       <Carousel.Item>
         <img className="d-block w-100" 
         src={header1}
         alt="header"
         />
         <Carousel.Caption> 
      <h1>Get Your Best Cosmetic Products Here</h1>
      <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry. <br/></p>
         </Carousel.Caption>
       </Carousel.Item>
       <Carousel.Item>
         <img className="d-block w-100" 
         src={header2}
         alt="header"
         />
         <Carousel.Caption> 
      <h1>Get Your Best Cosmetic Products Here</h1>
      <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry. <br/></p>
         </Carousel.Caption>
       </Carousel.Item>
     </Carousel>
   </div>
  )
}

export default CarouselBox;