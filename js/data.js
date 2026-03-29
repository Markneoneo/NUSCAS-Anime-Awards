const CATEGORIES = [

  // ── GENERAL ─────────────────────────────────────────────
  {
    id: "anime-of-the-year",
    tag: "General",
    filter: "general",
    name: "Anime of the Year (2025)",
    nominees: [
      { name: "Apocalypse Hotel", image: "assets/images/compressed/apocalypse_hotel.webp", video: "", secondary: "C2C" },
      { name: "My Hero Academia Final Season", image: "assets/images/compressed/mha_final.webp", video: "", secondary: "Bones Film" },
      { name: "The Apothecary Diaries Season 2", image: "assets/images/compressed/apothecary_diaries.webp", video: "", secondary: "OLM, TOHO Animation" },
      { name: "Takopi's Original Sin", image: "assets/images/compressed/takopi.webp", video: "", secondary: "ENISHIYA" },
      { name: "The Summer Hikaru Died", image: "assets/images/compressed/the_summer_hikaru_died.webp", video: "", secondary: "CygamesPictures" },
    ]
  },

  {
    id: "best-anime",
    tag: "General",
    filter: "general",
    name: "Best Anime of All Time",
    nominees: [
      { name: "Clannad", image: "assets/images/compressed/clannad.webp", video: "", secondary: "Kyoto Animation" },
      { name: "Frieren: Beyond Journey's End", image: "assets/images/compressed/frieren.webp", video: "", secondary: "Madhouse" },
      { name: "Neon Genesis Evangelion", image: "assets/images/compressed/eva.webp", video: "", secondary: "Gainax, Tatsunoko Production" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "film-of-the-year",
    tag: "General",
    filter: "general",
    name: "Film of the Year (2025 - 2026)",
    nominees: [
      { name: "100 Meters", image: "assets/images/compressed/100m.webp", video: "", secondary: "Rock 'n' Roll Mountain" },
      { name: "Chainsaw Man – The Movie: Reze Arc", image: "assets/images/compressed/csm.webp", video: "", secondary: "MAPPA" },
      { name: "Colorful Stage! The Movie: A Miku Who Can't Sing", image: "assets/images/compressed/miku.webp", video: "", secondary: "P.A. Works" },
      { name: "Cosmic Princess Kaguya!", image: "assets/images/compressed/cosmic_princess.webp", video: "", secondary: "Studio Colorido, Studio Chromato" },
      { name: "Demon Slayer: Kimetsu no Yaiba – The Movie: Infinity Castle", image: "assets/images/compressed/infinity_castle.webp", video: "", secondary: "ufotable" },
    ]
  },

 {
    id: "best-film",
    tag: "General",
    filter: "general",
    name: "Best Film of All Time",
    nominees: [
      { name: "Liz and the Blue Bird", image: "assets/images/compressed/liz_and_blue_bird.webp", video: "", secondary: "Kyoto Animation" },
      { name: "Look Back", image: "assets/images/compressed/lookback.webp", video: "", secondary: "Studio Durian" },
      { name: "Paprika", image: "assets/images/compressed/paprika.webp", video: "", secondary: "Madhouse" },
      { name: "Spirited Away", image: "assets/images/compressed/spirited_away.webp", video: "", secondary: "Studio Ghibli" },
      { name: "Your Name", image: "assets/images/compressed/your_name.webp", video: "", secondary: "CoMix Wave Films" },
    ]
  },

  {
    id: "best-continuing-series",
    tag: "General",
    filter: "general",
    name: "Best Continuing Series (2026)",
    nominees: [
      { name: "Frieren: Beyond Journey's End Season 2", image: "assets/images/compressed/frieren_2.webp", secondary: "Madhouse" },
      { name: "JoJo's Bizarre Adventure: Steel Ball Run", image: "assets/images/compressed/sbr.webp", secondary: "David Production" },
      { name: "Medalist Season 2", image: "assets/images/compressed/medalist_2.webp", secondary: "ENGI" },
      { name: "One Piece", image: "assets/images/compressed/one_piece.webp", secondary: "Toei Animation" },
      { name: "Oshi no Ko Season 3", image: "assets/images/compressed/oshi_no_ko.webp", secondary: "Doga Kobo" },
    ]
  },

  {
    id: "best-new-series",
    tag: "General",
    filter: "general",
    name: "Best New Series (2026)",
    nominees: [
      { name: "Fate/strange Fake", image: "assets/images/compressed/fsf.webp", secondary: "A-1 Pictures" },
      { name: "Journal with Witch", image: "assets/images/compressed/journal_with_witch.webp", secondary: "Shuka" },
      { name: "Kaya-chan Isn't Scary", image: "assets/images/compressed/kaya_chan.webp", secondary: "East Fish Studio" },
      { name: "Shiboyugi: Playing Death Games to Put Food on the Table", image: "assets/images/compressed/shiboyugi.webp", secondary: "Studio Deen" },
      { name: "You and I Are Polar Opposites", image: "assets/images/compressed/polar_opp.webp", secondary: "Lapin Track" },
    ]
  },

  {
    id: "best-original-anime",
    tag: "General",
    filter: "general",
    name: "Best Original Anime",
    nominees: [
      { name: "Angel Beats!", image: "assets/images/compressed/angel_beats.webp", video: "", secondary: "P.A. Works" },
      { name: "Code Geass", image: "assets/images/compressed/code_geass.webp", secondary: "Sunrise" },
      { name: "Kill la Kill", image: "assets/images/compressed/kill_la_kill.webp", video: "", secondary: "Trigger" },
      { name: "Vivy: Fluorite Eye's Song", image: "assets/images/compressed/vivy.webp", video: "", secondary: "Wit Studio" },
      { name: "Shirobako", image: "assets/images/compressed/shirobako.webp", video: "", secondary: "P.A. Works" },
    ]
  },

  // ── CRAFT ────────────────────────────────────────────────
  {
    id: "best-animation",
    tag: "Craft",
    filter: "craft",
    name: "Best Animation",
    nominees: [
      { name: "Frieren: Beyond Journey's End", image: "assets/images/compressed/frieren.webp", video: "", secondary: "Madhouse" },
      { name: "Jujutsu Kaisen", image: "assets/images/compressed/jjk.webp", video: "", secondary: "MAPPA" },
      { name: "Violet Evergarden", image: "assets/images/compressed/violet_evergarden.webp", video: "", secondary: "Kyoto Animation" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-character-design",
    tag: "Craft",
    filter: "craft",
    name: "Best Character Design",
    nominees: [
      { name: "Bleach", image: "assets/images/compressed/bleach.webp", video: "", secondary: "Studio Pierrot" },
      { name: "Gachiakuta", image: "assets/images/compressed/gachiakuta.webp", video: "", secondary: "Bones Film" },
      { name: "JoJo's Bizarre Adventure", image: "assets/images/compressed/golden_wind.webp", video: "", secondary: "David Production" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

    {
    id: "best-director",
    tag: "Craft",
    filter: "craft",
    name: "Best Director",
    description: "Recognising exceptional vision and direction in anime.",
    nominees: [
      { name: "Hayao Miyazaki", image: "assets/images/compressed/hayao_miyazaki.webp", video: "", secondary: "Spirited Away / Princess Mononoke / Howl's Moving Castle / The Boy and the Heron" },
      { name: "Naoko Yamada", image: "assets/images/compressed/naoko_yamada.webp", video: "", secondary: "K-On! / A Silent Voice / Liz and the Blue Bird / Tamako Market" },
      { name: "Satoshi Kon", image: "assets/images/compressed/satoshi_kon.webp", video: "", secondary: "Perfect Blue / Paprika / Millenium Actress / Tokyo Godfathers" },
      { name: "Tetsuro Araki", image: "assets/images/compressed/tetsuro_araki.jpg", video: "", secondary: "Attack on Titan / Death Note / Highschool of the Dead / Guilty Crown" },
      { name: "Director Name 5", image: "", video: "", secondary: "Series / Film" },
    ]
  },

  {
    id: "best-background-art",
    tag: "Craft",
    filter: "craft",
    name: "Best Background Art",
    nominees: [
      { name: "Monogatari Series", image: "assets/images/compressed/kizumono.webp", video: "", secondary: "Shaft" },
      { name: "Mushishi", image: "assets/images/compressed/mushishi.webp", video: "", secondary: "Artland" },
      { name: "Mushoku Tensei: Jobless Reincarnation", image: "assets/images/compressed/mushoku_tensei.webp", video: "", secondary: "Studio Bind" },
      { name: "Shōshimin: How to Become Ordinary", image: "assets/images/compressed/shoshimin.webp", video: "", secondary: "Lapin Track" },
   { name: "Violet Evergarden", image: "assets/images/compressed/violet_evergarden.webp", video: "", secondary: "Kyoto Animation" },
    ]
  },

  // ── GENRE ────────────────────────────────────────────────
  {
    id: "best-romance",
    tag: "Genre",
    filter: "genre",
    name: "Best Romance",
    nominees: [
      { name: "Kaguya-sama: Love Is War", image: "assets/images/compressed/kaguya_sama.webp", secondary: "A-1 Pictures" },
      { name: "Horimiya", image: "assets/images/compressed/horimiya.webp", secondary: "CloverWorks" },
      { name: "", secondary: "" },
      { name: "", secondary: "" },
      { name: "", secondary: "" },
    ]
  },

  {
    id: "best-comedy",
    tag: "Genre",
    filter: "genre",
    name: "Best Comedy",
    nominees: [
      { name: "Grand Blue Dreaming", image: "assets/images/compressed/grand_blue.webp", secondary: "Zero-G" },
      { name: "KonoSuba: God's Blessing on This Wonderful World!", image: "assets/images/compressed/konosuba.webp", secondary: "Studio Deen / Drive" },
      { name: "Rent-a-Girlfriend", image: "assets/images/compressed/rent_a_girlfriend.webp", secondary: "TMS Entertainment" },
      { name: "The Eminence in Shadow", image: "assets/images/compressed/eminence.webp", secondary: "Nexus" },
      { name: "", secondary: "" },
    ]
  },

  {
    id: "best-action",
    tag: "Genre",
    filter: "genre",
    name: "Best Action",
    nominees: [
      { name: "Attack on Titan", image: "assets/images/compressed/aot.webp", secondary: "Wit Studio / MAPPA" },
      { name: "Chainsaw Man", image: "assets/images/compressed/csm_tv.webp", secondary: "MAPPA" },
      { name: "", secondary: "" },
      { name: "", secondary: "" },
      { name: "", secondary: "" },
    ]
  },

  {
    id: "best-isekai",
    tag: "Genre",
    filter: "genre",
    name: "Best Isekai",
    nominees: [
      { name: "No Game No Life", image: "assets/images/compressed/NGNL.webp", secondary: "Madhouse" },
      { name: "Overlord", image: "assets/images/compressed/overlord.webp", secondary: "Madhouse" },
      { name: "Re:ZERO -Starting Life in Another World-", image: "assets/images/compressed/rezero.webp", secondary: "White Fox" },
      { name: "The Eminence in Shadow", image: "assets/images/compressed/eminence.webp", secondary: "Nexus" },
      { name: "Mushoku Tensei: Jobless Reincarnation", image: "assets/images/compressed/mushoku_tensei.webp", video: "", secondary: "Studio Bind" },
    ]
  },

  {
    id: "best-drama",
    tag: "Genre",
    filter: "genre",
    name: "Best Drama",
    nominees: [
      { name: "Vinland Saga", image: "assets/images/compressed/vinland_saga.webp", video: "", secondary: "Wit Studio / MAPPA" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-slice-of-life",
    tag: "Genre",
    filter: "genre",
    name: "Best Slice of Life",
    nominees: [
      { name: "JoJo's Bizarre Adventure: Diamond Is Unbreakable", image: "assets/images/compressed/DIU.webp", video: "", secondary: "David Production" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-chinese-anime",
    tag: "Genre",
    filter: "genre",
    name: "Best Chinese Anime",
    nominees: [
      { name: "Feng Ling Yu Xiu", image: "assets/images/compressed/fenglingyuxiu.webp", video: "", secondary: "Sunflowers" },
      { name: "Link Click", image: "assets/images/compressed/link_click.webp", video: "", secondary: "LAN Studio" },
      { name: "Lord of the Mysteries", image: "assets/images/compressed/LOTM.webp", video: "", secondary: "B.CMAY PICTURES" },
      { name: "The Legend of Luo Xiaohei", image: "assets/images/compressed/luo_xiaohei.webp", video: "", secondary: "HMCH" },
      { name: "To Be Hero X", image: "assets/images/compressed/tobeherox.webp", video: "", secondary: "Pb Animation, LAN Studio, Paper Plane Animation Studio, B.COOL STUDIO" },
    ]
  },

  {
    id: "best-mystery",
    tag: "Genre",
    filter: "genre",
    name: "Best Mystery",
    nominees: [
      { name: "Attack on Titan", image: "assets/images/compressed/aot.webp", secondary: "Wit Studio / MAPPA" },
      { name: "Baccano!", image: "assets/images/compressed/baccano.webp", video: "", secondary: "Brain's Base" },
      { name: "Shōshimin: How to Become Ordinary", image: "assets/images/compressed/shoshimin.webp", video: "", secondary: "Lapin Track" },
      { name: "Summer Time Rendering", image: "assets/images/compressed/summertime_rendering.webp", video: "", secondary: "OLM" },
      { name: "The Apothecary Diaries", image: "assets/images/compressed/apothecary_1.webp", video: "", secondary: "OLM, TOHO Animation" },
    ]
  },

  {
    id: "best-sci-fi",
    tag: "Genre",
    filter: "genre",
    name: "Best Sci-Fi",
    nominees: [
      { name: "Cowboy Bebop", image: "assets/images/compressed/cowboy_bebop.webp", secondary: "Sunrise" },
      { name: "Legend of the Galactic Heroes", image: "assets/images/compressed/legend_galactic.webp", secondary: "Kitty Film Mitaka Studio" },
      { name: "Psycho-Pass", image: "assets/images/compressed/psycho_pass.webp", secondary: "Production I.G" },
      { name: "Steins;Gate", image: "assets/images/compressed/steins_gate.webp", secondary: "White Fox" },
      { name: "Vivy: Fluorite Eye's Song", image: "assets/images/compressed/vivy.webp", video: "", secondary: "Wit Studio" },
    ]
  },

  {
    id: "best-horror",
    tag: "Genre",
    filter: "genre",
    name: "Best Horror",
    nominees: [
      { name: "Kaya-chan Isn't Scary", image: "assets/images/compressed/kaya_chan.webp", secondary: "East Fish Studio" },
      { name: "Mononoke", image: "assets/images/compressed/mononoke.webp", secondary: "Toei Animation" },
      { name: "Puella Magi Madoka Magica", image: "assets/images/compressed/madoka_magica.webp", secondary: "Shaft" },
      { name: "Shiki", image: "assets/images/compressed/shiki.webp", secondary: "Daume" },
      { name: "The Summer Hikaru Died", image: "assets/images/compressed/the_summer_hikaru_died.webp", video: "", secondary: "CygamesPictures" },
    ]
  },

  {
    id: "best-thriller",
    tag: "Genre",
    filter: "genre",
    name: "Best Thriller",
    nominees: [
      { name: "Classroom of the Elite", image: "assets/images/compressed/COTE.webp", video: "", secondary: "Lerche" },
      { name: "Kaiji: Ultimate Survivor", image: "assets/images/compressed/kaiji.webp", video: "", secondary: "Madhouse" },
      { name: "Lycoris Recoil", image: "assets/images/compressed/lycoris_recoil.webp", video: "", secondary: "A-1 Pictures" },
      { name: "Monster", image: "assets/images/compressed/monster.webp", video: "", secondary: "Madhouse" },
      { name: "Steins;Gate", image: "assets/images/compressed/steins_gate.webp", secondary: "White Fox" },
    ]
  },

  {
    id: "best-sports",
    tag: "Genre",
    filter: "genre",
    name: "Best Sports",
    nominees: [
      { name: "Blue Lock", image: "assets/images/compressed/blue_lock.webp", video: "", secondary: "8bit" },
      { name: "Girls und Panzer", image: "assets/images/compressed/girls_und_panzer.webp", video: "", secondary: "Actas" },
      { name: "Haikyu!!", image: "assets/images/compressed/haikyuu.webp", video: "", secondary: "Production I.G" },
      { name: "Ping Pong the Animation", image: "assets/images/compressed/ping_pong.webp", video: "", secondary: "Tatsunoko Production" },
      { name: "Uma Musume: Cinderella Gray", image: "assets/images/compressed/uma.webp", video: "", secondary: "CygamesPictures" },
    ]
  },

  {
    id: "best-mecha",
    tag: "Genre",
    filter: "genre",
    name: "Best Mecha",
    nominees: [
      { name: "86 -Eighty Six-", image: "assets/images/compressed/86.webp", secondary: "A-1 Pictures" },
      { name: "Code Geass", image: "assets/images/compressed/code_geass.webp", secondary: "Sunrise" },
      { name: "Darling in the Franxx", image: "assets/images/compressed/darling.webp", secondary: "Trigger / A-1 Pictures" },
      { name: "Mobile Suit Gundam 0080: War in the Pocket", image: "assets/images/compressed/gundam_0080.webp", secondary: "Sunrise" },
      { name: "Neon Genesis Evangelion", image: "assets/images/compressed/eva.webp", video: "", secondary: "Gainax, Tatsunoko Production" },
    ]
  },


  {
    id: "best-music-idol",
    tag: "Genre",
    filter: "genre",
    name: "Best Music / Idol",
    nominees: [
      { name: "Bocchi the Rock!", image: "assets/images/compressed/bocchi.webp", secondary: "CloverWorks" },
      { name: "BanG Dream! It's MyGO!!!!!", image: "assets/images/compressed/mygo.webp", secondary: "SANZIGEN" },
      { name: "THE IDOLM@STER", image: "assets/images/compressed/idolmaster.webp", secondary: "A-1 Pictures" },
      { name: "Vivy: Fluorite Eye's Song", image: "assets/images/compressed/vivy.webp", video: "", secondary: "Wit Studio" },
      { name: "Zombieland Saga", image: "assets/images/compressed/zombieland_saga.webp", secondary: "MAPPA" },
    ]
  },
  // ── CHARACTER ────────────────────────────────────────────
  {
    id: "best-main-character",
    tag: "Character",
    filter: "character",
    name: "Best Main Character",
    nominees: [
      { name: "Rentarou Aijō", image: "assets/images/compressed/rentarou.webp", video: "", secondary: "The 100 Girlfriends Who Really, Really, Really, Really, Really Love You" },
      { name: "Thorfinn Karlsefni", image: "assets/images/compressed/thorfinn.webp", video: "", secondary: "Vinland Saga" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-supporting-character",
    tag: "Character",
    filter: "character",
    name: "Best Supporting Character",
    nominees: [
      { name: "Marcille Donato", image: "assets/images/compressed/marcille.webp", video: "", secondary: "Delicious in Dungeon" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "must-protect",
    tag: "Character",
    filter: "character",
    name: '"Must Protect At All Costs" Character',
    nominees: [
      { name: "Chiikawa", image: "assets/images/compressed/chiikawa.webp", video: "", secondary: "Chiikawa" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  // ── MUSIC & AUDIO ────────────────────────────────────────
  {
    id: "best-score",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Score",
    nominees: [
      { name: "Attack on Titan", image: "assets/images/compressed/aot_s3_ost.webp", secondary: "Hiroyuki Sawano / Kohta Yamamoto" },
      { name: "Chainsaw Man – The Movie: Reze Arc", image: "assets/images/compressed/csm_reze_ost.webp", video: "", secondary: "Kensuke Ushio" },
      { name: "Made in Abyss", image: "assets/images/compressed/MiA.webp", video: "", secondary: "Kevin Penkin" },
      { name: "Natsume's Book of Friends", image: "assets/images/compressed/natsume_ost.webp", video: "", secondary: "Makoto Yoshimori" },
      { name: "Uma Musume: Cinderella Gray", image: "assets/images/compressed/uma_ost.webp", video: "", secondary: "Kenji Kawai" },
    ]
  },

  {
    id: "best-opening",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Opening Sequence",
    nominees: [
      { name: "Crying for Rain - 美波 (Minami)", image: "assets/images/compressed/dome_kano.webp", video: "", secondary: "Domestic Girlfriend" },
      { name: "Idol - YOASOBI", image: "assets/images/compressed/idol.webp", video: "", secondary: "Oshi no Ko" },
      { name: "Kaiju - Sakanaction", image: "assets/images/compressed/orb.webp", video: "", secondary: "Orb: On the Movements of the Earth" },
      { name: "Tank! - Seatbelts", image: "assets/images/compressed/cowboy_bebop.webp", video: "", secondary: "Cowboy Bebop" },
      { name: "Where Our Blue Is - Tatsuya Kitani", image: "assets/images/compressed/jjk_op3.webp", video: "", secondary: "Jujutsu Kaisen Season 2" },
    ]
  },

  {
    id: "best-ending",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Ending Sequence",
    nominees: [
      { name: "Anytime Anywhere - milet", image: "assets/images/compressed/frieren.webp", video: "", secondary: "Frieren: Beyond Journey's End" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

  {
    id: "best-va-jp",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Voice Artist Performance (Japanese)",
    nominees: [
      { name: "Daisuke Ono", image: "assets/images/compressed/daisuke_ono.webp", video: "", secondary: "Kujo Jotaro / Sebastian / Erwin Smith / Jyushimatsu / Itsuki Koizumi"},
      { name: "Reina Ueda", image: "assets/images/compressed/reina.webp", video: "", secondary: "Reze / Kanao / Ganyu / Chinatsu" },
      { name: "Rie Takahashi", image: "assets/images/compressed/rie_takahashi.webp", video: "", secondary: "Megumin / Emilia / Hu Tao / Takagi / Ai" },
      { name: "Takehito Koyasu", image: "assets/images/compressed/koyasu.webp", video: "", secondary: "Dio Brando / Toji / Zeke Yeager / Roswaal / Papa Shirogane" },
      { name: "Yūki Kaji", image: "assets/images/compressed/kaji_yuki.webp", video: "", secondary: "Eren Yeager / Meliodas / Koichi / Shu / Issei" },
    ]
  },

  {
    id: "best-va-en",
    tag: "Music & Audio",
    filter: "music",
    name: "Best Voice Artist Performance (English)",
    nominees: [
      { name: "Felecia Angelle", image: "assets/images/compressed/felicia.webp", video: "", secondary: "Mona Megistus / Shinoa Hiragi / Emi Yusa / Nakano Miku / Shalltear Bloodfallen " },
      { name: "Ian Sinclair", image: "assets/images/compressed/ian_sinclair.webp", video: "", secondary: "Narrator (Kaguya Sama Love is War) / Brook / Space Dandy / Tsukasa Shishio / Whis" },
      { name: "Monica Rial", image: "assets/images/compressed/monica.webp", video: "", secondary: "Mirajane Strauss / Tsubaki Nakatsukasa / Index / Yona / Tanya von Degurechaff" },
      { name: "", image: "", video: "", secondary: "" },
      { name: "", image: "", video: "", secondary: "" },
    ]
  },

];