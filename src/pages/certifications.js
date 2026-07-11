import React from "react";
import "../css/certifications.css";
import "@tabler/icons-webfont/dist/tabler-icons.min.css";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Web development with Python",
    issuer: "Ducat Institute",
    year: "2026",
    icon: "ti ti-code",
    side: "left",
    dot: "dot-blue",
  },
  {
    title: "O Level Certification",
    issuer: "NIELIT",
    year: "2023",
    icon: "ti ti-award",
    side: "right",
    dot: "dot-purple",
  },
  {
    title: "pursuing Bechelors of science",
    issuer:"Csjmu kanpur",
    year: "2026",
    icon: "ti ti-world",
    side: "left",
    dot: "dot-cyan",
  },
];

const CertificationTimeline = () => {
  return (
    <section className="cert-wrap">
      <div className="cert-title-icon">
        <i
          className="ti ti-award"
          style={{ color: "#5a9bf5", fontSize: "24px" }}
        ></i>
      </div>

      <h1 className="cert-heading">
        {"< CERTIFICATIONS />"}
      </h1>

      <p className="cert-sub">Professional Learning Journey</p>

      <div className="timeline-area">
        <div className="timeline-line"></div>
        <div className="timeline-top-dot"></div>

        <div className="spacer"></div>
{certifications.map((cert, index) => (
  <motion.div
    key={index}
    className={`timeline-item ${cert.side}`}
    initial={{
      opacity: 0,
      scale: 0.8,
      y: 80,
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    viewport={{
      once: false,
      amount: 0.4,
    }}
    transition={{
      duration: 0.6,
      delay: index * 0.2,
    }}
    whileHover={{
      scale: 1.05,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 18,
      },
    }}
  >
    <div className="timeline-card">
      <div className="card-icon">
        <i className={cert.icon}></i>
      </div>

      <p className="card-title">{cert.title}</p>

      <hr className="card-divider" />

      <p className="card-issuer">{cert.issuer}</p>

      <p className="card-date">
        <i className="ti ti-calendar"></i>
        {cert.year}
      </p>
    </div>

    <div className="timeline-connector"></div>

    <div className={`timeline-dot ${cert.dot}`}></div>
  </motion.div>
))}
      </div>
    </section>
  );
};

export default CertificationTimeline;