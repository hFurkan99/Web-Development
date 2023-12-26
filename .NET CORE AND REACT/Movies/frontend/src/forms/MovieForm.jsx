import { Form, Formik } from "formik";
import Input from "./Input";
import File from "./File";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Textarea from "./Textarea";

function MovieForm({ onSubmit, model }) {
  console.log(model);
  return (
    <section className="movie-form">
      <Formik
        initialValues={model}
        onSubmit={onSubmit}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          description: Yup.string().required(),
          rating: Yup.string().required(),
          genre: Yup.string().required(),
          year: Yup.string().required(),
          runtime: Yup.string().required(),
          director: Yup.string().required(),
          poster: Yup.mixed().required(),
        })}
      >
        <Form noValidate>
          <Input id="input" displayName="Name" field="name" /> <br />
          <Textarea displayName="Description" field="description" /> <br />
          <Input displayName="Genre" field="genre" /> <br />
          <Input displayName="Release Year" field="year" /> <br />
          <Input displayName="Rating" field="rating" /> <br />
          <Input displayName="Runtime" field="runtime" /> <br />
          <Input displayName="Director" field="director" /> <br />
          <div id="file">
            <File displayName="Poster" field="poster"></File> <br />
          </div>
          <Button className="link-button" type="submit" variant="success">
            {model.name == null ? "Create" : "Edit"}
          </Button>
        </Form>
      </Formik>
    </section>
  );
}

export default MovieForm;
