particlesJS("stars-js", {
    particles: {
        number: {
            value: 120, // Ajusta más o menos cantidad
            density: { enable: true, value_area: 1000 },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
            value: 0.9,
            random: true,
            anim: {
                enable: true,
                speed: 0.0002,
                opacity_min: 0.0002,
                sync: false,
            },
        },
        size: {
            value: 1.5,
            random: true,
        },
        line_linked: {
            enable: false, // No líneas entre puntos
        },
        move: {
            enable: true, // No movimiento
            speed: 0.008,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true,
        },
    },
    retina_detect: true,
});

particlesJS("stars-js2", {
    particles: {
        number: {
            value: 50, // Ajusta más o menos cantidad
            density: { enable: true, value_area: 1000 },
        },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
            value: 1,
            random: false,
            anim: {
                enable: false,
                speed: 0.0002,
                opacity_min: 0.0002,
                sync: false,
            },
        },
        size: {
            value: 1,
            random: false,
        },
        line_linked: {
            enable: false, // No líneas entre puntos
        },
        move: {
            enable: true, // No movimiento
            speed: 0.1,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true,
        },
    },
    retina_detect: true,
});