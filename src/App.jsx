/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import ButtonComponent from "./components/Button";
import AlertComponent from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <ButtonComponent text={"test"} type={"primary"} />
        <ButtonComponent text={"test"} type={"secondary"} />
        <ButtonComponent text={"test"} type={""} />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <AlertComponent type={"error"} />
        <AlertComponent type={"warning"} />
        <AlertComponent type={"info"} />
        <AlertComponent type={"success"} />
      </div>
    </div>
  );
}

export default App;
