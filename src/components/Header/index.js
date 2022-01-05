import "./header.css";
import img from "../../assets/uploadHere.png"
import logo from "../../assets/logo.png"
export default function Header() {
  return (
    <header className="main">
      <section className="upload">
        <img src={img} />
        <span>Upload an image here</span>
      </section>
      <img className="logo" src={logo} />
    </header>
  );
}
