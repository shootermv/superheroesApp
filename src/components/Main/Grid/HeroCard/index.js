import { Img } from "react-image";
import "./card.css";
import Field from "./Field";
//import data from "./data.json";
export default function Card({ data }) {
  const {
    id,
    name,
    appearance: { gender },
    biography: { publisher, ["alter-egos"]: alt, ["first-appearance"]: first },
    image: { url }
  } = data;

  return (
    <section className="card-wrap">
      <article className="card-image">
        <figure style={{ backgroundImage: `url(${url})` }} >
          <Img
            src={url}
            loader={<span>Loading...</span>}
            unloader={<span>sorry, cannot load image</span>}
          />
        </figure>
      </article>
      <article className="card-details">
        <div className="details-wrap">
          <h2>superhero description</h2>
          <div className="fields-wrap">
            {[
              { title: "Name", value: name },
              { title: "id", value: id },
              { title: "Gender", value: gender },
              { title: "Publisher", value: publisher },
              { title: "Alter-egos", value: alt },
              { title: "First-appearance", value: first }
            ].map(({ title, value }) => (
              <Field key={title} label={title} value={value} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
}
