// ============================================================
//  TON CONTENU — c'est le seul fichier à modifier.
//  Plus tard, un robot (GitHub Actions) mettra à jour
//  automatiquement les abonnés et la dernière vidéo ici.
//
//  Chiffres relevés sur les profils publics le 16/11/2026.
//  followers: null = pas encore renseigné (à compléter).
// ============================================================
const YT = (id) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const WATCH = (id) => `https://www.youtube.com/watch?v=${id}`;
// Une photo du carrousel = { src: l'image, href: le lien au clic, label: le texte affiché }

window.PROFILE = {
  name: "Jordy & Nelly",
  handle: "@iamjordynelly",
  tagline: "Les Bibou",
  bio: "Des looks, du love & du lifestyle. Bienvenue dans l'univers des Bibou.",
  location: "France",
  avatar: "images/avatar.jpg?v=3", // photo hébergée avec le site : s'affiche toujours
  theme: "auto", // "auto" = suit le mode clair/sombre du téléphone · "light" · "dark"

  // Décor de saison, ajouté par-dessus le site sans le modifier.
  // "auto" = Noël s'active tout seul du 15 novembre au 6 janvier.
  // "noel" = forcer Noël · "aucune" = site normal
  season: "auto",
  seasons: {
    noel: {
      ribbon: "C'est la saison du calendrier de l'Avent.",
      ribbonLink: { label: "Regarder la vidéo", url: "https://www.youtube.com/watch?v=e0cCLSJNSPY" },
      snow: true,      // flocons sur la grande photo du haut
      baubles: true    // boules bleues suspendues
    }
  },
  updatedAt: "2026-11-16T15:00:00Z",

  // Le grand encart du haut affiche toujours la dernière vidéo (voir latestVideo plus bas).

  // Section noire "Sur notre chaîne" : les thèmes qui défilent dans le titre…
  channelThemes: ["Rien que nous deux", "nos vlogs", "nos voyages", "la magie de Noël"],
  // …et le carrousel de vidéos mises en avant (theme = petite étiquette sur la carte)
  featured: [
    { id: "6fryBRC6QMY", theme: "Rien que nous deux", title: "Nouvelle saison · Rester ami avec son ex" },
    { id: "e0cCLSJNSPY", theme: "Noël",               title: "Je fabrique un calendrier de l'Avent pour ma copine" },
    { id: "YD7plBegXAw", theme: "Vlog",               title: "On est partis 72h à Londres" },
    { id: "9q9TMgJtvYw", theme: "Voyage · Bali",      title: "24h de voyage pour rejoindre Bali" }
  ],

  // Le 1er réseau sert de bouton principal en haut de page
  socials: [
    { platform: "tiktok",    handle: "@iamjordynelly", url: "https://www.tiktok.com/@iamjordynelly",   followers: 105400, cta: "Suivre" },
    { platform: "instagram", handle: "@iamjordynelly", url: "https://www.instagram.com/iamjordynelly", followers: 7338,   cta: "Suivre" },
    { platform: "youtube",   handle: "@iamjordynelly", url: "https://www.youtube.com/@iamjordynelly?sub_confirmation=1",  followers: 2190,   cta: "S'abonner" },
    { platform: "threads",   handle: "@iamjordynelly", url: "https://www.threads.com/@iamjordynelly",  followers: 473,    cta: "Suivre" },
    { platform: "facebook",  handle: "iamjordynelly",  url: "https://www.facebook.com/p/iamjordynelly-100075907790832/", followers: 702,   cta: "Suivre" },
    { platform: "bereal",    handle: "iamjordynelly",  url: "https://bere.al/iamjordynelly",           followers: 249,    cta: "Ajouter" }
  ],

  latestVideo: {
    id: "e0cCLSJNSPY",
    title: "Je fabrique un calendrier de l'Avent pour ma copine",
    publishedAt: "2026-11-15T12:00:20Z",
    views: 61,
    duration: ""
  },

  links: [
    { title: "Rien que nous deux", subtitle: "La nouvelle saison est là", url: WATCH("6fryBRC6QMY"), icon: "play" },
    { title: "Nos vlogs", subtitle: "Londres, Bali, Turquie…", url: "https://www.youtube.com/@iamjordynelly/search?query=vlog", icon: "plane" }
    // Pour ajouter un bouton contact : { title: "Contact pro & collabs", subtitle: "Pour les marques", url: "mailto:VOTRE@MAIL.com", icon: "mail" }
  ],

  // Galerie "Les coulisses" : vos photos, au format vertical Instagram (4:5).
  // pos = la partie de la photo à garder au centre quand elle est recadrée ("gauche-droite haut-bas").
  gallery: [
    { src: "images/photo-5.jpg", alt: "Shooting à deux",       pos: "45% 50%" },
    { src: "images/photo-6.jpg", alt: "Nos 6 ans d'amour",     pos: "50% 40%" },
    { src: "images/photo-2.jpg", alt: "Le style de Nelly",     pos: "50% 40%" },
    { src: "images/photo-3.jpg", alt: "Le style de Jordy",     pos: "55% 50%" },
    { src: "images/photo-7.jpg", alt: "Coucher de soleil",     pos: "50% 60%" },
    { src: "images/photo-1.jpg", alt: "Courtside au Paris Basketball", pos: "50% 55%" },
    { src: "images/photo-8.jpg", alt: "Dans les bois",         pos: "62% 50%" },
    { src: "images/photo-4.jpg", alt: "Juste nous deux",       pos: "50% 50%" }
  ].map((g) => ({ ...g, href: "https://www.instagram.com/iamjordynelly", cta: "Instagram" }))
};
