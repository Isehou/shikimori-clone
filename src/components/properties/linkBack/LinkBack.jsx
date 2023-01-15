import { useNavigate } from "react-router-dom";
import "./link-back.css";

function LinkBack() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate("./../", { replace: true });
  }

  return (
    <button type="button" className="prev-button" onClick={handleGoBack}>
      Назад
    </button>
  );
}

export default LinkBack;
