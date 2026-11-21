
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
        title: "कुमकुम",
        subtitle: "Kumkum Ceremony",
        description: "शुभ विवाह समारोहों का मंगलमय आरंभ।",
        icon: "✦",
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
        title: "हाथकम",
        subtitle: "Hathkam Ceremony",
        description: "परिवार सहित हाथकम समारोह में सादर आमंत्रित।",
        icon: "❋",
      },
      {
        time: "10:30",
        period: "सुबह",
        title: "कार्निवल",
        subtitle: "Carnival",
        description: "परिवार सहित कार्निवल समारोह में सादर आमंत्रित।",
        icon: "❋",
      },
      {
        time: "14:30",
        period: "दोपहर",
        title: "बीरा मायरा",
        subtitle: "Bira Mayra",
        description: "परिवार सहित बीरा मायरा समारोह में सादर आमंत्रित।",
        icon: "❋",
      },
      {
        time: "20:00",
        period: "रात्रि",
        title: "संगीत",
        subtitle: "Sangeet",
        description: "संगीत समारोह में सपरिवार पधारें।",
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
        subtitle: "Nikasi",
        description: "निकासी समारोह में सपरिवार पधारें।",
        icon: "♛",
      },
      {
        time: "12:00",
        period: "दोपहर",
        title: "फेरे",
        subtitle: "Fera",
        description: "विवाह के फेरों के शुभ अवसर पर सपरिवार पधारें।",
        icon: "✧",
      },
      {
        time: "20:00",
        period: "रात्रि",
        title: "स्वागत समारोह",
        subtitle: "Reception",
        description: "स्वागत समारोह में सपरिवार पधारें।",
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
          Celebrations across three memorable dates
        </p>

        <div className="timeline-flourish">✧ ❋ ✧</div>
      </div>

      <div className="timeline-days">
        {weddingDays.map((day) => (
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
