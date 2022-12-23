import {useNavigate} from "react-router-dom";

export default function Vinculo({children, direccion}) {

  const navigate = useNavigate();

  function redirigir() {
    navigate(`/${direccion}`);
  }

  return (
    <p className="Link" onClick={redirigir}>{children}</p>
  );

}
