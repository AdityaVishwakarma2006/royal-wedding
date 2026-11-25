
"use client";

import { useEffect } from "react";
import { wedding } from "@/data/wedding";

export default function EventsTimeline() {
  useEffect(() => {
    const elements = document.querySelectorAll(".timeline-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="wedding-timeline section-padding" id="events">
      <div className="timeline-heading timeline-reveal">
        <span className="timeline-eyebrow">
          THE WEDDING CELEBRATIONS
        </span>

        <h2>
          शुभ <span>विवाह</span> आयोजन
        </h2>

        <p className="timeline-heading-english">
          The celebrations, dates and timings
        </p>

        <div className="timeline-flourish">✧ ❋ ✧</div>
      </div>

      <div className="timeline-days">
        {wedding.eventDays.map((day) => (
          <div className="timeline-day" key={day.date + day.month}>
            <div className="timeline-date-marker timeline-reveal">
              <div className="timeline-date-circle">
                <span>{day.date}</span>
                <small>{day.month.slice(0, 3)}</small>
              </div>

              <div className="timeline-date-details">
                <span>{day.weekday}</span>
                <h3>{day.hindiMonth} {day.year}</h3>
                <small>{day.month} {day.date}, {day.year}</small>
                <p className="timeline-date-location">{day.venue}</p>
              </div>
            </div>

            <div className="timeline-events">
              {day.events.map((event, eventIndex) => (
                <article
                  className="timeline-event timeline-reveal"
                  key={`${day.date}-${event.time}-${eventIndex}`}
                >
                  <div className="timeline-track">
                    <div className="timeline-dot">
                      {event.icon}
                    </div>
                  </div>

                  <div className="timeline-event-card">
                    <div className="timeline-event-top">
                      <span className="timeline-period">
                        {event.period}
                      </span>

                      <span className="timeline-time">
                        {event.time}
                      </span>
                    </div>

                    <div className="timeline-event-body">
                      <div>
                        <h4>{event.title}</h4>
                        <p className="timeline-event-subtitle">
                          {event.subtitle}
                        </p>
                      </div>

                      <span className="timeline-event-symbol">
                        {event.icon}
                      </span>
                    </div>

                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="timeline-footer timeline-reveal">
        <span>✦</span>
        <p>आपका आगमन हमारे लिए सौभाग्य की बात होगी।</p>
        <small>YOUR PRESENCE IS OUR PRESENT</small>
        <span>✦</span>
      </div>
    </section>
  );
}
