import IngresarTexto from "../components/IngresarTexto";
import Button from "../components/Button";

export default function Login() {
  return (
    <>
      <IngresarTexto placeholder={"Usuario"} ></IngresarTexto>
      <IngresarTexto placeholder={"Contraseña"} type={"password"}></IngresarTexto>
      <Button>Iniciar sesión</Button>
    </>
  );
}
