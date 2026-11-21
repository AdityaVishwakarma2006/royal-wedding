const familyBranches = [
  {
    side: "THE GROOM'S FAMILY",
    name: "Aman Deshlahara",
    members: [
      "Father · Pukhraj Deshlahara",
      "Mother · Late Kalpana Deshlahara",
      "Grandfather · Late Dhanraj Deshlahara",
      "Grandmother · Late Manak Bai Deshlahara",
    ],
  },
  {
    side: "THE BRIDE'S FAMILY",
    name: "Prachi Parakh",
    members: [
      "Father · Late Mahaveer Chandji Parakh",
      "Mother · Nigina Ji Parakh",
      "Grandfather · Late Madanlal Ji Parakh",
      "Grandmother · Late Leela Bai Parakh",
    ],
  },
];

const familyGreetings = [
  {
    title: "With love and regards",
    traditional: "विनीत",
    names: [
      "Jethmal",
      "Hastimal",
      "Sampat",
      "Madan",
      "Gulaab",
      "Gautam",
      "Padamchand",
      "Santosh",
      "Vinod",
      "Manoj",
      "Ankit",
      "Divyansh",
      "and the entire Deshlahara family",
    ],
  },
  {
    title: "Warm welcome",
    traditional: "स्वागतत्सुक",
    names: [
      "Shrimati Shobha & Amarchand Deshlahara",
      "Shrimati Nirmala & Anopchand Deshlahara",
      "Shrimati Saroj & Dharamchand Deshlahara",
      "Pukhraj Deshlahara",
      "Shrimati Kavita & Ganesh Deshlahara",
      "Kunal Deshlahara",
    ],
  },
  {
    title: "Guests of honour",
    traditional: "सम्मान हमारे आँगन की",
    names: [
      "Shrimati Pooja & Mahendra Chopda",
      "Shrimati Khushbu & Purshottam Bohra",
      "Shrimati Poonam",
      "Swati",
      "Naysha",
    ],
  },
];

const familySides = [
  {
    title: "Sehra Paksh",
    names: ["Pukhraj Deshlahara", "Shruti & Sahil Deshlahara"],
    location: "Charoda, CG",
  },
  {
    title: "Chunri Paksh",
    names: ["Nigina Ji Parakh", "Sambhav Ji Parakh"],
    location: "Raipur, CG",
  },
  {
    title: "Mayra Paksh",
    names: [
      "Nagraj Ji",
      "Shrimati Sandhya Ji",
      "Jitendra Ji",
      "Nilesh Ji Bothra",
      "Sameer Ji",
      "Shubham Ji",
      "Arham Ji",
    ],
    location: "Rajim, CG",
  },
];

function NameList({ names }) {
  return (
    <ul className="family-name-list">
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default function FamilyScroll() {
  return (
    <section
      className="family-section section-padding"
      id="families"
      aria-labelledby="family-heading"
    >
      <div className="section-label family-section-label reveal">
        <span>02 — OUR ROOTS</span>
        <span>THE FAMILIES</span>
      </div>

      <div className="family-heading reveal">
        <p className="handwritten">A legacy of love and blessings</p>
        <h2 id="family-heading">
          Two families,
          <br />
          <span>one celebration.</span>
        </h2>
        <p>
          With the love and blessings of our families, we invite you to
          celebrate together.
        </p>
      </div>

      <div className="family-scroll reveal">
        <div className="family-scroll-cap" aria-hidden="true" />
        <div className="family-scroll-paper">
          <div className="family-scroll-title">
            <span>✧</span>
            <p>OUR FAMILY TREE</p>
            <span>✧</span>
          </div>

          <div className="family-branches">
            {familyBranches.map((branch) => (
              <article className="family-branch" key={branch.side}>
                <p className="family-card-eyebrow">{branch.side}</p>
                <h3>{branch.name}</h3>
                <div className="family-card-divider">✦</div>
                <NameList names={branch.members} />
              </article>
            ))}
          </div>

          <div className="family-greetings">
            {familyGreetings.map((group) => (
              <article className="family-greeting-card" key={group.title}>
                <p className="family-card-eyebrow">{group.traditional}</p>
                <h3>{group.title}</h3>
                <NameList names={group.names} />
              </article>
            ))}
          </div>

          <div className="family-side-heading">
            <span />
            <h3>With blessings from</h3>
            <span />
          </div>

          <div className="family-side-groups">
            {familySides.map((group) => (
              <article className="family-side-card" key={group.title}>
                <h4>{group.title}</h4>
                <NameList names={group.names} />
                <p className="family-location">{group.location}</p>
              </article>
            ))}
          </div>

          <div className="family-little-hosts">
            <p className="family-card-eyebrow">A NOTE FROM THE LITTLE ONES</p>
            <p>
              Abhigya & Abhishree invite you to their mama&apos;s wedding.
            </p>
            <p>Sarthak & Arhan can&apos;t wait to see you at their chacha&apos;s wedding.</p>
          </div>
        </div>
        <div className="family-scroll-cap family-scroll-cap-bottom" aria-hidden="true" />
      </div>
    </section>
  );
}
