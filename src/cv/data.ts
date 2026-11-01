import type { CV } from "./types"

export const cv: CV = {
  name: { en: "Daniyar Baitursynov", ru: "Данияр Байтурсынов" },
  title: {
    en: "Tech Lead · Senior Software Engineer (Go)",
    ru: "Техлид · Senior Software Engineer (Go)"
  },
  location: { en: "Kazakhstan", ru: "Казахстан" },
  contacts: [
    {
      label: { en: "GitHub", ru: "GitHub" },
      text: "github.com/danikarik",
      href: "https://github.com/danikarik"
    },
    {
      label: { en: "Web", ru: "Сайт" },
      text: "cv.ozimiz.app",
      href: "https://cv.ozimiz.app"
    }
  ],

  summary: [
    {
      en: "Backend engineer and tech lead with 12+ years of commercial experience building server-side systems in Go, Python and Ruby on Rails — from design to production on Kubernetes. Key interests: distributed systems, database architecture, event-driven design, and applied LLMs.",
      ru: "Бэкенд-инженер и техлид с коммерческим опытом более 12 лет: серверные системы на Go, Python и Ruby on Rails — от проектирования до продакшна на Kubernetes. Интересы: распределённые системы, архитектура БД, событийная архитектура и прикладные LLM."
    },
    {
      en: "Currently leading backend development of Freedom Lenta, a social commerce platform inside the Freedom SuperApp. Previously built real-time ads targeting services for Reddit and identity verification and crypto wallet services at Endpass.",
      ru: "Сейчас руковожу бэкенд-разработкой Freedom Lenta — социально-коммерческой платформы внутри Freedom SuperApp. До этого разрабатывал real-time сервисы рекламного таргетинга для Reddit, а также сервисы верификации личности и криптокошелька в Endpass."
    }
  ],

  skills: [
    {
      title: { en: "Languages", ru: "Языки" },
      items: ["Go", "Python", "Ruby", "SQL", "JavaScript", "Scala"]
    },
    {
      title: { en: "Frameworks & APIs", ru: "Фреймворки и API" },
      items: [
        "Ruby on Rails",
        "Django / DRF",
        "REST",
        "gRPC / Protobuf",
        "WebSockets / Centrifugo",
        "OAuth 2.0 / JWT"
      ]
    },
    {
      title: { en: "Data & messaging", ru: "Данные и очереди" },
      items: [
        "PostgreSQL / PostGIS",
        "Redis",
        "Elasticsearch",
        "Apache Kafka",
        "DynamoDB",
        "MySQL",
        "Cassandra",
        "Apache Airflow",
        "Apache Spark"
      ]
    },
    {
      title: { en: "Infrastructure", ru: "Инфраструктура" },
      items: [
        "Kubernetes",
        "Helm",
        "Docker",
        "Terraform",
        "AWS",
        "GCP",
        "GitLab CI",
        "GitHub Actions",
        "Argo"
      ]
    },
    {
      title: { en: "Observability", ru: "Наблюдаемость" },
      items: ["Prometheus", "Grafana", "Sentry", "Dynatrace"]
    },
    {
      title: { en: "AI / ML", ru: "AI / ML" },
      items: [
        { en: "Agentic coding (Claude Code)", ru: "Агентная разработка (Claude Code)" },
        { en: "Open LLM inference (vLLM, Llama 4)", ru: "Инференс открытых LLM (vLLM, Llama 4)" },
        { en: "LLM integration (Genkit)", ru: "Интеграция LLM (Genkit)" },
        { en: "Recommender systems integration", ru: "Интеграция рекомендательных систем" },
        "OpenCV",
        "Tesseract OCR"
      ]
    },
    {
      title: { en: "Practices", ru: "Практики" },
      items: [
        "TDD",
        { en: "Integration & E2E testing", ru: "Интеграционное и E2E-тестирование" },
        { en: "Zero-downtime migrations", ru: "Миграции без простоя" },
        "Transactional outbox / CDC",
        { en: "Feature flags", ru: "Фича-флаги" },
        "Agile / Scrum, Kanban"
      ]
    }
  ],

  leadership: [
    {
      en: "Planning, estimation and risk management; technical design documents and roadmaps",
      ru: "Планирование, оценка сроков и рисков; технические дизайн-документы и роадмапы"
    },
    {
      en: "Driving team rituals (daily, retro, demo) and cross-team work with product, QA, data and partner teams",
      ru: "Проведение командных встреч (дейли, ретро, демо) и кросс-командная работа с продуктом, QA, data-командой и партнёрами"
    },
    {
      en: "Code review standards and engineering guidelines; mentoring and onboarding; led teams of up to 15 developers",
      ru: "Стандарты код-ревью и инженерные гайдлайны; менторство и онбординг; руководил командами до 15 человек"
    }
  ],

  experience: [
    {
      company: "Globerce Capital",
      role: { en: "Tech Lead", ru: "Техлид" },
      start: "2025-08",
      projects: [
        {
          name: "Freedom Lenta",
          about: {
            en: "Social commerce platform in the Freedom SuperApp (Kazakhstan): purchase posts, a merchant map, and loyalty cashback for verified transactions.",
            ru: "Социально-коммерческая платформа в Freedom SuperApp (Казахстан): посты о покупках, карта продавцов и кэшбэк за подтверждённые транзакции."
          },
          highlights: [
            {
              en: "Lead backend development (Go services and a Rails 8 back-office) and zero-downtime production rollouts.",
              ru: "Руковожу бэкенд-разработкой (Go-сервисы и бэк-офис на Rails 8) и выкатками в продакшн без простоя."
            },
            {
              en: "Made agentic coding part of the team's daily workflow: Claude Code with repository agent guides (AGENTS.md / CLAUDE.md), shared skills, and AI-assisted planning, implementation and code review.",
              ru: "Внедрил агентную разработку в ежедневную работу команды: Claude Code с агентными гайдами в репозиториях (AGENTS.md / CLAUDE.md), общими скиллами и AI-помощью в планировании, реализации и код-ревью."
            },
            {
              en: "Designed and built the loyalty reward system end-to-end: eligibility rules, idempotent race-safe reward processing, and reconciliation with the partner bank's loyalty program.",
              ru: "Спроектировал и реализовал систему вознаграждений с нуля: правила начисления, идемпотентная обработка наград с защитой от гонок и сверка с программой лояльности банка-партнёра."
            },
            {
              en: "Built the feed ranking engine on engagement, content quality and author reputation signals; integrated the ML recommendation service with a strict latency budget and graceful fallback.",
              ru: "Разработал движок ранжирования ленты на сигналах вовлечённости, качества контента и репутации автора; интегрировал ML-сервис рекомендаций со строгим бюджетом задержки и фолбэком."
            },
            {
              en: "Designed crowdsourced merchant location verification: matching card transactions to 2GIS map locations with confidence-based publishing.",
              ru: "Спроектировал краудсорсинговую верификацию точек продаж: сопоставление карточных транзакций с локациями 2GIS и публикация по уровню уверенности."
            },
            {
              en: "Set up self-hosted inference for open LLMs (Llama 4 on vLLM) and built AI-assisted moderation and content quality scoring on top of it.",
              ru: "Развернул self-hosted инференс открытых LLM (Llama 4 на vLLM) и построил на нём AI-модерацию и оценку качества контента."
            },
            {
              en: "Designed the reputation and virtual currency (coins) economy with background anti-abuse scoring and engagement fraud detection.",
              ru: "Спроектировал экономику репутации и виртуальной валюты (коинов) с фоновым антиабьюз-скорингом и выявлением накрутки вовлечённости."
            },
            {
              en: "Built platform infrastructure: event-driven push notifications (Kafka), Elasticsearch search with zero-downtime reindexing, and data pipelines for analytics and ML.",
              ru: "Запустил платформенную инфраструктуру: событийные пуш-уведомления (Kafka), поиск на Elasticsearch с переиндексацией без простоя и пайплайны данных для аналитики и ML."
            },
            {
              en: "Improved mini-app performance using Dynatrace and Prometheus data: image caching and WebP delivery via imgproxy, right-sizing of production Kubernetes workloads.",
              ru: "Улучшил производительность мини-приложения по данным Dynatrace и Prometheus: кэширование и WebP-изображения через imgproxy, оптимизация ресурсов продакшн-нагрузок в Kubernetes."
            }
          ],
          stack: [
            "Go",
            "PostgreSQL (PostGIS)",
            "Redis",
            "Apache Kafka",
            "Elasticsearch",
            "Protobuf",
            "Centrifugo",
            "imgproxy",
            "Ruby on Rails 8",
            "Sidekiq",
            "Apache Airflow",
            "vLLM",
            "Llama 4",
            "Claude Code",
            "Genkit",
            "OpenFeature",
            "Prometheus",
            "Grafana",
            "Sentry",
            "Dynatrace",
            "Kubernetes",
            "Helm",
            "GitLab CI"
          ]
        }
      ]
    },
    {
      company: { en: "Project-based work", ru: "Проектная разработка" },
      role: { en: "Ruby on Rails Engineer", ru: "Ruby on Rails-разработчик" },
      start: "2024-11",
      end: "2025-07",
      projects: [
        {
          about: {
            en: "Development for industrial clients: factory automation and warehouse management systems (WMS).",
            ru: "Разработка для промышленных заказчиков: системы автоматизации производства и управления складом (WMS)."
          },
          highlights: [
            {
              en: "Built Ruby on Rails applications for automated factories and warehouse management, from requirements to deployment.",
              ru: "Разрабатывал Rails-приложения для автоматизированных производств и складов — от требований до деплоя."
            }
          ],
          stack: ["Ruby on Rails"]
        }
      ]
    },
    {
      company: "Akvelon",
      role: { en: "Senior Software Engineer", ru: "Senior Software Engineer" },
      start: "2021-02",
      end: "2024-10",
      projects: [
        {
          name: "Reddit",
          about: {
            en: "American social news aggregation, content rating and discussion website.",
            ru: "Американский социальный новостной агрегатор с рейтингом контента и обсуждениями."
          },
          highlights: [
            {
              en: "Led a team of 3 contracted engineers in Ads Targeting.",
              ru: "Руководил командой из 3 инженеров-подрядчиков в направлении Ads Targeting."
            },
            {
              en: "Designed and developed the targeting ecosystem services from scratch, including real-time services that process users' targeting data.",
              ru: "Спроектировал и разработал с нуля сервисы экосистемы таргетинга, включая real-time сервисы обработки данных таргетинга пользователей."
            },
            {
              en: "Optimized user targeting data storage; refactored targeting and selection business logic.",
              ru: "Оптимизировал хранение данных таргетинга; провёл рефакторинг бизнес-логики таргетинга и отбора."
            }
          ],
          stack: [
            "Go",
            "Baseplate",
            "Scala",
            "Apache Spark",
            "DynamoDB",
            "Redis",
            "GCP",
            "AWS",
            "Kubernetes",
            "Terraform",
            "Argo"
          ]
        }
      ]
    },
    {
      company: "Endpass Inc.",
      role: {
        en: "Senior Software Development Engineer",
        ru: "Senior Software Development Engineer"
      },
      start: "2019-04",
      end: "2020-11",
      projects: [
        {
          name: "Vault",
          about: {
            en: "SaaS for user authentication and identity verification with automatic face detection and matching against documents such as passports and ID cards.",
            ru: "SaaS для аутентификации и верификации личности по лицу и документам."
          },
          highlights: [
            {
              en: "Introduced and maintained the service that crops the MRZ code from document scans and runs OCR over it.",
              ru: "Разработал и поддерживал сервис, который вырезает MRZ-код из скана документа и распознаёт его (OCR)."
            },
            {
              en: "Took part in building the public REST API and SDK; delivered the activity tracking feature from idea to deployment.",
              ru: "Участвовал в разработке публичного REST API и SDK; реализовал отслеживание активности от идеи до деплоя."
            },
            {
              en: "Worked with product owners on product strategy; onboarded new developers.",
              ru: "Работал с владельцами продукта над стратегией; проводил онбординг новых разработчиков."
            }
          ],
          stack: [
            "Go",
            "Redis",
            "Docker",
            "AWS S3",
            "ElastiCache",
            "DynamoDB",
            "Vue",
            "React",
            "OpenCV",
            "Tesseract"
          ]
        },
        {
          name: "Wallet",
          about: {
            en: "Cryptocurrency wallet for Ethereum and ERC-20 tokens.",
            ru: "Криптокошелёк для Ethereum и токенов ERC-20."
          },
          highlights: [
            {
              en: "Designed and implemented the data collector for gas prices and price indexes.",
              ru: "Спроектировал и реализовал сборщик данных о стоимости газа и ценовых индексах."
            },
            {
              en: "Set up Ethereum integration through own nodes and third-party providers such as Infura.",
              ru: "Настроил интеграцию с Ethereum через собственные ноды и сторонних провайдеров, например Infura."
            }
          ],
          stack: ["Go", "Redis", "Docker", "AWS", "Ethereum", "JSON-RPC", "JavaScript"]
        }
      ]
    },
    {
      company: "KIT SYSTEMS",
      role: { en: "Lead Software Development Engineer", ru: "Ведущий разработчик" },
      start: "2018-07",
      end: "2019-04",
      projects: [
        {
          about: {
            en: "Drilling report management system, CRM, and web applications and landing pages for a digital agency.",
            ru: "Система управления буровыми отчётами, CRM, веб-приложения и лендинги для digital-агентства."
          },
          highlights: [
            {
              en: "Led 2 projects from customer negotiations to release, supervising a team of 5 developers.",
              ru: "Провёл 2 проекта от переговоров с заказчиком до релиза, руководил командой из 5 разработчиков."
            },
            {
              en: "Defined technical scope with clients and proposed solutions for their business challenges.",
              ru: "Формировал техническое задание с клиентами и предлагал решения их бизнес-задач."
            }
          ],
          stack: [
            "Ruby on Rails",
            "Stimulus",
            "Go",
            "Python",
            "Vue.js",
            "PHP / Laravel",
            "MySQL",
            "PostgreSQL",
            "Tailwind CSS",
            "Docker"
          ]
        }
      ]
    },
    {
      company: "ENTROPY",
      role: { en: "Software Development Engineer", ru: "Разработчик" },
      start: "2017-05",
      end: "2018-07",
      projects: [
        {
          about: {
            en: "Online vehicle registration for the e-Government of Kazakhstan: all legal procedures done online.",
            ru: "Онлайн-регистрация транспортных средств для электронного правительства Казахстана."
          },
          highlights: [
            {
              en: "Built all underlying microservices with gRPC for server-to-server communication.",
              ru: "Разработал все базовые микросервисы с межсервисным взаимодействием на gRPC."
            },
            {
              en: "Implemented integration with the e-Government private service bus.",
              ru: "Реализовал интеграцию с частной шиной электронного правительства."
            }
          ],
          stack: ["Go", "Python", "Django", "Java", "gRPC", "CockroachDB"]
        }
      ]
    },
    {
      company: "PRIMESOURCE",
      role: { en: "Lead Integration Engineer", ru: "Ведущий инженер по интеграции" },
      start: "2014-09",
      end: "2017-05",
      projects: [
        {
          about: {
            en: "Anti-money laundering system deployed in over 80% of banks in Kazakhstan.",
            ru: "Система противодействия отмыванию денег, внедрённая более чем в 80% банков Казахстана."
          },
          highlights: [
            {
              en: "Grew from support engineer to head of support for the AML product, then to lead integration engineer.",
              ru: "Вырос от инженера до руководителя поддержки продукта, затем — ведущий инженер по интеграции."
            },
            {
              en: "On the vendor side, led integration of the AML product into new client banks and their banking systems.",
              ru: "Со стороны вендора руководил внедрением продукта в новых банках и интеграцией с их системами."
            },
            {
              en: "Increased throughput of the internal services that accept bank transactions.",
              ru: "Увеличил пропускную способность сервисов приёма банковских транзакций."
            }
          ],
          stack: ["C#", "PHP", "Oracle", "SOAP"]
        }
      ]
    }
  ],

  education: [
    {
      degree: {
        en: "Master's degree in Information Systems",
        ru: "Магистратура, информационные системы"
      },
      school: {
        en: "International Information Technology University",
        ru: "Международный университет информационных технологий"
      },
      start: 2016,
      end: 2018
    },
    {
      degree: {
        en: "Bachelor's degree in Information Systems",
        ru: "Бакалавриат, информационные системы"
      },
      school: {
        en: "International Information Technology University",
        ru: "Международный университет информационных технологий"
      },
      start: 2010,
      end: 2014
    }
  ]
}
