import React, { useState } from 'react';

export default function Form() {
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [entry, setEntry] = useState([]);

    const showData = (e) => {
        e.preventDefault();

        if(email && password){
            const newEntry = {id: new Date().getTime().toString() , email, password}
            setEntry([...entry, newEntry]);
            console.log(entry);
    
            setEmail("");
            setPassword("");
        }else{
            alert("field the data first");
        }
    } 
  return( 
  <>
    <form action='' onSubmit={showData}>
        <div>
            <label htmlFor='email'>Enter your Email</label>
            <input type="text" name='email' placeholder='enter your email' autoComplete='off'
             value={email} onChange={(e)=> setEmail(e.target.value)}></input><br></br>
        </div>
        <div>
            <label htmlFor='password'>Enter your password</label>
            <input type="password" name='password' placeholder='enter your password' autoComplete='off' 
            value={password} onChange={(e)=> setPassword(e.target.value)}></input><br></br>
        </div>
        <button type='submit'>Login</button>
    </form> 
    <div>
        {
            entry.map((curElm) => {
                const {id, email, password } = curElm;
                return(
                    <div key={id}>
                        <p>{email}</p>
                        <p>{password}</p>
                    </div>    
                )
            })
        }
    </div> 
  </>

  )
}
