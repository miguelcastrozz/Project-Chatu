import "./../style-sheets/input.css"

export default function Input({children, onChange, type, value }) {
  return (
    <div>
      <input
        type={type}/>
    </div>
  );
}
