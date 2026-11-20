
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
  CalendarDays,
  Clock3,
  ArrowDown,
  ArrowUpRight,
  Heart,
} from "lucide-react";

import { wedding } from "@/data/wedding";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Countdown() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(wedding.dates.start).getTime();

    const update = () => {
      const distance = target - Date.now();

      if (distance <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTime({
        days: Math.floor(distance / 86400000),
        hours: Math.floor((distance % 86400000) / 3600000),
        minutes: Math.floor((distance % 3600000) / 60000),
        seconds: Math.floor((distance % 60000) / 1000),
      });
    };

    update();
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      {Object.entries(time).map(([label, value]) => (
        <div className="countdown-item" key={label}>
          <span className="countdown-number">
            {String(value).padStart(2, "0")}
          </span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

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

      gsap.utils.toArray(".event-card").forEach((element, index) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            x: index % 2 === 0 ? -45 : 45,
          },
          {
            opacity: 1,
            x: 0,
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

      {/* COUPLE */}

      <section className="couple-section section-padding">
        <div className="section-label reveal">
          <span>01 — THE PEOPLE</span>
          <span>MEET THE COUPLE</span>
        </div>

        <div className="couple-heading reveal">
          <p className="handwritten">Two souls, one story</p>
          <h2>
            Made for
            <br />
            <span>each other.</span>
          </h2>
        </div>

        <div className="couple-grid">
          <div className="person person-groom reveal">
            <div className="person-photo">
              <Photo
                src={wedding.photographs.groom}
                alt="Aman"
              />
            </div>
            <p className="person-role">THE GROOM</p>
            <h3>{wedding.groom}</h3>
            <p className="person-note">A little bit of tradition, a lot of love.</p>
          </div>

          <div className="couple-heart reveal">
            <Heart size={32} strokeWidth={1} />
            <span>TOGETHER</span>
          </div>

          <div className="person person-bride reveal">
            <div className="person-photo">
              <Photo
                src={wedding.photographs.bride}
                alt="Prachi"
              />
            </div>
            <p className="person-role">THE BRIDE</p>
            <h3>{wedding.bride}</h3>
            <p className="person-note">Grace, warmth and endless smiles.</p>
          </div>
        </div>

        <div className="couple-bottom-note reveal">
          <span>✳</span>
          A story written in the stars.
        </div>
      </section>

<WeddingDecor variant="lotus" />

{/* INVITATION */}

      <section id="invitation" className="invitation-section section-padding">
        <div className="invitation-decoration floating-flower">✿</div>

        <div className="invitation-content reveal">
          <p className="invitation-top">॥ श्री गणेशाय नमः ॥</p>

          <div className="invitation-ornament">❋</div>

          <p className="invitation-kicker">स्नेह निमंत्रण</p>

          <h2>शुभ विवाह</h2>

          <div className="invitation-divider">
            <span />
            ✦
            <span />
          </div>

          <p className="invitation-copy">
            हर्ष और उल्लास के इस पावन अवसर पर,
            <br />
            हमारे परिवारों के मिलन एवं
            <br />
            अमन और प्राची के शुभ विवाह में
            <br />
            आपकी गरिमामयी उपस्थिति
            <br />
            एवं शुभाशीर्वाद की अपेक्षा है।
          </p>

          <p className="invitation-ending">
            सपरिवार पधारकर हमें अनुगृहीत करें।
          </p>

          <div className="invitation-names">
            {wedding.groom} <span>&</span> {wedding.bride}
          </div>

          <p className="invitation-date">
            {wedding.dates.hindi}
          </p>
        </div>
      </section>

<WeddingDecor variant="mandala" />

{/* COUNTDOWN */}

      <section className="countdown-section section-padding">
        <div className="reveal">
          <p className="section-eyebrow">THE BIG DAY IS APPROACHING</p>
          <h2>Counting down to forever.</h2>
          <p className="countdown-hindi">शुभ घड़ी का इंतज़ार</p>
          <Countdown />
        </div>
      </section>

<WeddingDecor variant="lotus" />

<EventsTimeline />
<WeddingDecor variant="mandala" />

      <section className="events-section section-padding">
        <div className="section-label reveal">
          <span>02 — THE CELEBRATIONS</span>
          <span>OUR WEDDING FESTIVITIES</span>
        </div>

        <div className="events-heading reveal">
          <p className="handwritten">Save the dates</p>
          <h2>
            A celebration
            <br />
            <span>of togetherness.</span>
          </h2>
        </div>

        <div className="event-list">
          {wedding.events.map((event, index) => (
            <article className="event-card" key={event.day}>
              <div className="event-date">
                <span>{event.day}</span>
                <small>{event.month}</small>
              </div>

              <div className="event-info">
                <p className="event-number">
                  DAY 0{index + 1}
                </p>
                <h3>{event.title}</h3>
                <p className="event-english">
                  {event.englishTitle}
                </p>
                <p className="event-description">
                  {event.description}
                </p>
                <div className="event-time">
                  <Clock3 size={15} />
                  {event.time}
                </div>
              </div>

              <div className="event-flower">✿</div>
            </article>
          ))}
        </div>

        <p className="events-note reveal">
          More beautiful moments await. कार्यक्रम का विस्तृत विवरण शीघ्र साझा होगा।
        </p>
      </section>


<WeddingDecor variant="lotus" />

      {/* VENUE */}

      <section className="venue-section section-padding">
        <div className="venue-inner reveal">
          <p className="section-eyebrow">WHERE WE CELEBRATE</p>

          <div className="venue-symbol">⌖</div>

          <h2>Let's meet at</h2>
          <h3>{wedding.venue.name}</h3>

          <p className="venue-hindi">
            {wedding.venue.hindiName}
          </p>

          <div className="venue-divider" />

          <p className="venue-address">
            {wedding.venue.address}
          </p>

          <p className="venue-date">
            05 — 06 DECEMBER 2026
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

<WeddingDecor variant="mandala" />


      {/* FINAL COUNTDOWN / CLOSING */}

      <section className="closing-section section-padding">
        <div className="closing-content reveal">
          <div className="closing-logo">
            <Image
              src="/images/heroicon/aman-prachi-logo.jpeg"
              alt=""
              width={440}
              height={560}
            />
          </div>

          <p className="closing-small">
            TWO FAMILIES. TWO HEARTS. ONE FOREVER.
          </p>

          <h2>
            एक नई शुरुआत,
            <br />
            <span>सात जन्मों का साथ।</span>
          </h2>

          <p className="closing-names">
            {wedding.groom} & {wedding.bride}
          </p>

          <div className="closing-divider">✦</div>

          <p className="closing-thanks">
            आपकी उपस्थिति ही हमारे लिए
            <br />
            सबसे बड़ा उपहार है।
          </p>

          <p className="closing-footer">
            WITH LOVE, THE FAMILIES
          </p>
        </div>
      </section>

    </main>
  );
}
