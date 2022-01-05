import "./title.css";
import img from "../../../../../assets/sort-icon.png";
export default function Title({ title }) {
  return (
    <div className="list-field-title" key={title}>
      <span>{title}</span>{" "}
      {title !== "More" && (
        <img src={img} />
      )}
    </div>
  );
}
