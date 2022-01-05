import "./toggle.css";
import Button from "../../Button";
import { useContext } from "react";

import { Context } from "../";

export default function Toggle() {
  const { toggleMode, setToggleMode, setData } = useContext(Context);

  return (
    <section className="toggle-buttons">
      <Button
        primary={!toggleMode}
        onClick={() => {
          setToggleMode((_) => {
            setData(null);
            return 0;
          });
        }}
      >
        browse
      </Button>
      <Button
        primary={toggleMode}
        onClick={() => {
          setToggleMode((_) => {
            setData(null);
            return 1;
          });
        }}
      >
        pick a character
      </Button>
    </section>
  );
}
