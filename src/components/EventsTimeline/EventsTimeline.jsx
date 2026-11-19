
"use client";

import { useEffect } from "react";

const weddingDays = [
  {
    date: "28",
    month: "NOVEMBER",
    hindiMonth: "नवंबर",
    year: "2026",
    weekday: "शनिवार",
    events: [
      {
        time: "09:00",
        period: "सुबह",
        title: "विशेष आयोजन",
        subtitle: "Special Ceremony",
        description: "इस आयोजन का नाम परिवार से पुष्टि होने पर जोड़ा जाएगा।",
        icon: "✦",
        pending: true,
      },
    ],
  },
  {
    date: "05",
    month: "DECEMBER",
    hindiMonth: "दिसंबर",
    year: "2026",
    weekday: "शनिवार",
    events: [
      {
        time: "08:30",
        period: "सुबह",
        title: "प्रथम आयोजन",
        subtitle: "Morning Ceremony",
        description: "मंगलमय विवाह समारोह का शुभारंभ।",
        icon: "❋",
        pending: true,
      },
      {
        time: "09:30",
        period: "सुबह",
        title: "द्वितीय आयोजन",
        subtitle: "Morning Celebration",
        description: "परिवारजनों के साथ मांगलिक आयोजन।",
        icon: "❋",
        pending: true,
      },
      {
        time: "14:30",
        period: "दोपहर",
        title: "मायरा",
        subtitle: "Mayra Ceremony",
        description: "नेहरा / मायरा समारोह — नाम की पुष्टि अपेक्षित।",
        icon: "❋",
        pending: true,
      },
      {
        time: "20:00",
        period: "रात्रि",
        title: "संगीत",
        subtitle: "The Musical Evening",
        description: "गीत, संगीत, नृत्य और खुशियों से सजी एक यादगार शाम।",
        icon: "♫",
      },
    ],
  },
  {
    date: "06",
    month: "DECEMBER",
    hindiMonth: "दिसंबर",
    year: "2026",
    weekday: "रविवार",
    events: [
      {
        time: "10:00",
        period: "सुबह",
        title: "निकासी",
        subtitle: "The Wedding Procession",
        description: "बैंड-बाजे और शाही अंदाज़ में बारात का प्रस्थान।",
        icon: "♛",
      },
      {
        time: "12:00",
        period: "दोपहर",
        title: "फेरे",
        subtitle: "The Sacred Wedding Vows",
        description: "अग्नि को साक्षी मानकर सात जन्मों का पवित्र बंधन।",
        icon: "✧",
      },
      {
        time: "15:00",
        period: "दोपहर",
        title: "विशेष आयोजन",
        subtitle: "Afternoon Ceremony",
        description: "इस आयोजन का नाम परिवार से पुष्टि होने पर जोड़ा जाएगा।",
        icon: "❋",
        pending: true,
      },
      {
        time: "20:00",
        period: "रात्रि",
        title: "स्वागत समारोह",
        subtitle: "The Reception",
        description: "आपकी उपस्थिति से हमारी खुशियों में चार चाँद लगेंगे।",
        icon: "✦",
      },
    ],
  },
];

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
          Three days of love, laughter & celebrations
        </p>

        <div className="timeline-flourish">✧ ❋ ✧</div>
      </div>

      <div className="timeline-days">
        {weddingDays.map((day, dayIndex) => (
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

                    <p className="timeline-event-description">
                      {event.description}
                    </p>
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
