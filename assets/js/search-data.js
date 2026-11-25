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
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Peer-reviewed articles, conference papers and datasets, newest first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Research tracks, with papers, code and data.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Code and data from my research tracks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "Courses I teach.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-counting-days-is-not-measuring-phase",
        
          title: "Counting days is not measuring phase",
        
        description: "How calendar based cycle labels mislead women&#39;s health data, and what the Marquette cycle data show.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/counting-days-is-not-measuring-phase/";
          
        },
      },{id: "post-what-resting-eeg-can-and-cannot-say-about-the-menstrual-cycle",
        
          title: "What resting EEG can and cannot say about the menstrual cycle",
        
        description: "A public EEG dataset of 69 women cannot separate a cycle or contraceptive effect from noise. A power and labeling analysis.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/resting-eeg-and-the-cycle/";
          
        },
      },{id: "post-does-a-wrist-activity-model-underperform-for-women",
        
          title: "Does a wrist-activity model underperform for women?",
        
        description: "Testing the gender data gap on two public datasets. At coarse activity resolution, sex and hormonal status barely move the model or the measure.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/wrist-activity-model-and-sex/";
          
        },
      },{id: "post-what-is-the-data-gap-the-numbers-behind-it",
        
          title: "What is the data gap? The numbers behind it",
        
        description: "Start here. What the data gap in women&#39;s health is, how it was built, and what the published numbers say about its size.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/what-the-data-gap-is/";
          
        },
      },{id: "books-assessing-the-adoption-and-challenges-of-electronic-health-records-and-information-systems-in-honduran-hospitals",
          title: 'Assessing the Adoption and Challenges of Electronic Health Records and Information Systems in...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/reyes2024ehr/";
            },},{id: "books-implementing-research-based-teaching-methodology-a-multi-disciplinary-case-study",
          title: 'Implementing Research-Based Teaching Methodology: A Multi-Disciplinary Case Study',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/reyes2024teaching/";
            },},{id: "books-radar-placement-effects-on-multi-patient-heart-and-respiration-monitoring-sivis-dataset-validation",
          title: 'Radar Placement Effects on Multi-Patient Heart and Respiration Monitoring: SiViS Dataset Validation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/reyes2026radar/";
            },},{id: "news-open-dataset-of-lumbar-spine-x-rays-with-vertebral-landmarks",
          title: 'Open dataset of lumbar spine X-rays with vertebral landmarks',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-sivis-dataset-published-in-scientific-data",
          title: 'SiViS dataset published in Scientific Data',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-ada-published-in-frontiers-in-medical-technology",
          title: 'ADA published in Frontiers in Medical Technology',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-i-am-honored-to-have-been-recognized-as-the-best-researcher-of-lerco-vp9-st2-radar-group-at-vsb-technical-university-of-ostrava-receiving-this-award-is-a-meaningful-milestone-in-my-academic-journey-it-reflects-not-only-the-work-i-have-accomplished-over-the-past-years-but-also-the-support-of-my-colleagues-collaborators-and-mentors-who-have-been-part-of-this-journey-my-research-focuses-on-developing-contactless-radar-sensing-technologies-for-healthcare-combining-signal-processing-and-artificial-intelligence-to-create-reliable-non-invasive-monitoring-systems-my-main-research-interests-include-contactless-vital-sign-monitoring-heart-rate-and-respiratory-rate-estimation-human-activity-recognition-ai-and-signal-processing-methods-for-biomedical-applications-this-recognition-motivates-me-to-continue-asking-challenging-questions-exploring-new-ideas-and-translating-research-into-technologies-that-can-have-a-real-impact-on-healthcare-i-am-grateful-to-the-lerco-team-and-the-biomedical-engineering-research-group-for-providing-such-an-inspiring-environment-to-pursue-innovative-research-receiving-the-best-researcher-award-from-lerco-vp9-st2-radar-group-at-vsb-technical-university-of-ostrava",
          title: 'I am honored to have been recognized as the Best Researcher of LERCO...',
          description: "",
          section: "News",},{id: "projects-contactless-vital-signs",
          title: 'Contactless vital signs',
          description: "Heart and respiration rate from radar, without touching the patient",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_radar_vital_signs/";
            },},{id: "projects-emg-prosthetics-and-control",
          title: 'EMG, prosthetics and control',
          description: "Reading muscle signals to anticipate and drive hand movement",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_emg_control/";
            },},{id: "projects-wearable-motion-sensing",
          title: 'Wearable motion sensing',
          description: "Human activity and gait from inertial sensors and motion capture",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_wearable_motion/";
            },},{id: "projects-sports-biomechanics",
          title: 'Sports biomechanics',
          description: "Exercise technique and athletic gestures, from lab-grade IMUs to low-cost video",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_sports_biomechanics/";
            },},{id: "projects-rehabilitation-and-healthy-ageing",
          title: 'Rehabilitation and healthy ageing',
          description: "Accessible motion analysis and assistive devices for rehabilitation and older adults",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_rehabilitation/";
            },},{id: "projects-medical-imaging",
          title: 'Medical imaging',
          description: "Vertebral landmarks and spondylolisthesis grading on lumbar X-rays",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_medical_imaging/";
            },},{id: "teachings-applied-artificial-intelligence-methods",
          title: 'Applied Artificial Intelligence Methods',
          description: "A comprehensive hands-on course covering the practical implementation of AI algorithms, including Fuzzy Systems, Clustering, Neural Networks, Computer Vision, and Generative Models using MATLAB.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/applied-ai/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/Karla_Reyes_CV.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%72%6B%61%72%6C%61%72%65%79%65%73@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ax6YKhcAAAAJ", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3269-0830", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/drkarlareyes", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
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
