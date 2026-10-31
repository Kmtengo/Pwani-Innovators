"use client";
import { useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Search,
  MapPin,
  ChevronDown,
  Check,
  Plus,
  MoreHorizontal,
  LayoutGrid,
  BookOpen,
  Code2,
  FileCode2,
  GitBranch,
  Terminal,
  CheckCircle2,
  Play,
  RotateCcw,
  PanelLeft,
  Compass,
  Leaf,
  Waves,
  LockKeyhole,
} from "lucide-react";

function Window({
  name,
  children,
  dark = false,
}: {
  name: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className={`product-window ${dark ? "dark-window" : ""}`}>
      <div className="product-chrome">
        <span className="traffic-lights">
          <i />
          <i />
          <i />
        </span>
        <span className="window-address">
          <LockKeyhole size={10} />
          {name}
        </span>
        <MoreHorizontal size={16} />
      </div>
      {children}
    </div>
  );
}
export function CompassRose() {
  return (
    <svg className="hero-compass" viewBox="0 0 140 140" aria-hidden="true">
      <defs>
        <linearGradient id="compass-metal" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff3b5" />
          <stop offset=".32" stopColor="#ffdb49" />
          <stop offset=".7" stopColor="#dca714" />
          <stop offset="1" stopColor="#ffed8b" />
        </linearGradient>
        <linearGradient id="compass-facet" x2="1" y2="1">
          <stop stopColor="#ffed90" />
          <stop offset="1" stopColor="#cf9210" />
        </linearGradient>
      </defs>
      <circle
        cx="70"
        cy="70"
        r="55"
        fill="none"
        stroke="#bb972b"
        strokeWidth=".8"
        opacity=".6"
      />
      {Array.from({ length: 8 }, (_, i) => (
        <g key={i} transform={`rotate(${i * 45} 70 70)`}>
          <path d="M70 9 81 59 70 70 59 59Z" fill="url(#compass-metal)" />
          <path d="M70 9V70L81 59Z" fill="url(#compass-facet)" />
        </g>
      ))}
      <circle
        cx="70"
        cy="70"
        r="10"
        fill="#ffdf64"
        stroke="#b88516"
        strokeWidth="1"
      />
      <circle cx="70" cy="70" r="4" fill="#073a78" />
    </svg>
  );
}
const events = [
  {
    name: "Build your first website",
    category: "Workshops",
    place: "Mombasa",
    date: "09 Nov",
    icon: Code2,
    colour: "blue",
  },
  {
    name: "Ideas by the ocean",
    category: "Community",
    place: "Nyali",
    date: "14 Nov",
    icon: Waves,
    colour: "sand",
  },
  {
    name: "Make something move",
    category: "Workshops",
    place: "Mombasa",
    date: "16 Nov",
    icon: Compass,
    colour: "mint",
  },
];
function WebPreview() {
  const [category, setCategory] = useState("All");
  const [saved, setSaved] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const filtered = events.filter(
    (e) =>
      (category === "All" || e.category === category) &&
      e.name.toLowerCase().includes(query.toLowerCase()),
  );
  return (
    <Window name="Pwani Collective / discover">
      <div className="web-product">
        <div className="product-navbar">
          <b>
            <span className="collective-mark">p.</span>pwani collective
          </b>
          <span>Discover</span>
          <div className="avatar-small">AM</div>
        </div>
        <div className="directory-hero">
          <div>
            <span className="screen-overline">
              Made of people. Full of possibility.
            </span>
            <h4>
              Find your next
              <br />
              good thing.
            </h4>
            <p>Experiences for curious people on the coast.</p>
          </div>
          <div className="architectural-art" aria-hidden="true">
            <div />
            <i />
            <span />
          </div>
        </div>
        <label className="directory-search">
          <Search size={15} />
          <input
            aria-label="Search preview experiences"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search experiences…"
          />
          <span>
            <MapPin size={12} />
            Mombasa
          </span>
        </label>
        <div className="screen-section-heading">
          <h5>Coming up near you</h5>
          <span>{filtered.length} experiences</span>
        </div>
        <div className="directory-filters">
          {["All", "Workshops", "Community"].map((c) => (
            <button
              aria-pressed={category === c}
              key={c}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="event-list">
          {filtered.map((e) => (
            <article className="event-row" key={e.name}>
              <span className={`event-art ${e.colour}`}>
                <e.icon size={25} />
              </span>
              <div>
                <small>
                  {e.category} · {e.date}
                </small>
                <h5>{e.name}</h5>
                <span>
                  <MapPin size={10} />
                  {e.place}
                </span>
              </div>
              <button
                className={saved.includes(e.name) ? "saved" : ""}
                aria-label={`${saved.includes(e.name) ? "Unsave" : "Save"} ${e.name}`}
                aria-pressed={saved.includes(e.name)}
                onClick={() =>
                  setSaved(
                    saved.includes(e.name)
                      ? saved.filter((x) => x !== e.name)
                      : [...saved, e.name],
                  )
                }
              >
                {saved.includes(e.name) ? (
                  <Check size={16} />
                ) : (
                  <Plus size={16} />
                )}
              </button>
            </article>
          ))}
          {filtered.length === 0 && (
            <p className="preview-empty">
              No experiences found. Try another search.
            </p>
          )}
        </div>
      </div>
    </Window>
  );
}
const tasks = [
  ["Maths revision", "Quadratic equations", "25 min"],
  ["Website project", "Finish the homepage", "45 min"],
  ["Read & reflect", "One chapter, three takeaways", "20 min"],
];
function AppPreview() {
  const [done, setDone] = useState([0]);
  const [day, setDay] = useState(0);
  const [view, setView] = useState("Today");
  return (
    <Window name="Mwelekeo / my workspace">
      <div className="planner-product">
        <aside className="planner-sidebar">
          <div className="planner-logo">
            m<span>↗</span>
          </div>
          {[
            { name: "Today", icon: LayoutGrid },
            { name: "Projects", icon: BookOpen },
            { name: "Progress", icon: CheckCircle2 },
          ].map((x) => (
            <button
              key={x.name}
              aria-label={`Show ${x.name.toLowerCase()} in planner`}
              aria-pressed={view === x.name}
              onClick={() => setView(x.name)}
            >
              <x.icon size={18} />
              <span>{x.name}</span>
            </button>
          ))}
          <div className="avatar-small">AM</div>
        </aside>
        <div className="planner-main">
          <div className="screen-topline">
            <span>
              My workspace <ChevronDown size={11} />
            </span>
            <span className="quiet-badge">Personal</span>
          </div>
          <h4>
            {view === "Today"
              ? "A little progress, every day."
              : view === "Projects"
                ? "Your next big idea."
                : "Look how far you’ve come."}
          </h4>
          <p className="planner-greeting">
            You’re making room for what matters.
          </p>
          <div className="planner-week">
            {["M", "T", "W", "T", "F", "S"].map((d, i) => (
              <button
                key={i}
                aria-label={`Monday to Saturday, November ${9 + i}`}
                aria-pressed={day === i}
                onClick={() => setDay(i)}
              >
                <small>{d}</small>
                <b>{9 + i}</b>
                <i />
              </button>
            ))}
          </div>
          {view === "Progress" ? (
            <div className="progress-view">
              <div
                className="progress-ring"
                style={{
                  background: `conic-gradient(#073a78 ${(done.length / 3) * 360}deg,#e7edf4 0deg)`,
                }}
              >
                <span>
                  {Math.round((done.length / 3) * 100)}
                  <small>%</small>
                </span>
              </div>
              <h5>{done.length} of 3 goals completed</h5>
              <p>Every small step counts.</p>
            </div>
          ) : view === "Projects" ? (
            <div className="planner-project-card">
              <span className="project-symbol">
                <Code2 size={27} />
              </span>
              <small>Personal project</small>
              <h5>My coastal discovery website</h5>
              <p>Design → Build → Test → Share</p>
              <div className="task-progress">
                <span style={{ width: "45%" }} />
              </div>
              <span>2 of 4 milestones complete</span>
            </div>
          ) : (
            <>
              <div className="screen-section-heading">
                <h5>
                  {day === 0
                    ? "Monday"
                    : day === 1
                      ? "Tuesday"
                      : day === 2
                        ? "Wednesday"
                        : day === 3
                          ? "Thursday"
                          : day === 4
                            ? "Friday"
                            : "Saturday"}
                  ’s focus
                </h5>
                <span>{done.length}/3 complete</span>
              </div>
              <div className="task-progress">
                <span style={{ width: `${(done.length / 3) * 100}%` }} />
              </div>
              <div className="real-tasks">
                {tasks.map(([title, desc, time], i) => (
                  <button
                    className={done.includes(i) ? "task-complete" : ""}
                    key={title}
                    aria-pressed={done.includes(i)}
                    onClick={() =>
                      setDone(
                        done.includes(i)
                          ? done.filter((x) => x !== i)
                          : [...done, i],
                      )
                    }
                  >
                    <span className="task-checkbox">
                      {done.includes(i) && <Check size={12} />}
                    </span>
                    <span>
                      <strong>{title}</strong>
                      <small>{desc}</small>
                    </span>
                    <em>{time}</em>
                  </button>
                ))}
              </div>
              <div className="focus-note">
                <span>✦</span>
                <div>
                  <b>One thing at a time.</b>
                  <p>Your goals, at your pace.</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Window>
  );
}
const litter = [
  { x: 4, y: 2 },
  { x: 6, y: 4 },
  { x: 3, y: 5 },
];
function GamePreview() {
  const [started, setStarted] = useState(false);
  const [player, setPlayer] = useState({ x: 1, y: 3 });
  const [found, setFound] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  function move(dx: number, dy: number) {
    if (!started || found.length === 3) return;
    const p = {
      x: Math.max(1, Math.min(7, player.x + dx)),
      y: Math.max(1, Math.min(5, player.y + dy)),
    };
    setPlayer(p);
    setMoves((m) => m + 1);
    const target = litter.findIndex((t) => t.x === p.x && t.y === p.y);
    if (target >= 0 && !found.includes(target)) setFound([...found, target]);
  }
  function reset() {
    setStarted(true);
    setPlayer({ x: 1, y: 3 });
    setFound([]);
    setMoves(0);
  }
  return (
    <Window name="Coast Quest / shoreline explorer" dark>
      <div
        className="coast-game"
        tabIndex={0}
        role="group"
        aria-label="Coast Quest. Use arrow keys to move and collect three bottles."
        onKeyDown={(e) => {
          const direction: Record<string, number[]> = {
            ArrowUp: [0, -1],
            ArrowDown: [0, 1],
            ArrowLeft: [-1, 0],
            ArrowRight: [1, 0],
          };
          if (direction[e.key]) {
            e.preventDefault();
            move(direction[e.key][0], direction[e.key][1]);
          }
        }}
      >
        <div className="game-hud">
          <b>
            <Compass size={17} />
            Coast Quest
          </b>
          <span>
            <Leaf size={14} />
            {found.length}/3 collected
          </span>
        </div>
        <svg
          className="game-world"
          viewBox="0 0 560 340"
          role="img"
          aria-label="A coastal island with a path, trees and three collectible bottles"
        >
          <defs>
            <linearGradient id="water" x2="1" y2="1">
              <stop stopColor="#378da2" />
              <stop offset="1" stopColor="#095974" />
            </linearGradient>
            <pattern
              id="water-lines"
              width="50"
              height="30"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M2 20q8-4 16 0t16 0"
                fill="none"
                stroke="#a6e3e1"
                opacity=".19"
              />
            </pattern>
          </defs>
          <rect width="560" height="340" fill="url(#water)" />
          <rect width="560" height="340" fill="url(#water-lines)" />
          <path
            d="M-10 30Q125-28 278 20T503 130Q526 204 460 282T256 341H0Z"
            fill="#a6d0c1"
          />
          <path
            d="M-10 15Q146-22 285 35T470 130Q500 197 431 264T240 324H0Z"
            fill="#e8d6a6"
          />
          <path
            d="M0 5Q130-10 270 50T425 125Q454 190 395 250T220 300H0Z"
            fill="#78a57b"
          />
          <path
            d="M80 138Q200 81 278 130T380 203L239 264"
            stroke="#d1c293"
            strokeWidth="34"
            strokeLinecap="round"
            fill="none"
          />
          {[
            { x: 50, y: 50 },
            { x: 340, y: 65 },
            { x: 95, y: 245 },
            { x: 400, y: 245 },
          ].map((p, i) => (
            <g transform={`translate(${p.x} ${p.y})`} key={i}>
              <ellipse cy="21" rx="25" ry="10" fill="#264f3c" opacity=".18" />
              <path d="M0 20 3-19" stroke="#855936" strokeWidth="7" />
              <path
                d="M3-19q-38-29-32 4M3-19q35-32 33 0M3-19q-20-40-26-20M3-19q9-37 26-25M3-19q-2 23-23 23M3-19q30 7 25 25"
                fill="#3b775b"
                stroke="#2f674c"
                strokeWidth="2"
              />
            </g>
          ))}
          <g transform="translate(495 225) rotate(-25)">
            <path d="M-28 7Q0 40 28 7Z" fill="#744d32" />
            <path d="M0-44V7H26Z" fill="#fff3d2" />
            <path d="M-2-30V4H-22Z" fill="#e1bf71" />
          </g>
          {litter.map(
            (p, i) =>
              !found.includes(i) && (
                <g
                  transform={`translate(${p.x * 55 + 25} ${p.y * 45 + 15})`}
                  key={i}
                >
                  <ellipse
                    cy="11"
                    rx="10"
                    ry="4"
                    fill="#355e4b"
                    opacity=".25"
                  />
                  <path
                    d="M-3-10h6v5l3 4v11H-6V-1l3-4Z"
                    fill="#b5e2ee"
                    stroke="#2b637d"
                    strokeWidth="2"
                  />
                  <path d="M-5 3h10" stroke="#fff" strokeWidth="3" />
                </g>
              ),
          )}
          <g
            transform={`translate(${player.x * 55 + 25} ${player.y * 45 + 15})`}
            className="game-player"
          >
            <ellipse cy="15" rx="14" ry="6" fill="#264f3c" opacity=".2" />
            <path d="M-6 6v9M6 6v9" stroke="#123d60" strokeWidth="5" />
            <rect x="-10" y="-8" width="20" height="19" rx="7" fill="#f7c735" />
            <circle cy="-13" r="9" fill="#8b5639" />
            <path d="M-10-16Q0-30 10-16" fill="#073a78" />
          </g>
        </svg>
        {!started && (
          <div className="game-start">
            <span>Chapter 01 · The shoreline</span>
            <h4>
              A small mission.
              <br />A cleaner coast.
            </h4>
            <button onClick={reset}>
              <Play size={16} fill="currentColor" />
              Explore the shoreline
            </button>
          </div>
        )}
        {found.length === 3 && (
          <div className="game-win" role="status">
            <CheckCircle2 size={29} />
            <h4>Shoreline restored.</h4>
            <p>3 bottles collected in {moves} moves.</p>
            <button onClick={reset}>
              <RotateCcw size={15} />
              Play again
            </button>
          </div>
        )}
        <div className="game-controls">
          <span aria-live="polite">
            {started
              ? `${moves} moves · Find the 3 bottles`
              : "An adventure you can play"}
          </span>
          <div>
            {[
              { label: "Move left", x: -1, y: 0, icon: ArrowLeft },
              { label: "Move up", x: 0, y: -1, icon: ArrowUp },
              { label: "Move down", x: 0, y: 1, icon: ArrowDown },
              { label: "Move right", x: 1, y: 0, icon: ArrowRight },
            ].map((b) => (
              <button
                key={b.label}
                aria-label={b.label}
                disabled={!started || found.length === 3}
                onClick={() => move(b.x, b.y)}
              >
                <b.icon size={15} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}
const answers = [
  {
    prompt: "Explain how mangroves protect the coast",
    title: "Small forests. A big coastal role.",
    body: "Mangrove roots hold sediment in place and help slow water movement. Their dense root systems create sheltered habitats for young fish and other marine life.",
    source: "Coastal ecosystems · section 02",
  },
  {
    prompt: "Help me plan a beach clean-up project",
    title: "Start with a clear, useful question.",
    body: "Choose a small stretch of shoreline. Observe the types of litter, plan a supervised collection, and record what you find. Your project could turn those observations into a simple tracking app.",
    source: "Project planning · activity 04",
  },
  {
    prompt: "Create a quiz from these notes",
    title: "Check your understanding.",
    body: "1. How do mangrove roots support a shoreline?\n2. Why do young fish shelter among the roots?\n3. What data could a beach clean-up team collect?",
    source: "Coastal ecosystems · practice questions",
  },
];
function AiPreview() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(0);
  const [notice, setNotice] = useState("");
  function ask(q: string) {
    const i = answers.findIndex((a) => a.prompt === q);
    const match =
      i >= 0
        ? i
        : /quiz|question/i.test(q)
          ? 2
          : /project|clean|plan/i.test(q)
            ? 1
            : /mangrove|coast|root|fish/i.test(q)
              ? 0
              : -1;
    if (match < 0) {
      setNotice(
        "This guided preview covers coastal ecosystems, project planning and quizzes. Try one of the suggested questions.",
      );
      return;
    }
    setNotice("");
    setAnswer(match);
    setQuestion("");
  }
  return (
    <Window name="Soma / research workspace">
      <div className="ai-product">
        <div className="product-navbar">
          <b>
            <span className="soma-mark">s</span>soma
          </b>
          <span className="quiet-badge">Study workspace</span>
          <PanelLeft size={16} />
        </div>
        <div className="ai-workspace">
          <aside className="source-panel">
            <h5>
              <BookOpen size={14} />
              Your sources
            </h5>
            <div className="source-file">
              <span>PDF</span>
              <b>Coastal ecosystems</b>
              <small>Learning notes · 4 pages</small>
            </div>
            <div className="source-file">
              <span>DOC</span>
              <b>Project planning</b>
              <small>Activity guide · 2 pages</small>
            </div>
            <p>
              Answers grounded
              <br />
              in your materials.
            </p>
          </aside>
          <div className="ai-conversation">
            <div className="ai-topic">
              <small>Explore your notes</small>
              <h4>
                Turn information
                <br />
                into understanding.
              </h4>
            </div>
            <div className="user-question">{answers[answer].prompt}</div>
            <div className="grounded-answer" aria-live="polite">
              <span className="answer-logo">s</span>
              <div>
                <h5>{answers[answer].title}</h5>
                <p>{answers[answer].body}</p>
                <span className="source-citation">
                  <BookOpen size={10} />
                  {answers[answer].source}
                </span>
              </div>
            </div>
            <div className="suggested-questions">
              {answers.map((a, i) => (
                <button key={a.prompt} onClick={() => ask(a.prompt)}>
                  {i === 0
                    ? "Explain mangroves"
                    : i === 1
                      ? "Plan a project"
                      : "Make a quiz"}
                  <ArrowUpRight size={10} />
                </button>
              ))}
            </div>
            <form
              className="ai-composer"
              onSubmit={(e) => {
                e.preventDefault();
                ask(question);
              }}
            >
              <input
                aria-label="Ask the study preview"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask about your notes…"
                required
              />
              <button aria-label="Ask question" type="submit">
                <ArrowUp size={16} />
              </button>
            </form>
            {notice && (
              <p className="ai-preview-notice" role="status">
                {notice}
              </p>
            )}
          </div>
        </div>
        <div className="ai-status">
          <span className="source-dot" />
          Guided preview · sample sources and answers
        </div>
      </div>
    </Window>
  );
}
export function ProductPreview({ track }: { track: string }) {
  return (
    <div className={`production-preview preview-${track}`}>
      {track === "web" ? (
        <WebPreview />
      ) : track === "app" ? (
        <AppPreview />
      ) : track === "game" ? (
        <GamePreview />
      ) : track === "ai" ? (
        <AiPreview />
      ) : (
        <div className="robot-project">
          <img
            src="/images/maker-scene.webp"
            alt="Blue and yellow robot alongside a wooden dhow"
            width="1400"
            height="933"
            loading="lazy"
          />
        </div>
      )}
      <div className="preview-caption">
        <span>
          {track === "robotics"
            ? "From code to the physical world"
            : "Interactive project concept"}
        </span>
        <span>
          {track === "web"
            ? "Search, filter & save"
            : track === "app"
              ? "Plan, track & complete"
              : track === "game"
                ? "Explore with the arrow controls"
                : track === "ai"
                  ? "Ask, explore & verify"
                  : "Build, test & discover"}
          <ArrowUpRight size={12} />
        </span>
      </div>
    </div>
  );
}
const files = {
  "page.tsx": [
    ["import", ' { projects } from "./data";'],
    ["", ""],
    ["export default function", " ProjectGallery() {"],
    ["  return", " ("],
    ["    ", '<main className="gallery">'],
    ["      ", "<h1>Made in Mombasa.</h1>"],
    ["      ", "{projects.map((project) => ("],
    ["        ", "<ProjectCard"],
    ["          ", "key={project.id}"],
    ["          ", "project={project}"],
    ["        ", "/>"],
    ["      ", "))}"],
    ["    ", "</main>"],
    ["  ", ");"],
    ["", "}"],
  ],
  "data.ts": [
    ["export const", " projects = ["],
    ["  ", "{"],
    ["    ", 'id: "coastal-discovery",'],
    ["    ", 'title: "Coastal Discovery",'],
    ["    ", 'category: "Web development",'],
    ["    ", 'status: "ready-to-share"'],
    ["  ", "}"],
    ["", "];"],
  ],
  "README.md": [
    ["# ", "Coastal Discovery"],
    ["", ""],
    ["", "A place for local ideas to grow."],
    ["", ""],
    ["## ", "Development"],
    ["", "npm install"],
    ["", "npm run dev"],
    ["", ""],
    ["## ", "Before sharing"],
    ["", "- Test on phone and tablet"],
    ["", "- Check keyboard navigation"],
    ["", "- Ask someone for feedback"],
  ],
};
export function EngineeringPreview() {
  const [file, setFile] = useState<keyof typeof files>("page.tsx");
  return (
    <div className="engineering-preview" data-journey="left">
      <Window name="coastal-discovery / workspace" dark>
        <div className="editor-top">
          <span>
            <Code2 size={14} />
            Project workspace
          </span>
          <span>
            <GitBranch size={12} /> main
          </span>
        </div>
        <div className="editor-tabs">
          {Object.keys(files).map((f) => (
            <button
              key={f}
              aria-pressed={file === f}
              onClick={() => setFile(f as keyof typeof files)}
            >
              <FileCode2 size={12} />
              {f}
            </button>
          ))}
        </div>
        <div className="editor-code">
          <div className="editor-breadcrumb">
            src <span>›</span> app <span>›</span> {file}
          </div>
          <pre>
            {files[file].map(([keyword, code], i) => (
              <div key={i}>
                <span className="line-number">{i + 1}</span>
                <code>
                  <b>{keyword}</b>
                  {code}
                </code>
              </div>
            ))}
          </pre>
        </div>
        <div className="editor-terminal">
          <span>
            <Terminal size={13} />
            Terminal
          </span>
          <p>
            <b>✓</b> Responsive layout ready
          </p>
          <p>
            <b>✓</b> Keyboard navigation checked
          </p>
          <p>
            <b>→</b> Ready for the next iteration
          </p>
        </div>
        <div className="editor-status">
          <span>
            <GitBranch size={11} />
            main
          </span>
          <span>TypeScript · UTF-8</span>
        </div>
      </Window>
      <p className="preview-caption">
        An example project workspace — from an idea to working code.
      </p>
    </div>
  );
}
