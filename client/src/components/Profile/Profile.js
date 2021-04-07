import { useState } from "react";

import Header from "../Header/Header";

const Profile = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} {...props} />
      <h1>Hello user</h1>
    </div>
  );
};

export default Profile;
