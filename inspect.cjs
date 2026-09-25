const fs = require('fs');
const code = fs.readFileSync('./downloaded.js', 'utf8');

// Find all routes or paths
const routes = [...code.matchAll(/path\s*:\s*["']([^"']+)["']/g)].map(m => m[1]);
console.log('Routes:', [...new Set(routes)]);

// Find all URL matches
const urls = [...code.matchAll(/https?:\/\/[^\s"'`)]+/g)].map(m => m[0]);
const imgUrls = [...new Set(urls.filter(u => /\.(jpg|jpeg|png|webp|svg)/i.test(u) || u.includes('bstatic.com') || u.includes('images.unsplash.com')))];
console.log('Images found count:', imgUrls.length);
console.log('Images:', JSON.stringify(imgUrls, null, 2));

// Find languages
const langMatches = code.match(/["'](fr|ar|en)["']/g);
console.log('Languages sample:', langMatches ? langMatches.slice(0, 10) : 'none');
