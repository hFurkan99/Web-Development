import userPng from "../../../public/assets/user.png";
import Badge from "react-bootstrap/Badge";

function ActivitySideBar() {
  return (
    <div>
      <div id="sidebar-header">
        <p>3 People Going</p>
      </div>
      <div id="sidebar-user">
        <img id="sidebar-image" src={userPng} alt="" />
        <div>
          <div>
            <h2 className="ms-4 ">Furkan</h2>
          </div>

          <h5 className="ms-4 text-success ">Following</h5>
          <Badge className="ms-4 mt-2" bg="primary">
            Host
          </Badge>
        </div>
      </div>
      <div id="sidebar-user">
        <img id="sidebar-image" src={userPng} alt="" />
        <div>
          <h2 className="ms-4 ">Furkan</h2>
          <h5 className="ms-4 text-success ">Following</h5>
        </div>
      </div>
      <div id="sidebar-user">
        <img id="sidebar-image" src={userPng} alt="" />
        <div>
          <h2 className="ms-4 ">Furkan</h2>
        </div>
      </div>
    </div>
  );
}

export default ActivitySideBar;
