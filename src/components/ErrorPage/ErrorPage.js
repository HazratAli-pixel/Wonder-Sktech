
import { useRouteError } from "react-router-dom";
import useTitle from "../CustomHooks/useTitle";


export default function ErrorPage() {
  useTitle('Error')
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="pt-16 container mx-auto text-center">
      <p className="text-3xl font-bold p-3">Open Learning</p>
      <h1 className="text-9xl  font-bold">404</h1>
      <br /><br />
      <h1>Oops! This is an Error Page</h1>
      <p>Sorry, an unexpected error has occurred. Please go back</p>
      <p className="text-red-600 p-3">
        <i>{error.statusText || error.message}</i>
      </p>
      <p className="text-3xl font-bold p-3">Hazrat Ali</p>
    </div>
  );
}