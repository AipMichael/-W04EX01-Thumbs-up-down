import "./App.css";
import "./Icon";
import Icon from "./Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrog } from "@fortawesome/free-solid-svg-icons";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";

function App() {
  const fontIcon = <FontAwesomeIcon icon={faFrog} />;

  return (
    <div className="icontainer">
      <Icon />
    </div>
  );
}

export default App;
