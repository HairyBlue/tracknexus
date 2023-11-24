import { useNavigate } from "react-router-dom";

export default function EnableLocationPage() {
  const navigate = useNavigate();
  const enableLocation = () => {
    navigator.geolocation.watchPosition(
      (postion) => {
        if (postion.coords.latitude) {
          navigate("/getstarted", { replace: true });
        }
      },
      (error) => {
        if (error.code == 1) {
          alert("Please Enable The Location of Tracknexus but you can enable it later")
        }
      }
    );
  };
  return (
    <div>
      <div>EnableLocationPage</div>
      <button onClick={enableLocation}>Enable</button>
    </div>
  );
}
