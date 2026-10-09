const SKILLS = {
  pt: [
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-microsoft', name: 'C#' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fas fa-database', name: 'SQL Server' },
    { icon: 'fab fa-git-alt', name: 'Git / GitHub' },
    { icon: 'fas fa-plug', name: 'APIs REST' },
    { icon: 'fas fa-file-code', name: 'Google Apps Script' },
    { icon: 'fab fa-html5', name: 'HTML / CSS' },
    { icon: 'fas fa-table', name: 'Pandas' },
    { icon: 'fas fa-robot', name: 'Automação de Processos' },
    { icon: 'fa-solid fa-brain', name: 'Integração com IA' }
  ],
  en: [
    { icon: 'fab fa-python', name: 'Python' },
    { icon: 'fab fa-microsoft', name: 'C#' },
    { icon: 'fab fa-js', name: 'JavaScript' },
    { icon: 'fas fa-database', name: 'SQL Server' },
    { icon: 'fab fa-git-alt', name: 'Git / GitHub' },
    { icon: 'fas fa-plug', name: 'REST APIs' },
    { icon: 'fas fa-file-code', name: 'Google Apps Script' },
    { icon: 'fab fa-html5', name: 'HTML / CSS' },
    { icon: 'fas fa-table', name: 'Pandas' },
    { icon: 'fas fa-robot', name: 'Process Automation' },
    { icon: 'fa-solid fa-brain', name: 'AI Integration' }
  ]
};

const PROJETOS = {
  pt: [
    {
      icon: 'fas fa-robot',
      title: 'Storm',
      desc: 'Assistente virtual pessoal desenvolvido em Python com foco em automação e IA.',
      tags: ['Python', 'IA', 'Automação'],
      github: null,
      featured: true
    },
    {
      icon: 'fas fa-file-invoice',
      title: 'Automação de Inventário com IA',
      desc: 'Sistema de leitura e processamento automático de documentos PDF usando a Gemini API.',
      tags: ['Python', 'Gemini API', 'PDF'],
      github: null,
      featured: true
    },
    {
      icon: 'fas fa-server',
      title: 'API com Flask',
      desc: 'API simples em Python para estudar e compreender o microframework Flask.',
      tags: ['Python', 'Flask', 'API'],
      github: 'https://github.com/PedroHBenigno/api-python',
      featured: false
    },
    {
      icon: 'fas fa-list-check',
      title: 'Lista de Atividades (C#)',
      desc: 'Lista de atividades desenvolvidas na faculdade, programadas em C#.',
      tags: ['C#', '.NET', 'Faculdade'],
      github: 'https://github.com/PedroHBenigno/Lista-de-Atividades',
      featured: false
    }
  ],
  en: [
    {
      icon: 'fas fa-robot',
      title: 'Storm',
      desc: 'Personal virtual assistant built in Python focused on automation and AI.',
      tags: ['Python', 'AI', 'Automation'],
      github: null,
      featured: true
    },
    {
      icon: 'fas fa-file-invoice',
      title: 'AI-Powered Inventory Automation',
      desc: 'System for automatic reading and processing of PDF documents using the Gemini API.',
      tags: ['Python', 'Gemini API', 'PDF'],
      github: null,
      featured: true
    },
    {
      icon: 'fas fa-server',
      title: 'Flask API',
      desc: 'Simple Python API to study and understand the Flask microframework.',
      tags: ['Python', 'Flask', 'API'],
      github: 'https://github.com/PedroHBenigno/api-python',
      featured: false
    },
    {
      icon: 'fas fa-list-check',
      title: 'Activities List (C#)',
      desc: 'A list of activities developed during college, programmed in C#.',
      tags: ['C#', '.NET', 'College'],
      github: 'https://github.com/PedroHBenigno/Lista-de-Atividades',
      featured: false
    }
  ]
};

let currentLang = 'pt';

function getSet() {
  return currentLang;
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = '';
  SKILLS[getSet()].forEach((skill) => {
    const card = document.createElement('div');
    card.className = 'skill-card';
    card.innerHTML = `<i class="${skill.icon}"></i><span>${skill.name}</span>`;
    grid.appendChild(card);
  });
}

function renderProjetos() {
  const grid = document.getElementById('projetosGrid');
  grid.innerHTML = '';
  PROJETOS[getSet()].forEach((proj) => {
    const card = document.createElement('div');
    card.className = 'projeto-card';
    const githubLink = proj.github
      ? `<div class="projeto-links"><a href="${proj.github}" target="_blank" rel="noopener"><i class="fab fa-github"></i> GitHub</a></div>`
      : `<div class="projeto-links"><span style="color:var(--text-muted);font-size:0.85rem;">🔒 <span data-i18n="proj.private">Em breve</span></span></div>`;
    card.innerHTML = `
      <div class="projeto-icon"><i class="${proj.icon}"></i></div>
      <h3>${proj.title}</h3>
      <p>${proj.desc}</p>
      <div class="projeto-tags">${proj.tags.map((t) => `<span>${t}</span>`).join('')}</div>
      ${githubLink}
    `;
    grid.appendChild(card);
  });
}

function applyLanguage(lang) {
  currentLang = lang;
  document.body.className = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  const dict = I18N[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  const toggle = document.getElementById('langToggle');
  toggle.innerHTML = `<span class="lang-pt${lang === 'pt' ? ' active-lang' : ''}">PT</span><span class="lang-sep">/</span><span class="lang-en${lang === 'en' ? ' active-lang' : ''}">EN</span>`;

  renderSkills();
  renderProjetos();
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');
  applyLanguage(saved === 'en' ? 'en' : 'pt');

  document.getElementById('langToggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
  });

  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => mobileMenu.classList.remove('open'))
  );

  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});
