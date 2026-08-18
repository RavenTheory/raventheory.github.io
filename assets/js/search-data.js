// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Research/publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-study",
          title: "study",
          description: "A collection of notes and exercise solutions on topics I&#39;m learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/study/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "books-introduction-to-electrodynamics",
          title: 'Introduction to Electrodynamics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/griffiths_electrodynamics/";
            },},{id: "books-modern-particle-physics",
          title: 'Modern Particle Physics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/modern_particle_physics/";
            },},{id: "books-an-introduction-to-quantum-field-theory",
          title: 'An Introduction to Quantum Field Theory',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/peskin_schroeder_qft/";
            },},{id: "books-the-strangest-man",
          title: 'The Strangest Man',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_strangest_man/";
            },},{id: "books-a-relativist-s-toolkit-the-mathematics-of-black-hole-mechanics",
          title: 'A Relativist’s Toolkit: The Mathematics of Black-Hole Mechanics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/poisson-relativist-toolkit/";
            },},{id: "books-group-theory-in-a-nutshell-for-physicists",
          title: 'Group Theory in a Nutshell for Physicists',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/zee_group_theory_nutshell/";
            },},{id: "books-a-life-in-physics",
          title: 'A Life in Physics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/life_in_physics/";
            },},{id: "books-to-explain-the-world",
          title: 'To Explain the World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/to_explain_the_world/";
            },},{id: "books-string-theory-vol-1-an-introduction-to-the-bosonic-string",
          title: 'String Theory Vol. 1: An Introduction to the Bosonic String',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/polchinski_string_theory_vol1/";
            },},{id: "books-the-time-machine",
          title: 'The Time Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_time_machine/";
            },},{id: "books-world-history-volume-1-to-1500",
          title: 'World History Volume 1, to 1500',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/world_history_vol1/";
            },},{id: "study-string-theory",
          title: 'String Theory',
          description: "Notes and exercises on string theory.",
          section: "Study",handler: () => {
              window.location.href = "/study/1_String-Theory/";
            },},{id: "study-group-theory",
          title: 'Group Theory',
          description: "Notes and exercise soluitions on group theory.",
          section: "Study",handler: () => {
              window.location.href = "/study/2_Group-Theory/";
            },},{id: "study-quantum-field-theory",
          title: 'Quantum Field Theory',
          description: "Personal solutions and detailed calculations from my past Quantum Field Theory homework assignments.",
          section: "Study",handler: () => {
              window.location.href = "/study/3_Quantum-Field-Theory/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%68%61%6E%6B%61%72.%62%68%61%6E%64%61%72%69.%70%68%79%73@%70%72%6F%74%6F%6E.%6D%65", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/RavenTheory", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0003-9842-9082", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
