
"use client";

export default function WeddingFrame() {
  return (
    <div className="wedding-frame" aria-hidden="true">
      {/* Outer gold border */}
      <div className="frame-outer" />

      {/* Inner ornamental border */}
      <div className="frame-inner" />

      {/* Left and right jaali panels */}
      <div className="frame-side frame-left">
        <span>✥</span>
        <span>❋</span>
        <span>✥</span>
        <span>❋</span>
        <span>✥</span>
      </div>

      <div className="frame-side frame-right">
        <span>✥</span>
        <span>❋</span>
        <span>✥</span>
        <span>❋</span>
        <span>✥</span>
      </div>

      {/* Top toran */}
      <div className="frame-toran frame-toran-top">
        <div className="toran-line" />
        <div className="toran-hanging">
          {Array.from({ length: 11 }).map((_, i) => (
            <span key={i}>❋</span>
          ))}
        </div>
        <div className="toran-center">✿</div>
      </div>

      {/* Bottom ornament */}
      <div className="frame-toran frame-toran-bottom">
        <div className="toran-bottom-line" />
        <div className="toran-bottom-center">❋</div>
      </div>

      {/* Four royal corner ornaments */}
      <div className="frame-corner top-left">❋</div>
      <div className="frame-corner top-right">❋</div>
      <div className="frame-corner bottom-left">❋</div>
      <div className="frame-corner bottom-right">❋</div>
    </div>
  );
}
