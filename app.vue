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

      <div class="timeline-group">
        <div class="timeline-item">
          <div class="timeline-year">2021 — Presente</div>
          <div class="job-title"><strong>Educacross</strong></div>
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
      </div>

      <div class="timeline-item">
        <div class="timeline-year">2021</div>
        <div class="job-title" id="j4role">{{ t.j4role }}</div>
        <ul class="job-desc" id="j4list">
          <li v-for="item in t.j4list" :key="item">{{ item }}</li>
        </ul>
      </div>

      

      <div class="timeline-item">
        <div class="timeline-year">2019 — 2020</div>
        <div class="job-title" id="j6role">{{ t.j6role }}</div>
        <ul class="job-desc" id="j6list">
          <li v-for="item in t.j6list" :key="item">{{ item }}</li>
        </ul>
      </div>
    </section>

    <section class="skills">
      <h2 id="skillsTitle">{{ t.skillsTitle }}</h2>
      <p>Frontend: Vue.js, React, Angular, HTML/CSS</p>
      <p>Backend: Node.js, .NET Core, MongoDB, Postgres</p>
      <p>DevOps: Azure, Docker, CI/CD</p>
    </section>

    <section class="contact">
      <h2 id="contactTitle">{{ t.contactTitle }}</h2>
      <p>Email: <a href="mailto:devair.restani.dev@gmail.com">devair.restani.dev@gmail.com</a></p>
      <p>{{ t.phoneLabel }}: +351 924 799 852</p>
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
    title: "Desenvolvedor Web | Vue.js | JavaScript | Node | .Net Core",
    summary: "Desenvolvedor Web com quase 5 anos de experiência no desenvolvimento e manutenção de projetos robustos. Especializado em React, Vue.js, Angular, Node.js, Python e .NET Core. Experiência com serviços web do Azure (Web Apps, DevOps, Functions), com foco na entrega de soluções de qualidade e colaboração eficaz da equipe.",
    highTitle: "Principais Destaques",
    h1: "Liderança de Equipe",
    h1txt: "Promovido a Senior para liderar e orientar tecnicamente uma equipe de 4 desenvolvedores, melhorando a produtividade da equipe e a qualidade do código.",
    h2: "Arquitetura de Microsserviços",
    h2txt: "Definição e implementação de novas arquiteturas de microsserviços para projetos críticos, resultando na redução de bugs em produção e na aceleração do ciclo de desenvolvimento.",
    h3: "Comunicação Estratégica",
    h3txt: "Facilitou a comunicação entre as equipes de desenvolvimento e de negócios, garantindo que as entregas técnicas estivessem alinhadas com os objetivos estratégicos da empresa.",
    expTitle: "Experiência Profissional",
    j1role: "Senior Web Developer",
    j1list: ["Promovido a Senior para liderar e orientar tecnicamente uma equipe de 4 desenvolvedores, melhorando a produtividade da equipe e a qualidade do código.", "Definição e implementação de novas arquiteturas de microsserviços para projetos críticos, resultando na redução de bugs em produção e na aceleração do ciclo de desenvolvimento.", "Facilitou a comunicação entre as equipes de desenvolvimento e de negócios, garantindo que as entregas técnicas estivessem alinhadas com os objetivos estratégicos da empresa."],
    j2role: "Mid-Level Web Developer",
    j2list: ["Liderei a unificação de dois projetos legados (Angular e Vue.js) em uma única base de código Vue.js, reduzindo os custos de infraestrutura no Azure e melhorando os tempos de carregamento da página.", "Modernizei a base de código Vue.js, com foco na experiência do usuário (UX) e na manutenibilidade, o que diminuiu o tempo de integração de novos desenvolvedores.", "Entreguei recursos de ponta a ponta, consistentemente dentro dos prazos, e apoiei ativamente a organização de tarefas da equipe."],
    j3role: "Junior Web Developer",
    j3list: ["Desenvolvi e mantive componentes de front-end para um projeto de grande escala em Vue.js, contribuindo para um aumento na satisfação do usuário.", "Implementei proativamente otimizações de código que melhoraram o desempenho da aplicação, e minha rápida adaptação foi reconhecida pela liderança técnica."],
    j4role: "Junior Software Developer — Cast group",
    j4list: ["Desenvolvimento e manutenção de componentes de front-end para um projeto de grande escala em Vue.js, contribuindo para um aumento na satisfação do usuário."],
    
    j6role: "Student Web Developer — SiplanControl-M - SPCM",
    j6list: ["Trabalhei como desenvolvedor Full Stack em .Net com HTML e CSS."],
    skillsTitle: "Competências Técnicas",
    contactTitle: "Contato",
    phoneLabel: "Telefone",
    footerTxt: "Feito com ☕︎ — Devair Ap. Restani Jr • Leiria, Portugal"
  },
  en: {
    name: "Devair Ap. Restani Jr",
    title: "Web Developer | Vue.js | JavaScript | Node | .Net Core",
    summary: "Web Developer with nearly 5 years of experience in developing and maintaining robust projects. Specializing in React, Vue.js, Angular, Node.js, Python, and .NET Core. Experienced with Azure web services (Web Apps, DevOps, Functions), focused on delivering quality solutions and effective team collaboration.",
    highTitle: "Key Highlights",
    h1: "Team Leadership",
    h1txt: "Promoted to Senior to technically lead and mentor a team of 4 developers, improving team productivity and code quality.",
    h2: "Micro-services Architectures",
    h2txt: "Defined and implemented new micro-services architectures for critical projects, resulting in a reduction in production bugs and accelerating the development cycle.",
    h3: "Strategic Communication",
    h3txt: "Facilitated communication between the development and business teams, ensuring that technical deliveries were aligned with the company's strategic objectives.",
    expTitle: "Professional Experience",
    j1role: "Senior Web Developer",
    j1list: ["Promoted to Senior to technically lead and mentor a team of 4 developers, improving team productivity and code quality.", "Defined and implemented new micro-services architectures for critical projects, resulting in a reduction in production bugs and accelerating the development cycle.", "Facilitated communication between the development and business teams, ensuring that technical deliveries were aligned with the company's strategic objectives."],
    j2role: "Mid-Level Web Developer",
    j2list: ["Led the unification of two legacy projects (Angular and Vue.js) into a single Vue.js codebase, reducing infrastructure costs on Azure and improving page load times.", "Modernized the Vue.js codebase, focusing on user experience (UX) and maintainability, which decreased the onboarding time for new developers.", "Delivered end-to-end features, consistently within deadlines, and actively supported the team's task organization."],
    j3role: "Junior Web Developer",
    j3list: ["Developed and maintained front-end components for a large-scale project in Vue.js, contributing to a increase in user satisfaction.", "Proactively implemented code optimizations that improved application performance, and my rapid adaptation was recognized by the technical leadership."],
    j4role: "Junior Software Developer — Cast group",
    j4list: ["Developed and maintained front-end components for a large-scale project in Vue.js, contributing to a increase in user satisfaction."],
    
    j6role: "Student Web Developer — SiplanControl-M - SPCM",
    j6list: ["Worked as a Full Stack developer in .Net with HTML and CSS."],
    skillsTitle: "Technical Skills",
    contactTitle: "Contact",
    phoneLabel: "Phone",
    footerTxt: "Made with ☕︎ — Devair Ap. Restani Jr • Leiria, Portugal"
  },
  it: {
    name: "Devair Ap. Restani Jr",
    title: "Sviluppatore Web | Vue.js | JavaScript | Node | .Net Core",
    summary: "Sviluppatore Web con quasi 5 anni di esperienza nello sviluppo e nella manutenzione di progetti robusti. Specializzato in React, Vue.js, Angular, Node.js, Python e .NET Core. Esperto di servizi web di Azure (Web Apps, DevOps, Functions), focalizzato sulla fornitura di soluzioni di qualità e sulla collaborazione efficace del team.",
    highTitle: "Punti di Forza",
    h1: "Liderança de Equipe",
    h1txt: "Promosso a Senior per guidare e fare da mentore tecnico a un team di 4 sviluppatori, migliorando la produttività del team e la qualità del codice.",
    h2: "Arquitetura de Microsserviços",
    h2txt: "Definito e implementato nuove architetture di microservizi per progetti critici, con conseguente riduzione dei bug di produzione e accelerazione del ciclo di sviluppo.",
    h3: "Comunicação Estratégica",
    h3txt: "Ha facilitato la comunicazione tra i team di sviluppo e di business, assicurando che le consegne tecniche fossero allineate con gli obiettivi strategici dell'azienda.",
    expTitle: "Esperienza Professionale",
    j1role: "Senior Web Developer",
    j1list: ["Promosso a Senior per guidare e fare da mentore tecnico a un team di 4 sviluppatori, migliorando la produttività del team e la qualità del codice.", "Definito e implementato nuove architetture di microservizi per progetti critici, con conseguente riduzione dei bug di produzione e accelerazione del ciclo di sviluppo.", "Ha facilitato la comunicazione tra i team di sviluppo e di business, assicurando che le consegne tecniche fossero allineate con gli obiettivi strategici dell'azienda."],
    j2role: "Mid-Level Web Developer",
    j2list: ["Ha guidato l'unificazione di due progetti legacy (Angular e Vue.js) in un unico codebase Vue.js, riducendo i costi dell'infrastruttura su Azure e migliorando i tempi di caricamento delle pagine.", "Modernizzato il codebase di Vue.js, concentrandosi sull'esperienza dell'utente (UX) e sulla manutenibilità, che ha ridotto i tempi di onboarding per i nuovi sviluppatori.", "Ha fornito funzionalità end-to-end, rispettando le scadenze e supportando attivamente l'organizzazione dei compiti del team."],
    j3role: "Junior Web Developer",
    j3list: ["Sviluppato e mantenuto componenti front-end per un progetto su larga scala in Vue.js, contribuindo ad un aumento della soddisfazione degli utenti.", "Implementato proattivamente ottimizzazioni del codice che hanno migliorato le prestazioni dell'applicazione e il mio rapido adattamento è stato riconosciuto dalla leadership tecnica."],
    j4role: "Junior Software Developer — Cast group",
    j4list: ["Sviluppato e mantenuto componenti front-end per un progetto su larga scala in Vue.js, contribuendo ad un aumento della soddisfazione degli utenti."],
    
    j6role: "Student Web Developer — SiplanControl-M - SPCM",
    j6list: ["Ho lavorato come sviluppatore Full Stack in .Net con HTML e CSS."],
    skillsTitle: "Competências Técnicas",
    contactTitle: "Contatto",
    phoneLabel: "Telefono",
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