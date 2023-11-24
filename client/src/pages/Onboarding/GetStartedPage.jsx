import { Link } from "react-router-dom";

export default function GetStartedPage() {
  const tracknexusLocal = localStorage.getItem("tracknexus");
  if (!tracknexusLocal) {
    localStorage.setItem("tracknexus", []);
  }

  return (
    <div>
      <div>Get Started</div>
      <Link to={"../routes"} replace={true}>
        <button>Lets Go</button>
      </Link>
    </div>
  );
}
