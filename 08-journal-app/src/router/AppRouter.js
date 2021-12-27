import React from "react";
import {
    BrowserRouter,
    Routes,
    Route, Navigate
} from "react-router-dom";
import {AuthRouter} from "./AuthRouter";
import {JournalScreen} from "../components/journal/JournalScreen";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route exact path="/" element={<JournalScreen />} />
        <Route path="*" element={<Navigate replace to="/"/>} />
      </Routes>
    </BrowserRouter>
  )
};