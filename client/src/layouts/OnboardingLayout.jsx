import { Outlet, useNavigate } from "react-router-dom";

export default function OnboardingLayout() {
  const navigate = useNavigate();
  const tracknexusLocal = localStorage.getItem("tracknexus");
  if (tracknexusLocal) navigate("/routes", { replace: true });
  return (
    <main>
      <Outlet />
    </main>
  );
}
