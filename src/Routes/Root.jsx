
import { Link } from "react-router-dom";
import Error from "../Routes/ErrorPage";
import { ErrorBoundary } from "react-error-boundary";

function Root() {
  return (
    <>
    <div className="Error">
      <ErrorBoundary fallback={<h1> An Error occured... 
        <br/> Refresh to go back to the home page </h1>}>
        <h1><marquee direction = 'right'> Hey!!! Welcome to the Counter App</marquee>  </h1> 
        
        <p>
          {" "}
          <Link to="/App"> The Counter app </Link>{" "}
        </p>

        <Error />
        <h2> <Link to="/not availabe"> Click here to see what is going on </Link>{" "}</h2>
        
      </ErrorBoundary>
      </div>
    </>
  );
}

export default Root;
