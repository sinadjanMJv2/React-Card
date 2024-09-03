import profilePic from './assets/profile.svg';


function Card() {
  return (
    <div className="card">
      <img className="card-image" src={profilePic} alt="my profile image" />
      <h2 className="card-title" >Mj Sinadjan</h2>
      <p className="card-text" >I make Youtube Videos and Play Video Games</p>
    </div>
  );
}

export default Card;
