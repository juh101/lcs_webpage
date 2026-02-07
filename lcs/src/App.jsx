import { useState } from "react";
import "./App.css";

const competitions = [
  {
    id: 2,
    name: "🚪 Terminal Exit",
    description: `Terminal Exit is a survival-based elimination coding contest organized by LCS (Learn Code Solve).

Core Idea:
This contest tests your ability to code accurately under extreme pressure.
One wrong move or slow submission can eliminate you instantly.

Round 1: Online Qualifier
• Platform: HackerRank
• Duration: 90 Minutes
• DSA & Algorithmic problems
• Only top performers qualify

Round 2: Elimination Arena (Offline)
📍 Venue: IIIT Surat Campus
• Progressive elimination rounds
• Difficulty increases each round
• Lowest performers eliminated
• No second chances

Scoring & Tie-Breakers:
• Correctness + efficiency
• Least time penalty wins ties

Rules:
• Languages: C++, Java, Python
• AI tools strictly prohibited
• Any unfair practice → Disqualification

Prizes:
🥇 ₹8,000
🥈 ₹5,000
🥉 ₹2,000
(All finalists receive certificates)

Eligibility:
• Undergraduate students
• Individual participation

📞 Contacts:
Harsh Khulbe – 8810371695
Anubhav Rajput – 8076884348`,
    link: "https://unstop.com/hackathons/terminal-exit-spring-fiesta-indian-institute-of-information-technology-iiit-surat-1635821",
  },
  {
    id: 1,
    name: "📈 CGPA++: The Semester Supremacy Challenge",
    description: `CGPA++ is a complete academic and technical evaluation arena by LCS.

Objective:
To evaluate academic consistency, subject mastery, and interview-level understanding.

Phase 1: Online Qualifier
• Platform: HackerRank
• DSA & logical problem solving
• Top 12 qualify for offline rounds

Phase 2: Offline Rounds
📍 Venue: IIIT Surat Campus

🔹 Academic Evaluation:
• 7 semesters
• 2 subjects per semester
• 14 subjects total
• SGPA per semester
• Final CGPA computed

🔹 Interview Round:
• Technical & conceptual questions
• Knowledge depth + communication

Final Ranking:
• Academic round + interview performance

Eligibility:
• Undergraduate students
• Individual participation

Rules:
• Professional conduct mandatory
• LCS decision final

Rewards:
🥇 ₹8,000 + Internship (IIIT Surat CSE)
🥈 ₹5,000
🥉 ₹2,000

All participants receive performance marksheet

Contacts:
Harsh Khulbe – 8810371695
Anubhav Rajput – 8076884348`,
    link: "https://unstop.com/hackathons/cgpa-the-semester-supremacy-challenge-spring-fiesta-indian-institute-of-information-technology-iiit-surat-1633433?utm_medium=Share&utm_source=logged_out_user&utm_campaign=Online_coding_challenge",
  },
  {
    id: 3,
    name: "⚔️Code of Thrones – The Ultimate Team Coding Battle",
    description: `Code of Thrones is an ICPC-style team-based coding contest organized by LCS.

Core Focus:
Teamwork, logic, speed, and accuracy.

Team Structure:
• Exactly 3 participants
• One laptop per team
• Team members sit together

Format:
• 6 jumbled algorithmic problems
• Time limit: 2 hours
• One system per team

Ranking:
• Number of correct solutions
• Total time taken

Tie-Breaker:
• Least cumulative time wins

Tools:
• Languages: C++, Java, Python
• AI tools strictly prohibited

Disqualification:
• Plagiarism or misconduct
• Committee decision final

Prizes:
🥇 ₹8,000 (Team)
🥈 ₹5,000
🥉 ₹2,000

Contacts:
Harsh Khulbe – 8810371695
Anubhav Rajput – 8076884348`,
    link: "https://unstop.com/p/codeclash-spring-fiesta-indian-institute-of-information-technology-iiit-surat-1633364?lb=WZM0l30B&utm_medium=Share&utm_source=sparssax54243&utm_campaign=Online_coding_challenge",
  },
];

export default function App() {
  const [activeId, setActiveId] = useState(0); // default open

  return (
    <div className="app">
      <header className="header">
        <img src="/logo.jpeg" alt="Logo" className="logo" />
        <h1>LCS Competitions Arena</h1>
      </header>

      <section className="oval-section">
        {competitions.map((comp) => (
          <button
            key={comp.id}
            className={`oval ${activeId === comp.id ? "active" : ""}`}
            onClick={() => setActiveId(comp.id)}
          >
            {comp.name}
          </button>
        ))}
      </section>

      <section className="details">
        {competitions.map(
          (comp) =>
            activeId === comp.id && (
              <div key={comp.id} className="card">
                <h2>{comp.name}</h2>
                <pre>{comp.description}</pre>
                <a
                  href={comp.link}
                  className="register-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </div>
            ),
        )}
      </section>

      <section className="about">
        <h2>About Learn Code Solve</h2>
        <p>
          LCS is a student-driven technical community focused on
          problem-solving, academic consistency, and industry-ready skills
          through high-quality competitions.
        </p>
      </section>

      <footer className="footer">
        <div className="socials">
          <a href="https://www.instagram.com/lcs.iiitsurat?igsh=b2Fmdmp2Nm1ocHJx">Instagram</a>
          <a href="https://chat.whatsapp.com/DtCFcjLSWkT3lyWF1sgFNs">WhatsApp</a>
        </div>
        <p>© 2026 Learn Code Solve</p>
      </footer>
    </div>
  );
}
