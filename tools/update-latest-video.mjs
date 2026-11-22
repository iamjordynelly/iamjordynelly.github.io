// Met à jour "latestVideo" dans data.js avec la dernière vidéo YouTube (hors Shorts).
// Utilisation : node tools/update-latest-video.mjs
// Sortie : "UPDATED <id>" si data.js a changé, "SAME <id>" sinon.
import { readFileSync, writeFileSync } from "node:fs";

const CHANNEL = "UCkTayCuKExzWxHsl1_Y2BaQ";              // chaîne @iamjordynelly
const FEED = `https://www.youtube.com/feeds/videos.xml?playlist_id=UULF${CHANNEL.slice(2)}`; // vidéos longues seulement

const xml = await (await fetch(FEED)).text();
const entry = xml.match(/<entry>([\s\S]*?)<\/entry>/)?.[1];
if (!entry) throw new Error("Flux YouTube vide ou illisible");
const pick = (re) => entry.match(re)?.[1] ?? "";
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const id = pick(/<yt:videoId>([^<]+)</);
const published = pick(/<published>([^<]+)</).replace("+00:00", "Z");
// Titre : on garde la partie avant " | " et on adoucit les titres tout en majuscules
let title = decode(pick(/<title>([^<]+)</)).split(" | ")[0].trim();
if (title === title.toUpperCase()) title = title.charAt(0) + title.slice(1).toLowerCase();

const file = new URL("../data.js", import.meta.url);
const src = readFileSync(file, "utf8");
const current = src.match(/latestVideo:\s*{\s*id:\s*"([^"]+)"/)?.[1];
if (current === id) { console.log("SAME " + id); process.exit(0); }

const block = `latestVideo: {
    id: "${id}",
    title: ${JSON.stringify(title)},
    publishedAt: "${published}",
    views: 0,
    duration: ""
  }`;
writeFileSync(file, src.replace(/latestVideo:\s*{[\s\S]*?\n  }/, block));

// Force les téléphones à recharger data.js (numéro de version dans index.html)
const idx = new URL("../index.html", import.meta.url);
const html = readFileSync(idx, "utf8");
writeFileSync(idx, html.replace(/\?v=(\d+)/g, (_, n) => "?v=" + (Number(n) + 1)));
console.log("UPDATED " + id + " | " + title);
