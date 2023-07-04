const badge = document.createElement("p");
// Use the appropriate class names for the desired styling
badge.innerHTML = "<h2>Hi there!!</h2>";

const headers = document.querySelectorAll("h1");
console.log(headers);
for (let header of headers) {
  const image = document.createElement("img");
  image.src =
    "https://res.cloudinary.com/dmaijlcxd/image/upload/c_scale,w_265/v1688494411/kipper_itchy_rjl3uv.png";
  image.alt = "Image description";

  badge.appendChild(image);

  header.insertAdjacentElement("afterend", badge);
}

// if (article) {
//   const text = article.textContent;
//   const wordMatchRegExp = /[^\s]+/g; // Regular expression
//   const words = text.matchAll(wordMatchRegExp);
//   // matchAll returns an iterator, convert to array to get word count
//   const wordCount = [...words].length;
//   const readingTime = Math.round(wordCount / 200);
//   const badge = document.createElement("p");
//   // Use the same styling as the publish information in an article's header
//   badge.classList.add("color-secondary-text", "type--caption");
//   badge.textContent = `⏱️ ${readingTime} min read`;

//   // Support for API reference docs
//   const heading = article.querySelector("h1");
//   // Support for article docs with date
//   const date = article.querySelector("time")?.parentNode;

//   (date ?? heading).insertAdjacentElement("afterend", badge);
// }
