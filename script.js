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