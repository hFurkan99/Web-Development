import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/esm/Container";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
function ActivityInfos({ selectedActivity }) {
  return (
    <Container>
      <ListGroup id="activity-infos">
        <ListGroup.Item id="detail-infos-item">
          <BsFillInfoSquareFill />
          <span className="ms-3">{selectedActivity.description}</span>
        </ListGroup.Item>
        <ListGroup.Item id="detail-infos-item">
          <BsCalendarDateFill />
          <span className="ms-3">{selectedActivity.date}</span>
        </ListGroup.Item>
        <ListGroup.Item id="detail-infos-item">
          <FaLocationDot />
          <span className="ms-3">{`${selectedActivity.city}, ${selectedActivity.venue} `}</span>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default ActivityInfos;
