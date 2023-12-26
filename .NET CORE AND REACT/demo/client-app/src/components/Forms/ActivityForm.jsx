import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Spinner from "react-bootstrap/Spinner";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useContext, useEffect } from "react";
import { ActivityContext } from "../../store/activity-context";
import MyTextInput from "./MyTextInput";
import { Link, useNavigate, useParams } from "react-router-dom";
import MyTextArea from "./MyTextArea";
import MySelectInput from "./MySelectInput";
import { categoryOptions } from "./options/categoryOptions";
import MyDateInput from "./MyDateInput";

function ActivityForm() {
  const {
    handleEditOrCreateActivity,
    isSubmitting,
    selectedActivity,
    setSelectedActivity,
    handleResetChanges,
  } = useContext(ActivityContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    category: Yup.string().required(),
    date: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
  });

  //Create butonundan gelindiyse id yok, bu nedenle selectedActivity sıfırlanır.
  useEffect(() => {
    if (id === undefined) {
      setSelectedActivity({});
    }
  }, [id, setSelectedActivity]);

  //Change
  // function handleChange(event) {
  //   setSelectedActivity({
  //     ...selectedActivity,
  //     [event.target.name]: event.target.value,
  //   });

  //   // console.log(event.target.name);
  //   // console.log(event.target.value);
  // }

  //Submit
  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const fd = new FormData(event.target);
  //   const data = Object.fromEntries(fd.entries());
  //   handleEditOrCreateActivity({
  //     ...data,
  //     id: selectedActivity.id,
  //   });

  //   if (selectedActivity.id) {
  //     navigate(`/activities/${selectedActivity.id}`);
  //   } else {
  //     navigate("/activities");
  //   }
  //   setSelectedActivity({});
  // }

  return (
    <Formik
      validationSchema={validationSchema}
      enableReinitialize
      initialValues={selectedActivity}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => (
        <Form id="form" onSubmit={handleSubmit} autoComplete="off">
          <MyTextInput name="title" placeholder="Title" label="Title" />
          <MyTextArea
            height={100}
            name="description"
            placeholder="Description"
            label="Description"
          />
          <MySelectInput
            name="category"
            placeholder="Category"
            label="Category"
            options={categoryOptions}
          />
          <MyDateInput
            placeholderText="Date"
            name="name"
            showTimeSelect
            timeCaption="time"
            dateFormat="MMMM d, yyyy, h:mm aa"
          />
          <MyTextInput name="city" placeholder="City" label="City" />
          <MyTextInput name="venue" placeholder="Venue" label="Venue" />

          <Stack direction="horizontal" gap={3}>
            <Button
              as={Link}
              to={
                selectedActivity.id
                  ? `/activities/${selectedActivity.id}`
                  : `/activities`
              }
              className="ms-auto mt-4"
              variant="danger"
              type="button"
              onClick={handleResetChanges}
            >
              Cancel
            </Button>
            <Button className="ms- mt-4" variant="success" type="submit">
              {isSubmitting ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Submit"
              )}
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
}

export default ActivityForm;
