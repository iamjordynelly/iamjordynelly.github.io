(() => {
  const P = window.PROFILE;
  const $ = (id) => document.getElementById(id);
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ================= Icônes =================
  const ICONS = {
    youtube: '<svg class="brand" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    instagram: '<svg class="brand" viewBox="0 0 24 24"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
    tiktok: '<svg class="brand" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>',
    facebook: '<svg class="brand" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>',
    threads: '<svg class="brand" viewBox="0 0 24 24"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.321.142 1.49.7 2.58 1.761 3.154 3.07.797 1.82.871 4.79-1.548 7.158-1.85 1.81-4.094 2.628-7.277 2.65Zm1.003-11.69c-.242 0-.487.007-.739.021-1.836.103-2.98.946-2.916 2.143.067 1.256 1.452 1.839 2.784 1.767 1.224-.065 2.818-.543 3.086-3.71a10.5 10.5 0 0 0-2.215-.221z"/></svg>',
    bereal: '<svg class="brand" viewBox="0 0 24 24"><path d="M6.501 10.727c.593 0 1.029.196 1.307.587.279.393.418.857.418 1.391v.312H5.674a.97.97 0 0 0 .343.596c.182.148.422.223.718.223.172 0 .327-.023.464-.066.163-.055.324-.119.48-.192l.297.733a1.73 1.73 0 0 1-.644.296c-.252.063-.46.093-.62.093-.656 0-1.172-.18-1.55-.537-.377-.36-.565-.84-.565-1.441 0-.603.17-1.086.51-1.45.342-.364.806-.545 1.394-.545Zm8.835 0c.593 0 1.028.196 1.307.587.278.393.417.857.417 1.391v.312h-2.552c.038.235.16.447.344.596.182.148.421.223.718.223.171 0 .326-.023.464-.066a4.53 4.53 0 0 0 .48-.192l.297.733a1.728 1.728 0 0 1-.644.296 2.67 2.67 0 0 1-.62.093c-.656 0-1.173-.18-1.55-.537-.377-.36-.566-.84-.566-1.441 0-.603.17-1.086.512-1.45.34-.364.805-.545 1.393-.545Zm3.875.041c.974 0 1.603.502 1.603 1.26v2.579h-1.027v-.561h-.02c-.215.385-.616.62-1.111.62-.756 0-1.265-.473-1.265-1.136v-.008c0-.683.53-1.083 1.465-1.144l.931-.055v-.231c0-.335-.217-.541-.618-.541-.383 0-.615.18-.664.421l-.007.03h-.939l.004-.04c.056-.696.653-1.194 1.648-1.194Zm4.789 2.8v1.039h-1.04v-1.039H24ZM1.982 9.308c.515 0 .934.114 1.257.34.322.225.484.607.484 1.14 0 .198-.046.376-.137.534-.09.16-.21.296-.355.41.24.125.436.294.59.506.153.213.23.483.23.81 0 .489-.171.871-.512 1.146-.34.275-.795.413-1.362.413H0V9.308h1.982Zm8.702 0c.578 0 1.072.133 1.483.398.411.265.617.675.617 1.231 0 .327-.085.609-.254.846a1.714 1.714 0 0 1-.652.549l1.304 2.275h-1.077l-1.124-2.025a3.626 3.626 0 0 1-.367.015h-.585v2.01H9.022V9.308h1.662ZM22.448 9.3v5.307h-1.076V9.3h1.076Zm-2.66 3.661-.777.049c-.397.025-.605.192-.605.46v.007c0 .277.229.442.584.442.46 0 .797-.294.797-.688l.001-.27ZM2.17 12.285H1.007v1.489h1.092c.27 0 .488-.063.652-.188a.622.622 0 0 0 .246-.53c0-.25-.076-.44-.226-.572-.151-.132-.352-.199-.601-.199Zm4.308-.694a.75.75 0 0 0-.523.19c-.14.128-.232.315-.273.558h1.584c-.052-.253-.146-.442-.281-.564a.73.73 0 0 0-.507-.184Zm8.834 0a.75.75 0 0 0-.523.19c-.14.128-.231.315-.273.558h1.585c-.053-.253-.146-.442-.281-.564a.73.73 0 0 0-.508-.184Zm-4.659-1.441h-.624v1.62h.64c.301 0 .551-.06.749-.182.198-.122.296-.324.296-.604 0-.297-.093-.51-.28-.639-.188-.13-.448-.195-.781-.195Zm-8.819 0h-.827v1.316h.749c.281 0 .5-.053.66-.16.158-.105.238-.273.238-.501 0-.25-.073-.422-.219-.515-.146-.093-.346-.14-.601-.14Z"/></svg>',
    plane: '<svg viewBox="0 0 24 24"><path d="M10.5 13.5L4 11l1.5-1.5 7 .5 4-4a2 2 0 0 1 3 3l-4 4 .5 7L16.5 21 14 14.5l-3 3v2.5L9.5 21l-1-3.5L5 16.5 6.5 15H9z"/></svg>',
    camera: '<svg viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    chat: '<svg viewBox="0 0 24 24"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/></svg>',
    link: '<svg viewBox="0 0 24 24"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>',
    chev: '<svg class="chev" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>',
    play: '<svg viewBox="0 0 24 24"><path d="M7 4l13 8-13 8z"/></svg>'
  };
  const NAMES = { youtube: "YouTube", instagram: "Instagram", tiktok: "TikTok", facebook: "Facebook", threads: "Threads", bereal: "BeReal" };
  const LINK_COLORS = { camera: "#ff9f0a", mail: "#0071e3", chat: "#5856d6", play: "#ff3b30", plane: "#34c759" };
  const esc = (s = "") => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const compact = (n) => new Intl.NumberFormat("fr-FR", { notation: "compact", maximumFractionDigits: 1 }).format(n);
  const full = (n) => Math.round(n).toLocaleString("fr-FR").replace(/ /g, " ");
  const timeAgo = (iso) => {
    const d = (Date.now() - new Date(iso)) / 1000;
    const rtf = new Intl.RelativeTimeFormat("fr", { numeric: "auto" });
    if (d < 3600) return rtf.format(-Math.max(1, Math.round(d / 60)), "minute");
    if (d < 86400) return rtf.format(-Math.round(d / 3600), "hour");
    if (d < 86400 * 30) return rtf.format(-Math.round(d / 86400), "day");
    return rtf.format(-Math.round(d / (86400 * 30)), "month");
  };

  // ================= Mode clair / sombre =================
  // "auto" = suit le réglage du téléphone (mode clair / sombre), même s'il change pendant la visite.
  // Le bouton lune permet de changer à la main, seulement pour la visite en cours.
  const sysDark = matchMedia("(prefers-color-scheme: dark)");
  let manual = null;
  try { manual = sessionStorage.getItem("theme-visit"); } catch (e) {}
  const pick = () => manual || (P.theme && P.theme !== "auto" ? P.theme : (sysDark.matches ? "dark" : "light"));
  let theme = pick();
  const applyTheme = () => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#000000" : "#ffffff");
  };
  applyTheme();
  sysDark.addEventListener?.("change", () => { if (!manual) { theme = pick(); applyTheme(); } });
  $("themeBtn").addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    manual = theme;
    try { sessionStorage.setItem("theme-visit", theme); } catch (e) {}
    applyTheme();
  });

  // ================= Hero =================
  document.title = P.name;
  $("navLogo").textContent = P.name;
  $("tagline").textContent = P.tagline;
  // Nom avec la photo glissée dans le titre ("Jordy [photo] Nelly")
  const nameEl = $("name");
  nameEl.setAttribute("aria-label", P.name);
  // no-referrer : sinon les serveurs d'images de Google refusent parfois la photo (erreur 429)
  const pill = P.avatar
    ? `<span class="title-photo" aria-hidden="true"><img src="${esc(P.avatar)}" alt="" referrerpolicy="no-referrer" onerror="this.parentElement.classList.add('fallback');this.remove()"></span>`
    : "";
  const parts = P.name.split(/\s+&\s+/);
  nameEl.innerHTML = parts.length === 2
    ? `<span aria-hidden="true">${esc(parts[0])}</span> ${pill || '<span aria-hidden="true">&amp;</span>'} <span aria-hidden="true">${esc(parts[1])}</span>`
    : `<span aria-hidden="true">${esc(P.name)}</span> ${pill}`;
  $("heroSub").textContent = P.bio.split(".")[0] + ".";

  const main = P.socials[0];
  $("heroCta").innerHTML = `
    <a class="btn" href="${esc(main.url)}" target="_blank" rel="noopener">${esc(main.cta)} sur ${NAMES[main.platform]}</a>
    <a class="more" href="#liens">Tous mes réseaux</a>`;

  // ================= Grand encart du haut : la dernière vidéo =================
  // (plus tard, le robot de mise à jour remplira latestVideo tout seul)
  const v = P.latestVideo;
  const yt = P.socials.find((s) => s.platform === "youtube");
  const ytThumb = (id) => `https://i.ytimg.com/vi/${encodeURIComponent(id)}/maxresdefault.jpg`;
  const embed = (id, title) => `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&playsinline=1" title="${esc(title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
  $("heroMedia").innerHTML = `
    <img class="hero-thumb" src="${esc(v.id ? ytThumb(v.id) : v.thumbnail)}" alt="">
    <span class="hero-badge"><i></i>Nouvelle vidéo · ${esc(timeAgo(v.publishedAt))}</span>
    <button class="hero-link" id="heroPlay" aria-label="Lire la dernière vidéo : ${esc(v.title)}"></button>`;
  // Le titre est sous la miniature (pas dessus) pour laisser l'image respirer
  $("heroCaption").setAttribute("aria-label", "Lire la dernière vidéo : " + v.title);
  $("heroCaption").innerHTML = `
    <span class="hf-icon">${ICONS.youtube}</span>
    <span class="hf-text"><span class="hf-kicker">Notre dernière vidéo</span><span class="hf-title">${esc(v.title)}</span></span>
    ${ICONS.chev}`;
  // Un appui sur la miniature (ou la bande titre) lance la vidéo directement dans la carte
  const playHero = () => {
    if (!v.id) { open(yt?.url, "_blank"); return; }
    $("heroMedia").innerHTML = embed(v.id, v.title);
  };
  $("heroPlay").addEventListener("click", playHero);
  $("heroCaption").addEventListener("click", playHero);

  // ================= Communauté =================
  const total = P.socials.reduce((s, x) => s + (x.followers || 0), 0);
  const tot = $("totalFollowers");
  tot.dataset.count = total;
  $("updated").textContent = `${P.socials.map((s) => NAMES[s.platform]).slice(0, 3).join(", ")} et plus. Chiffres mis à jour ${timeAgo(P.updatedAt)}.`;
  const sorted = [...P.socials].sort((a, b) => (b.followers ?? -1) - (a.followers ?? -1));
  $("platforms").innerHTML = sorted.map((s) => `
    <article class="stat reveal p-${s.platform}">
      <span class="stat-icon">${ICONS[s.platform]}</span>
      ${s.followers != null
        ? `<div class="stat-num" data-count="${s.followers}" data-compact="1">0</div>
           <div class="stat-label">abonnés sur ${NAMES[s.platform]}</div>`
        : `<div class="stat-num">${NAMES[s.platform]}</div>
           <div class="stat-label">Retrouvez-nous aussi ici</div>`}
      ${s.growth ? `<div class="stat-growth">+ ${esc(s.growth.replace(/^\+\s?/, ""))}</div>` : ""}
      <a class="more" href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.cta)}</a>
    </article>`).join("");

  // ================= Carrousel réutilisable (galerie photos + vidéos de la chaîne) =================
  // items : [{ href, html (contenu de la carte), caption, label }]
  function carousel({ track, dots, pp, caption, items, every = 4500 }) {
    track.innerHTML = items.map((it, i) =>
      `<a class="g-item${i === 0 ? " active" : ""}${it.cls ? " " + it.cls : ""}" data-i="${i}" ${it.href ? `href="${esc(it.href)}" target="_blank" rel="noopener"` : ""} draggable="false">${it.html}</a>`).join("");
    dots.innerHTML = items.map((it, i) =>
      `<button class="pager-dot${i === 0 ? " active" : ""}" data-i="${i}" aria-label="${esc(it.label || "Élément " + (i + 1))}"><i></i></button>`).join("");
    const els = [...track.children], ds = [...dots.children];
    let cur = 0, playing = !reduce, timer, visible = false, raf;
    const setActive = (i) => {
      cur = i;
      els.forEach((el, k) => el.classList.toggle("active", k === i));
      ds.forEach((el, k) => el.classList.toggle("active", k === i));
      if (caption) caption.textContent = items[i]?.caption || "";
    };
    setActive(0);
    const go = (i) => {
      const el = els[i];
      track.scrollTo({ left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2, behavior: reduce ? "auto" : "smooth" });
    };
    track.addEventListener("scroll", () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const c = track.scrollLeft + track.clientWidth / 2;
        let best = 0, bd = Infinity;
        els.forEach((el, k) => { const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - c); if (d < bd) { bd = d; best = k; } });
        if (best !== cur) setActive(best);
      });
    }, { passive: true });
    const restart = () => {
      clearInterval(timer);
      if (playing) timer = setInterval(() => { if (visible && !document.hidden) go((cur + 1) % els.length); }, every);
    };
    const syncPP = () => { pp.classList.toggle("paused", !playing); pp.setAttribute("aria-label", playing ? "Mettre en pause le défilement" : "Lancer le défilement"); };
    dots.addEventListener("click", (e) => { const b = e.target.closest("[data-i]"); if (b) { go(+b.dataset.i); restart(); } });
    // Carte du centre : ouvre le lien. Carte sur le côté : la ramène au centre.
    track.addEventListener("click", (e) => {
      const f = e.target.closest(".g-item");
      if (f && +f.dataset.i !== cur) { e.preventDefault(); go(+f.dataset.i); restart(); }
    });
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { go(Math.min(cur + 1, els.length - 1)); restart(); }
      if (e.key === "ArrowLeft") { go(Math.max(cur - 1, 0)); restart(); }
    });
    pp.addEventListener("click", () => { playing = !playing; syncPP(); restart(); });
    track.addEventListener("pointerdown", restart);
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }, { threshold: 0.4 }).observe(track);
    syncPP(); restart();
  }

  // ================= Section noire : la chaîne YouTube =================
  const themes = P.channelThemes || [];
  const rot = $("rotator");
  if (themes.length) {
    let t = 0;
    rot.textContent = themes[0] + ".";
    if (!reduce && themes.length > 1) setInterval(() => {
      if (document.hidden) return;
      rot.classList.add("out");
      setTimeout(() => { t = (t + 1) % themes.length; rot.textContent = themes[t] + "."; rot.classList.remove("out"); }, 450);
    }, 2600);
  }
  $("channelMeta").textContent = `${compact(yt?.followers || 0)} abonnés · une nouvelle vidéo chaque semaine.`;
  carousel({
    track: $("vcarousel"), dots: $("vdots"), pp: $("vplayPause"), caption: $("vidCaption"), every: 5000,
    items: (P.featured || []).map((f, i) => ({
      href: `https://www.youtube.com/watch?v=${encodeURIComponent(f.id)}`,
      label: f.title, caption: `${f.theme} · ${f.title}`,
      html: `<img src="${esc(ytThumb(f.id))}" alt="${esc(f.title)}" loading="${i < 2 ? "eager" : "lazy"}" draggable="false">
        <span class="v-theme">${esc(f.theme)}</span>
        <span class="g-cap"><span class="g-title">${esc(f.title)}</span><span class="watch-chip">${ICONS.play}Regarder</span></span>`
    }))
  });
  $("channelActions").innerHTML = `
    <a class="btn" href="${esc(yt?.url || "#")}" target="_blank" rel="noopener">S'abonner à la chaîne</a>
    <a class="more" href="${esc(yt ? yt.url.split("?")[0] + "/videos" : "#")}" target="_blank" rel="noopener">Toutes les vidéos</a>`;

  // ================= Galerie photos =================
  carousel({
    track: $("gallery"), dots: $("dots"), pp: $("playPause"), caption: $("galCaption"),
    items: (P.gallery || []).map((g, i) => ({
      href: g.href, cls: g.landscape ? "landscape" : "", label: g.alt, caption: g.alt,
      html: `<img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="${i < 3 ? "eager" : "lazy"}" draggable="false" ${g.pos ? `style="object-position:${esc(g.pos)}"` : ""}>
        <span class="g-cap"><span class="g-title">${esc(g.alt)}</span>${g.href ? `<span class="watch-chip">${g.cta === "Instagram" ? ICONS.instagram : ICONS.play}${esc(g.cta || "Regarder")}</span>` : ""}</span>`
    }))
  });

  // ================= Liens & réseaux (listes) =================
  $("links").innerHTML = P.links.map((l) => `
    <a class="row" href="${esc(l.url)}" target="_blank" rel="noopener">
      <span class="row-icon" style="--p:${LINK_COLORS[l.icon] || "#0071e3"}">${ICONS[l.icon] || ICONS.link}</span>
      <span class="row-body"><span class="row-title">${esc(l.title)}</span><br><span class="row-sub">${esc(l.subtitle || "")}</span></span>
      ${ICONS.chev}
    </a>`).join("");
  $("socialList").innerHTML = P.socials.map((s) => `
    <a class="row p-${s.platform}" href="${esc(s.url)}" target="_blank" rel="noopener">
      <span class="row-icon">${ICONS[s.platform]}</span>
      <span class="row-body"><span class="row-title">${NAMES[s.platform]}</span><br><span class="row-sub">${esc(s.handle)}</span></span>
      <span class="row-value">${s.followers != null ? compact(s.followers) : ""}</span>
      ${ICONS.chev}
    </a>`).join("");

  // ================= Footer =================
  $("bioFoot").textContent = P.bio;
  $("footName").textContent = P.name;
  $("year").textContent = new Date().getFullYear();
  $("location").textContent = P.location || "";

  // ================= Partage =================
  function toast(msg) {
    const t = $("toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toast.t); toast.t = setTimeout(() => t.classList.remove("show"), 1800);
  }
  $("shareBtn").addEventListener("click", async () => {
    try {
      if (navigator.share) await navigator.share({ title: P.name, url: location.href });
      else { await navigator.clipboard.writeText(location.href); toast("Lien copié"); }
    } catch (e) {}
  });

  // ================= Animations =================
  const countUp = (el) => {
    const target = +el.dataset.count, fmt = el.dataset.compact ? compact : full;
    if (reduce) { el.textContent = fmt(target); return; }
    const t0 = performance.now(), dur = 1800;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      el.textContent = fmt(Math.round(target * e));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const t = en.target;
    t.classList.add("in");
    if (t.dataset.count) countUp(t);
    t.querySelectorAll("[data-count]").forEach(countUp);
    io.unobserve(t);
  }), { threshold: 0.2 });
  document.querySelectorAll(".reveal").forEach((n) => {
    const sib = [...n.parentElement.children].filter((c) => c.classList.contains("reveal"));
    n.style.transitionDelay = `${Math.min(sib.indexOf(n), 6) * 70}ms`;
    io.observe(n);
  });

  // ================= Décor de saison (Noël) =================
  // Une couche ajoutée par-dessus le site : on l'active ou on l'enlève depuis data.js.
  const activeSeason = (() => {
    // Aperçu : ?saison=nouvelan (ou noel, aucune) dans l'adresse
    const preview = new URLSearchParams(location.search).get("saison");
    const s = preview || P.season || "aucune";
    if (s !== "auto") return P.seasons?.[s] ? s : null;
    const d = new Date(), m = d.getMonth() + 1, day = d.getDate();
    if ((m === 12 && day >= 28) || (m === 1 && day <= 6)) return P.seasons?.nouvelan ? "nouvelan" : "noel";
    if ((m === 11 && day >= 15) || m === 12) return "noel";
    return null;
  })();
  if (activeSeason === "noel" && P.seasons?.noel) {
    const N = P.seasons.noel;
    document.documentElement.dataset.season = "noel";
    const TREE = `<svg class="xmas-tree" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.5l3.6 4.6h-2.2l3.9 5h-2.3l4.5 5.9H4.5L9 12.1H6.7l3.9-5H8.4z" fill="#14794a"/>
      <rect x="11" y="18" width="2" height="3.2" rx=".5" fill="#8a5a2b"/>
      <circle cx="10.4" cy="9.6" r="1" fill="#1e20cd"/><circle cx="13.8" cy="13.4" r="1.1" fill="#4f52ff"/>
      <circle cx="9.2" cy="15.6" r="1.1" fill="#1e20cd"/><circle cx="15.6" cy="16.4" r=".9" fill="#8a8cff"/>
      <path d="M12 .8l.6 1.3 1.4.2-1 1 .2 1.4-1.2-.7-1.2.7.2-1.4-1-1 1.4-.2z" fill="#1e20cd"/></svg>`;
    // Bandeau fin sous la barre de navigation
    if (N.ribbon) {
      $("nav").insertAdjacentHTML("afterend", `
        <div class="ribbon">${TREE}<span>${esc(N.ribbon)}</span>${N.ribbonLink ? `<a class="ribbon-link" href="${esc(N.ribbonLink.url)}" target="_blank" rel="noopener">${esc(N.ribbonLink.label)}</a>` : ""}</div>`);
    }
    // Décor du haut : 2 boules groupées au-dessus de "Nelly" + un petit sapin de l'autre côté.
    // Les positions sont calculées sur la vraie place du titre, pour s'adapter à chaque écran.
    const decor = document.createElement("div");
    decor.className = "baubles"; decor.setAttribute("aria-hidden", "true");
    $("top").prepend(decor);
    const ball = (i, c1, c2, c3) => `<svg viewBox="0 0 40 46"><defs><radialGradient id="bg${i}" cx="35%" cy="38%" r="70%"><stop offset="0" stop-color="${c1}"/><stop offset=".55" stop-color="${c2}"/><stop offset="1" stop-color="${c3}"/></radialGradient></defs>
        <rect x="15" y="0" width="10" height="7" rx="1.5" fill="#d9dde5"/><circle cx="20" cy="26" r="19" fill="url(#bg${i})"/>
        <ellipse cx="13" cy="18" rx="5" ry="3" fill="#fff" opacity=".45" transform="rotate(-30 13 18)"/></svg>`;
    if (N.baubles) {
      decor.insertAdjacentHTML("beforeend", `
        <span class="bauble b-long" style="animation-delay:0s"><i class="string"></i>${ball(0, "#5b5eff", "#1e20cd", "#0b0c6b")}</span>
        <span class="bauble b-short" style="animation-delay:-1.4s"><i class="string"></i>${ball(1, "#ffffff", "#c9d4e8", "#7d8aa6")}</span>`);
    }
    // Petit sapin aux décorations bleues, posé sur le haut de la section noire "Dernière vidéo"
    $("video").insertAdjacentHTML("afterbegin", `
      <svg class="xmas-big" viewBox="0 0 64 71" aria-hidden="true">
        <defs><linearGradient id="treeG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f8a57"/><stop offset="1" stop-color="#0f5a37"/></linearGradient></defs>
        <path d="M32 6 L46 24 H39 L52 41 H43 L58 61 H6 L21 41 H12 L25 24 H18 Z" fill="url(#treeG)"/>
        <rect x="28" y="61" width="8" height="10" rx="2" fill="#7a4a24"/>
        <path d="M22 35 Q32 40 43 33" stroke="#c9d4e8" stroke-width="1.4" fill="none" opacity=".9"/>
        <path d="M16 52 Q32 58 49 50" stroke="#c9d4e8" stroke-width="1.4" fill="none" opacity=".9"/>
        <circle class="tw" cx="27" cy="29" r="2.6" fill="#1e20cd"/>
        <circle class="tw" cx="38" cy="38" r="2.8" fill="#6a6cff" style="animation-delay:-.8s"/>
        <circle class="tw" cx="22" cy="46" r="3" fill="#1e20cd" style="animation-delay:-1.6s"/>
        <circle class="tw" cx="43" cy="53" r="2.8" fill="#b9baff" style="animation-delay:-.4s"/>
        <circle class="tw" cx="31" cy="55" r="2.4" fill="#ffffff" style="animation-delay:-1.2s"/>
        <path d="M32 0 l2 4.2 4.6.6-3.4 3.2.9 4.6L32 10.4l-4.1 2.2.9-4.6-3.4-3.2 4.6-.6z" fill="#1e20cd"/>
      </svg>`);
    const placeDecor = () => {
      // Positions "de mise en page" (offsetTop/Left) : elles ne bougent pas pendant les animations d'apparition
      const nameEl = $("name"), heroW = $("top").offsetWidth;
      const fs = parseFloat(getComputedStyle(nameEl).fontSize);
      const mobile = innerWidth < 640;
      const titleTop = nameEl.offsetTop + fs * 0.14; // haut des lettres du titre
      const long = decor.querySelector(".b-long"), short = decor.querySelector(".b-short");
      if (long) {
        const size = mobile ? 32 : 48, ss = mobile ? 22 : 30;
        // Bord droit : celui de l'écran sur téléphone, celui du contenu (1024 px max) sur grand écran
        const right = Math.min(heroW, (heroW + 1024) / 2) - (mobile ? 34 : 50);
        // La grande boule, tout à droite, s'arrête à mi-chemin entre le haut et le titre : loin de "Nelly"
        long.style.setProperty("--size", size + "px");
        long.style.setProperty("--len", Math.max(14, (titleTop - size * 1.15) * 0.5) + "px");
        long.style.left = (right - size / 2) + "px";
        // La petite, juste à sa gauche, sur un fil court
        short.style.setProperty("--size", ss + "px");
        short.style.setProperty("--len", (mobile ? 10 : 18) + "px");
        short.style.left = (right - size - ss / 2 - 6) + "px";
      }
    };
    placeDecor();
    addEventListener("resize", placeDecor);
    document.fonts?.ready.then(placeDecor);
    setTimeout(placeDecor, 1900); // après l'ouverture animée de la photo dans le titre
    // Neige légère sur toute la page (bleu pâle sur fond clair, blanche sur fond sombre)
    if (N.snow && !reduce) {
      const cv = document.createElement("canvas");
      cv.className = "snow"; cv.setAttribute("aria-hidden", "true");
      document.body.appendChild(cv);
      const ctx = cv.getContext("2d");
      let W, H, flakes = [];
      const size = () => {
        const r = devicePixelRatio || 1;
        W = innerWidth; H = innerHeight; cv.width = W * r; cv.height = H * r; ctx.setTransform(r, 0, 0, r, 0, 0);
        flakes = Array.from({ length: Math.round(W / 24) + 10 }, () => ({
          x: Math.random() * W, y: Math.random() * H, r: Math.random() * 2.4 + 1,
          s: Math.random() * .45 + .25, o: Math.random() * 6, a: Math.random() * .5 + .5 }));
      };
      size(); addEventListener("resize", size);
      // Couleur du flocon selon ce qu'il y a derrière : section noire "Dernière vidéo" ou mode sombre = blanc
      const darkZone = () => {
        const v = $("video").getBoundingClientRect();
        return [v.top, v.bottom];
      };
      const tick = (t) => {
        if (!document.hidden) {
          ctx.clearRect(0, 0, W, H);
          const darkTheme = document.documentElement.dataset.theme === "dark";
          const [dt, db] = darkZone();
          for (const f of flakes) {
            f.y += f.s; f.x += Math.sin(t / 1600 + f.o) * .35;
            if (f.y > H + 4) { f.y = -4; f.x = Math.random() * W; }
            const onDark = darkTheme || (f.y > dt && f.y < db);
            ctx.fillStyle = onDark ? `rgba(255,255,255,${.75 * f.a})` : `rgba(30,32,205,${.22 * f.a})`;
            ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, 7); ctx.fill();
          }
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
  }

  // ================= Décor de saison (Nouvel An) =================
  // Doré + bleu Jordy & Nelly : titre qui scintille, boule à facettes, paillettes, feux d'artifice.
  if (activeSeason === "nouvelan" && P.seasons?.nouvelan) {
    const N = P.seasons.nouvelan;
    document.documentElement.dataset.season = "nouvelan";
    // Variante "vivante" : plus de mouvement (aperçu : ?saison=nouvelan&vivant=1)
    const vp = new URLSearchParams(location.search).get("vivant");
    const vivant = vp != null ? vp !== "0" : !!N.vivant;
    if (vivant) document.documentElement.classList.add("ny-vivant");
    const now = new Date();
    // L'année qui arrive (en janvier, c'est déjà l'année en cours)
    const year = now.getMonth() === 0 ? now.getFullYear() : now.getFullYear() + 1;
    const midnight = new Date(year, 0, 1);
    const fill = (s) => esc(String(s || "").replace(/\{annee\}/g, year));
    const SPARK = `<svg class="ny-spark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 1.5c.7 4.6 2.6 7.6 9 10.5-6.4 2.9-8.3 5.9-9 10.5-.7-4.6-2.6-7.6-9-10.5 6.4-2.9 8.3-5.9 9-10.5z" fill="url(#nyGold)"/>
      <path d="M19.5 1.5c.25 1.6.9 2.6 3 3.5-2.1.9-2.75 1.9-3 3.5-.25-1.6-.9-2.6-3-3.5 2.1-.9 2.75-1.9 3-3.5z" fill="#1e20cd"/>
      <defs><linearGradient id="nyGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe7a3"/><stop offset=".5" stop-color="#e0a92e"/><stop offset="1" stop-color="#b07a12"/></linearGradient></defs></svg>`;

    // Bandeau : compte à rebours jusqu'à minuit, puis "Bonne année"
    if (N.ribbon) {
      $("nav").insertAdjacentHTML("afterend", `
        <div class="ribbon ny-ribbon">${SPARK}<span id="nyText"></span>${N.ribbonLink ? `<a class="ribbon-link" href="${esc(N.ribbonLink.url)}" target="_blank" rel="noopener">${esc(N.ribbonLink.label)}</a>` : ""}</div>`);
      const txt = $("nyText");
      const two = (n) => String(n).padStart(2, "0");
      const update = () => {
        const left = midnight - Date.now();
        if (left <= 0) { txt.innerHTML = fill(N.ribbonAfter || N.ribbon); return false; }
        const s = Math.floor(left / 1000), d = Math.floor(s / 86400), h = Math.floor(s / 3600) % 24, m = Math.floor(s / 60) % 60;
        const count = d >= 1 ? `J-${d + (h || m ? 1 : 0)}` : `${two(h)}:${two(m)}:${two(s % 60)}`;
        txt.innerHTML = `${fill(N.ribbon)} <b class="ny-count">${count}</b>`;
        return true;
      };
      if (update()) {
        const iv = setInterval(() => { if (!update()) { clearInterval(iv); if (!reduce) burst(innerWidth / 2, innerHeight * .35, 90); } }, 1000);
      }
    }

    // Titre : un reflet doré passe sur "Jordy" et "Nelly", la photo prend un liseré doré
    $("name").classList.add("ny-shine");

    // Boule à facettes + étoile dorée, suspendues en haut à droite (même place que les boules de Noël)
    const decor = document.createElement("div");
    decor.className = "baubles"; decor.setAttribute("aria-hidden", "true");
    $("top").prepend(decor);
    if (N.disco) {
      // Facettes : une grille de petits carrés, en dégradé argent/bleu, dont quelques-uns s'allument
      let tiles = "";
      for (let y = 4; y < 46; y += 5) for (let x = 1; x < 41; x += 5) {
        const r = Math.random();
        const c = r < .12 ? "#ffffff" : r < .3 ? "#cfd5ea" : r < .55 ? "#9aa3c7" : r < .8 ? "#6b73a8" : "#4f52ff";
        tiles += `<rect x="${x}" y="${y}" width="4.4" height="4.4" rx=".6" fill="${c}"${r < .2 ? ` class="tw" style="animation-delay:${(-Math.random() * 2.4).toFixed(2)}s"` : ""}/>`;
      }
      decor.insertAdjacentHTML("beforeend", `
        <span class="bauble b-long ny-disco" style="animation-delay:0s"><i class="string"></i>
          <svg viewBox="0 0 42 48"><defs><clipPath id="dball"><circle cx="21" cy="27" r="19"/></clipPath>
            <radialGradient id="dshade" cx="35%" cy="35%" r="75%"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#0b0c6b" stop-opacity=".55"/></radialGradient></defs>
            <rect x="16" y="0" width="10" height="7" rx="1.5" fill="#e0b54a"/>
            <g clip-path="url(#dball)"><circle cx="21" cy="27" r="19" fill="#3a3f78"/>${tiles}<circle cx="21" cy="27" r="19" fill="url(#dshade)"/></g>
          </svg>
          <i class="glint g1"></i><i class="glint g2"></i><i class="glint g3"></i>
        </span>
        <span class="bauble b-short ny-star" style="animation-delay:-1.4s"><i class="string"></i>
          <svg viewBox="0 0 40 40"><defs><linearGradient id="starG" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff1c4"/><stop offset=".45" stop-color="#e8b23a"/><stop offset="1" stop-color="#a8700c"/></linearGradient></defs>
            <path d="M20 1.5l5.3 11.6 12.6 1.4-9.4 8.5 2.6 12.4L20 29.1 8.9 35.4l2.6-12.4-9.4-8.5 12.6-1.4z" fill="url(#starG)"/>
            <path d="M20 6l3.6 8.2 8.8 1-6.6 6" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="1.2" stroke-linecap="round"/></svg>
        </span>`);
    }
    const placeDecor = () => {
      const nameEl = $("name"), heroW = $("top").offsetWidth;
      const fs = parseFloat(getComputedStyle(nameEl).fontSize);
      const mobile = innerWidth < 640;
      const titleTop = nameEl.offsetTop + fs * 0.14;
      const long = decor.querySelector(".b-long"), short = decor.querySelector(".b-short");
      if (!long) return;
      const size = mobile ? 36 : 54, ss = mobile ? 24 : 32;
      const right = Math.min(heroW, (heroW + 1024) / 2) - (mobile ? 36 : 52);
      long.style.setProperty("--size", size + "px");
      long.style.setProperty("--len", Math.max(14, (titleTop - size * 1.15) * 0.5) + "px");
      long.style.left = (right - size / 2) + "px";
      short.style.setProperty("--size", ss + "px");
      short.style.setProperty("--len", (mobile ? 12 : 20) + "px");
      short.style.left = (right - size - ss / 2 - 6) + "px";
    };
    placeDecor();
    addEventListener("resize", placeDecor);
    document.fonts?.ready.then(placeDecor);
    setTimeout(placeDecor, 1900);

    // Deux coupes de champagne qui trinquent, posées sur le bord haut de la section noire
    $("video").insertAdjacentHTML("afterbegin", `
      <svg class="xmas-big ny-flutes" viewBox="0 0 80 80" aria-hidden="true">
        <defs><linearGradient id="champ" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe9a8"/><stop offset="1" stop-color="#e2a93a"/></linearGradient></defs>
        <g transform="rotate(-14 30 70)">
          <path d="M18 8 H36 L33 34 Q27 40 21 34 Z" fill="#fff" fill-opacity=".14" stroke="#cfd5ea" stroke-width="1.4"/>
          <path d="M19.6 16 H34.4 L32.4 33 Q27 38 21.6 33 Z" fill="url(#champ)"/>
          <path d="M27 38 V64 M19 66 H35" stroke="#cfd5ea" stroke-width="2" stroke-linecap="round"/>
          <circle class="bub" cx="25" cy="30" r="1"/><circle class="bub" cx="29" cy="26" r=".8" style="animation-delay:-.7s"/><circle class="bub" cx="27" cy="32" r=".9" style="animation-delay:-1.3s"/>
        </g>
        <g transform="rotate(14 50 70)">
          <path d="M44 8 H62 L59 34 Q53 40 47 34 Z" fill="#fff" fill-opacity=".14" stroke="#cfd5ea" stroke-width="1.4"/>
          <path d="M45.6 16 H60.4 L58.4 33 Q53 38 47.6 33 Z" fill="url(#champ)"/>
          <path d="M53 38 V64 M45 66 H61" stroke="#cfd5ea" stroke-width="2" stroke-linecap="round"/>
          <circle class="bub" cx="51" cy="29" r=".9" style="animation-delay:-.4s"/><circle class="bub" cx="55" cy="25" r="1" style="animation-delay:-1s"/>
        </g>
        <g class="clink"><path d="M40 2 v5 M33 4 l3 4 M47 4 l-3 4" stroke="#f3cf6a" stroke-width="1.8" stroke-linecap="round"/></g>
      </svg>`);

    // ---------- Paillettes + feux d'artifice (un seul canvas pour toute la page) ----------
    let burst = () => {};
    if (!reduce && (N.glitter || N.fireworks)) {
      const cv = document.createElement("canvas");
      cv.className = "snow"; cv.setAttribute("aria-hidden", "true");
      document.body.appendChild(cv);
      const ctx = cv.getContext("2d");
      const GOLD = ["#f6d77a", "#e8b23a", "#fff1c4", "#c98d1c"], BLUE = ["#1e20cd", "#4f52ff", "#8a8cff"];
      const pick = (a) => a[Math.floor(Math.random() * a.length)];
      let W, H, glitter = [], sparks = [];
      const size = () => {
        const r = devicePixelRatio || 1;
        W = innerWidth; H = innerHeight; cv.width = W * r; cv.height = H * r; ctx.setTransform(r, 0, 0, r, 0, 0);
        glitter = N.glitter ? Array.from({ length: Math.round(W / 22) + 12 }, () => ({
          x: Math.random() * W, y: Math.random() * H, w: Math.random() * 4 + 3, h: Math.random() * 2 + 1.5,
          s: Math.random() * .6 + .35, rot: Math.random() * 6, vr: (Math.random() - .5) * .08, o: Math.random() * 6,
          c: Math.random() < .72 ? pick(GOLD) : pick(BLUE), star: Math.random() < .18 })) : [];
      };
      size(); addEventListener("resize", size);
      // Une gerbe d'étincelles (feu d'artifice) en x, y
      burst = (x, y, n = 46) => {
        const c1 = Math.random() < .6 ? pick(GOLD) : pick(BLUE), c2 = pick(GOLD);
        for (let i = 0; i < n; i++) {
          const a = (i / n) * Math.PI * 2 + Math.random() * .2, v = Math.random() * 2.2 + 1.6;
          sparks.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: 1, c: i % 3 ? c1 : c2 });
        }
      };
      const star4 = (x, y, r) => {
        ctx.beginPath(); ctx.moveTo(x, y - r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.quadraticCurveTo(x, y, x, y + r);
        ctx.quadraticCurveTo(x, y, x - r, y); ctx.quadraticCurveTo(x, y, x, y - r); ctx.fill();
      };
      let nextFw = performance.now() + 1500;
      // Variante vivante : des fusées partent du bas de l'écran, montent avec une traînée et éclatent
      let rockets = [], nextRocket = performance.now() + 900;
      const tick = (t) => {
        if (!document.hidden) {
          ctx.clearRect(0, 0, W, H);
          if (vivant) {
            if (t > nextRocket) {
              rockets.push({ x: W * (.12 + Math.random() * .76), y: H + 8, vy: -(6.2 + Math.random() * 2.2), top: H * (.14 + Math.random() * .36), trail: [] });
              nextRocket = t + 2200 + Math.random() * 1800;
            }
            rockets = rockets.filter((r) => {
              r.trail.push([r.x, r.y]); if (r.trail.length > 10) r.trail.shift();
              r.y += r.vy; r.vy *= .992; r.x += Math.sin(t / 200) * .3;
              r.trail.forEach(([x, y], i) => { ctx.globalAlpha = i / 14; ctx.fillStyle = "#e8b23a"; ctx.beginPath(); ctx.arc(x, y, 1.6, 0, 7); ctx.fill(); });
              if (r.y <= r.top) { burst(r.x, r.y, 56); return false; }
              return true;
            });
            ctx.globalAlpha = 1;
          }
          // Feux d'artifice quand la section noire est à l'écran
          if (N.fireworks && t > nextFw) {
            const v = $("video").getBoundingClientRect();
            const top = Math.max(v.top + 40, 60), bottom = Math.min(v.bottom - 40, H - 40);
            if (bottom - top > 120) burst(W * (.15 + Math.random() * .7), top + Math.random() * Math.min(260, bottom - top));
            nextFw = t + 1800 + Math.random() * 2600;
          }
          for (const g of glitter) {
            g.y += g.s; g.x += Math.sin(t / 1400 + g.o) * .4; g.rot += g.vr;
            if (g.y > H + 6) { g.y = -6; g.x = Math.random() * W; }
            // Scintillement : chaque paillette "accroche la lumière" quand elle tourne
            const flash = Math.abs(Math.sin(t / 380 + g.o * 3));
            ctx.globalAlpha = .35 + .6 * flash;
            ctx.fillStyle = g.c;
            if (g.star) star4(g.x, g.y, 2.5 + 2.5 * flash);
            else { ctx.save(); ctx.translate(g.x, g.y); ctx.rotate(g.rot); ctx.scale(1, Math.cos(t / 500 + g.o)); ctx.fillRect(-g.w / 2, -g.h / 2, g.w, g.h); ctx.restore(); }
          }
          sparks = sparks.filter((p) => p.life > 0);
          for (const p of sparks) {
            p.x += p.vx; p.y += p.vy; p.vy += .035; p.vx *= .985; p.vy *= .985; p.life -= .012;
            ctx.globalAlpha = Math.max(0, p.life);
            ctx.fillStyle = p.c;
            ctx.beginPath(); ctx.arc(p.x, p.y, 1.6 + p.life, 0, 7); ctx.fill();
          }
          ctx.globalAlpha = 1;
        }
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      // Toucher la grande photo du titre ou le bandeau = une gerbe d'étincelles là où on touche
      for (const el of [$("name"), document.querySelector(".ny-ribbon")]) {
        el?.addEventListener("pointerdown", (e) => burst(e.clientX, e.clientY, 36));
      }
      // Petite gerbe d'accueil
      setTimeout(() => burst(W * .5, Math.min(H * .3, 260), 60), 1400);
      // Variante vivante : une pluie d'étincelles quand le compteur d'abonnés finit de monter
      if (vivant) {
        const tot = $("totalFollowers");
        new IntersectionObserver((en, obs) => {
          if (!en[0].isIntersecting) return;
          obs.disconnect();
          setTimeout(() => {
            const r = tot.getBoundingClientRect();
            burst(r.left + r.width * .3, r.top + r.height / 2, 50);
            setTimeout(() => burst(r.left + r.width * .8, r.top, 50), 260);
            tot.classList.add("ny-done");
          }, 1750);
        }, { threshold: .6 }).observe(tot);
      }
    }
  }

  // Image du haut qui s'agrandit au scroll + nav
  const media = $("heroCard"), nav = $("nav");
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 10);
    if (reduce) return;
    const r = media.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, 1 - (r.top - 60) / (innerHeight * 0.7)));
    const s0 = innerWidth < 640 ? 0.97 : 0.86; // sur téléphone, effet plus léger (moins de vide sous la carte)
    media.style.transform = `scale(${s0 + (1 - s0) * p})`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  addEventListener("resize", onScroll);
  onScroll();
})();
