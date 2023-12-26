import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import userPng from "../../../public/assets/user.png";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
function ActivityListItem({ activity }) {
  return (
    <>
      <Card id="activity-list-card" style={{ width: "80rem" }}>
        <Card.Body className="card-title">
          <img src={userPng} className="user-png" />
          <div>
            <Card.Title>{activity.title}</Card.Title>
            <Card.Text>Hosted by Furkan</Card.Text>
          </div>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <BsCalendarDateFill className="me-2" />
            <span className="me-5 ">{activity.date} </span>
            <FaLocationDot className="me-2" />
            <span>{activity.venue} </span>
          </ListGroup.Item>
          <ListGroup.Item>Etkinliğe katılacak kişiler...</ListGroup.Item>
          <ListGroup.Item>{activity.description}</ListGroup.Item>
          <Button
            as={Link}
            to={`/activities/${activity.id}`}
            // onClick={() => handleView(activity)}
            variant="dark"
          >
            View
          </Button>
        </ListGroup>
      </Card>
    </>
  );
}

export default ActivityListItem;
