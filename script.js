/* =========================================================
   EDIT ONLY THIS BLOCK: replace every "YOUR_..." value.
   ========================================================= */
const CONFIG = {
  name: "Ingrid Marin",
  title: "",                                  // e.g. UI/UX Designer. Empty = no headline is shown
  avatar: "img/avatar.jpeg",                      // image path, e.g. "img/me.jpg". Empty = initials
  about: `I am a responsible, dedicated, and hardworking student who is always willing to learn new things and improve my skills. I consider myself a persevering person who faces challenges with a positive attitude and sees every experience as an opportunity to grow.

Throughout my academic journey, I have developed skills in technology, accounting, communication, and teamwork. I enjoy learning about new tools, developing creative ideas, and finding solutions to problems.

My goal is to continue growing both personally and professionally, gain new experiences, and use my knowledge to build a successful future. I believe that with dedication, effort, and determination, I can achieve my goals.`,
  facts: [
    { label: "Education", text: "Technical High School · 3 years in the Supérate program" },
    { label: "Strengths", text: "Teamwork, creativity, fast learning" },
    { label: "Languages", text: "Spanish (native), English" }
  ],
  email: "ingrid.marin0102@gmail.com",
  cv: "",             // path to your CV, e.g. "docs/cv.pdf". Empty = the "Download my CV" button is hidden
  github: "https://github.com/Tatiana779Mejia",
  linkedin: "https://www.linkedin.com/in/YOUR_USER",
  formEndpoint: "",   // optional: Formspree URL like "https://formspree.io/f/xxxxxxx". Empty = opens your email app

  stack: [
    { group: "Frontend",  items: ["HTML5", "CSS3", "JavaScript"] },
    { group: "Backend",   items: ["Python"] },
    { group: "Databases", items: ["SQL", "MySQL"] },
    { group: "Tools",     items: ["Git / GitHub", "Figma", "Canva", "Trello / Jira", "Office 365"] }
  ],

  // Evidence by role: developers -> repo + live demo, designers -> figma + wireframes + style guide,
  // pitch/management -> deck + video/board. Keep only the links that fit your role.
  projects: [
    {
      title: "Circle Vibe", year: 2024,
      image: "img/circlevibe.jpg",
      description: "Circle Vibe is an app that lets people share the problems of their communities and, at the same time, helps generate employment opportunities.",
      tags: ["Power Apps", "UI Design", "Pitch"],
      role: "Designer, Developer & Pitch",
      contribution: "I designed the app interface, programmed it in Power Apps and took part in the project pitch.",
      links: [
        { label: "Open app", url: "https://apps.powerapps.com/play/e/default-d8e3bd44-0bba-426b-952d-ada7bb17393c/a/ed3a159c-bb89-461c-ac80-f05cbfd37f0d?tenantId=d8e3bd44-0bba-426b-952d-ada7bb17393c&hint=91c5c9a0-bfd1-413c-9c90-440522f6cd47&sourcetime=1793204142578" }
      ]
    },
    {
      title: "TeachMeNow", year: 2025,
      image: "img/teachmenow.jpg",
      description: "TeachMeNow is a platform that helps teachers create more interactive classes and identify the learning style of each student.",
      tags: ["Front-end", "UI Design", "Vercel"],
      role: "Designer & Frontend Developer",
      contribution: "I took part in the visual design and programmed the front-end of the website.",
      links: [
        { label: "Live demo", url: "https://teach-me-now-front-end.vercel.app" }
      ]
    },
    {
      title: "Valtrust", year: 2026,
      image: "img/valtrust.jpg",
      description: "Valtrust is a website that provides more reliable, transparent and accurate valuations of real estate properties.",
      tags: ["Front-end", "UI Design", "Vercel"],
      role: "Designer & Frontend Developer",
      contribution: "I took part in the visual design and programmed the front-end of the website.",
      links: [
        { label: "Live demo", url: "https://valtrust-website.vercel.app/" }
      ]
    }
  ],

  // Extra projects: same card format, shown under "Extra projects"
  extraProjects: [
    {
      title: "Salir del Bosque — Aventura", year: 2025,
      image: "img/salir-del-bosque.png",
      description: "A decision-making browser game where a young explorer must escape a mysterious forest by answering riddles, collecting items and choosing the right paths. It includes an inventory, a mini-map with progress and a records board.",
      tags: ["HTML", "CSS", "JavaScript", "Game Design", "UI Design"],
      role: "Designer & Developer",
      contribution: "I designed the game interface and programmed the game logic: decisions, inventory, progress tracking and records.",
      links: [
        // IMPORTANT: replace with your public link (GitHub Pages / Vercel). 127.0.0.1 only works on your computer.
        { label: "Play the game", url: "https://TU-USUARIO.github.io/Test-repo/" }
      ]
    },
    {
      title: "Parking Management System", year: 2025,
      image: "",   // optional: a terminal screenshot, e.g. "img/parqueo.png"
      description: "A Python console application that manages a parking lot: it registers vehicle entries and exits, validates license plates, tracks available spaces and calculates the fee based on the time parked.",
      tags: ["Python", "OOP", "Regex", "CLI"],
      role: "Developer",
      contribution: "I programmed the whole system using object-oriented programming, plate validation with regular expressions and automatic fee calculation with datetime.",
      links: [
        { label: "View code", url: "https://github.com/Tatiana779Mejia/NOMBRE-DEL-REPO" }
      ]
    }
  ],

  // The 3 module courses are required. image = path to the diploma picture, e.g. "img/cert1.jpg"
  requiredCerts: [
    { title: "Productividad y Herramientas para el Trabajo Remoto", issuer: "Platzi", year: 2026, image: "img/productividad-trabajo-remoto.jpg", url: "docs/productividad-trabajo-remoto.pdf" },
    { title: "Google Tag Manager para Marketing", issuer: "Platzi", year: 2026, image: "img/google-tag-manager.jpg", url: "docs/google-tag-manager.pdf" },
    { title: "Ciberseguridad Preventiva", issuer: "Platzi", year: 2026, image: "img/ciberseguridad-preventiva.jpg", url: "docs/ciberseguridad-preventiva.pdf" }
  ],
  extraCerts: [
    { title: "Microsoft Office Specialist: Excel Associate (Microsoft 365 Apps)", issuer: "Microsoft", year: 2025, image: "img/excel-associate.jpg", url: "docs/excel-associate.pdf" },
    { title: "Microsoft Office Specialist: Excel Expert (Microsoft 365 Apps)", issuer: "Microsoft", year: 2026, image: "img/excel-expert.jpg", url: "docs/excel-expert.pdf" }
  ]
};

