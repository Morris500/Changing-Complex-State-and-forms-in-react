import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function input(event) {
    const { name, value } = event.target;

    setContact((prevalue) => {
      console.log(prevalue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevalue.lName,
          email: prevalue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevalue.fName,
          lName: value,
          email: prevalue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevalue.fName,
          lName: prevalue.lName,
          email: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}{" "}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={input} name="fName" placeholder="First Name" />
        <input onChange={input} name="lName" placeholder="Last Name" />
        <input onChange={input} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// import React from "react";
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [heading, setHeading] = useState("");
//   console.log(name);

//   function submit() {
//     setHeading(name);

//     event.preventDefault();
//   }
//   function input(event) {
//     setName(event.target.value);
//   }

//   return (
//     <div className="container">
//       <h1>Hello {heading} </h1>
//       <form onSubmit={submit}>
//         <input type="text" onChange={input} placeholder="What's your name?" />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;
