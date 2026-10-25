const githubBase = "https://github.com/shreeyasriram10/";

const skillGroups = [
    ["Programming languages", "fa-code", ["Python", "Java", "C", "C++", "SQL", "JavaScript"]],
    ["Frontend development", "fa-layer-group", ["HTML", "CSS", "JavaScript", "React.js", "Responsive design"]],
    ["Backend & APIs", "fa-server", ["Node.js", "Flask", "REST APIs"]],
    ["AI & machine learning", "fa-brain", ["Machine learning", "Deep learning", "TensorFlow", "Scikit-learn", "Deepfake detection"]],
    ["Data & computer vision", "fa-chart-line", ["Pandas", "NumPy", "OpenCV", "Data analysis"]],
    ["Databases & concepts", "fa-database", ["DBMS", "Data structures & algorithms", "OOP", "Operating systems"]],
    ["Tools & platforms", "fa-toolbox", ["Git", "GitHub", "VS Code", "Vercel", "Render", "Microsoft Excel"]],
    ["Engineering practices", "fa-arrows-rotate", ["Software engineering", "SDLC", "Agile", "Problem solving"]],
    ["Collaboration", "fa-people-group", ["Leadership", "Technical mentoring", "Communication", "Cross-functional teamwork"]]
];

const experiences = [
    { date: "Jul 2026 — Aug 2026", role: "Full Stack Developer Intern", org: "CodeShip Private Limited", mode: "On-site", bullets: ["Contributed to full-stack development work in an on-site engineering environment.", "Detailed project outcomes were not included in the supplied resume, so no unverified metrics are claimed."] },
    { date: "Apr 2026 — present", role: "Research Intern", org: "SRM Institute of Science and Technology, Ramapuram", mode: "On-site", bullets: ["Contributing to a research role alongside academic work.", "Project-specific methods and outcomes were not included in the supplied resume, so this entry stays factual and scoped."] },
    { date: "Nov 2025 — Apr 2026", role: "Web Development Intern", org: "Dezprox LLP", mode: "Remote", bullets: ["Built and maintained responsive, cross-browser pages with HTML5, CSS3, and JavaScript.", "Implemented component-based design patterns and debugged client-facing solutions."] },
    { date: "Jun 2025 — Jul 2025", role: "Artificial Intelligence Intern", org: "TMIS", mode: "Remote", bullets: ["Developed AI applications for real-world problems using Python, TensorFlow, and machine-learning frameworks.", "Gained end-to-end exposure to model deployment workflows and implementation practices."] },
    { date: "Jun 2025 — Jul 2025", role: "Full Stack Development Intern", org: "Decodelabs", mode: "Remote", bullets: ["Contributed to ongoing projects in a remote team environment using full-stack development skills.", "Collaborated with the team across implementation tasks and project delivery."] },
    { date: "Jan 2025 — Feb 2025", role: "AI/ML Intern", org: "InternPe", mode: "Remote", bullets: ["Applied supervised and unsupervised algorithms to industry use cases using Python and Scikit-learn.", "Worked with data pipelines while developing practical machine-learning solutions."] }
];

