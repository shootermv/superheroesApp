import "./button.css";

export default function Button({ children, ...other }) {
  return (
    <button
      className={`button ${other.primary ? "primary" : "secondary"}`}
      onClick={other.onClick}
    >
      {children}
    </button>
  );
}
