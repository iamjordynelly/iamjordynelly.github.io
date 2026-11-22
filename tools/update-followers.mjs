// Met à jour les "followers" de data.js en lisant les profils publics.
// Utilisation : node tools/update-followers.mjs
// Sortie : une ligne par réseau, puis "UPDATED" si data.js a changé, "SAME" sinon.
// Si un réseau ne répond pas ou renvoie un chiffre bizarre, on garde l'ancien chiffre.
// Facebook ne montre rien sans connexion : à mettre à jour à la main.
import { readFileSync, writeFileSync } from "node:fs";

const num = (s) => {
  const m = String(s).replace(/,/g, "").match(/([\d.]+)\s*([KkM]?)/);
  if (!m) return null;
  const mult = { k: 1e3, K: 1e3, M: 1e6 }[m[2]] || 1;
  return { value: Math.round(parseFloat(m[1]) * mult), rounded: mult > 1 };
};
const page = async (url) => {
  const r = await fetch(url, { headers: { "Accept-Language": "en" }, signal: AbortSignal.timeout(15000) });
  if (!r.ok) throw new Error("HTTP " + r.status);
  return r.text();
};

const SOURCES = {
  youtube:   async () => num((await page("https://www.youtube.com/@iamjordynelly")).match(/([\d.,]+[KM]?) subscribers/)?.[1]),
  tiktok:    async () => num((await page("https://www.tiktok.com/@iamjordynelly")).match(/"followerCount":(\d+)/)?.[1]),
  instagram: async () => num((await page("https://www.instagram.com/iamjordynelly/")).match(/([\d.,]+[KM]?) Followers/)?.[1]),
  threads:   async () => num((await page("https://www.threads.com/@iamjordynelly")).match(/([\d.,]+[KM]?) Followers/)?.[1]),
  bereal:    async () => num((await page("https://bere.al/iamjordynelly")).match(/([\d.,]+)<\/span>\s*<span class="stat-label">Followers/)?.[1]),
};

// Ce que "2,2 k" représente déjà : inutile de remplacer 2190 par 2200
const sameRounded = (old, n) => n.rounded && Math.abs(old - n.value) < (n.value >= 1e6 ? 50000 : 50);

const file = new URL("../data.js", import.meta.url);
let src = readFileSync(file, "utf8");
let changed = false;

for (const [platform, get] of Object.entries(SOURCES)) {
  const re = new RegExp(`(platform: "${platform}"[^\\n]*?followers: )(\\d+|null)`);
  const old = Number(src.match(re)?.[2]) || 0;
  let n = null;
  try { n = await get(); } catch (e) { console.log(`${platform}: indisponible (${e.message}), on garde ${old}`); continue; }
  if (!n || !n.value) { console.log(`${platform}: chiffre introuvable, on garde ${old}`); continue; }
  if (old && (n.value < old * 0.5 || n.value > old * 3)) { console.log(`${platform}: ${n.value} semble faux, on garde ${old}`); continue; }
  // Instagram et Threads montrent parfois un chiffre en retard : on ignore les petites baisses
  if (n.value === old || sameRounded(old, n) || (n.value < old && n.value > old * 0.97)) { console.log(`${platform}: ${old} (inchangé)`); continue; }
  src = src.replace(re, `$1${n.value}`);
  changed = true;
  console.log(`${platform}: ${old} -> ${n.value}`);
}

if (!changed) { console.log("SAME"); process.exit(0); }
src = src.replace(/Chiffres relevés sur les profils publics le [\d/]+\./,
  "Chiffres relevés sur les profils publics le " + new Date().toLocaleDateString("fr-FR", { timeZone: "Europe/Paris" }) + ".");
writeFileSync(file, src);
const idx = new URL("../index.html", import.meta.url);
writeFileSync(idx, readFileSync(idx, "utf8").replace(/\?v=(\d+)/g, (_, v) => "?v=" + (Number(v) + 1)));
console.log("UPDATED");
