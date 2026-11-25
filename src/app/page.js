
"use client";

import HaveliEntrance from "@/components/HaveliEntrance/HaveliEntrance";
import WeddingDecor from "@/components/WeddingDecor/WeddingDecor";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import EventsTimeline from "@/components/EventsTimeline/EventsTimeline";

import {
  MapPin,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

import { wedding } from "@/data/wedding";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Photo({ src, alt, className = "" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth === 0) {
      setImageFailed(true);
    }
  }, [src]);

  return (
    <div className={`photo-frame ${className}`}>
      <div className="photo-placeholder">
        <span>{alt}</span>
      </div>

      {!imageFailed && (
        <img
          ref={imageRef}
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      )}
    </div>
  );
}

export default function Home() {
  const main = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (reducedMotion) return;

      const intro = gsap.timeline();

      intro
        .from(".hero-logo", {
          opacity: 0,
          scale: 0.65,
          duration: 1.3,
          ease: "power3.out",
        })
        .from(
          ".hero-eyebrow, .hero-title, .hero-date",
          {
            opacity: 0,
            y: 35,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-photo",
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
            duration: 1.3,
            ease: "power3.out",
          },
          "-=0.6"
        );

      gsap.utils.toArray(".reveal").forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 55,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 88%",
              once: true,
            },
          }
        );
      });

      gsap.to(".floating-flower", {
        y: -18,
        rotation: 8,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: main }
  );

  return (
    <main ref={main}>
      {/* HERO */}

      <section className="hero-section">
        <div className="hero-grain" />

        <HaveliEntrance />

        <div className="hero-top">
          <span className="hero-small">THE WEDDING CELEBRATION</span>
          <span className="hero-small">EST. 2026</span>
        </div>

        <div className="hero-content">
          <div className="hero-logo">
            <Image
              src="/images/heroicon/aman-prachi-logo.jpeg"
              alt="Aman and Prachi's wedding logo"
              width={440}
              height={560}
              priority
            />
          </div>

          <p className="hero-eyebrow">
            ॥ श्री गणेशाय नमः ॥
          </p>

          <p className="hero-subtitle">
            TWO HEARTS. ONE BEAUTIFUL BEGINNING.
          </p>

          <h1 className="hero-title">
            {wedding.groom}
            <span className="hero-ampersand">&</span>
            {wedding.bride}
          </h1>

          <p className="hero-date">
            {wedding.dates.display}
          </p>

          <a className="hero-venue" href="#venue">
            <MapPin size={15} />
            {wedding.venue.hindiName} · रायपुर
          </a>

          <div className="hero-photo">
            <Photo
              src={wedding.photographs.hero}
              alt="Aman and Prachi"
            />
          </div>

          <p className="hero-hindi">
            प्रेम के इस पावन बंधन में
            <br />
            आपका सपरिवार स्वागत है।
          </p>

          <a href="#invitation" className="scroll-indicator">
            SCROLL TO EXPLORE
            <ArrowDown size={17} />
          </a>
        </div>

        <div className="hero-bottom">
          <span>WITH LOVE & BLESSINGS</span>
          <span>01 / 09</span>
        </div>
      </section>

      <EventsTimeline />
      <WeddingDecor variant="mandala" />

      <section id="venue" className="venue-section section-padding">
        <div className="venue-inner reveal">
          <p className="section-eyebrow">WHERE WE CELEBRATE</p>

          <div className="venue-symbol">⌖</div>

          <h2>Let&apos;s meet at</h2>
          <h3>{wedding.venue.name}</h3>

          <p className="venue-hindi">
            {wedding.venue.hindiName}
          </p>

          <div className="venue-divider" />

          <p className="venue-address">
            {wedding.venue.address}
          </p>

          <p className="venue-date">
            {wedding.dates.celebrations}
          </p>

          <a
            href={wedding.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="maps-link"
          >
            <MapPin size={18} />
            GET DIRECTIONS
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
