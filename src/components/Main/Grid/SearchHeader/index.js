import "./search-header.css";
import Button from "../../../Button";
import { Context } from "../../";
import { useContext, useEffect, useState } from "react";
export default function SearchHeader() {
  const { setSearchTerm, toggleMode } = useContext(Context);
  const [term, setTerm] = useState("");
  useEffect(() => {
    setTerm("");
  }, [toggleMode]);
  return (
    <header className="grid-search">
      <input
        placeholder="Search for carachter Id"
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        style={{
          backgroundImage: `url(${require("../../../../assets/search-icon.png")})`
        }}
      />
      <Button primary onClick={() => setSearchTerm(term)}>
        go
      </Button>
    </header>
  );
}
