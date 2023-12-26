function Intro({ data }) {
  return (
    <div className="data">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
    </div>
  );
}

export default Intro;
