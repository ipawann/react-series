import React, { useContext } from "react";

const UserContext = React.createContext()

export default UserContext;



// how it Works?
//  < userContext>
//  <Login/>
//  <DashBoard>
//     <Data/>
//  </DashBoard>
//  </>

//  now all the componets login dashboard and data have a global provider "userContext"
// userContext -> global context 
// < userContext> -> Provider of this context and all the components inside this is directly accessable by userContext