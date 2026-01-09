"use client";
export default function Skills() {
  const cardStyle = {
    background: "#111827",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 0 20px rgba(56,189,248,0.15)",
    transition: "all 0.35s ease",
    cursor: "pointer",
  };

  return (
    <section
      id="skills"
      style={{
        background: "#0b1120",
        padding: "80px 20px",
        color: "#e5e7eb",
      }}
    >
      <h2
        style={{
          fontSize: "36px",
          color: "#38bdf8",
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        Skills
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {[
          {
            title: "Programming",
            items: ["C", "C++", "Java", "JavaScript"],
          },
          {
            title: "Web Development",
            items: ["HTML", "CSS", "React", "MERN Stack"],
          },
          {
            title: "Tools",
            items: ["Git", "GitHub", "VS Code", "Vercel"],
          },
        ].map((skill, i) => (
          <div
            key={i}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(34,211,238,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(56,189,248,0.15)";
            }}
          >
            <h3
              style={{
                color: "#22d3ee",
                marginBottom: "15px",
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              {skill.title}
            </h3>

            <ul style={{ lineHeight: "1.8", textAlign: "center" }}>
              {skill.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
