import { createContext, useState, useEffect } from "react";
import agent from "../api/axios";
import { v4 as uuid } from "uuid";
export const ActivityContext = createContext({
  //states
  activities: [],
  selectedActivity: {},
  isEditMode: false,
  clearInputs: false,
  isLoading: true,
  isSubmitting: false,
  isFormOpen: false,
  //sets
  setActivities: "",
  setSelectedActivity: "",
  setIsEditMode: "",
  setClearInputs: "",
  setIsLoading: "",
  setIsSubmitting: "",
  setIsFormOpen: "",
  //functions
  handleEditOrCreateActivity: () => {},
  handleDeleteActivity: () => {},
  loadActivity: () => {},
  handleResetChanges: () => {},
});

function ActivityContextProvider({ children }) {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [clearInputs, setClearInputs] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // import { v4 as uuid } from "uuid";
  //Aktiviteler databaseden çekiliyor.

  useEffect(() => {
    setIsLoading(() => {
      return true;
    });
    agent.Activities.list().then((response) => {
      setActivities(response);
      setIsLoading(() => {
        return false;
      });
    });
  }, []);

  //Tek bir aktivitenin detay sayfasını görüntülemek için.
  const loadActivity = (id) => {
    if (selectedActivity.id !== id) {
      setIsLoading(() => {
        return true;
      });
      agent.Activities.details(id).then((response) => {
        setSelectedActivity(response);

        setIsLoading(() => {
          return false;
        });
      });
    }
  };

  //Aktivite güncelleme ya da yeni aktivite oluşturma.
  const handleEditOrCreateActivity = (data) => {
    setIsSubmitting(true);
    //Edit
    if (data.id) {
      agent.Activities.update(data).then(() => {
        setActivities([...activities.filter((x) => x.id !== data.id), data]);
        setIsSubmitting(false);
      });
    }
    //create
    else {
      data.id = uuid();
      agent.Activities.create(data).then(() => {
        setActivities([...activities, data]);
        setSelectedActivity(data);
        setIsSubmitting(false);
      });
    }
  };

  //Aktivite silme.
  const handleDeleteActivity = (activity) => {
    setIsSubmitting(true);
    agent.Activities.delete(activity.id).then(() => {
      setActivities([...activities.filter((x) => x.id !== activity.id)]);
      setIsSubmitting(false);
    });
  };

  //Edit işleminden vazgeçtikten sonra değişiklikleri detay sayfasından ve formdan temizlemek için.
  function handleResetChanges() {
    setSelectedActivity({});
  }

  const ctxValue = {
    //states
    activities,
    selectedActivity,
    isEditMode,
    clearInputs,
    isLoading,
    isSubmitting,
    isFormOpen,
    //sets
    setActivities,
    setSelectedActivity,
    setIsEditMode,
    setClearInputs,
    setIsLoading,
    setIsSubmitting,
    setIsFormOpen,
    //functions
    loadActivity,
    handleEditOrCreateActivity,
    handleDeleteActivity,
    handleResetChanges,
  };

  return (
    <ActivityContext.Provider value={ctxValue}>
      {children}
    </ActivityContext.Provider>
  );
}

export default ActivityContextProvider;
