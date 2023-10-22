
import { Link } from "react-router-dom";

function Page404() {
  return (
    <>
    <div className="Error-container">
      <h1 className="page404" > Page not found .... 404 Page </h1>
      <p>
            {" "}
            <Link to="/"  className="page404"> Go  Back to Home Page </Link>{" "}
          </p>
          </div>
    </>
  );
}

export default Page404;
