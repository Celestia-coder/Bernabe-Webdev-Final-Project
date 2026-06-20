// ===== DARK MODE TOGGLE =====
const toggleBtn = document.getElementById("darkToggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
});

// ===== CONTACT FORM SUBMIT =====
function handleSubmit(e) {
	e.preventDefault();
	const name = document.getElementById("name").value.trim();
	alert(
		`Thank you for contacting me, ${name}! I'll get back to you soon.`,
	);
	e.target.reset();
}

// ===== ANIMATE SKILL BARS ON SCROLL =====
const bars = document.querySelectorAll(".bar-fill");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const bar = entry.target;
				const targetWidth = bar.getAttribute("data-width");
				bar.style.width = targetWidth + "%";
				observer.unobserve(bar);
			}
		});
	},
	{ threshold: 0.3 },
);

bars.forEach((bar) => observer.observe(bar));

// ===== SMOOTH ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
	let current = "";
	sections.forEach((section) => {
		const sectionTop = section.offsetTop - 120;
		if (window.scrollY >= sectionTop) current = section.getAttribute("id");
	});

	navLinks.forEach((link) => {
		link.style.color = "";
		if (link.getAttribute("href") === "#" + current) {
			link.style.color = "var(--pink)";
		}
	});
});

// ===== GREETING BASED ON TIME =====
window.addEventListener("DOMContentLoaded", () => {
	const hour = new Date().getHours();
	let greeting = "Hello";
	if (hour < 12) greeting = "Good morning";
	else if (hour < 18) greeting = "Good afternoon";
	else greeting = "Good evening";

	const homeSubtext = document.querySelector(".home-subtext");
	if (homeSubtext) {
		homeSubtext.textContent = `${greeting}! Building things for the web, one line of code at a time. Welcome to my little corner of the internet!`;
	}
});
