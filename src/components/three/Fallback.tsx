export default function Fallback() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'radial-gradient(ellipse at 30% 50%, rgba(0,240,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(191,0,255,0.06) 0%, transparent 60%), #050505',
        overflow: 'hidden',
      }}
    >
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 2 + 1 + 'px',
            height: Math.random() * 2 + 1 + 'px',
            borderRadius: '50%',
            background: i % 3 === 0 ? '#00f0ff' : i % 3 === 1 ? '#bf00ff' : '#f5f5f5',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.1,
            animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out ${Math.random() * 3}s infinite alternate`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          from { opacity: 0.1; transform: scale(1); }
          to   { opacity: 0.7; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
}