/* ===================== RENDER (no need to edit) ===================== */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const ext = (url, label, cls = "btn") =>
  `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;

document.title = `${CONFIG.name} | Portfolio`;
const initial = CONFIG.name.trim().charAt(0).toUpperCase() || "Y";
$("ghost").textContent = initial;
$("navLogo").textContent = CONFIG.name.split(" ")[0] || "Portfolio";
$("fullName").textContent = CONFIG.name;
if (CONFIG.title.trim()) $("titleLine").textContent = CONFIG.title;
else $("titleLine").remove();   // no headline pill when title is empty
$("about").innerHTML = esc(CONFIG.about).replace(/\n\s*\n/g, "<br><br>");
$("avatar").innerHTML = CONFIG.avatar
  ? `<img src="${esc(CONFIG.avatar)}" alt="Photo of ${esc(CONFIG.name)}">`
  : esc(initial);

$("social").remove();   // contact buttons live only in the final section

$("facts").innerHTML = CONFIG.facts.map(f =>
  `<div class="fact"><b>${esc(f.label)}</b>${esc(f.text)}</div>`).join("");

$("stackGrid").innerHTML = CONFIG.stack.map(g =>
  `<div class="card"><h3>${esc(g.group)}</h3><div class="chips">${
    g.items.map(i => `<span class="chip">${esc(i)}</span>`).join("")}</div></div>`).join("");

/* Project card (reused for featured and extra projects) */
const projectCard = p => `
  <article class="project">
    <div class="side" style="justify-content:center;align-items:center;text-align:center"><span class="year">${esc(p.year)}</span><small>${esc(p.role)}</small></div>
    <div class="body">
      ${p.image ? `<img src="${esc(p.image)}" alt="Preview of ${esc(p.title)}" style="display:block;width:100%;max-height:170px;object-fit:contain;background:#fff;border-radius:22px;padding:10px;margin-bottom:18px">` : ""}
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.description)}</p>
      <div class="chips" style="margin-top:14px">${p.tags.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      <div class="role"><b>My Role &amp; Contributions: ${esc(p.role)}</b>${esc(p.contribution)}</div>
      <div class="links">${p.links.map(l => ext(l.url, l.label, "btn dark")).join("")}</div>
    </div>
  </article>`;

$("projectList").innerHTML = CONFIG.projects.map(projectCard).join("");
$("extraProjectList").innerHTML = CONFIG.extraProjects.map(projectCard).join("");

const certCard = c => `
  <article class="cert">
    <div class="thumb">${c.image
      ? `<img src="${esc(c.image)}" alt="Certificate: ${esc(c.title)}">`
      : "Add your diploma image here"}</div>
    <h3>${esc(c.title)}</h3>
    <p>${esc(c.issuer)} · ${esc(c.year)}</p>
    ${ext(c.url, "View certificate")}
  </article>`;
$("requiredCerts").innerHTML = CONFIG.requiredCerts.map(certCard).join("");
$("extraCerts").innerHTML = CONFIG.extraCerts.map(certCard).join("");

/* Contact / hire-me banner (replaces the big form) */
$("contact").innerHTML = `
  <div style="background:var(--ink);color:var(--cream);border-radius:var(--r-lg);padding:clamp(28px,5vw,56px);text-align:center">
    <p class="script" style="font-size:1.5rem;color:var(--sage);margin-bottom:8px">Ready when you are</p>
    <h2 style="color:var(--cream);font-size:clamp(1.9rem,5vw,3.2rem);font-weight:800;margin-bottom:16px">What are you waiting for?</h2>
    <p style="max-width:52ch;margin:0 auto 28px;opacity:.85"></p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center">
      ${ext("mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Let's work together"), "Email")}
      ${CONFIG.cv ? ext(CONFIG.cv, "Download my CV") : ""}
      ${ext(CONFIG.linkedin, "LinkedIn")}
      ${ext(CONFIG.github, "GitHub")}
    </div>
    <p style="margin-top:22px;font-size:.85rem;opacity:.7">${esc(CONFIG.email)}</p>
  </div>`;

$("footer").textContent = `© ${new Date().getFullYear()} ${CONFIG.name}. All rights reserved.`;

/* Contact form: Formspree if configured, otherwise opens the visitor's email app */
$("contactForm")?.addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target, st = $("status");
  const name = f.name.value.trim(), email = f.email.value.trim(), message = f.message.value.trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !message) {
    st.textContent = "Please fill in your name, a valid email and a message.";
    return;
  }
  if (CONFIG.formEndpoint) {
    try {
      st.textContent = "Sending...";
      const res = await fetch(CONFIG.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ name, email, message })
      });
      if (!res.ok) throw new Error();
      st.textContent = "Message sent. Thank you!";
      f.reset();
    } catch {
      st.textContent = "Could not send the message. Please email me directly.";
    }
  } else {
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`);
    window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    st.textContent = "Opening your email app...";
  }
});