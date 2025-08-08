import { memo } from "react";
import { Link } from "react-router";
import "./CharacterCard.css";

export const CharacterCard = memo(() => {
  return (
    <Link to={"/characters/:id"} className="CharacterCard">
      <div className="buttonGroup">
        <button>
          {" "}
          <img src="src/assets/close.svg" />
        </button>
        <button>
          {" "}
          <img src="src/assets/checkMark.svg" />
        </button>
      </div>
      <img src="src/assets/character.png" />
      <div className="description">
        <div className="name">
          <p>Rick Sanchez</p>
        </div>
        <div className="gender">
          <p>Gender</p>
          <span>Male</span>
        </div>
        <div className="species">
          <p>Species</p>
          <span>Human</span>
        </div>
        <div className="location">
          <p>Location</p>
          <span>Earth</span>
        </div>
        <div className="status">
          <p>Status</p>
          <select name="" id="">
            Alive
          </select>
        </div>
      </div>
    </Link>
  );
});
