import Tilt from "react-parallax-tilt";

/*____________________________________________________________________________________*/

const Card = (props) => {
  return (
    <Tilt
      className="cardd col-12 col-md-5 col-lg-2 mt-2 p-3 overflow-hidden"
      style={{ height: "200px" }}
    >
      <div className="title">
        <h5 className=" m-0 text-start text-white fw-bold">
          {props.apiData.API}
        </h5>
        <h6 className=" mt-0 mb-4 text-end">{props.apiData.category}</h6>
      </div>

      <p className=" text-light text-center mb-4">{props.apiData.des}</p>
      <a
        className="btn btn-primary rounded-pill ms-auto text-end px-3 position-absolute end-0 bottom-0 m-2"
        href={props.apiData.link}
        target={"_blank"}
      >
        link
      </a>
    </Tilt>
  );
};

export default Card;

/*____________________________________________________________________________________*/
