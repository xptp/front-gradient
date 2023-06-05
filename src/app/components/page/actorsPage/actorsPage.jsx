import React, { useState, useEffect } from "react";
import ActorBox from "../../boxForList";
import PostService from "../../../API/PostService";
import { ThreeDots } from "react-loader-spinner";

const ActorsPage = () => {
  const [actors, setActors] = useState();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetchActors();
  }, []);

  async function fetchActors() {
    const a = await PostService.getMale();
    setActors(a);
  }

  return (
    <>
      {actors ? (
        <div className="foto-boxes">
          {actors.map((a) => (
            <ActorBox obj={a} key={a.id} />
          ))}
        </div>
      ) : (
        <>
          {loader ? (
            <div className="puff-container">
              <ThreeDots
                height="100"
                width="100"
                radius={1}
                color="#7e7a79"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default ActorsPage;
