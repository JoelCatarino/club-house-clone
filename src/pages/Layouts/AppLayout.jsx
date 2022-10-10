import React from "react";

export default function PlanLayout({ children }) {
  return (
    <div className="app_layout">{children}</div>
    // <div style={{ width: "100%", maxWidth: "500px", margin: "auto" }}>
    //   {children}
    // </div>
  );
}