const projects = [
    { name: "EcoGrid AI", category: "AI / ML", problem: "Renewable-energy teams need a clearer way to balance generation, storage, and demand.", contribution: "Built as an AI-powered renewable-energy optimization platform with a server-backed application structure.", tags: ["Node.js", "Express", "JavaScript", "AI"], repo: "ecogrid-ai" },
    { name: "Offline Transaction / OFFPAY", category: "Full-stack", problem: "People need a way to record and verify peer-to-peer payments when connectivity is unreliable.", contribution: "Designed an offline-first transaction flow with trust scoring, promise tokens, and an explainable decision path.", tags: ["JavaScript", "HTML", "CSS"], repo: "offline-transaction" },
    { name: "Loha Drishti", category: "AI / ML", problem: "Freight and procurement teams need decision support for cargo, vessel, route, and contract choices.", contribution: "Defined a decision-support cockpit blueprint with scenario planning, composite scoring, and a computed fallback recommendation.", tags: ["Next.js", "REST APIs", "Decision support"], repo: "LOHA-DRISHTI", evidence: "Architecture blueprint documented in the repository." },
    { name: "Herva AI", category: "AI / ML", problem: "AI project listed in the public portfolio inventory.", contribution: "Project details and implementation evidence are not documented in the current portfolio record.", tags: ["AI", "Web"] },
    { name: "Luxora AI Beauty", category: "AI / ML", problem: "AI beauty project listed in the public portfolio inventory.", contribution: "Project details and implementation evidence are not documented in the current portfolio record.", tags: ["AI", "Web"], repo: "luxora-ai-beauty" },
    { name: "Bhoorakshak AI", category: "AI / ML", problem: "AI social-impact project listed in the public portfolio inventory.", contribution: "Project details and implementation evidence are not documented in the current portfolio record.", tags: ["AI", "Social impact"], repo: "boorakshak-ai" },
    { name: "Deepfake TruthLens", category: "AI / ML", problem: "Viewers need help identifying manipulated media.", contribution: "Explored a computer-vision workflow for preprocessing and model evaluation.", tags: ["Python", "C", "OpenCV", "HTML"], repo: "deepfake-truthlens" },
    { name: "SmartSpend AI", category: "Full-stack", problem: "People need a clearer way to understand and improve spending habits.", contribution: "Built a web project around AI-assisted personal spending workflows.", tags: ["AI", "Web"], repo: "smart-spend-ai" },
    { name: "MindBuddy", category: "Web applications", problem: "People need accessible, easy-to-use mental-health support resources.", contribution: "Built a responsive interface with cross-browser usability in mind.", tags: ["HTML", "CSS", "JavaScript"], repo: "mindbuddy" },
    { name: "SheRise", category: "Social impact", problem: "Women need accessible health and empowerment resources.", contribution: "Built a responsive web application with dynamic content and accessible design.", tags: ["HTML", "CSS", "JavaScript"], repo: "Sherise-women" },
    { name: "Heart Whisper Pal", category: "Web applications", problem: "Web project listed in the public portfolio inventory.", contribution: "Project details and implementation evidence are not documented in the current portfolio record.", tags: ["Web"], repo: "heart-whisper-pal" },
    { name: "E-Commerce & Sales Analysis", category: "Data analysis", problem: "Teams need visibility into sales trends and customer insights.", contribution: "Retained as a data-analysis project in the existing portfolio inventory.", tags: ["Python", "JavaScript", "Data analysis"] },
    { name: "Driving Licence Management System", category: "Full-stack", problem: "Licence records need a structured digital management workflow.", contribution: "Retained as a Java and HTML project in the existing portfolio inventory.", tags: ["Java", "HTML"] },
    { name: "Student Management System", category: "Other", problem: "Campus records need structured storage and retrieval.", contribution: "Retained as a C and C++ project in the existing portfolio inventory.", tags: ["C", "C++"] },
    { name: "Truxify", category: "Full-stack", problem: "Logistics operations need a focused digital platform.", contribution: "Public open-source logistics repository identified during the portfolio inventory.", tags: ["Flutter", "Open source"], repo: "Truxify" }
].map((project, index) => ({ ...project, number: String(index + 1).padStart(2, "0") }));

