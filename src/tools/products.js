const productos = [
    
    {
        id: 1,
        title: "iPhone 14 Pro Max Black Night 128GB",
        description: "El iPhone 14 Pro Max te permite captar detalles increíbles gracias a su cámara gran angular de 48 MP. Además, trae la Dynamic Island y una pantalla siempre activa, para que puedas interactuar con tu iPhone de una forma completamente nueva. Y viene con Detección de Choques, una funcionalidad de seguridad que pide ayuda cuando no estás en condiciones de hacerlo.",
        stock: 41,
        type: "iPhone",
        imageProduct: {
            firtsImage: "https://thegoodguys.sirv.com/products/50082931/50082931_829949.PNG?scale.height=505&scale.width=773&canvas.height=505&canvas.width=773&canvas.opacity=0&q=90",
        },
        price: 6800000,
    },

    {
        id: 2,
        title: "Cable de poder Apple Watch",
        description: "La última versión de la icónica serie GAMING de MSI ofrece una vez más el rendimiento, la eficiencia con bajo nivel de ruido y la estética que los jugadores incondicionales reconocen y confían. Ahora usted también puede disfrutar de todos sus juegos favoritos con una potente tarjeta gráfica que se mantiene fría y silenciosa. Justo como te gusta.",
        stock: 9,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/files/ol_jpg_6c7214e3-358e-4a5b-bda0-a6a43bc080ef_550x.jpg?v=1659421843",
        },
        price: 120000,
    },

    {
        id: 3,
        title: "Aipods 3th Generación con estuche MagSafe",
        description: "Los AirPods te brindan una experiencia inalámbrica inigualable, con un sonido de alta calidad. Gracias al estuche de carga inalámbrica, sólo tienes que poner los audífonos sobre una base de carga para cargar su batería. Los AirPods están listos para funcionar con todos tus dispositivos. Póntelos y se conectarán al instante, como por arte de magia.",
        stock: 30,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-5657461.jpg?v=1660446180",
        },
        price: 1080000,
    },

  
    {
        id: 4,
        title: "Apple Watch Ultra GPS + GSM",
        description: "Llegó el Apple Watch más fuerte y equipado que existe. Diseñado para la exploración, la aventura y los deportes de resistencia. Con una caja de 49 mm fabricada con titanio de calidad aeroespacial, batería para varios días, apps especializadas que trabajan en equipo con los sensores avanzados y un nuevo Botón de Acción personalizable.",
        stock: 10,
        type: "Watch",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-7324824_f473dcca-6825-4f6a-a519-91387ac0871a_1100x.jpg?v=1663064742",
        },
        price: 4380000,      
    },

    {
        id: 5,
        title: "iPhone 11 4G 128GB Multicolor",
        description: "Clasificación IP68 de resistencia al agua y al polvo (hasta 30 minutos a una profundidad máxima de 2 metros)Sistema de dos cámaras de 12 MP (ultra gran angular y gran angular) con modo Noche, modo Retrato y video 4K de hasta 60 cps Cámara frontal TrueDepth de 12 MP con modo Retrato, video 4K y video en cámara lenta Face ID para una autenticación segura Chip A13 Bionic con Neural Engine de tercera generación Carga rápida Carga inalámbrica iOS 15.",
        stock: 12,
        type: "iPhone",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-111573_1100x.jpg?v=1658314353",
        },
        price: 2399000,      
    },

   
    {
        id: 6,
        title: "iPhone 13 Pro 128GB Green 5G",
        description: "Una pantalla Super Retina XDR con ProMotion que ofrece una experiencia rápida y fluida. Un gran avance en el sistema de cámaras que te brinda posibilidades increíbles. Un diseño con una resistencia excepcional. Chip A15 Bionic ultrarrápido. Y una extraordinaria duración de la batería. Saca tu lado Pro.",
        stock: 7,
        type: "iPhone",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6376550.jpg?v=1660429644",
        },
        price: 5100000,      
    },

    {
        id: 7,
        title: "MacBook Air 13 Pulgadas Chip M1",
        description: "Los chips de Apple son fanáticos de la velocidad, y lo notarás en todo lo que hagas. Además, como los Mac portátiles tienen una batería con una duración increíble, puedes pasarte el día trabajando o jugando dondequiera que estés.",
        stock: 32,
        type: "Mac",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-171890_1100x.jpg?v=1660440284"
        },
        price: 5400000,      
    },

    //fuentes
    {
        id: 8,
        title: "Apple Watch Serie 8 41mm Multicolor",
        description: "El Apple Watch Series 8 viene con apps y sensores de salud avanzados con los que puedes hacerte un electrocardiograma, medir tu frecuencia cardiaca y nivel de oxígeno en sangre, y registrar cambios de temperatura para obtener información relevante sobre tu ciclo menstrual. Además, incluye Detección de Choques, datos sobre las fases del sueño y métricas avanzadas de entrenamiento para ayudarte a llevar una vida más activa, saludable, segura y conectada.",
        stock: 18,
        type: "Watch",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-7315205_1100x.jpg?v=1663056464",
        },
        price: 2399000,      
    },

    {
        id: 9,
        title: "Magic Mouse 2 inalámbrico recargable",
        description: "El Magic Mouse es inalámbrico y recargable, con una nueva base que se desliza perfectamente sobre el escritorio. Y con la superficie Multi‑Touch podrás hacer gestos sencillos, como pasar de una web a otra o desplazarte por tus documentos.",
        stock: 27,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6203625_1100x.png?v=1660449473",
        },
        price: 459000,      
    },

    {
        id: 10,
        title: "Apple TV 4K (2th gereación)",
        description:"Chip A12 Bionic para disfrutar los juegos y las apps como nunca antes gracias a un gran salto en la calidad de audio, video y gráficas 4K HDR con alta frecuencia de cuadros y Dolby Vision para ver videos más nítidos y fluidos Series y películas Apple Originals de Apple TV+",
        stock: 19,
        type: "Accesorios",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6403548.jpg?v=1660446432",
        },
        price: 950000,      
    },

    {
        id: 11,
        title: "MacBook Pro 16 pulgadas M2 Pro y Max",
        description:"El MacBook Pro de 16 pulgadas con los chips M2 Pro y M2 Max alcanza una potencia y una velocidad sin precedentes, incluso cuando no está conectado a la corriente. Tiene una espectacular pantalla Liquid Retina XDR, todos los puertos que necesitas y una batería que te acompaña todo el día.1 Este portátil está listo para salir a comerse el mundo.",
        stock: 11,
        type: "Mac",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-8295185_0a9a60b3-1ed9-43ff-8ef4-e7d13b3bb672.jpg?v=1674031897",
        },
        price: 22740000,      
    },

    {
        id: 12,
        title: "iPhone 12 Pro 128GB 5G Blue",
        description:" Diseño resistente con Ceramic Shield Chip A14 Bionic Sistema avanzado de dos cámaras de 12 MP (ultra gran angular y gran angular), modo Noche, Deep Fusion, HDR Inteligente 3 y grabación de video 4K HDR en Dolby Vision Cámara frontal TrueDepth de 12 MP con modo Noche y grabación de video 4K HDR en Dolby Vision", 
        stock: 8,
        type: "iPhone",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6590263.jpg?v=1660431361",
        },
        price: 4169000,      
    },

    {
        id: 13,
        title: "Mac mini M2 Pro y M2 Max",
        description:"El Mac mini te permite realizar varias tareas a una velocidad vertiginosa. El chip M2 parece que vuela cuando disfrutas juegos inmersivos o preparas presentaciones complejas. Y su amplia variedad de puertos le da la versatilidad para conectarle lo que necesites. El Mac mini está listo para lo que le pidas.",
        stock: 7,
        type: "Mac",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-8294195.jpg?v=1674030941",
        },
        price: 5289000,      
    },

    {
        id: 14,
        title: "Apple Watch serie 7 45mm GPS + Cellular",
        description:"Pantalla Retina siempre activa casi un 20 más grande que la del Series 6, para que todo se vea increíble y sea más fácil de usar, El cristal frontal más resistente a los golpes en un Apple Watch, certificación IP6X de resistencia al polvo, diseñado para nadar",
        stock: 13,
        type: "Watch",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-6338932.jpg?v=1660443112",
        },
        price: 1889000,      
    },

    {
        id: 15,
        title: "iMac 4,5K de 24 pulgadas chip M1",
        description:"Envolvente pantalla Retina 4.5K de 24 pulgadas con una amplia gama de colores P3 y 500 nits de brillo, Chip M1: un rendimiento increíble con CPU de 8 núcleos y GPU de 7 u 8 núcleos Colores espectaculares y diseño ultradelgado de tan sólo 11,5 mm de grosor Cámara FaceTime HD de 1080p con ISP en el chip M1 para lograr una calidad de video asombrosa",
        stock: 27,
        type: "Mac",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-5342040_1100x.jpg?v=1658325011",
        },
        price: 6529000,      
    },

    {
        id: 16,
        title: "Apple Watch SE (GPS) de 40 mm", 
        description:"Tiene las funcionalidades esenciales para ayudarte a llevar una vida más activa, saludable, segura y conectada. Recibe llamadas y responde mensajes desde tu muñeca Hasta un 20% más rápido que el Apple Watch SE anterior Funcionalidades de seguridad avanzadas como Detección de Caídas, Emergencia SOS y Detección de Choques ", 
        stock: 7,
        type: "Watch",
        imageProduct: {
            firtsImage: "https://cdn.shopify.com/s/files/1/0604/8373/1606/products/IMG-7324338_1100x.jpg?v=1663054104",
        },
        price: 1499000,      
    },
]

export default productos;
