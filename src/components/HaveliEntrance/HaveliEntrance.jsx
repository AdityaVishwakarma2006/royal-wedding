
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const particles = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 53 + 7) % 100}%`,
  delay: `${(i % 8) * -0.8}s`,
  duration: `${5 + (i % 6)}s`,
  size: `${2 + (i % 3)}px`,
}));

const bellHinges = [420, 510, 600, 690, 780];

export default function HaveliEntrance() {
  const scene = useRef(null);

  useGSAP(
    (_context, contextSafe) => {
      const select = gsap.utils.selector(scene);
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reduced) {
        gsap.set(
          select(
            ".haveli-sky, .haveli-palace, .haveli-main-arch, .haveli-toran"
          ),
          { autoAlpha: 1 }
        );
        gsap.set(select(".haveli-door-left"), { xPercent: -110 });
        gsap.set(select(".haveli-door-right"), {
          xPercent: 110,
        });
        return;
      }

      const intro = gsap.timeline({
        defaults: { ease: "power2.out" },
      });

      intro
        .fromTo(
          select(".haveli-sky"),
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1.4 }
        )
        .fromTo(
          select(".haveli-palace"),
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 1.6 },
          "-=0.7"
        )
        .fromTo(
          select(".haveli-main-arch"),
          { autoAlpha: 0, scaleY: 0.94, svgOrigin: "600 800" },
          { autoAlpha: 1, scaleY: 1, duration: 1.2, svgOrigin: "600 800" },
          "-=0.7"
        )
        .fromTo(
          select(".haveli-door-left"),
          { xPercent: 0 },
          {
            xPercent: -110,
            duration: 2.4,
            ease: "power3.inOut",
          },
          "-=0.3"
        )
        .fromTo(
          select(".haveli-door-right"),
          { xPercent: 0 },
          {
            xPercent: 110,
            duration: 2.4,
            ease: "power3.inOut",
          },
          "<"
        )
        .fromTo(
          select(".haveli-toran"),
          { autoAlpha: 0, y: -12 },
          { autoAlpha: 1, y: 0, duration: 1.2 },
          "-=1.2"
        );

      intro.call(contextSafe(() => {
        select(".haveli-hanging-bell").forEach((bell, index) => {
          gsap.to(bell, {
            rotation: 5,
            svgOrigin: `${bellHinges[index]} 390`,
            duration: 3.2,
            repeat: -1,
            yoyo: true,
            delay: index * 0.18,
            ease: "sine.inOut",
          });
        });

        gsap.to(select(".haveli-sun"), {
          scale: 1.04,
          opacity: 0.8,
          svgOrigin: "600 350",
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }));
    },
    { scope: scene }
  );

  return (
    <div className="haveli-scene" ref={scene} aria-hidden="true">

      {/* Atmospheric background */}

      <div className="haveli-sky haveli-animated" />

      <div className="haveli-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="haveli-particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* Palace architecture */}

      <svg
        className="haveli-palace haveli-animated"
        viewBox="0 0 1200 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="haveliWall" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f2d7aa" />
            <stop offset="48%" stopColor="#c99a66" />
            <stop offset="100%" stopColor="#88533f" />
          </linearGradient>

          <linearGradient id="haveliShadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#653b35" />
            <stop offset="100%" stopColor="#321e24" />
          </linearGradient>

          <linearGradient id="haveliGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff0bd" />
            <stop offset="45%" stopColor="#d6a64f" />
            <stop offset="100%" stopColor="#8b602d" />
          </linearGradient>

          <linearGradient id="haveliDoor" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#401d28" />
            <stop offset="50%" stopColor="#71313b" />
            <stop offset="100%" stopColor="#351821" />
          </linearGradient>

          <radialGradient id="haveliGlow">
            <stop offset="0%" stopColor="#f8d68c" stopOpacity=".75" />
            <stop offset="100%" stopColor="#f8d68c" stopOpacity="0" />
          </radialGradient>

          <pattern
            id="haveliJaal"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M12 0 L24 12 L12 24 L0 12 Z"
              fill="none"
              stroke="#d7ad6c"
              strokeWidth="1"
              opacity=".4"
            />
            <circle cx="12" cy="12" r="2" fill="#d7ad6c" />
          </pattern>

          <clipPath id="haveliArchClip">
            <path d="M385 770 V405 Q600 115 815 405 V770 Z" />
          </clipPath>
        </defs>

        {/* Warm palace glow */}

        <ellipse
          className="haveli-sun"
          cx="600"
          cy="350"
          rx="310"
          ry="310"
          fill="url(#haveliGlow)"
        />

        {/* Palace silhouette */}

        <path
          d="M0 310 L90 275 L90 230 L155 230 L155 195 L210 195
          L210 240 L300 240 L300 165 L355 165 L355 120 L405 120
          L405 180 L795 180 L795 120 L845 120 L845 165 L900 165
          L900 240 L990 240 L990 195 L1045 195 L1045 230 L1110 230
          L1110 275 L1200 310 L1200 900 L0 900 Z"
          fill="url(#haveliWall)"
        />

        {/* Palace upper terraces */}

        <path
          d="M0 315 H1200 V340 H0 Z"
          fill="#6c3d37"
        />

        <path
          d="M75 260 H1125 V280 H75 Z"
          fill="url(#haveliGold)"
        />

        {/* Side palace towers */}

        {[105, 995].map((x) => (
          <g key={x}>
            <path
              d={`M${x - 65} 315 V190 Q${x} 100 ${x + 65} 190 V315 Z`}
              fill="#9b6248"
              stroke="#d7ad6c"
              strokeWidth="5"
            />
            <path
              d={`M${x - 48} 315 V200 Q${x} 137 ${x + 48} 200 V315 Z`}
              fill="url(#haveliShadow)"
              stroke="#e4bd79"
              strokeWidth="3"
            />
            <path
              d={`M${x - 75} 190 Q${x} 80 ${x + 75} 190`}
              fill="none"
              stroke="#e6bd79"
              strokeWidth="7"
            />
            <path
              d={`M${x - 78} 190 H${x + 78}`}
              stroke="#e6bd79"
              strokeWidth="6"
            />
            <path
              d={`M${x - 25} 315 V220 Q${x} 190 ${x + 25} 220 V315`}
              fill="none"
              stroke="#d7ad6c"
              strokeWidth="3"
            />
          </g>
        ))}

        {/* Jharokha balconies */}

        {[245, 955].map((x) => (
          <g key={x}>
            <path
              d={`M${x - 85} 410 V325 Q${x} 230 ${x + 85} 325 V410 Z`}
              fill="#754238"
              stroke="#e0b76d"
              strokeWidth="5"
            />
            <path
              d={`M${x - 60} 405 V330 Q${x} 270 ${x + 60} 330 V405 Z`}
              fill="url(#haveliShadow)"
              stroke="#d5ac68"
              strokeWidth="3"
            />
            <path
              d={`M${x - 95} 410 H${x + 95}`}
              stroke="#e3b970"
              strokeWidth="8"
            />
            <path
              d={`M${x - 65} 405 V350 M${x - 35} 405 V332
              M${x} 405 V318 M${x + 35} 405 V332
              M${x + 65} 405 V350`}
              stroke="#e2bb7b"
              strokeWidth="4"
            />
            <path
              d={`M${x - 85} 415 Q${x} 450 ${x + 85} 415`}
              fill="none"
              stroke="#e2bb7b"
              strokeWidth="4"
            />
          </g>
        ))}

        {/* Decorative wall panels */}

        {[35, 335, 865, 1165].map((x) => (
          <g key={x}>
            <rect
              x={x - 48}
              y="470"
              width="96"
              height="150"
              rx="45"
              fill="url(#haveliShadow)"
              stroke="#d9ad68"
              strokeWidth="4"
            />
            <rect
              x={x - 34}
              y="485"
              width="68"
              height="120"
              rx="32"
              fill="url(#haveliJaal)"
            />
          </g>
        ))}

        {/* Central grand entrance arch */}

        <g className="haveli-main-arch">
          <path
            d="M330 800 V415 Q600 45 870 415 V800 Z"
            fill="#6c3938"
            stroke="url(#haveliGold)"
            strokeWidth="13"
          />

          <path
            d="M355 800 V420 Q600 95 845 420 V800 Z"
            fill="url(#haveliShadow)"
            stroke="#f1d092"
            strokeWidth="5"
          />

          <path
            d="M385 800 V430 Q600 145 815 430 V800 Z"
            fill="#28171e"
            stroke="#b88b4d"
            strokeWidth="3"
          />

          {/* Arch carvings */}

          <path
            d="M355 420 Q600 75 845 420"
            fill="none"
            stroke="#f2d49b"
            strokeWidth="4"
            strokeDasharray="3 12"
          />

          <path
            d="M372 430 Q600 120 828 430"
            fill="none"
            stroke="#d3a45c"
            strokeWidth="3"
          />

          {/* Side pillars */}

          {[350, 850].map((x) => (
            <g key={x}>
              <rect
                x={x - 15}
                y="410"
                width="30"
                height="385"
                fill="url(#haveliGold)"
              />
              <path
                d={`M${x - 35} 425 H${x + 35}
                M${x - 35} 455 H${x + 35}
                M${x - 35} 760 H${x + 35}
                M${x - 35} 790 H${x + 35}`}
                stroke="#f1d092"
                strokeWidth="5"
              />
            </g>
          ))}
        </g>

        {/* Door panels */}

        <g clipPath="url(#haveliArchClip)">
          <g className="haveli-door-left">
            <rect
              x="385"
              y="365"
              width="215"
              height="435"
              fill="url(#haveliDoor)"
              stroke="#d5a75f"
              strokeWidth="5"
            />
            <rect
              x="400"
              y="385"
              width="185"
              height="395"
              fill="none"
              stroke="#e2bd78"
              strokeWidth="2"
            />
            {[430, 550].map((x) => (
              <g key={x}>
                <path
                  d={`M${x} 410 V755`}
                  stroke="#d4a45d"
                  strokeWidth="2"
                />
                <circle cx={x} cy="560" r="6" fill="#e9c47c" />
              </g>
            ))}
            <path
              d="M420 480 Q492 420 565 480 V535 H420 Z"
              fill="none"
              stroke="#d9b36e"
              strokeWidth="3"
            />
            <path
              d="M420 620 Q492 560 565 620 V675 H420 Z"
              fill="none"
              stroke="#d9b36e"
              strokeWidth="3"
            />
            <circle cx="580" cy="570" r="5" fill="#f4d28b" />
          </g>

          <g className="haveli-door-right">
            <rect
              x="600"
              y="365"
              width="215"
              height="435"
              fill="url(#haveliDoor)"
              stroke="#d5a75f"
              strokeWidth="5"
            />
            <rect
              x="615"
              y="385"
              width="185"
              height="395"
              fill="none"
              stroke="#e2bd78"
              strokeWidth="2"
            />
            {[650, 770].map((x) => (
              <g key={x}>
                <path
                  d={`M${x} 410 V755`}
                  stroke="#d4a45d"
                  strokeWidth="2"
                />
                <circle cx={x} cy="560" r="6" fill="#e9c47c" />
              </g>
            ))}
            <path
              d="M635 480 Q708 420 780 480 V535 H635 Z"
              fill="none"
              stroke="#d9b36e"
              strokeWidth="3"
            />
            <path
              d="M635 620 Q708 560 780 620 V675 H635 Z"
              fill="none"
              stroke="#d9b36e"
              strokeWidth="3"
            />
            <circle cx="620" cy="570" r="5" fill="#f4d28b" />
          </g>
        </g>

        {/* Entrance toran */}

        <g className="haveli-toran">
          <path
            d="M360 420 Q600 190 840 420"
            fill="none"
            stroke="#d6a34f"
            strokeWidth="5"
          />

          {Array.from({ length: 17 }, (_, i) => {
            const x = 370 + i * 28;
            const y = 415 - Math.sin((i / 16) * Math.PI) * 125;

            return (
              <g key={i} transform={`translate(${x} ${y})`}>
                <path
                  d="M0 0 Q-12 15 0 30 Q12 15 0 0"
                  fill={i % 2 ? "#b83d38" : "#d9a64e"}
                  stroke="#f2d18c"
                  strokeWidth="1"
                />
                <circle cx="0" cy="5" r="3" fill="#f9e3ae" />
              </g>
            );
          })}

          {/* Hanging bells */}

          {bellHinges.map((x, i) => (
            <g
              key={x}
              className="haveli-hanging-bell"
            >
              <path
                d={`M${x} 390 V${405 + (i % 2) * 8}`}
                stroke="#e4bd78"
                strokeWidth="2"
              />
              <path
                d={`M${x - 9} ${405 + (i % 2) * 8}
                Q${x} ${420 + (i % 2) * 8}
                ${x + 9} ${405 + (i % 2) * 8} Z`}
                fill="#d6a64f"
                stroke="#fff0bd"
                strokeWidth="1"
              />
              <circle
                cx={x}
                cy={423 + (i % 2) * 8}
                r="2"
                fill="#fff0bd"
              />
            </g>
          ))}
        </g>

        {/* Ground and foreground */}

        <path
          d="M0 800 Q300 760 600 800 Q900 760 1200 800 V900 H0 Z"
          fill="#49302d"
          opacity=".65"
        />

        <path
          d="M0 830 Q300 790 600 830 Q900 790 1200 830"
          fill="none"
          stroke="#d7ad6c"
          strokeWidth="3"
        />

        <path
          d="M0 855 Q300 815 600 855 Q900 815 1200 855"
          fill="none"
          stroke="#b9955b"
          strokeWidth="1"
          opacity=".6"
        />
      </svg>

    </div>
  );
}



