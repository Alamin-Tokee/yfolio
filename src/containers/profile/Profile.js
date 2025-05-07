import ProfileCard from "../../components/profileCard/ProfileCard";
import { openSource } from "../../Data";
import Contact from "../contact/Contact";

const Profile = () => {
  if (openSource.display && openSource.showProfile === "true") {
    return (
      <div>
        <ProfileCard prof={openSource.profile} />
      </div>
    );
  } else {
    return <Contact />;
  }
};

export default Profile;
