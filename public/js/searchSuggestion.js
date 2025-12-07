//Client-side JS for live search suggestions
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const suggestionsBox = document.getElementById("suggestions");

  if (!input || !suggestionsBox) return;

  input.addEventListener("input", async () => {
    const query = input.value.trim();
    if (!query) {
      suggestionsBox.innerHTML = "";
      return;
    }

    const res = await fetch(`/listings/suggest?q=${encodeURIComponent(query)}`);
    const suggestions = await res.json();

    suggestionsBox.innerHTML = suggestions
      .map(
        (s) => `
        <a href="/listings/${s.id}" class="list-group-item list-group-item-action">
          ${s.title} - ${s.location}
        </a>
      `
      )
      .join("");
  });

  document.addEventListener("click", (e) => {
    if (!input.contains(e.target)) {
      suggestionsBox.innerHTML = "";
    }
  });
});
