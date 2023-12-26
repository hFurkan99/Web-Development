import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext, useEffect } from "react";
import { ActivityContext } from "../../store/activity-context";
import Loading from "../Loading";
import ActivityCard from "./ActivityCard";
import ActivityInfos from "./ActivityInfos";
import ActivityComment from "./ActivityComments";
import ActivitySideBar from "./ActivitySideBar";

function ActivityDetails() {
  const { selectedActivity, loadActivity, isLoading } =
    useContext(ActivityContext);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      loadActivity(id);
    }
  }, [id, loadActivity]);

  if (!selectedActivity || isLoading) return <Loading />;

  return (
    <div>
      <Row>
        <Col sm={8}>
          <ActivityCard selectedActivity={selectedActivity} />
          <ActivityInfos selectedActivity={selectedActivity} />
          <ActivityComment />
        </Col>
        <Col className="mt-5" sm={3}>
          <ActivitySideBar />
        </Col>
      </Row>
    </div>
  );
}

export default ActivityDetails;
