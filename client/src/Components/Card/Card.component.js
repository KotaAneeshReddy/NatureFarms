import RedChilli from "../../assets/images/RedChilli.jpg";

import "./Card.styles.css";

const Card = () => {
  return (
    <div className="card component">
      <div className="image">
        <img src={RedChilli} alt="Red Chilli.jpg" />
      </div>
      <div className="text">
        <h4>Product Name</h4>
        <p>Product Description</p>
        <p>
          <span>$40</span>
          <span>
            <b>$20</b>
          </span>
          <span className="discount">50%</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
