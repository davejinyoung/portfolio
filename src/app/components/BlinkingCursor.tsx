"use client";

export default function BlinkingCursor() {
  return (
    <span
      className="inline-block w-1.5 h-5 bg-current"
      style={{
        animation: "blink 1s infinite",
        verticalAlign: "top",
        marginTop: "3px",
      }}
    >
      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </span>
  );
}
