import ActivityList from "./ActivityList";
import Loading from "../Loading";

import { useContext } from "react";
import { ActivityContext } from "../../store/activity-context";
import ActivityFilter from "./ActivityFilter";
function ActivityDashboard() {
  //Seçilmiş aktivite varsa aktivite detayı açılacak.
  const { isLoading, selectedActivity } = useContext(ActivityContext);

  if (isLoading) return <Loading />;

  return (
    <section id="activity-dashboard">
      <ActivityList key={selectedActivity} />
      <ActivityFilter />
    </section>
  );
}

export default ActivityDashboard;
