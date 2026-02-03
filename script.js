const form = document.getElementById('pageForm');
const output = document.getElementById('output');

form.addEventListener('submit', e => {
  e.preventDefault();

  const pageTitle = document.getElementById('pageTitle').value;
  const imageTitle = document.getElementById('imageTitle').value;
  const imageURL = document.getElementById('imageURL').value;
  const imageAlt = document.getElementById('imageAlt').value;
  const imageDescription = document.getElementById('imageDescription').value;
  const category = document.getElementById('category').value;
  const link = document.getElementById('link').value;

  const html = `
<!DOCTYPE html>
<html lang="pt-PT">
<head>
<meta charset="UTF-8">
<title>${pageTitle} – ${imageTitle}</title>
<meta name="description" content="${imageDescription}">
<meta name="robots" content="index, follow">
<meta property="og:title" content="${imageTitle}">
<meta property="og:description" content="${imageDescription}">
<meta property="og:type" content="website">
<meta property="og:image" content="${imageURL}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${imageTitle}">
<meta name="twitter:description" content="${imageDescription}">
<meta name="twitter:image" content="${imageURL}">
<style>
body { font-family: Arial, sans-serif; background:#111; color:#fff; margin:0; padding:20px; }
h1,h2 { text-align:center; }
img { display:block; margin:20px auto; max-width:100%; height:auto; }
p { max-width:600px; margin:10px auto; font-size:16px; line-height:1.4; }
a { color:#00bcd4; text-decoration:none; display:block; text-align:center; margin:10px 0; }
</style>
</head>
<body>
<h1>${imageTitle}</h1>
<p>Categoria: ${category}</p>
<a href="${link}" target="_blank"><img src="${imageURL}" alt="${imageAlt}"></a>
<p>${imageDescription}</p>
<a href="https://seusitegithub.github.io/">Voltar ao site principal</a>
</body>
</html>`;

  output.textContent = html.trim();
});
