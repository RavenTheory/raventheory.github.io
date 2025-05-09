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
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A  collection of my random projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "post-why-i-chose-fedora-for-my-home-server",
        
          title: "Why I chose Fedora for my home server",
        
        description: "I explain why I chose to use Fedora for my home server",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/why-I-chose-fedora/";
          
        },
      },{id: "post-my-first-blog",
        
          title: "My first blog",
        
        description: "A little blog post",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/First-Blog/";
          
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
            },},{id: "books-a-life-in-physics",
          title: 'A Life in Physics',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/life_in_physics/";
            },},{id: "books-string-theory-vol-1-an-introduction-to-the-bosonic-string",
          title: 'String Theory Vol. 1: An Introduction to the Bosonic String',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/polchinski_string_theory_vol1/";
            },},{id: "books-to-explain-the-world",
          title: 'To Explain the World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/to_explain_the_world/";
            },},{id: "books-group-theory-in-a-nutshell-for-physicists",
          title: 'Group Theory in a Nutshell for Physicists',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/zee_group_theory_nutshell/";
            },},{id: "projects-homeserver",
          title: 'Homeserver',
          description: "Setting up a fedora linux server as a home server",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_Homeserver/";
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
