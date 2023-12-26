import ListGroup from "react-bootstrap/ListGroup";
import { LuFilter } from "react-icons/lu";
import Calendar from "react-calendar";

function ActivityFilter() {
  return (
    <section className="activity-filter">
      <ListGroup id="activity-filter-list" as="ul">
        <ListGroup.Item as="li" active>
          <LuFilter /> Filters
        </ListGroup.Item>
        <ListGroup.Item as="li">All activities</ListGroup.Item>
        <ListGroup.Item as="li">{`I'm going`}</ListGroup.Item>
        <ListGroup.Item as="li">{`I'm hosting`}</ListGroup.Item>
      </ListGroup>
      <Calendar />
    </section>
  );
}

export default ActivityFilter;
