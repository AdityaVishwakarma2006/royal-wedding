
"use client";

export default function WeddingDecor({ variant = "lotus" }) {
  return (
    <div
      className={`wedding-decor wedding-decor-${variant}`}
      aria-hidden="true"
    >
      <div className="decor-side decor-side-left">
        <span>❋</span>
        <span>✧</span>
        <span>❋</span>
      </div>

      <div className="decor-center">
        <div className="decor-line" />

        <div className="decor-arch">
          <div className="decor-arch-inner">
            {variant === "lotus" ? (
              <svg
                viewBox="0 0 120 100"
                width="90"
                height="75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M60 84 C38 73 27 52 40 29 C52 43 58 58 60 84Z" />
                  <path d="M60 84 C82 73 93 52 80 29 C68 43 62 58 60 84Z" />
                  <path d="M60 84 C45 59 48 29 60 12 C72 29 75 59 60 84Z" />
                  <path d="M60 84 C34 83 20 70 17 56 C37 57 51 66 60 84Z" />
                  <path d="M60 84 C86 83 100 70 103 56 C83 57 69 66 60 84Z" />
                  <path d="M31 87 Q60 95 89 87" />
                  <path d="M42 91 Q60 97 78 91" />
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 120 100"
                width="90"
                height="75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                >
                  <path d="M60 12 L68 35 L91 43 L68 51 L60 74 L52 51 L29 43 L52 35Z" />
                  <circle cx="60" cy="43" r="15" />
                  <path d="M60 74 L60 91 M47 86 Q60 79 73 86" />
                </g>
              </svg>
            )}
          </div>
        </div>

        <div className="decor-line" />
      </div>

      <div className="decor-side decor-side-right">
        <span>❋</span>
        <span>✧</span>
        <span>❋</span>
      </div>
    </div>
  );
}
