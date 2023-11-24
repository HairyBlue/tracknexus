import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div>
      <div>WelcomePage</div>
      <Link to={"introduction"} replace={true}>
        Start
      </Link>
    </div>
  );
}
