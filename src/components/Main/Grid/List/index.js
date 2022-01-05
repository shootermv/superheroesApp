import "./list.css";
//import data from "./data.json";
import Title from "./Title";
import ListField from "./ListField";

import HeroCard from "../HeroCard";
import { Fragment, useState } from "react";
export default function List({ data }) {
  const { results } = data;
  const rows = results.slice(0, 9).map((result) => {
    const {
      id,
      name,
      appearance: { gender },
      biography: {
        publisher,
        ["alter-egos"]: alt,
        ["first-appearance"]: first
      },
      image: { url }
    } = result;
    return { id, name, gender, alt, first, publisher, more: "moreField" };
  });
  const titles = [
    { title: "I.d", field: "id" },
    { title: "Name", field: "name" },
    { title: "Gender", field: "gender" },
    { title: "Publisher", field: "publisher" },
    { title: "Alter-egos", field: "alt" },
    { title: "First-appearance", field: "first" },
    { title: "More" }
  ];
  const [expandedIdx, setExpandedIdx] = useState();
  return (
    <section className="list-wrap">
      {titles.map(({ title }) => (
        <Title key={title} title={title} />
      ))}

      {rows.map((result, rowidx) => {
        return (
          <Fragment key={rowidx}>
            {Object.values(result).map((val, fieldIdx) => (
              <ListField
                key={`${val}-${rowidx}-${fieldIdx}`}
                val={val}
                idx={rowidx}
                onMoreClick={() =>
                  setExpandedIdx(expandedIdx === rowidx ? null : rowidx)
                }
              />
            ))}

            <div
              className={`list-row-details ${
                expandedIdx === rowidx ? "expanded" : ""
              }`}
            >
              {expandedIdx === rowidx ? (
                <HeroCard data={results[rowidx]} />
              ) : (
                <div style={{ height: "400px" }} />
              )}
            </div>
          </Fragment>
        );
      })}
    </section>
  );
}
