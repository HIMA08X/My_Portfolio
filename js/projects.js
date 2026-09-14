/* ==========================================================================
   PROJECTS
   Edit the `projects` array below to add, remove, or update your projects.
   Each project is rendered into the #projectsTrack carousel automatically.
   Replace the placeholder image, github, and demo values with your real
   project data — do not invent links or features that don't exist yet.
   ========================================================================== */
(function () {
  // Replace this placeholder project data with your actual projects.
  const projects = [
    {
      title: 'Order_Flow',
      description: 'A small e-commerce backend project built with .NET 8.',
      // PROJECT IMAGE: replace with the actual path to your project image.
      image: 'assets/images/projects/project-1.jpg',
      tech: ['ASP.NET Core', 'SQL Server','Redis','CQRS','BackgroundServices','Caching'],
      // GITHUB PROJECT LINK: replace # with the actual repository URL.
      github: 'https://github.com/HIMA08X/Order_Flow.git',
      // LIVE DEMO LINK: replace # with the actual live demo URL, or set to null to hide the button.
      demo: null
    },
    {
      title: '•	Funiro API (E-Commerce) ',
      description: 'Built an ASP.NET Core REST API using Clean Architecture, Repository Pattern, EF Core, and Docker containerization.',
      image: 'assets/images/projects/project-2.jpg',
      tech: ['ASP.NET Core Web API', 'Entity Framework Core', 'Clean Architecture', 'Repository Pattern', 'Docker'],
      github: 'https://github.com/HIMA08X/Funiro_API.git',
      demo: null
    },
    {
      title: 'Restaurant-Management-System',
      description: 'A RESTful API built with ASP.NET Core Web API, Entity Framework Core, and SQL Server,Menu Management (CRUD),Restaurant Tables Management (CRUD).',
      image: 'assets/images/projects/project-3.jpg',
      tech: ['C#', 'Entity Framework Core', 'JWT Authentication', 'SQL Server', 'ASP.NET Core Web API'],
      github: 'https://github.com/HIMA08X/Restaurant-Management-System.git',
      demo: null
    }
  ];

  const track = document.getElementById('projectsTrack');
  if (!track) return;

  const pad = (n) => String(n).padStart(2, '0');

  track.innerHTML = projects
    .map((project, index) => {
      const demoBtn = project.demo
        ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--sm">Live Demo</a>`
        : '';
      const techTags = project.tech
        .map((t) => `<span class="pill">${t}</span>`)
        .join('');

      return `
        <article class="project-card">
          <div class="project-card__image">
            <span class="project-card__index">${pad(index + 1)}</span>
            <!-- PROJECT IMAGE: replace with the actual project image -->
            <img src="${project.image}" alt="${project.title}" loading="lazy"
                 onerror="this.closest('.project-card__image').style.background='var(--surface-alt)'; this.remove();">
          </div>
          <div class="project-card__body">
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__desc">${project.description}</p>
            <div class="project-card__tags">${techTags}</div>
            <div class="project-card__links">
              <!-- GITHUB PROJECT LINK: replace # with the actual repository URL -->
              <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn--outline btn--sm">GitHub</a>
              ${demoBtn}
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  // Carousel arrow controls
  const prevBtn = document.getElementById('projPrev');
  const nextBtn = document.getElementById('projNext');
  const scrollAmount = () => track.querySelector('.project-card')?.offsetWidth + 24 || 340;

  prevBtn?.addEventListener('click', () => {
    track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
  });
  nextBtn?.addEventListener('click', () => {
    track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
  });
})();
