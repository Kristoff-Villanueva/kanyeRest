const quotes = document.getElementById("quotes");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	fetch("https://api.kanye.rest")
		.then((res) => res.json())
		.then((data) => {
			quotes.textContent = `"${data.quote}"`;
		});
});
