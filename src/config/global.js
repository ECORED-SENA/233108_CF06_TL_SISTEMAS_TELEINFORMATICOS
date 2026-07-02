export default {
  global: {
    Name: 'Conectividad de las redes en las organizaciones',
    Description:
      'En este componente se abordan los conceptos de conectividad de una red de datos, cómo se hace detección de fallas sobre la red de acceso y cómo se desarrollan los procesos de gestión.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Red de computación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Identificar el estado de la conectividad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Protocolos de infraestructura',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Detección de fallas en la operación de la red',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Redes de acceso',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de la red de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Gestión de inventarios de los elementos de la red',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Documentación de configuración de la red',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/233108_CF06_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'AAA',
      significado: 'listas de control de acceso.',
    },
    {
      termino: 'CMOS',
      significado:
        ' Complementary Metal-Oxide-Semiconductor. Semiconductor complementario de óxido metálico.',
    },
    {
      termino: 'CPU',
      significado: 'unidad central de procesamiento.',
    },
    {
      termino: 'DIMM',
      significado: ' módulo de memoria dual en línea.',
    },
    {
      termino: 'ENIAC',
      significado:
        ' Electronic Numerical Integrator and Computer. Primer computador programable a gran escala.',
    },
    {
      termino: 'GNU',
      significado: ' General Public License. Licencia Pública General de GNU.',
    },
    {
      termino: 'DVI',
      significado:
        ' Digital Video Interface. Puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'LCD',
      significado: 'pantalla de cristal líquido.',
    },
    {
      termino: 'HDMI',
      significado:
        ' High-Definition Multimedia Interface. Puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'ITIL',
      significado: ' Information Technology Infrastructure Library.',
    },
    {
      termino: 'ITSM',
      significado: 'gestión de servicios de TI.',
    },
    {
      termino: 'RAM',
      significado: 'memoria de acceso aleatorio.',
    },
    {
      termino: 'SO',
      significado: 'sistema operativo.',
    },
    {
      termino: 'TDS',
      significado: 'hoja de datos técnicos.',
    },
    {
      termino: 'VGA',
      significado:
        ' Video Graphics Array. Puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'USB',
      significado:
        ' Universal Serial Bus. Puerto de conexión serial de los computadores.',
    },
  ],
  referencias: [
    {
      referencia:
        'Liu, F., Liu, J., Yin, Y., Wang, W., Hu, D., Chen, P., & Niu, Q. (2020). Survey on WiFi-based indoor positioning techniques. <em>IET communications</em>, 14(9), 1372-1383.',
      link: '',
    },
    {
      referencia:
        "Sloan, J. D. (2001). <em>Network Troubleshooting Tools: Help for Network Administrators</em>. O'Reilly Media, Inc.",
      link: '',
    },
    {
      referencia:
        "West, J. (2022). <em>Data Communication and Computer Networks: A Business User's Approach</em>. Cengage Learning.",
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joaquín Fernando Sánchez',
          cargo: 'Experto temático',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Maribel Avellaneda Nieves',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro de la industria, la empresa y los servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador instruccional',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Centro de gestión de mercados, Logística y Tecnologías de la información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zárate Saavedra',
          cargo: 'Diseñador web',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador <i>fullstack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Eulises Orduz Amézquita',
          cargo: 'Diseñador web',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>fullstack</i>',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y producción audiovisual',
          centro:
            'Centro de gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
