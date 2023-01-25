import photo2 from "../assets/photo2.png";

function Info() {
  return (
    <div className="info-el">
      <div className="photo-el"></div>
      <h1>Name Here</h1>
      <p>Frontend Developer</p>
      <a href="#">Link here</a>
      <div className="info-buttons">
        <button className="info-buttons-email">Email</button>
        <button className="info-buttons-linkd">LinkedIn</button>
      </div>
    </div>
  );
}

export default Info;
