import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <div className="pt-5 text-center ">
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </div>
  );
}

export default Loading;
