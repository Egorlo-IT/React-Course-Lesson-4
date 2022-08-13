import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

import "./UserProfile.css";

const UserProfile = (props) => {
  return (
    <div className="user-profile">
      <h1 className="title">User profile</h1>
      <Link className="link" to={"/"}>
        <HomeIcon className="icon-home" />
      </Link>
    </div>
  );
};

export default UserProfile;
