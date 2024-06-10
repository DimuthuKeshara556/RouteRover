import MainLayout from "../../Layout/MainLayout";
import Login from "../Authentication/Login";
import SignIn from "../Authentication/SignIn";
import Application from "../Application/Application";
import StopTrackingPage from "../Application/pages/StopTrackingPage/StopTrackingPage";
import ReturnToHomePage from "../Application/pages/ReturnToHomePage/ReturnToHomePage";
import TrailCompletePage from "../Application/pages/TrailCompletePage/TrailCompletePage";
import ShareExperience from "../Application/pages/ShareExperience/ShareExperience";
import CommunityPage from "../Community/CommunityPage";

import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import TrackingPart from "../Application/pages/Tracking/TrackingPart";
import WebContext from "../WebSite/WebContext/WebContext";
import SelectedItem from "../Application/pages/SelectedItem/SelectedItem";
import PreviousPathTrack from "../Application/pages/PreviousPathTrack/PreviousPathTrack";
import AppGuide from "../AppGuidePage/AppGuide";
import AppContext from "../Application/AppContext/AppContext";
import MyActivity from "../Application/pages/MyActivityPage/MyActivity";

const AppRouters = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<WebContext />} />
          <Route path="Application" element={<AppContext />} />
          <Route path="community" element={<CommunityPage />} />
          <Route
            path="/app"
            element={user ? <Application /> : <SignIn setUser={setUser} />}
          />
          <Route path="/complete" element={<TrailCompletePage />} />
          <Route path="/test/:value" element={<TrackingPart />} />
          <Route path="/stop/:value" element={<StopTrackingPage />} />
          <Route path="/finish/:value" element={<ReturnToHomePage />} />
          <Route path="/activity" element={<MyActivity />} />
          <Route path="/share" element={<ShareExperience />} />
          <Route path="/guidePage" element={<AppGuide />} />
          <Route path="/details/:id" element={<SelectedItem />} />
          <Route path="/pre/:id" element={<PreviousPathTrack />} />
        </Route>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <SignIn setUser={setUser} />}
        />

        {/* <Route path="/t" element={<Test/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouters;
