import "../style-sheets/textoSecundaario.css";
export function TextoSecundario({ children, link }) {
  return (
    <div className="textos">
      <p className="children">{children}
        <a href="#">{link}</a></p>
    </div>
  );
}
