import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/actorBox.scss";

const ActorBox = ({ obj }) => {
  const [grey, setGrey] = useState(false);

  return (
    <Link to={`/actor/${obj.id}`}>
      <div
        style={{
          backgroundImage: `url(${String(obj.main_image)})`,
        }}
        onMouseEnter={() => setGrey(true)}
        onMouseLeave={() => setGrey(false)}
        className="box-photo"
      >
        {/* <img
          className="box-photo"
          src={obj.main_image}
          onMouseEnter={() => setGrey(true)}
          onMouseLeave={() => setGrey(false)}
          alt="error img"
        /> */}
        {/* <div className="box-photo"></div> */}

        {grey ? (
          <>
            <h2 className="name-box">
              {obj.name} {obj.last_name}
            </h2>
            <h2 className="name-box">Возраст {obj.age}</h2>
          </>
        ) : null}
      </div>
    </Link>
  );
};

export default ActorBox;
