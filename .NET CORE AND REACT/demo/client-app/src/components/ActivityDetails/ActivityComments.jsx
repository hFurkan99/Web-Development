import Container from "react-bootstrap/esm/Container";
import userPng from "../../../public/assets/user.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { VscSend } from "react-icons/vsc";

function ActivityComment() {
  return (
    <Container id="comment-section">
      <div id="comment-header">Chat about this event</div>
      <div className="card mb-3">
        <div id="comment" className="row g-0">
          <div className="col-md-2">
            <img id="comment-image" src={userPng} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Furkan</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary mb-5 ">
                  Today at 13.45
                </small>
              </p>
              <p>Reply</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3" id="comment">
        <div className="row g-0">
          <div className="col-md-2">
            <img id="comment-image" src={userPng} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Furkan</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-body-secondary">Today at 13.45</small>
              </p>
              <p>Reply</p>
            </div>
          </div>
        </div>
      </div>
      <FloatingLabel controlId="floatingTextarea" label="Comments">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "200px" }}
        />
      </FloatingLabel>
      <Button className="mt-3" variant="primary">
        Add Reply
        <VscSend className="ms-4 " />
      </Button>
    </Container>
  );
}

export default ActivityComment;
