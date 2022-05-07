// Query all search results
const results = document.querySelectorAll(".yuRUbf > a");
const origins = Array.from(results).map((link) => new URL(link.href).origin);
const faviconsImageUrl = `https://favicon.yandex.net/favicon/v2/${origins.join(
  ";"
)}?size=16&stub=1`;

results.forEach((link, i) => {
  // Put the favicon near the top link cite
  const favicon = document.createElement("img");
  favicon.src = faviconsImageUrl;
  favicon.style = `display: block; width: 16px; height: 16px; object-fit: none; object-position: 0 -${
    16 * i
  }px;`;
  const topLinkContainer = link.children[link.children.length - 1];
  topLinkContainer.style = "display: flex; justify-content: center; gap: 8px;";
  topLinkContainer.insertBefore(favicon, topLinkContainer.children[0]);
});