const leadership = [
    ["Smart India Hackathon", "Team Lead · 2024 & 2025", "Led solution design and cross-functional coordination; resume records a top-50 finalist recognition.", "fa-trophy"],
    ["TAMCAM Hackathon", "Pre-finalist", "Recognized among the top teams at the national-level hackathon.", "fa-medal"],
    ["WWT Women’s Hackathon", "Solo participant", "Managed the full project lifecycle from ideation through final presentation.", "fa-lightbulb"],
    ["Logic Play Technical Club", "Co-Lead", "Mentored 60+ students and organized technical workshops and coding events.", "fa-people-group"],
    ["THREX Hackathon at SRMSIT", "Top 20 finish", "Demonstrated competitive technical execution in a top-20 finish.", "fa-ranking-star"],
    ["DEFY Hackathon at VIT Chennai", "Team Lead", "Directed solution design and cross-functional team coordination.", "fa-users"],
    ["Tamil Computing Club", "President", "Leadership role supplied in the portfolio brief; additional activity details need confirmation.", "fa-language"],
    ["Elite Coders Summer of Code", "UI Components contributor · 2026", "Contribution supplied in the portfolio brief; specific merged work needs confirmation.", "fa-code-branch"],
    ["Google Developer Program", "Learning and badges", "Learning participation and badges supplied in the portfolio brief.", "fa-google"]
];

const certifications = [
    ["Secure Enterprise AI Agents", "Google"],
    ["Build Your Own Small Language Model", "Google DeepMind"],
    ["Introduction to Generative AI", "Google"],
    ["Agent Fundamentals", "Google"],
    ["Create Your First Gemini Enterprise Application", "Google"],
    ["IBM Generative AI for Software Development", "IBM"],
    ["Mastering Python", "Infosys Springboard"],
    ["Python and Introduction to AI", "Infosys Springboard"],
    ["Web Designing", "ITRONIX"],
    ["Advanced Excel", "ITRONIX"],
    ["SQL and Relational Databases 101", "Cognitive Class"],
    ["SheCodes Basic to Plus", "SheCodes"],
    ["SheCodes Plus AI", "SheCodes"],
    ["AIG and Datacom cybersecurity simulations", "Forage"],
    ["BCG and British Airways data science simulations", "Forage"],
    ["Goldman Sachs software engineering simulation", "Forage"]
];

const iconForCategory = { "AI / ML": "fa-brain", "Full-stack": "fa-code", "Web applications": "fa-window-maximize", "Data analysis": "fa-chart-column", "Social impact": "fa-hand-holding-heart", Other: "fa-folder-open" };
const $ = (selector) => document.querySelector(selector);

function renderSkills(query = "") {
    const normalized = query.toLowerCase().trim();
    const filtered = skillGroups.filter(([, , skills]) => skills.some((skill) => skill.toLowerCase().includes(normalized)));
    $("#skillsGrid").innerHTML = filtered.map(([name, icon, skills]) => `<article class="skill-category reveal visible"><h3><span>${name}</span><i class="fa-solid ${icon}" aria-hidden="true"></i></h3><div class="skill-tags">${skills.filter((skill) => skill.toLowerCase().includes(normalized)).map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}</div></article>`).join("");
    $("#skillsEmpty").hidden = filtered.length > 0;
}

function renderExperience() {
    $("#experienceList").innerHTML = experiences.map((item) => `<article class="experience-item reveal visible"><div class="experience-date">${item.date}</div><div class="experience-card"><h3>${item.role}</h3><p class="experience-meta">${item.org} · ${item.mode}</p><details><summary>View contributions</summary><ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul></details></div></article>`).join("");
}

