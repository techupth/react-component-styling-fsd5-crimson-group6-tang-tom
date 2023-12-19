import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";
import frownIcon from "./assets/icons/frown.png";
import alertTriangleIcon from "./assets/icons/alert-triangle.png";
import alertCircleIcon from "./assets/icons/alert-circle.png";
import checkCircleIcon from "./assets/icons/check-circle.png";

const buttonColor = {
  primary: "#074EE8",
  secondary: "#07A4E8",
};

const alertStyle = {
  error: {
    icon: frownIcon,
    text: "error",
    color: "#fc0317",
  },
  warning: {
    icon: alertTriangleIcon,
    text: "warning",
    color: "#dead0d",
  },
  info: {
    icon: alertCircleIcon,
    text: "info",
    color: "#b39815",
  },
  success: {
    icon: checkCircleIcon,
    text: "success",
    color: "#23b315",
  },
};

function App() {
  return (
    <>
      <div className="App">
        <div className="button-components-section">
          {/* Render ตัว Button 2 แบบ */}
          <Button buttonColor={buttonColor.primary} />
          <Button buttonColor={buttonColor.secondary} />
        </div>
        <hr />
        <div className="alert-components-section">
          {/* Render ตัว Alert 4 แบบ */}
          <Alert alertStyle={alertStyle.error} />
          <Alert alertStyle={alertStyle.warning} />
          <Alert alertStyle={alertStyle.info} />
          <Alert alertStyle={alertStyle.success} />
        </div>
      </div>
    </>
  );
}

export default App;
