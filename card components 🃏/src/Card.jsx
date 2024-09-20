import profilePic from './assets/profile.jpg'

function Card(){

    return(
        <div className="card">
            <img classname="card-image" src={profilePic} alt="profile picture"></img>
            <h2 classname="card-title">Trish</h2>
            <p classname="card-title">I practice Falun Dafa—mind and bodily cultivation—every day.</p>
        </div>
    );
}

export default Card