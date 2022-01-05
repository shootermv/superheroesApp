import "./empty.css";
import { Context } from "../../";
import { useContext } from "react";
import img from "../../../../assets/magnifier.png"
export default function Empty() {
  const { loading } = useContext(Context);

  return (
    <section className="empty-wrap">
      <img
        src={img}
        className={loading ? "animate" : ""}
      />
      <span className="caption">
        Search for a carachter I.d in order to view a carachter
      </span>
    </section>
  );
}
