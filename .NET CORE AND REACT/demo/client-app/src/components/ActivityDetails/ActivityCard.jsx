import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

function ActivityCard({ selectedActivity }) {
  return (
    <Container>
      <Card bg="dark" style={{ width: "auto", marginTop: "50px" }}>
        <div id="detail-image-container">
          <div className="bg-black ">
            <Card.Img
              id="detail-image"
              variant="top"
              src={`../../public/assets/categoryImages/${selectedActivity.category}.jpg`}
              className="w-100 "
            />
          </div>

          <div id="image-text">
            <Card.Title>{selectedActivity.title}</Card.Title>
            <p className="fst-italic ">{selectedActivity.date}</p>
            <p>Hosted by Furkan</p>
          </div>
        </div>

        <Card.Body>
          <Stack direction="horizontal" gap={3}>
            <Button variant="success">Join Activity</Button>
            <Button as={Link} to="/activities" variant="danger">
              Cancel Attendance
            </Button>
            <Button
              as={Link}
              to={`/editActivity/${selectedActivity.id}`}
              className="ms-auto "
              variant="warning"
            >
              Manage Event
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ActivityCard;
