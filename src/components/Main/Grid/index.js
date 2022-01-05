import "./grid.css";

import SearchHeader from "./SearchHeader";
import Empty from "./Empty";
import HeroCard from "./HeroCard";
import List from "./List";
import { Context } from "../";
import { useContext } from "react";
export default function Grid() {
  const { data, loading, toggleMode } = useContext(Context);

  if (loading || !data) {
    return (
      <section className="grid-wrap">
        <SearchHeader />
        <main className="grid-main">
          <Empty />
        </main>
      </section>
    );
  }

  return (
    <section className="grid-wrap">
      <SearchHeader />
      <main className="grid-main">
        {toggleMode ? <HeroCard data={data} /> : <List data={data} />}
      </main>
    </section>
  );
}
