import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrog } from "@fortawesome/free-solid-svg-icons";
import { faHatWizard } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Icon(className) {
  const [clicked, changeIcon] = useState(false);

  function changeDisplay() {
    changeIcon(!clicked);
  }
  return (
    <FontAwesomeIcon
      onClick={changeDisplay}
      icon={clicked ? faFrog : faHatWizard}
    />
  );
}

export default Icon;
