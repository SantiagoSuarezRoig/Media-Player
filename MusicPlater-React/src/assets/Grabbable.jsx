import { useRef, useState } from "react";

export default function Grabbable({ children }) {
  const [pos, setPos] = useState({ x: 200, y: 200 });


  const up = () => (drag.current.on = false);

  const drag = useRef({ on: false, sx: 0, sy: 0, ox: 0, oy: 0 });

  const down = (e) => {
    drag.current = { on: true, sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y };
    e.preventDefault();
  };

  const move = (e) => {
    if (!drag.current.on)
        return;

    setPos({
      x: drag.current.ox + (e.clientX - drag.current.sx),
      y: drag.current.oy + (e.clientY - drag.current.sy),
    });
  };

  

  return (
    <div
      onMouseDown={down}
      onMouseMove={move}
      onMouseUp={up}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        width: 220,
        height: 120,
        cursor: "grab",
        userSelect: "none",
      }}
    >
        {children}
    </div>
  );
}