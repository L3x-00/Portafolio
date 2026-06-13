import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug:    'policlinico-san-pedro',
    title:   'Policlínico San Pedro',
    year:    '2025',
    // ✅ Nombres exactos basados en tus archivos SVG (ej. php-color.svg -> 'php')
    tags:    ['php', 'javascript', 'css', 'bootstrap', 'mysql', 'apache'],
    description:'Sistema web multiplataforma integral para la gestión automatizada de pacientes, programación de citas en tiempo real e historias clínicas ambulatorias.',
    longDesc: 'Una plataforma médica digital diseñada para optimizar los flujos de trabajo clínicos y administrativos. El sistema centraliza la gestión del paciente desde el triaje automático hasta la consulta médica mediante fichas digitales interactivas que replican historias clínicas físicas. Incluye un módulo de analítica visual con gráficos interactivos dinámicos de atención diaria y comparativa de rendimiento, un motor de reserva y reprogramación de citas desacoplado mediante JavaScript/AJAX para mejorar la experiencia de usuario (UX), y un formato estandarizado y optimizado para impresión de reportes médicos.',
    image: '/images/sanpedro.jpg',
    url:     'https://github.com/L3x-00/San-Pedro',
    featured: true,
  },
 {
    slug:        'xtreme-performance',
    title:       'Xtreme Performance',
    year:        '2026',
    // ✅ Nombres exactos basados en tus archivos SVG
    tags:        ['php', 'javascript', 'css', 'html', 'apache', 'mysql'],
    description: 'Sistema web empresarial para la gestión operativa de talleres automotrices y servicios técnicos.',
    longDesc:    'Plataforma orientada a la digitalización de procesos operativos en talleres automotrices, incluyendo la gestión de órdenes de servicio, seguimiento de trabajos técnicos y administración de usuarios. Mi participación se centró en actividades de pruebas funcionales (QA), validación de flujos de negocio y evaluación de la experiencia de usuario desde la perspectiva del cliente final. Colaboré en la identificación de incidencias, verificación de requisitos funcionales y retroalimentación para la mejora de procesos y usabilidad del sistema.',
    image:       '/images/xtreme.png',
    url:         'https://xtremeperformancepe.com/',
    featured:    true,
  },
  {
    slug:        'servi-app',
    title:       'Servi - Marketplace de Servicios',
    year:        '2026',
    // ✅ Nombres exactos basados en tus archivos SVG (nextdotjs, socketdotio, etc.)
    tags:        ['flutter', 'nextdotjs', 'postgresql', 'supabase', 'redis', 'socketdotio', 'google-maps', 'mercado-pago', 'firebase'],
    description: 'Plataforma líder para conectar profesionales y negocios locales con clientes en tiempo real.',
    longDesc: 'OficioApp es un marketplace de servicios diseñado para el mercado peruano. Cuenta con un sistema avanzado de geolocalización, búsqueda inteligente por categorías (modelo jerárquico Padre-Hijo) y conexión directa vía WhatsApp API. El sistema incluye un panel administrativo para la gestión de proveedores, análisis de métricas en tiempo real y optimización de base de datos relacional para escalabilidad nacional.',
    image:       '/images/servi.png',
    url:         'https://oficioapp.org.pe/',
    featured:    true,
  },
];