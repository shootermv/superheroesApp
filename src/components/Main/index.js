import "./maincmp.css";
import Toggle from "./Toggle";
import Grid from "./Grid";


import { useState, createContext, useEffect } from "react";

const Context = createContext();
export { Context };
export default function Main() {
  const [toggleMode, setToggleMode] = useState(0); // 0 - id, 1- name
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  async function loadData() {
    const byName = `/api/${process.env.REACT_APP_API_KEY}/search/${searchTerm}`;
    const byId = `/api/${process.env.REACT_APP_API_KEY}/${searchTerm}`;

    setLoading(true);
    try {
      const raw = await fetch(toggleMode ? byId : byName);
      if (!raw.ok) {
        console.log('error....')
        throw Error(raw);
      }

      const json = await raw.json();
      if (json.error) {
        console.log('error....')
        throw Error(json);
      }
      setData(json);
 
    } catch (err) {
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    searchTerm ? loadData() : setData(null);
  }, [searchTerm]);
  return (
    <main className="main-wrap">
      <Context.Provider
        value={{
          toggleMode,
          setToggleMode,
          loading,
          setSearchTerm,
          searchTerm,
          data,
          setData
        }}
      >
        <Toggle />
        <Grid />
      </Context.Provider>
    </main>
  );
}
