import React, {useState} from "react";
import useGif from "../Hooks/useGif";
function Random() {

  const [search, setSearch] = useState('')

  const{gifdata,loader,fetchData,Hourglass} = useGif(search)
  return (
    <div
      className="bg-light d-flex justify-content-center flex-column align-items-center rounded my-3"
      style={{ width: "700px" }}
    >
      <h2 style={{ fontSize: "16px" }}><span className="fs-3">{search}</span> GIF</h2>
      {loader ? (
        <Hourglass />
      ) : (
        <img className="my-1" src={gifdata} width="400px" height="200px"></img>
      )}

      <input
        onChange={(event)=>{setSearch(event.target.value)}}
        type="text"
        name="search"
        id="search"
        placeholder="Enter Text to Search GIF"
        autoComplete="current-search"
        value={search}
        style={{
          width: "550px",
          height: "30px",
          border: "none",
          outline: "none",
          backgroundColor: "#415a77",
          borderRadius: "4px 4px 4px 4px",
          color: "#f7fff7",
        }}
      ></input>
      <button
        onClick={()=>fetchData(search)}
        className="my-2"
        style={{
          width: "550px",
          height: "30px",
          border: "none",
          outline: "none",
          backgroundColor: "#bde0fe",
          borderRadius: "4px 4px 4px 4px",
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
