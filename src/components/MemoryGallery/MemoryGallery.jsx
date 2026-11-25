
"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./MemoryGallery.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const leftMemories = [
  "/images/groom-chair.jpeg",
  "/images/groom-river.jpeg",
  "/images/groom-casual.jpeg",
];

const rightMemories = [
  "/images/bride-chain-1.jpeg",
  "/images/bride-chain-2.jpeg",
  "/images/bride-chain-3.jpeg",
];

function HangingChain({ side, images }) {
  return (
    <div className={`memory-chain memory-chain-${side}`}>
      <div className="chain-wire" />

      {images.map((src, index) => (
        <div
          className="chain-memory"
          key={src}
          style={{
            "--memory-index": index,
            "--chain-delay": `${index * 0.18}s`,
          }}
        >
          <div className="chain-link">
            <span className="chain-ring" />
          </div>

          <div className="memory-frame">
            <img
              src={src}
              alt={`${side === "right" ? "Bride" : "Groom"} memory ${index + 1}`}
              loading="lazy"
            />
            <span className="memory-corner top-left" />
            <span className="memory-corner top-right" />
            <span className="memory-corner bottom-left" />
            <span className="memory-corner bottom-right" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MemoryGallery() {
  const section = useRef(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".memory-reveal");

      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: 65,
          scale: 0.88,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".chain-wire",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          stagger: 0.25,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section.current,
            start: "top 70%",
            once: true,
          },
        }
      );

      gsap.to(".memory-main-frame", {
        y: -9,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".chain-memory", {
        rotation: 2,
        transformOrigin: "50% 0%",
        duration: 3.5,
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: section }
  );

  return (
    <section className="memory-gallery" ref={section}>
      <div className="memory-gallery-inner">

        <div className="memory-heading memory-reveal">
          <span className="memory-eyebrow">✦ एक खूबसूरत सफ़र ✦</span>
          <h2>दो दिल, एक कहानी</h2>
          <p>
            कुछ यादें तस्वीरों में कैद हो जाती हैं,
            और कुछ ज़िंदगी भर साथ चलती हैं।
          </p>
          <div className="memory-divider">
            <span />
            ❖
            <span />
          </div>
        </div>

        <div className="memory-installation">

          {/* Left hanging photographs */}

          <HangingChain side="left" images={leftMemories} />

          {/* Groom portrait */}

          <div className="memory-side memory-reveal groom-memory">
            <div className="memory-side-frame">
              <div className="ornamental-top">✦</div>
              <img
                src="/images/groom-sherwani.jpeg"
                alt="The groom"
                loading="lazy"
              />
              <div className="memory-side-caption">
                <span>दूल्हे राजा</span>
                <small>THE GROOM</small>
              </div>
            </div>
          </div>

          {/* Central couple portrait */}

          <div className="memory-centre memory-reveal">
            <div className="memory-main-frame">
              <div className="main-frame-ornament">
                ❧ ✦ ❧
              </div>

              <div className="main-photo-border">
                <img
                  src="/images/couple-close.jpeg"
                  alt="The beautiful couple"
                  loading="lazy"
                />
              </div>

              <div className="main-frame-caption">
                <span>सदा के लिए</span>
                <h3>A Beautiful Beginning</h3>
                <small>AMAN ♡ PRACHI</small>
              </div>

              <div className="main-frame-bottom">✦ ❧ ✦</div>
            </div>
          </div>

          {/* Bride portrait */}

          <div className="memory-side memory-reveal bride-memory">
            <div className="memory-side-frame">
              <div className="ornamental-top">✦</div>
              <img
                src="/images/bride-seated.jpeg"
                alt="The bride"
                loading="lazy"
              />
              <div className="memory-side-caption">
                <span>दुल्हनिया</span>
                <small>THE BRIDE</small>
              </div>
            </div>
          </div>

          {/* Right hanging photographs */}

          <HangingChain side="right" images={rightMemories} />

        </div>

        <div className="memory-footer memory-reveal">
          <span>❧</span>
          <p>
            हर तस्वीर में एक याद,
            हर याद में एक मुस्कान।
          </p>
          <span>❧</span>
        </div>

      </div>
    </section>
  );
}
