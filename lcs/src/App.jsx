import { useState } from "react";
import "./App.css";

const competitions = [
  {
    id: 1,
    name: "🚪 Terminal Exit",
    description: `Terminal Exit is a survival-based elimination coding contest organized by LCS (Learn Code Solve).

🧠 Core Idea:
This contest is designed to test how well you perform under extreme pressure. There are no second chances — one slow or incorrect submission can end your journey instantly.

⚡ Round 1: Online Qualifier
• Platform: HackerRank
• Duration: 90 Minutes
• Type: DSA & Algorithmic Problem Solving
• Rule: Only top performers qualify, all others are eliminated

🔥 Round 2: Elimination Arena (Offline)
📍 Venue: IIIT Surat Campus
• Multiple progressive elimination rounds
• Difficulty increases after every stage
• Lowest performers are eliminated in each round
• No retries, no mercy

📊 Scoring & Tie-Breakers:
• Based on correctness and efficiency
• In case of a tie, least accumulated time penalty wins
• Every second matters ⏱️

🚫 Strict Rules:
• Languages allowed: C++, Java, Python
• AI tools (ChatGPT, Copilot, Gemini) strictly prohibited
• Any unfair practice → instant disqualification

💰 Prize Pool:
🥇 Winner: ₹8,000 + Certificate of Excellence
🥈 Runner-Up: ₹5,000 + Certificate of Excellence
🥉 Second Runner-Up: ₹2,000 + Certificate of Excellence
🎖️ All finalists receive participation certificates

🎓 Eligibility:
• Open to students from any recognized college
• Must be enrolled in an undergraduate program
• Individual participation only

📞 Contacts:
Harsh Khulbe – 8810371695
Anubhav Rajput – 8076884348`,
    link: "#",
  },
  {
    id: 2,
    name: "📈 CGPA++: The Semester Supremacy Challenge",
    description: `CGPA++ is a complete academic and technical evaluation arena organized by LCS (Learn Code Solve).

🎯 Objective:
To evaluate students beyond coding by simulating a real college + industry assessment model where consistency across semesters truly matters.

🧩 Phase 1: Online Qualifier
• Platform: HackerRank
• Focus: DSA & logical problem solving
• Selection: Only top 12 participants qualify for offline rounds
• Open to students from all colleges

🏫 Phase 2: Offline Evaluation Rounds
📍 Venue: IIIT Surat Campus

🔹 Round 1: Academic Evaluation Round
• Coverage: 7 semesters
• Subjects: 2 subjects per semester
• Total subjects evaluated: 14
• SGPA calculated for each semester
• Final CGPA derived from all semester SGPAs

🔹 Round 2: Interview Round
• Only top performers from Round 1 qualify
• Interview-level technical & conceptual questions
• Focus on depth of knowledge, clarity, and confidence

📊 Final Evaluation Protocol:
Final ranking is based on combined performance of:
• Academic Evaluation Round
• Interview Round

🎓 Eligibility:
• Open to students from any recognized college
• Must be currently enrolled in an undergraduate program
• Individual participation only

⚖️ Rules & Discipline:
• Platform: HackerRank (Online Round)
• Strict prohibition of unfair practices
• Professional conduct mandatory
• Decision of LCS is final and binding

💰 Prize Pool & Rewards:
🥇 Winner:
• ₹8,000 Cash Prize
• Internship under CSE Faculty, IIIT Surat
• Certificate of Excellence

🥈 Runner-Up:
• ₹5,000 Cash Prize
• Certificate of Excellence

🥉 Second Runner-Up:
• ₹2,000 Cash Prize
• Certificate of Excellence

📄 All Participants:
• Performance-based marksheet from Academic Evaluation Round

📞 Contacts:
Harsh Khulbe – 8810371695
Anubhav Rajput – 8076884348`,
    link: "#",
  },
  {
    id: 3,
    name: "👥💻 Code of Thrones – The Ultimate Team Coding Battle",
    description: `Code of Thrones is a high-intensity ICPC-style team-based programming contest organized by LCS (Learn Code Solve).

🤝 Core Focus:
Teamwork, logical thinking, speed, and accuracy under pressure.

👥 Team Structure:
• Exactly 3 participants per team
• All team members must sit together
• Only one laptop per team is allowed

🧩 Competition Format:
• ICPC-style contest with jumbled problem sets
• Total problems: 6 algorithmic challenges
• Time limit: 2 hours
• Teams compete using a single system

🏆 Ranking Criteria:
Top 3 teams decided based on:
• Number of correct solutions
• Total time taken

⚖️ Tie-Breaker Rules:
• Team with least cumulative time is ranked higher

🛠️ Allowed Tools & Environment:
• Languages: C++, Java, Python
• Environment: Online / Offline IDE
• Internet access may be restricted
• AI tools strictly prohibited

🚫 Code of Conduct & Disqualification:
• Plagiarism, cheating, or misconduct leads to immediate disqualification
• Unauthorized communication is not allowed
• Organizing committee’s decision is final and binding

💰 Prize Pool:
🥇 Winner Team: ₹8,000 + Certificates
🥈 Runner-Up Team: ₹5,000 + Certificates
🥉 Second Runner-Up Team: ₹2,000 + Certificates

📞 Contacts:
Harsh Khulbe – 8810371695
Anubhav Rajput – 8076884348`,
    link: "#",
  },
];

export default function App() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <img src="/logo.png" alt="Logo" className="logo" />
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
                <a href={comp.link} className="register-btn">
                  Register Now
                </a>
              </div>
            )
        )}
      </section>

      <section className="about">
        <h2>About LCS (Learn Code Solve)</h2>
        <p>
          LCS is a student-driven technical community focused on building strong
          problem-solving, academic consistency, and industry-ready skills
          through high-quality competitions.
        </p>
      </section>

      <footer className="footer">
        <div className="socials">
          <a href="#">Instagram</a>
          <a href="#">WhatsApp</a>
        </div>
        <p>© 2026 Learn Code Solve</p>
      </footer>
    </div>
  );
}
