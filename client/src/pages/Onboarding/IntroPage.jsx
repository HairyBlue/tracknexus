import { Link } from "react-router-dom";

export default function IntroPage() {
  return (
    <div>
      <div>IntroPage</div>
      <Link to={"../enable-location"} replace={true}>
        Next
      </Link>
    </div>
  );
}
