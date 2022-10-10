import "./App.css";
import Welcome from "./pages/Welcome";
import PhoneConfirm from "./pages/PhoneConfirm";
import CodeConfirm from "./pages/CodeConfirm";
import AllowNotification from "./pages/AllowNotification";
import Home from "./pages/Home";
import Explore from "./pages/Explore.jsx"
import Profile from "./pages/Profile.jsx"
import Activity from "./pages/Activity.jsx"
import Upcoming from "./pages/Upcoming.jsx"
import PlanLayout from "./pages/Layouts/PlanLayout";
import AppLayout from "./pages/Layouts/AppLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/invite" element={<PhoneConfirm />} />
          <Route path="/code_confirm" element={<CodeConfirm />} />
          <Route path="/allow_notification" element={<AllowNotification />} />
        </Routes>
      </PlanLayout>
      <AppLayout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/upcoming" element={<Upcoming />} />
          {/* <Route path="/friends_invite" element={<Friends />} /> */}
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
