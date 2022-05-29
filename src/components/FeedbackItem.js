import PropTypes from "prop-types";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Card from "./Card";

const FeedbackItem = ({ item }) => {
  //const [rating, setRating] = useState(8);
  //const [text, setText] = useState("This is an example of a feedback item");
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes color="#B000B9" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};
