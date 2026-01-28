export default function Spinner({ size = 16 }) {
  return (
    <span
      style={{
        display: "inline-block",
        boxSizing: "border-box",
        width: size,
        height: size,
        border: "3px solid #ddd",
        borderTop: "3px solid #4f46e5",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
  );
}
