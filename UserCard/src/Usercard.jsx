import React from 'react';

const userdata = [
  {
    name: "Ram",
    city: "Coimbatore",
    description: "Frontend Developer",
    skills: ["UI/UX", "HTML", "CSS", "JavaScript", "React", "Nodejs", "Mongodb"],
    online: true,
    profile: "images/imag1.jpeg"
  },
  {
    name: "Rita",
    city: "Bangalore", 
    description: "Backend Developer",
    skills: ["Nodejs", "Expressjs", "Mongodb", "Django","Flask", "SQL", "PHP", "Oracle", "MySql"],
    online: false,
   
   
    profile: "images/imag3.jpeg"
  },
  {
    name: "Ravi",
    city: "Chennai", 
    description: "Frontend Developer",
    skills: ["Nextjs", "HTML", "CSS","Bootstrap", "JavaScript", "React", "Nodejs"],
    online: true,
     profile: "images/imag2.jpeg"
   
  },

];

function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img className="img" src={props.profile} alt="user" />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.description}</p>

      <div className='buttons'>
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>

      <div className='skills'>
        <h6>Skills</h6>
        <ul>
          {props.skills.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const Usercard = () => {
  return (
    <>
        <div>
      <h2>Fresher Details</h2> 

      <div id="root">
        {userdata.map((user, index) => (
          <User
            key={index}
            name={user.name}
            city={user.city}
            description={user.description}
            skills={user.skills}
            online={user.online}
            profile={user.profile}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default Usercard;
