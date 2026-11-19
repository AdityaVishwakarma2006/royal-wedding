
"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./envelope.css";

gsap.registerPlugin(useGSAP);

export default function OpeningEnvelope({ onOpen }) {
  const container = useRef(null);
  const timeline = useRef(null);

  useGSAP(
    () => {
      timeline.current = gsap.timeline({ paused: true });

      timeline.current
        .to(".wax-seal", {
          scale: 0,
          rotation: 25,
          opacity: 0,
          duration: 0.35,
          ease: "back.in(2)",
        })
        .to(
          ".envelope-flap",
          {
            rotateX: 180,
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.05"
        )
        .to(
          ".invitation-card",
          {
            y: -210,
            duration: 1.1,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .to(".envelope-scene", {
          scale: 1.05,
          opacity: 0,
          duration: 0.65,
          ease: "power2.inOut",
        })
        .to(
          container.current,
          {
            opacity: 0,
            duration: 0.5,
            onComplete: () => onOpen?.(),
          },
          "-=0.45"
        );
    },
    { scope: container }
  );

  const openInvitation = () => {
    if (timeline.current?.isActive()) return;
    timeline.current?.play();
  };

  return (
    <div ref={container} className="envelope-overlay">

      <div className="envelope-heading">
        <p className="ganesh-symbol">॥ श्री गणेशाय नमः ॥</p>
        <p className="envelope-subtitle">
          एक शुभ अवसर, एक नई शुरुआत
        </p>
      </div>

      <div className="envelope-scene">

        <div className="envelope">

          <div className="invitation-card">
            <div className="card-border">
              <span className="card-symbol">❋</span>
              <h2>शुभ विवाह</h2>
              <p>सपरिवार सादर आमंत्रित</p>
              <div className="card-divider" />
              <span className="card-names">
                A Celebration of Love
              </span>
            </div>
          </div>

          <div className="envelope-back" />

          <div className="envelope-front">
            <div className="envelope-fold left-fold" />
            <div className="envelope-fold right-fold" />
            <div className="envelope-fold bottom-fold" />
          </div>

          <div className="envelope-flap" />

          <button
            className="wax-seal"
            onClick={openInvitation}
            aria-label="Open wedding invitation"
          >
            <span>ॐ</span>
          </button>

        </div>
      </div>

      <button
        className="open-invitation-button"
        onClick={openInvitation}
      >
        निमंत्रण खोलें
        <span>✦</span>
      </button>

      <p className="envelope-hint">
        आमंत्रण खोलने हेतु स्पर्श करें
      </p>

      <p className="envelope-footer">
        WITH LOVE & BLESSINGS
      </p>

    </div>
  );
}
