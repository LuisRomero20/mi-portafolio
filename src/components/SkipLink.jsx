import { moveFocusToMain } from "../utils/skipNavigation";

export default function SkipLink() {
  const handleClick = (event) => {
    event.preventDefault();
    moveFocusToMain();
  };

  return <a className="skip-link" href="#main-content" onClick={handleClick}>Saltar al contenido</a>;
}
