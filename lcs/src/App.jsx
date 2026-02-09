import { useState } from "react";
import "./App.css";

const competitions = [
  {
    id: 1,
    name: "⚔️ Code of Thrones",
    description: `Code of Thrones is a team-based programming contest organized by LCS (Learn Code Solve), IIIT Surat.

Event Timeline:
• Online Screening Round: 11th February (Codeforces)
• Final Event: 14th February (Offline)

Event Details:
• Mode: Team-based contest
• Team Size: Exactly 3 participants
• Format: ICPC-style
• Duration: 2 hours
• Problems: 6 algorithmic problems
• System: One laptop per team

Ranking Criteria:
• Number of problems solved
• Total time taken

Competition Format:
• Jumbled algorithmic problem set
• Teams work together on a single system
• Solutions must pass all test cases

Tie-Breaker:
• Team with least cumulative time ranks higher

Allowed Languages:
• C++, Java, Python

Rules & Conduct:
• Open to all college students
• Plagiarism or code sharing leads to immediate disqualification
• Unauthorized communication or cheating is not allowed
• Decisions of the organizing committee are final and binding

Prize Pool: ₹15,000
🥇 Winner Team: ₹8,000
🥈 Runner-Up Team: ₹5,000
🥉 Second Runner-Up Team: ₹2,000

Additional:
• Certificates for top teams

Contacts:
Harsh Khulbe – 8810371695
Anubhav Rajput – 8076884348`,
    link: "https://unstop.com/hackathons/code-of-thrones-the-ultimate-team-coding-battle-spring-fiesta-indian-institute-of-information-technology-iiit-1637672",
  },

  {
    id: 2,
    name: "📈 CGPA++",
    description: `CGPA++ is an inter-college academic and technical challenge organized by LCS (Learn Code Solve), IIIT Surat.

Event Timeline:
• Online Screening Round: 10th February (Codeforces)
• Offline Rounds: IIIT Surat Campus

Phase 1 — Online Screening Round:
• Platform: Codeforces
• Format: DSA-based problem solving
• Focus: Algorithmic and logical questions
• Selection: Top 100 participants qualify for offline rounds
• Participation: Open to students from all colleges

Phase 2 — Offline Evaluation Rounds:

Round 1: Academic Evaluation Round
• Coverage: 4 semesters
• Subjects: 3 subjects per semester (Total: 12 subjects)
• SGPA calculated for each semester
• Final CGPA derived from all semesters

Round 2: Interview Round
• Interview-level technical and conceptual questions
• Evaluation Criteria:
  - Depth of subject knowledge
  - Problem-solving ability
  - Communication and presentation skills

Final Ranking:
• Combined performance of Academic Evaluation and Interview Round

Eligibility:
• Open to students from any recognized college
• Must be enrolled in an undergraduate program
• Individual participation only

Prize Pool & Rewards:
Total Prize Pool: ₹15,000 (Distributed year-wise)

First Year:
• 1st Prize: ₹2,500
• 2nd Prize: ₹1,500
• 3rd Prize: ₹1,000

Second Year:
• 1st Prize: ₹2,500
• 2nd Prize: ₹1,500
• 3rd Prize: ₹1,000

Third Year:
• 1st Prize: ₹2,500
• 2nd Prize: ₹1,500
• 3rd Prize: ₹1,000

Additional Rewards:
• Certificates of Excellence for winners
• Performance-based marksheet for all participants

Rules:
• Any unfair means or misconduct is strictly prohibited
• Professional conduct is mandatory
• Decisions of LCS and organizers are final and binding

Contacts:
Harsh Khulbe – 8810371695
Anubhav Rajput – 8076884348`,
    link: "https://unstop.com/hackathons/cgpa-the-semester-supremacy-challenge-spring-fiesta-indian-institute-of-information-technology-iiit-surat-1633433",
  },

  {
    id: 3,
    name: "🚪 Terminal Exit",
    description: `Terminal Exit is a unique confidence-based elimination coding contest organized by LCS (Learn Code Solve).

Event Timeline:
• Online Screening Round: 10th February (Codeforces)
• Final Live Event: 13th February (Offline)

Event Details (Final Round):
• Mode: Offline (Live Event)
• Participation: Individual
• Rounds: 4–5
• Duration: 30 minutes per round
• Difficulty increases each round

Round Format:
1) Analysis & Hand Raise (5 min)
   • Problem displayed on projector
   • Confident participants opt in (FCFS basis)

2) Coding Phase (20 min)
   • Selected participants solve the problem
   • Standard input/output format
   • Problems from DSA & Competitive Programming

3) Evaluation Phase (5 min)
   • Result announcement
   • Leaderboard update

Elimination & Scoring:
• Solved → Earn points and continue
• Failed → Eliminated, score frozen
• Points increase with difficulty
• Live leaderboard maintained

Prize Pool: ₹15,000
• 1st Prize: ₹5,000
• 2nd Prize: ₹3,000
• 3rd Prize: ₹2,000
• Exclusive T-shirt for Top 10

Rules:
• No unfair means or external help
• Strict time limits
• Judges’ decisions are final

Contacts:
Harsh Khulbe – 8810371695
Anubhav Rajput – 8076884348`,
    link: "https://unstop.com/hackathons/terminal-exit-spring-fiesta-indian-institute-of-information-technology-iiit-surat-1635821",
  },
];

export default function App() {
  const [activeId, setActiveId] = useState(1);

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
            )
        )}
      </section>

      <section className="about">
        <h2>About Learn Code Solve</h2>
        <p>
          LCS is the official coding club of IIIT Surat, focused on building strong
          problem-solving skills, academic consistency, and industry-ready
          thinking through competitive programming, evaluations, and peer-driven
          learning.
        </p>
      </section>

      <footer className="footer">
        <div className="socials">
          <a href="https://www.instagram.com/lcs.iiitsurat">Instagram</a>
          <a href="https://chat.whatsapp.com/DtCFcjLSWkT3lyWF1sgFNs">WhatsApp</a>
        </div>
        <p>© 2026 Learn Code Solve</p>
      </footer>
    </div>
  );
}
