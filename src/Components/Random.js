import useGif from "../Hooks/useGif";
function Random() {
  const { gifdata, fetchData, loader, Hourglass } = useGif();
  return (
    <div
      className="bg-light d-flex justify-content-center flex-column align-items-center rounded"
      style={{ width: "700px" }}
    >
      <h2 style={{ fontSize: "16px" }}>A Random GIF</h2>
      {loader ? (
        <Hourglass />
      ) : (
        <img className="my-1" src={gifdata} width="400px" height="200px"></img>
      )}

      <button
        onClick={() => fetchData()}
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
