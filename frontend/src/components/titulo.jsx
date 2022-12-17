import "../stylesheets/app.css";

export default function Titulo({ children, width }) {
  const styles = {
    width: `${width}rem`,
    marginBottom: "2rem",
  };
  return (
    <h1 style={styles} className="titulo">
      {children}
    </h1>
  );
}
