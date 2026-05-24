"use client";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"fr" | "en" | "ja">("fr");

  const translations = {
    fr: {
      role: "DevOps Engineer & SRE",
      description: "Mon parcours n'est pas une ligne droite : après avoir étudié le Droit et la complexité du Japonais, je suis revenu à ma passion première à l'École 42. Avec une obsession pour l'automatisation et les infrastructures scalables, je suis activement à la recherche d'un stage de fin d'études en DevOps / Cloud Engineering.",
      japaneseSecret: "* Actually, I don't really speak Japanese. I just have a degree and I really love anime.",
      btnProjects: "VOIR LES PROJETS",
      btnContact: "CONTACT",
      btnCV: "WGET CV.pdf",
      projectsTitle: "Projets Récents",
      timelineTitle: "Parcours & Formation",

      // Projets
      rdcRole: "Ingénieur DevOps & Frontend (Bénévole)",
      rdcDesc: "Refonte de la plateforme de gestion des maraudes et de la flotte de véhicules. Conteneurisation (Docker), création des pipelines CI/CD sur GitLab CI, et développement de l'interface utilisateur pour les bénévoles sur le terrain.",
      gitopsRole: "Architecte Cloud / SRE (Projet Personnel)",
      gitopsDesc: "Création d'un Homelab complet sur Proxmox VE. Déploiement d'un cluster Kubernetes (K3s), gestion du routage avec Traefik/Caddy, et mise en place d'un pipeline de déploiement continu 100% GitOps avec ArgoCD et GitHub Actions.",

      // Parcours
      school42: "Master's degree, Computer Science - Formation intensive basée sur le peer-to-peer learning. Projets concrets en C/C++, algorithmie, et architecture système.",
      univJap: "Licence 2 Langue, Littérature et Culture Japononaise - Apprentissage de la langue et de la rigueur analytique.",
    },
    en: {
      role: "DevOps Engineer & SRE",
      description: "My journey isn't a standard straight line: after detours through Law and the linguistic complexity of Japanese, I returned to my first passion at École 42. Driven by a deep obsession with automation and scalable infrastructures, I am actively seeking a DevOps / Cloud Engineering internship.",
      japaneseSecret: "* Actually, I don't really speak Japanese. I just have a degree and I really love anime.",
      btnProjects: "VIEW PROJECTS",
      btnContact: "CONTACT",
      btnCV: "WGET CV.pdf",
      projectsTitle: "Recent Projects",
      timelineTitle: "Experience & Education",

      rdcRole: "DevOps & Frontend Engineer (Volunteer)",
      rdcDesc: "Rebuilt the outreach organization and vehicle fleet management platform. Containerization (Docker), built CI/CD pipelines on GitLab CI, and developed a clean UI optimized for field volunteers.",
      gitopsRole: "Cloud Architect / SRE (Personal Project)",
      gitopsDesc: "Built a complete Homelab on Proxmox VE. Deployed a Kubernetes (K3s) cluster, managed routing with Traefik/Caddy, and implemented a 100% GitOps continuous deployment pipeline using ArgoCD and GitHub Actions.",

      school42: "Master's degree, Computer Science - Intensive peer-to-peer learning program. Core focus on C/C++, algorithms, and systems architecture.",
      univJap: "Undergraduate Studies in Japanese - Focus on linguistics, culture, and analytical rigor.",
    },
    ja: {
      role: "DevOpsエンジニア & SRE",
      description: "私の経歴は直線的ではありません。法学と日本語を学んだ後、原点であるÉcole 42に戻りました。自動化とスケーラブルなインフラに強い情熱を持っており、現在、DevOps / クラウドエンジニアリング of インターンシップを積極的に探しています。",
      japaneseSecret: "* Actually, I don't really speak Japanese. I just have a degree and I really love anime.",
      btnProjects: "プロジェクトを見る",
      btnContact: "コンタクト",
      btnCV: "CVダウンロード.pdf",
      projectsTitle: "最近のプロジェクト",
      timelineTitle: "経歴・学歴",

      rdcRole: "DevOps & フロントエンドエンジニア (ボランティア)",
      rdcDesc: "配給ルートおよび車両管理プラットフォームの再構築。Dockerによるコンテナ化、GitLab CIでのCI/CDパイプライン構築、現場のボランティアに最適化されたUIの開発。",
      gitopsRole: "クラウドアーキテクト / SRE (個人プロジェクト)",
      gitopsDesc: "Proxmox VE上に完全なホームラボを構築。Kubernetes (K3s) クラスターの展開、Traefik/Caddyによるルーティング管理、ArgoCDとGitHub Actionsを使用した100% GitOpsのCI/CDパイプラインの実装。",

      school42: "コンピューターサイエンス修士相当 - ピアツーピア学習ベースの集中プログラム。C/C++、アルゴリズム、システムアーキテクチャに特化。",
      univJap: "日本文学・文化 学士課程 - 言語学と分析的思考を専攻。",
    }
  };

  const t = translations[lang];

  return (
    <div className="relative min-h-screen flex flex-col items-center p-4 md:p-8 overflow-x-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f4c21_1px,transparent_1px),linear-gradient(to_bottom,#0f4c21_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 fixed"></div>

      <main className="relative z-10 w-full max-w-4xl border border-green-500/30 bg-black/80 p-6 pt-20 md:p-12 shadow-[0_0_15px_rgba(0,255,0,0.1)] mt-4 md:mt-10 mb-10 md:mb-20">

        {/* Switch Langue */}
        <div className="absolute top-6 right-6 md:top-10 md:right-12 flex gap-3 text-xl md:text-2xl z-20">
          <button onClick={() => setLang("fr")} className={`transition-all duration-300 ${lang === "fr" ? "opacity-100 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] scale-110" : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0"}`} title="Français">🇫🇷</button>
          <button onClick={() => setLang("en")} className={`transition-all duration-300 ${lang === "en" ? "opacity-100 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] scale-110" : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0"}`} title="English">🇬🇧</button>
          <button onClick={() => setLang("ja")} className={`transition-all duration-300 ${lang === "ja" ? "opacity-100 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] scale-110" : "opacity-40 grayscale hover:opacity-100 hover:grayscale-0"}`} title="日本語">🇯🇵</button>
        </div>

        {/* HERO */}
        <div className="flex gap-2 mb-8 border-b border-green-500/30 pb-4 w-1/2 md:w-3/4">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>

        <div className="space-y-6">
          <p className="text-xs md:text-base text-green-400/70 break-all">[root@kub-andytropmimi ~]# ./start_portfolio.sh</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter drop-shadow-[0_0_8px_rgba(34,197,94,0.8)] leading-tight">ANDY MALGONNE</h1>
          <h2 className="text-lg md:text-2xl text-white"><span className="text-green-500">&gt;</span> {t.role}<span className="animate-pulse">_</span></h2>

          <p className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed pt-4 min-h-[120px] md:min-h-[96px]">
            {t.description}
            {lang === "ja" && <span className="block text-xs text-green-500/60 mt-3 italic">{translations.ja.japaneseSecret}</span>}
          </p>

          {/* Boutons d'action (Projets / Télécharger CV en Cyan / Contact) */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-8 font-mono">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-6 py-3 md:py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,0,0.2)] hover:shadow-[0_0_20px_rgba(0,255,0,0.6)] font-bold text-center">
              {t.btnProjects}
            </button>

            {/* Nouveau bouton CV en Cyan Cyberpunk */}
            <a href="/Andy_Malgonne_CV.pdf" download="Andy_Malgonne_CV.pdf" className="w-full sm:w-auto px-6 py-3 md:py-2 border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] font-bold text-center">
              {t.btnCV}
            </a>

            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto px-6 py-3 md:py-2 border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-all duration-300 font-bold text-center">
              {t.btnContact}
            </button>
          </div>
        </div>

        {/* TECH STACK */}
        <div className="mt-16 md:mt-20 border-t border-green-500/30 pt-8">
          <p className="text-xs md:text-base text-green-400/70 mb-6 break-all">[root@kub-andytropmimi ~]# cat /etc/skills.conf</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-green-500/20 bg-black/50 p-5 hover:border-green-500 hover:shadow-[0_0_15px_rgba(0,255,0,0.15)] transition-all group">
              <h3 className="text-white font-bold group-hover:text-green-400 mb-3 text-sm md:text-base">&gt; Infra & Cloud</h3>
              <ul className="text-xs md:text-sm text-gray-400 space-y-2">
                <li><span className="text-green-500">├──</span> Proxmox VE</li>
                <li><span className="text-green-500">├──</span> Kubernetes (K3s)</li>
                <li><span className="text-green-500">├──</span> Terraform / Ansible</li>
                <li><span className="text-green-500">└──</span> Docker / Podman</li>
              </ul>
            </div>
            <div className="border border-green-500/20 bg-black/50 p-5 hover:border-green-500 hover:shadow-[0_0_15px_rgba(0,255,0,0.15)] transition-all group">
              <h3 className="text-white font-bold group-hover:text-green-400 mb-3 text-sm md:text-base">&gt; GitOps & CI/CD</h3>
              <ul className="text-xs md:text-sm text-gray-400 space-y-2">
                <li><span className="text-green-500">├──</span> ArgoCD</li>
                <li><span className="text-green-500">├──</span> GitHub Actions / GitLab CI</li>
                <li><span className="text-green-500">└──</span> Traefik / Caddy</li>
              </ul>
            </div>
            <div className="border border-green-500/20 bg-black/50 p-5 hover:border-green-500 hover:shadow-[0_0_15px_rgba(0,255,0,0.15)] transition-all group">
              <h3 className="text-white font-bold group-hover:text-green-400 mb-3 text-sm md:text-base">&gt; Code & Scripting</h3>
              <ul className="text-xs md:text-sm text-gray-400 space-y-2">
                <li><span className="text-green-500">├──</span> Bash / Shell</li>
                <li><span className="text-green-500">├──</span> C / C++</li>
                <li><span className="text-green-500">└──</span> React / Next.js</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div id="projects" className="mt-16 md:mt-20 border-t border-green-500/30 pt-8 scroll-mt-20">
          <p className="text-xs md:text-base text-green-400/70 mb-6 break-all">[root@kub-andytropmimi ~]# ls -la /var/www/projects</p>
          <div className="flex flex-col gap-8 md:gap-6">

            {/* Projet 1 */}
            <div className="border-l-2 border-green-500 pl-4 py-2 hover:bg-green-900/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-lg md:text-xl font-bold text-white">Les Restos du Cœur</h3>
                <span className="text-[10px] md:text-xs font-mono text-green-500 bg-green-900/30 px-2 py-1 rounded w-fit">Dec 2025 - Apr 2026</span>
              </div>
              <h4 className="text-green-400 text-xs md:text-sm mb-3 font-mono break-words">&gt; {t.rdcRole}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{t.rdcDesc}</p>
              <div className="flex flex-wrap gap-2 text-[10px] md:text-xs font-mono text-gray-500">
                <span className="border border-gray-700 px-2 py-1">Docker</span>
                <span className="border border-gray-700 px-2 py-1">GitLab CI</span>
                <span className="border border-gray-700 px-2 py-1">Next.js</span>
              </div>
            </div>

            {/* Projet 2 */}
            <div className="border-l-2 border-green-500 pl-4 py-2 hover:bg-green-900/10 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                <h3 className="text-lg md:text-xl font-bold text-white">GitOps Bare-Metal Infra</h3>
                <span className="text-[10px] md:text-xs font-mono text-green-500 bg-green-900/30 px-2 py-1 rounded w-fit">2026</span>
              </div>
              <h4 className="text-green-400 text-xs md:text-sm mb-3 font-mono break-words">&gt; {t.gitopsRole}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{t.gitopsDesc}</p>
              <div className="flex flex-wrap gap-2 text-[10px] md:text-xs font-mono text-gray-500">
                <span className="border border-gray-700 px-2 py-1">Proxmox VE</span>
                <span className="border border-gray-700 px-2 py-1">Kubernetes / ArgoCD</span>
                <span className="border border-gray-700 px-2 py-1">GitHub Actions</span>
              </div>
            </div>

          </div>
        </div>

        {/* TIMELINE / EDUCATION */}
        <div className="mt-16 md:mt-20 border-t border-green-500/30 pt-8">
          <p className="text-xs md:text-base text-green-400/70 mb-6 break-all">[root@kub-andytropmimi ~]# tail -f /var/log/syslog | grep "education"</p>
          <div className="space-y-8 md:space-y-6">

            <div className="relative pl-6 border-l border-gray-700">
              <div className="absolute w-3 h-3 bg-green-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_8px_#22c55e]"></div>
              <h3 className="text-base md:text-lg font-bold text-white">42 Paris</h3>
              <p className="text-green-500 text-xs md:text-sm mb-2 font-mono">Nov 2023 - Dec 2025</p>
              <p className="text-gray-400 text-sm">{t.school42}</p>
            </div>

            <div className="relative pl-6 border-l border-gray-700">
              <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-1.5"></div>
              <h3 className="text-base md:text-lg font-bold text-white">Université Bordeaux Montaigne</h3>
              <p className="text-gray-500 text-xs md:text-sm mb-2 font-mono">Sep 2020 - Jun 2022</p>
              <p className="text-gray-400 text-sm">{t.univJap}</p>
            </div>

          </div>
        </div>

        {/* PASSIONS / PROFILE */}
        <div className="mt-16 md:mt-20 border-t border-green-500/30 pt-8">
          <p className="text-xs md:text-base text-green-400/70 mb-6 break-all">
            [root@kub-andytropmimi ~]# cat ~/.bash_profile
          </p>

          <div className="border border-green-500/20 bg-black/50 p-4 md:p-6 hover:border-green-500/40 transition-all">
            <h3 className="text-white font-bold mb-4 font-mono text-sm md:text-base">&gt; Personal Interests & Automation</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-4 text-xs md:text-sm text-gray-400 font-mono">
              <div className="space-y-3 md:space-y-2 break-all">
                <p>
                  <span className="text-green-500">export</span> INTERESTS=<span className="text-yellow-500">"Anime, Japan, Gaming"</span>
                </p>
                <p>
                  <span className="text-green-500">export</span> DOMOTIQUE=<span className="text-yellow-500">"HomeAssistant, SmartHome"</span>
                </p>
              </div>

              <div className="space-y-2 border-t border-gray-800 md:border-t-0 md:border-l md:border-gray-800 md:pl-6 pt-4 md:pt-0">
                <p className="text-gray-500 italic"># Custom scripts running in background:</p>
                <ul className="space-y-2 md:space-y-1 text-[10px] md:text-xs">
                  <li><span className="text-green-500">¼</span> anilist-updater.sh <span className="text-gray-600 block md:inline">(Auto-tracking anime list via API)</span></li>
                  <li><span className="text-green-500">¼</span> life-optimizer.py <span className="text-gray-600 block md:inline">(Automating everything in daily routine)</span></li>
                  <li><span className="text-green-500">¼</span> smart-home-trigger.sh <span className="text-gray-600 block md:inline">(Managing IoT & server metrics)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div id="contact" className="mt-16 md:mt-20 border-t border-green-500/30 pt-8 scroll-mt-20">
          <p className="text-xs md:text-base text-green-400/70 mb-6 break-all">
            [root@kub-andytropmimi ~]# ./ping_andy.sh
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-6 items-start md:items-center justify-center bg-black/50 border border-green-500/20 p-6 md:p-8 hover:border-green-500/50 transition-colors">

            <a href="https://www.linkedin.com/in/andy-malgonne/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-3 text-gray-400 hover:text-green-500 transition-colors group text-base md:text-lg font-bold">
              <svg className="w-6 h-6 text-green-500 group-hover:animate-pulse drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>

            <span className="hidden md:block text-gray-700">|</span>

            <a href="https://github.com/andymalgonne" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 md:gap-3 text-gray-400 hover:text-green-500 transition-colors group text-base md:text-lg font-bold">
              <svg className="w-6 h-6 text-green-500 group-hover:animate-pulse drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>

            <span className="hidden md:block text-gray-700">|</span>

            <a href="mailto:contact@andytropmimi.fr" className="flex items-center gap-4 md:gap-3 text-gray-400 hover:text-green-500 transition-colors group text-base md:text-lg font-bold">
              <svg className="w-6 h-6 text-green-500 group-hover:animate-pulse drop-shadow-[0_0_5px_rgba(34,197,94,0.8)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 4.667v14.666h24v-14.666h-24zm21.942 2l-9.942 6.944-9.942-6.944h19.884zm-19.942 10.666v-8.91l9.531 6.657.411.287.411-.287 9.531-6.657v8.91h-19.884z"/>
              </svg>
              Email
            </a>
          </div>
        </div>

      </main>
    </div>
  );
}