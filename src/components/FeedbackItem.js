import { useState } from "react";
import Card from "./Card";

const FeedbackItem = ({ item }) => {
  //const [rating, setRating] = useState(8);
  //const [text, setText] = useState("This is an example of a feedback item");
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
