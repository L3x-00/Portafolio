import type { Project } from '../types';

export const projects: Project[] = [
  {
    slug:    'policlinico-san-pedro',
    title:   'Policlínico San Pedro',
    year:    '2025',
    tags:    ['Laravel', 'PHP', 'JavaScript', 'Bootstrap', 'Blade', 'MySQL'],
    description:'Sistema web multiplataforma integral para la gestión automatizada de pacientes, programación de citas en tiempo real e historias clínicas ambulatorias.',
    longDesc: 'Una plataforma médica digital diseñada para optimizar los flujos de trabajo clínicos y administrativos. El sistema centraliza la gestión del paciente desde el triaje automático hasta la consulta médica mediante fichas digitales interactivas que replican historias clínicas físicas. Incluye un módulo de analítica visual con gráficos interactivos dinámicos de atención diaria y comparativa de rendimiento, un motor de reserva y reprogramación de citas desacoplado mediante JavaScript/AJAX para mejorar la experiencia de usuario (UX), y un formato estandarizado y optimizado para impresión de reportes médicos.',
    image:   'public/images/sanpedro.jpg',
    url:     'https://github.com/L3x-00/San-Pedro',
    featured: true,
  },
  {
    slug:        'xtreme-performance',
    title:       'Xtreme Performance',
    year:        '2026',
    tags:        ['PHP', 'JavaScript', 'CSS', 'HTML', 'Apache', 'MySQL'],
    description: 'Sistema web multiplataforma para la automatización de órdenes de servicio, gestión de personal técnico y auditoría automatizada de facturación.',
    longDesc:    'Solución de software empresarial orientada al sector automotriz y de servicios técnicos que digitaliza el control operativo del taller. El sistema implementa un control de acceso basado en roles (RBAC) incluyendo perfiles específicos para mecánicos, y cuenta con un módulo avanzado de auditoría mediante herramientas de diagnóstico de facturas. Diseñado con un enfoque en arquitectura segura (.htaccess optimizado), incluye integración de un chatbot asistente vía API, un motor de búsqueda y validación de datos en tiempo real para el seguimiento de tareas operativas, y una interfaz adaptativa con soporte nativo para modo oscuro optimizado para alta visibilidad.',
    image:       'public/images/xtreme.png', // Imagen profesional de taller/tecnología automotriz
    url:         'https://xtremeperformancepe.com/',
    featured:    true,
  },
  {
    slug:        'servi-app',
    title:       'Servi - Marketplace de Servicios',
    year:        '2026',
    tags:        ['Flutter', 'NestJS', 'Next.js', 'PostgreSQL', 'Supabase', 'Redis', 'Socket.io', 'Google Maps/OSM API', 'MercadoPago', 'Firebase'],
    description: 'Plataforma líder para conectar profesionales y negocios locales con clientes en tiempo real.',
    longDesc: 'OficioApp es un marketplace de servicios diseñado para el mercado peruano. Cuenta con un sistema avanzado de geolocalización, búsqueda inteligente por categorías (modelo jerárquico Padre-Hijo) y conexión directa vía WhatsApp API. El sistema incluye un panel administrativo para la gestión de proveedores, análisis de métricas en tiempo real y optimización de base de datos relacional para escalabilidad nacional.',
    image:       'public/images/servi.png', // Imagen profesional de marketplace de servicios
    url:         'https://oficioapp.org.pe/',
    featured:    true,
  },
];