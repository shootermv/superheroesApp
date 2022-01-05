
import "./list-field.css";
import img from "../../../../../assets/down.png"
const Img = ({ onClick }) => (
  <img onClick={onClick} src={img} />
);
function formatVal(val) {
  return val.length > 40 ? val.slice(0, 36) + "..." : val;
}
export default function ListField({ val, idx, onMoreClick }) {
  return (
    <div className={`list-field ${idx % 2 ? "even" : "odd"}`}>
      {val === "moreField" ? <Img onClick={onMoreClick} /> : formatVal(val)}
    </div>
  );
}
