import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./css/CarasouleCustomCss.css";
import "./css/Variant1.css";
import "./css/Variant2.css";
import { COUNTRY_CONTENT } from "../../constants/countryContent";

export const Testimonial = ({ country, variant }) => {
  const renderTestimonials = () => {
    console.log(COUNTRY_CONTENT[country]);

    return COUNTRY_CONTENT[country].content.map((content) => (
      <div>
        <img src={content.image} />
        <div className={"myTestimonial_" + variant}>
          <h3>{content.name}</h3>
          <h4>{content.designation}</h4>
          <p>{content.content}</p>
        </div>
      </div>
    ));
  };

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {renderTestimonials()}
    </Carousel>
  );
};

// export const Testimonial = () => {
//   return (
//     <div class="container">
//       <div class="row">
//         <div class="col-md-12">
//           <div id="testimonial-slider" class="owl-carousel">
//             <div class="testimonial">
//               <div class="pic">
//                 <img src="images/img-1.jpg" alt="" />
//               </div>
//               <h3 class="title">Lorem ipsum dolor</h3>
//               <p class="description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
//                 non ante porttitor.
//               </p>
//               <div class="testimonial-content">
//                 <div class="testimonial-profile">
//                   <h3 class="name">williamson</h3>
//                   <span class="post">Web Developer</span>
//                 </div>
//                 <ul class="rating">
//                   <li class="fa fa-star"></li>
//                   <li class="fa fa-star"></li>
//                   <li class="fa fa-star"></li>
//                   <li class="fa fa-star"></li>
//                   <li class="fa fa-star-half-empty"></li>
//                 </ul>
//               </div>
//             </div>

//             <div class="testimonial">
//               <div class="pic">
//                 <img src="images/img-2.jpg" alt="" />
//               </div>
//               <h3 class="title">Lorem ipsum dolor</h3>
//               <p class="description">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
//                 non ante porttitor.
//               </p>
//               <div class="testimonial-content">
//                 <div class="testimonial-profile">
//                   <h3 class="name">Kristina</h3>
//                   <span class="post">Web Designer</span>
//                 </div>
//                 <ul class="rating">
//                   <li class="fa fa-star"></li>
//                   <li class="fa fa-star"></li>
//                   <li class="fa fa-star"></li>
//                   <li class="fa fa-star"></li>
//                   <li class="fa fa-star-half-empty"></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
