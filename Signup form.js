import { useState } from "react";
import './style.css';

function MyForm() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [mob, setMobile] = useState("");
  const [city,setCity] = useState("");
  const [email,setEmail]=useState(" ");



  const handleChange=(event)=>{
    setCity(event.target.value)
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`My Name is :  ${name}
         And My age is about :  ${dob}
          Year and. 
          My Mobile Number is :  ${mob}
          I Live in City :    ${city}
          And My Email Id is :    ${email}
        
          `);
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>SIGN UP FORM</h2>
      <label>
        
        Enter your name<br></br> <br></br>   
        <input  type="text" value={name}  onChange={(e) => setName(e.target.value)}
        />
      </label><br></br><br></br>
      <label>
        
        Enter Your DOB<br></br><br></br>
        <input type="date" value={dob} onChange={(e)=> setDob(e.target.value)}
        />
      </label><br></br><br></br>
      <label>
        
       Enter Your Mobile.No<br></br><br></br>
        <input type="tel" value={mob} onChange={(e)=> setMobile(e.target.value)}
        />
      </label><br></br><br></br>

    <label>
      
        Enter Your Email-Id<br></br><br></br>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </label><br></br><br></br>

      <label>
        
       Enter Your City<br></br><br></br> 
        <select value={city} onChange={(e)=> setCity(e.target.value)}>
            <option>Option</option>
            <option>Lucknown</option>
            <option>Raibarely</option>
            <option>Kanpur</option>
            <option>Prayagraj</option>
      </select>
      </label><br></br><br></br>
   
      <button>Submit</button>
    </form>
  )
}
export default MyForm;