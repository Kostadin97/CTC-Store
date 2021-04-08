import { Alert } from "react-bootstrap";

const Error = (props) => {
  return (
    <>{props.error ? <Alert variant="danger">{props.error}</Alert> : ""}</>
  );
};

export default Error;
