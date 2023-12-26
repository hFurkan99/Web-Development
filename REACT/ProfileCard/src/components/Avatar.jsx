function Avatar({ data }) {
  return (
    <div className="avatar">
      <img src={data.photo} alt="image" />
    </div>
  );
}

export default Avatar;
