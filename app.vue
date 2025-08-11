<template>
  <div>
    <header>
      <div><strong>Portfólio</strong></div>
      <div class="lang-switch">
        <button @click="setLang('pt')" :class="{ active: lang === 'pt' }">PT</button>
        <button @click="setLang('en')" :class="{ active: lang === 'en' }">EN</button>
        <button @click="setLang('it')" :class="{ active: lang === 'it' }">IT</button>
      </div>
    </header>

    <section class="hero">
      <h1 id="name">{{ t.name }}</h1>
      <h2 id="title">{{ t.title }}</h2>
      <p id="summary">{{ t.summary }}</p>
    </section>

    <section class="highlights">
      <h2 id="highTitle">{{ t.highTitle }}</h2>
      <p><strong id="h1">{{ t.h1 }}</strong> — <span id="h1txt">{{ t.h1txt }}</span></p>
      <p><strong id="h2">{{ t.h2 }}</strong> — <span id="h2txt">{{ t.h2txt }}</span></p>
      <p><strong id="h3">{{ t.h3 }}</strong> — <span id="h3txt">{{ t.h3txt }}</span></p>
    </section>

    <section class="timeline">
      <h2 id="expTitle">{{ t.expTitle }}</h2>

      <div class="timeline-item">
        <div class="timeline-year">2024 — Presente</div>
        <div class="job-title" id="j1role">{{ t.j1role }}</div>
        <ul class="job-desc" id="j1list">
          <li v-for="item in t.j1list" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-year">2022 — 2024</div>
        <div class="job-title" id="j2role">{{ t.j2role }}</div>
        <ul class="job-desc" id="j2list">
          <li v-for="item in t.j2list" :key="item">{{ item }}</li>
        </ul>
      </div>

      <div class="timeline-item">
        <div class="timeline-year">2021 — 2022</div>
        <div class="job-title" id="j3role">{{ t.j3role }}</div>
        <ul class="job-desc" id="j3list">
          <li v-for="item in t.j3list" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="skills">
      <h2 id="skillsTitle">{{ t.skillsTitle }}</h2>
      <p>Frontend: Vue.js, React, Angular, HTML/CSS</p>
      <p>Backend: Node.js, .NET Core, MongoDB, Postgres</p>
      <p>DevOps: Azure, Docker, CI/CD</p>
    </section>

    <footer>
      <div id="footerTxt">{{ t.footerTxt }}</div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const T = {
  pt: {
    name: "Devair Ap. Restani Jr",
    title: "Senior Web Developer",
    summary: "Desenvolvedor de Software Sênior com 5 anos de experiência liderando equipes, projetando arquiteturas robustas e otimizando aplicações para alta performance.",
    highTitle: "Principais Destaques",
    h1: "Liderança Técnica",
    h1txt: "Experiência como líder técnico, mentorando desenvolvedores e guiando equipes na entrega de projetos complexos.",
    h2: "Arquitetura de Sistemas",
    h2txt: "Definição e implementação de arquiteturas de micro-serviços, escaláveis e seguras, alinhadas a objetivos de negócio.",
    h3: "Otimização & Performance",
    h3txt: "Projetos com redução de custos e melhoria de performance, incluindo unificação de bases e otimização de código.",
    expTitle: "Experiência Profissional",
    j1role: "Senior Web Developer — EDUCACROSS",
    j1list: ["Mentoria e liderança técnica de uma equipe de 4 desenvolvedores.", "Definição de arquitetura de micro-serviços, reduzindo 25% dos bugs em produção.", "Melhoria da comunicação entre desenvolvimento e negócio."],
    j2role: "Pleno Web Developer — EDUCACROSS",
    j2list: ["Unificação de projetos legados (Angular e Vue.js) em uma única base Vue.js.", "Redução de custos em 15% e aumento de 30% na performance.", "Modernização do código e melhoria de UX."],
    j3role: "Junior Web Developer — EDUCACROSS",
    j3list: ["Desenvolvimento de componentes front-end em Vue.js.", "Otimizações de código que melhoraram a performance da aplicação."],
    skillsTitle: "Competências Técnicas",
    footerTxt: "Feito com ☕︎ — Devair Ap. Restani Jr • Leiria, Portugal"
  },
  en: {
    name: "Devair Ap. Restani Jr",
    title: "Senior Web Developer",
    summary: "Senior Software Developer with 5 years of experience leading teams, designing robust architectures, and optimizing high-performance applications.",
    highTitle: "Key Highlights",
    h1: "Technical Leadership",
    h1txt: "Experience as a technical leader, mentoring developers and guiding teams in delivering complex projects.",
    h2: "Systems Architecture",
    h2txt: "Definition and implementation of scalable and secure microservice architectures, aligned with business objectives.",
    h3: "Optimization & Performance",
    h3txt: "Projects with cost reduction and performance improvement, including database unification and code optimization.",
    expTitle: "Professional Experience",
    j1role: "Senior Web Developer — EDUCACROSS",
    j1list: ["Technical mentorship and leadership of a 4-developer team.", "Definition of microservices architecture, reducing production bugs by 25%.", "Improved communication between development and business."],
    j2role: "Web Developer — EDUCACROSS",
    j2list: ["Unification of legacy projects (Angular and Vue.js) into a single Vue.js codebase.", "Cost reduction by 15% and 30% performance increase.", "Code modernization and UX improvement."],
    j3role: "Junior Web Developer — EDUCACROSS",
    j3list: ["Development of front-end components in Vue.js.", "Code optimizations that improved application performance."],
    skillsTitle: "Technical Skills",
    footerTxt: "Made with ☕︎ — Devair Ap. Restani Jr • Leiria, Portugal"
  },
  it: {
    name: "Devair Ap. Restani Jr",
    title: "Senior Web Developer",
    summary: "Sviluppatore Software Senior con 5 anni di esperienza nella guida di team, progettazione di architetture robuste e ottimizzazione di applicazioni ad alte prestazioni.",
    highTitle: "Punti di Forza",
    h1: "Leadership Tecnica",
    h1txt: "Esperienza come leader tecnico, mentoring di sviluppatori e guida dei team nella consegna di progetti complessi.",
    h2: "Architettura dei Sistemi",
    h2txt: "Definizione e implementazione di architetture di microservizi scalabili e sicure, allineate agli obiettivi aziendali.",
    h3: "Ottimizzazione e Performance",
    h3txt: "Progetti con riduzione dei costi e miglioramento delle prestazioni, inclusa l'unificazione dei database e l'ottimizzazione del codice.",
    expTitle: "Esperienza Professionale",
    j1role: "Senior Web Developer — EDUCACROSS",
    j1list: ["Mentoring e leadership tecnica di un team di 4 sviluppatori.", "Definizione dell'architettura dei microservizi, riducendo i bug in produzione del 25%.", "Miglioramento della comunicazione tra sviluppo e business."],
    j2role: "Web Developer — EDUCACROSS",
    j2list: ["Unificazione di progetti legacy (Angular e Vue.js) in una singola base Vue.js.", "Riduzione dei costi del 15% e aumento delle prestazioni del 30%.", "Modernizzazione del codice e miglioramento UX."],
    j3role: "Junior Web Developer — EDUCACROSS",
    j3list: ["Sviluppo di componenti front-end in Vue.js.", "Ottimizzazioni del codice che hanno migliorato le prestazioni dell'applicazione."],
    skillsTitle: "Competenze Tecniche",
    footerTxt: "Fatto con ☕︎ — Devair Ap. Restani Jr • Leiria, Portogallo"
  }
};

const lang = ref('pt');

const t = computed(() => T[lang.value]);

const setLang = (newLang) => {
  lang.value = newLang;
};

onMounted(() => {
  const userLang = navigator.language.startsWith("en") ? "en" : navigator.language.startsWith("it") ? "it" : "pt";
  setLang(userLang);
});
</script>
