import SkillList from "./SkillList";
import Intro from "./Intro";
import Avatar from "./Avatar";
function Profile({ data }) {
  return (
    <>
      <div className="card">
        <Avatar data={data} />
        <div className="data">
          <Intro data={data} />
          <SkillList data={data} />
        </div>
      </div>
    </>
  );
}

export default Profile;
