import ListGroup from "react-bootstrap/ListGroup";

import { useContext } from "react";
import { ActivityContext } from "../../store/activity-context";
import ActivityListItem from "./ActivityListItem";

function ActivityList() {
  // const { activities } = useContext(ActivityContext);
  const { activities } = useContext(ActivityContext);
  return (
    <ListGroup variant="flush">
      {activities.map((activity) => (
        <ActivityListItem key={activity.id} activity={activity} />
      ))}
    </ListGroup>
  );
}

export default ActivityList;
