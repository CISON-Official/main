const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    show: (i = 0) => ({
        opacity: 1,
        transition: { duration: 0.5, delay: i * 0.1 },
        git ease: [0.25, 0.25, 0.25, 0.75] as const,
    }),
};

export { fadeUp, fadeIn };