import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <div className="w-full h-full md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[600px] shadow-2xl">
      <div className="h-1/2">
        <img
          src="/image/Onboarding/welcome.png"
          alt="bus and mountain image"
        />
      </div>

      <div>
        <Link to={"introduction"} replace={true}>
          Start
        </Link>
      </div>
    </div>
  );
}
