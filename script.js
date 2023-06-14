//your code here
let bandNames = ["The Beatles", "Aerosmith", "The Rolling Stones", "Nirvana", "Led Zeppelin"];

// Remove articles from band names
const removeArticles = (name) => {
  const articles = /^(a |an |the )/i; // Regex pattern to match articles

  return name.replace(articles, "").trim();
};

// Sort band names in lexicographic order without articles
bandNames.sort((a, b) => {
  const nameA = removeArticles(a);
  const nameB = removeArticles(b);
  
  return nameA.localeCompare(nameB);
});

// Display band names in ul with li tags
const bandList = document.getElementById("band");

bandNames.forEach((name) => {
  const listItem = document.createElement("li");
  listItem.textContent = name;
  bandList.appendChild(listItem);
});

