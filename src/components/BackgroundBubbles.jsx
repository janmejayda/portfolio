
function BackgroundBubbles() {
  const bubbles = [
    { size: 90, left: "8%", delay: "0s", duration: "18s" },
    { size: 45, left: "22%", delay: "3s", duration: "14s" },
    { size: 120, left: "40%", delay: "1s", duration: "22s" },
    { size: 65, left: "58%", delay: "5s", duration: "16s" },
    { size: 100, left: "75%", delay: "2s", duration: "20s" },
    { size: 55, left: "90%", delay: "4s", duration: "15s" },
  ];

  return (
    <div className="bubble-background" aria-hidden="true">
      {bubbles.map((bubble, index) => (
        <span
          className="bubble"
          key={index}
          style={{
            "--size": `${bubble.size}px`,
            "--left": bubble.left,
            "--delay": bubble.delay,
            "--duration": bubble.duration,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundBubbles;