function renderProjects() {
    const query = $("#projectSearch").value.toLowerCase().trim();
    const active = document.querySelector(".filter-button.active")?.dataset.filter || "All";
    const visible = projects.filter((project) => {
        const matchesFilter = active === "All" || project.category === active;
        const searchable = [project.name, project.category, project.problem, project.contribution, ...project.tags].join(" ").toLowerCase();
        return matchesFilter && searchable.includes(query);
    });
    $("#projectsGrid").innerHTML = visible.map((project) => {
        const repoLink = project.repo ? `<a href="${githubBase}${project.repo}" target="_blank" rel="noreferrer">GitHub <i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : "";
        const links = repoLink;
        return `<article class="project-card ${Number(project.number) <= 3 ? "project-highlight" : ""} reveal visible"><div class="project-top"><span class="project-number">${project.number} / 15</span><i class="project-icon fa-solid ${iconForCategory[project.category] || iconForCategory.Other}" aria-hidden="true"></i></div><p class="project-category">${project.category}</p><h3>${project.name}</h3><p class="project-problem"><strong>Problem:</strong> ${project.problem}</p><p><strong>Contribution:</strong> ${project.contribution}</p><div class="project-tags">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>${project.evidence ? `<p class="project-evidence"><i class="fa-solid fa-circle-check"></i> ${project.evidence}</p>` : ""}${links ? `<div class="project-links">${links}</div>` : `<p class="unverified">Links not published</p>`}</article>`;
    }).join("");
    $("#projectsEmpty").hidden = visible.length > 0;
}

function renderFilters() {
    const categories = ["All", ...new Set(projects.map((project) => project.category))];
    $("#projectFilters").innerHTML = categories.map((category, index) => `<button class="filter-button ${index === 0 ? "active" : ""}" type="button" data-filter="${category}">${category}</button>`).join("");
    $("#projectFilters").addEventListener("click", (event) => {
        const button = event.target.closest(".filter-button");
        if (!button) return;
        document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        renderProjects();
    });
}

function renderLeadership() {
    $("#leadershipGrid").innerHTML = leadership.map(([title, meta, description, icon]) => `<article class="leadership-card reveal visible"><i class="fa-solid ${icon}" aria-hidden="true"></i><h3>${title}</h3><p class="experience-meta">${meta}</p><p>${description}</p></article>`).join("");
}

function renderCertifications(query = "") {
    const filtered = certifications.filter(([name, issuer]) => `${name} ${issuer}`.toLowerCase().includes(query.toLowerCase().trim()));
    $("#certificationsGrid").innerHTML = filtered.map(([name, issuer]) => `<article class="cert-card reveal visible"><h3>${name}</h3><p>${issuer}</p></article>`).join("");
    $("#certsEmpty").hidden = filtered.length > 0;
}

function setupNavigation() {
    const toggle = $(".menu-toggle");
    const menu = $("#site-menu");
    toggle.addEventListener("click", () => {
        const open = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    });
    document.querySelectorAll(".nav-link").forEach((link) => link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    }));
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
    }), { rootMargin: "-30% 0px -60% 0px" });
    sections.forEach((section) => observer.observe(section));
}

function setupInteractions() {
    $("#skillSearch").addEventListener("input", (event) => renderSkills(event.target.value));
    $("#projectSearch").addEventListener("input", renderProjects);
    $("#certSearch").addEventListener("input", (event) => renderCertifications(event.target.value));
    $("#contactForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value.trim();
        const email = form.elements.email.value.trim();
        const message = form.elements.message.value.trim();
        const status = $("#contactStatus");

        if (!name || !email || !message || !form.elements.email.validity.valid) {
            status.textContent = "Please enter your name, a valid email, and a message.";
            return;
        }

        const whatsappMessage = encodeURIComponent(`Hi Shreeya, I'm ${name} (${email}).\n\n${message}`);
        window.open(`https://wa.me/919840787075?text=${whatsappMessage}`, "_blank", "noopener,noreferrer");
        status.textContent = "Opening WhatsApp with your message.";
        form.reset();
    });
    window.addEventListener("scroll", () => {
        const height = document.documentElement.scrollHeight - window.innerHeight;
        $("#scrollProgress").style.width = `${height > 0 ? (window.scrollY / height) * 100 : 0}%`;
    }, { passive: true });
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    }), { threshold: .08 });
    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
    renderSkills();
    renderExperience();
    renderFilters();
    renderProjects();
    renderLeadership();
    renderCertifications();
    setupNavigation();
    setupInteractions();
});
