import React from "react";

//rafc kısayolu ile
//bunu kullanmak için app.jsx içerisinde import {Course} yapmak lazımken bundan sonraki asıl metottda süslü parantez olmadan kullanılır
// export const Course = () => {
//   return <div>Course</div>;
// };

function Course({ image, title, description }) {
  // console.log(props);
  // const { title, description } = props; //Course(props) yazıyosa kullan

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left"></div>
          <div className="media-content">
            <p className="title is-4">{title}</p>
          </div>
        </div>

        <div className="content">
          <p>{description}</p>
        </div>
      </div>
    </div>

    /* <div>
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{description}</div>
    </div> */
  );
}

export default Course;
