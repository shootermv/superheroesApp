import "./field.css";

const Field = ({ label, value }) => (
  <div className="details-field">
    <label>{label}</label>
    <span>{value}</span>
  </div>
);

export default Field;
