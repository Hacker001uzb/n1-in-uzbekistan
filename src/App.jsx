import { useState } from "react";
import './App.scss';



function App() {
    const[Mode,setMode] = useState(true)

  console.log(Mode);
  return (
    <div className={Mode ? "App light" : "App dark"}>
      
      <h1 className={Mode == true ? ' title light' : ' title dark'} >BUTTON</h1>
      <button onClick={()=> setMode(!Mode)}>
      <img width={70} src={ Mode ? "https://www.freeiconspng.com/thumbs/crescent-moon-png/crescent-moon-png-20.png" : "https://png.pngtree.com/png-clipart/20201209/original/pngtree-sun-png-clipart-colored-png-image_5656301.png"} alt="" />
      </button>
    <section>
      <h1 class="title">Registration Form</h1>

      <form id="form">
        <div class="input-control">
          <label for="">Username</label>
          <input type="text" placeholder="username" id="username" />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

        <div class="input-control">
          <label for="">Email</label>
          <input type="email" placeholder="info@email.com" id="email" />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

        <div class="input-control">
          <label for="">Password</label>
          <input type="password" placeholder="password" id="password" />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

        <div class="input-control">
          <label for="">Confirm Password</label>
          <input
            type="password"
            placeholder="confirm password"
            id="confirmpassword" />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
        </div>

        <button>Submit</button>
      </form>

      <div class="message hidden">
        <p>Submitted succesfully!🎉</p>
      </div>
    </section>
    </div>
  );
}

export default App;
