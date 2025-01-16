const POINT = {
    RED: [
        { x: 0, y: 0, z: 0 },

    ],

    BLUE: [
        { x: 0, y: 0, z: 0 },

    ],

    LAUNCHING_BASE: {
        // Face to x between z.
        ONE: { x: -15, y: 0, z: 25 },
        TWO: { x: -11, y: 0, z: 21 },
        THREE: { x: -7, y: 0, z: 17 },
        FOUR: { x: -3, y: 0, z: 13 },
        FIVE: { x: 1, y: 0, z: 9 },
        SIX: { x: 5, y: 0, z: 5 },
        SEVEN: { x: 9, y: 0, z: 1 },
        EIGHT: { x: 13, y: 0, z: -3 },
        NINE: { x: 17, y: 0, z: -7 },
        TEN: { x: 21, y: 0, z: -11 },
        ELEVEN: { x: 25, y: 0, z: -15 },

        // Face to z.
        // ONE: { x: -20, y: 0, z: 7 },
        // TWO: { x: -16, y: 0, z: 7 },
        // THREE: { x: -12, y: 0, z: 7 },
        // FOUR: { x: -8, y: 0, z: 7 },
        // FIVE: { x: -4, y: 0, z: 7 },
        // SIX: { x: 0, y: 0, z: 7 },
        // SEVEN: { x: 4, y: 0, z: 7 },
        // EIGHT: { x: 8, y: 0, z: 7 },
        // NINE: { x: 12, y: 0, z: 7 },
        // TEN: { x: 16, y: 0, z: 7 },
        // ELEVEN: { x: 20, y: 0, z: 7 },
    },

    LAUNCHING_OFFSET: {
        LOWEST: { x: 0, y: 11, z: 0 },
        LOW: { x: 0, y: 12, z: 0 },
        MEDIUM: { x: 0, y: 13, z: 0 },
        HIGH: { x: 0, y: 14, z: 0 },
        HIGHEST: { x: 0, y: 15, z: 0 }
    },

    EXPLOSION_OFFSET: {
        TEST: [
            { x: 0.00, y: 12.5, z: 0.00 },
            { x: 12.00, y: 12.5, z: 0.00 },
        ],

        BURST: [
            // origin.
            { x: 0.00, y: 12.5, z: 0.00 },

            // pole.
            { x: 0.00, y: 17.50, z: 0.00 },
            { x: 0.00, y: 7.50, z: 0.00 },

            // 90.
            { x: 0, y: 16.83, z: 2.5 },
            { x: 0.00, y: 16.83, z: -2.50 },
            { x: 2.5, y: 16.83, z: 0 },
            { x: -2.5, y: 16.83, z: 0 },

            { x: 0, y: 8.17, z: 2.5 },
            { x: 0.00, y: 8.17, z: -2.50 },
            { x: 2.5, y: 8.17, z: 0 },
            { x: -2.5, y: 8.17, z: 0 },

            // 45.
            { x: 0.00, y: 15.00, z: 4.33 },
            { x: 3.1, y: 15.00, z: 3.1 },
            { x: -3.1, y: 15.00, z: 3.1 },
            { x: 4.3, y: 15.00, z: 0 },
            { x: -4.3, y: 15.00, z: 0 },
            { x: 3.1, y: 15.00, z: -3.1 },
            { x: -3.1, y: 15.00, z: -3.1 },
            { x: 0.00, y: 15.00, z: -4.33 },

            { x: 0.00, y: 10.0, z: 4.33 },
            { x: 3.1, y: 10.0, z: 3.1 },
            { x: -3.1, y: 10.0, z: 3.1 },
            { x: 4.3, y: 10.0, z: 0 },
            { x: -4.3, y: 10.0, z: 0 },
            { x: 3.1, y: 10.0, z: -3.1 },
            { x: -3.1, y: 10.0, z: -3.1 },
            { x: 0.00, y: 10.0, z: -4.33 },

            // 30.
            { x: 5.00, y: 12.5, z: 0.00 },
            { x: 4.33, y: 12.5, z: 2.50 },
            { x: 2.50, y: 12.5, z: 4.33 },
            { x: 0.00, y: 12.5, z: 5.00 },
            { x: -2.50, y: 12.5, z: 4.33 },
            { x: -4.33, y: 12.5, z: 2.50 },
            { x: -5.00, y: 12.5, z: 0.00 },
            { x: -4.33, y: 12.5, z: -2.50 },
            { x: -2.50, y: 12.5, z: -4.33 },
            { x: 0.00, y: 12.5, z: -5.00 },
            { x: 2.50, y: 12.5, z: -4.33 },
            { x: 4.33, y: 12.5, z: -2.50 },
        ],
        ERUPT: [
            { x: 0.5, y: 22, z: 0 }, // 0°
            { x: -0.2, y: 22, z: 0.4 }, // 120°
            { x: -0.2, y: 22, z: -0.4 }, // 240°

            { x: 1.97, y: 20, z: 0.35 }, // 10°
            { x: 0.69, y: 20, z: 1.88 }, // 70°
            { x: -1.28, y: 20, z: 1.53 }, // 130°
            { x: -0.69, y: 20, z: -1.88 }, // 250°
            { x: -1.97, y: 20, z: -0.35 }, // 190°
            { x: 1.28, y: 20, z: -1.53 }, // 310°
            { x: 0, y: 20, z: 0 },

            { x: 0, y: 18, z: 0 }, // 0
            { x: 1.50, y: 18, z: 0.13 }, // 5°
            { x: -0.13, y: 18, z: 1.50 }, // 95°
            { x: -1.50, y: 18, z: -0.13 }, // 185°
            { x: 0.13, y: 18, z: -1.50 }, // 275°

            { x: 0.5, y: 16, z: 0 }, // 0°
            { x: -0.2, y: 16, z: 0.4 }, // 120°
            { x: -0.2, y: 16, z: -0.4 }, // 240°

            { x: 0, y: 14, z: 0 }, // 0
        ],
        BLOOM: [
            // 60.
            { x: 9, y: 16, z: 6 },
            { x: 9, y: 15.5, z: 5.5 },
            { x: 8.5, y: 15.5, z: 5.5 },
            { x: 7, y: 14, z: 4 },
            { x: 7, y: 13.5, z: 3.5 },
            { x: 6.5, y: 13.5, z: 3.5 },

            // 150.
            { x: 6, y: 16, z: -9 },
            { x: 5.5, y: 15.5, z: -9 },
            { x: 5.5, y: 15.5, z: -8.5 },
            { x: 4, y: 14, z: -7 },
            { x: 3.5, y: 13.5, z: -7 },
            { x: 3.5, y: 13.5, z: -6.5 },

            // 240.
            { x: -9, y: 16, z: -6 },
            { x: -9, y: 15.5, z: -5.5 },
            { x: -8.5, y: 15.5, z: -5.5 },
            { x: -7, y: 14, z: -4 },
            { x: -7, y: 13.5, z: -3.5 },
            { x: -6.5, y: 13.5, z: -3.5 },

            // 330.
            { x: -6, y: 16, z: 9 },
            { x: -5.5, y: 15.5, z: 9 },
            { x: -5.5, y: 15.5, z: 8.5 },
            { x: -4, y: 14, z: 7 },
            { x: -3.5, y: 13.5, z: 7 },
            { x: -3.5, y: 13.5, z: 6.5 },
        ],
        HUGE_BURST: [
            // // origin.
            // { x: 0.00, y: 25.00, z: 0.00 },

            // // pole.
            // { x: 0.00, y: 35.00, z: 0.00 },
            // { x: 0.00, y: 15.00, z: 0.00 },

            // // 90.
            // { x: 0, y: 33.66, z: 5.00 },
            // { x: 0.00, y: 33.66, z: -5.00 },
            // { x: 5.00, y: 33.66, z: 0 },
            // { x: -5.00, y: 33.66, z: 0 },

            // { x: 0, y: 16.34, z: 5.00 },
            // { x: 0.00, y: 16.34, z: -5.00 },
            // { x: 5.00, y: 16.34, z: 0 },
            // { x: -5.00, y: 16.34, z: 0 },

            // // 45.
            // { x: 0.00, y: 30.00, z: 8.66 },
            // { x: 6.20, y: 30.00, z: 6.20 },
            // { x: -6.20, y: 30.00, z: 6.20 },
            // { x: 8.60, y: 30.00, z: 0 },
            // { x: -8.60, y: 30.00, z: 0 },
            // { x: 6.20, y: 30.00, z: -6.20 },
            // { x: -6.20, y: 30.00, z: -6.20 },
            // { x: 0.00, y: 30.00, z: -8.66 },

            // { x: 0.00, y: 20.00, z: 8.66 },
            // { x: 6.20, y: 20.00, z: 6.20 },
            // { x: -6.20, y: 20.00, z: 6.20 },
            // { x: 8.60, y: 20.00, z: 0 },
            // { x: -8.60, y: 20.00, z: 0 },
            // { x: 6.20, y: 20.00, z: -6.20 },
            // { x: -6.20, y: 20.00, z: -6.20 },
            // { x: 0.00, y: 20.00, z: -8.66 },

            // // 30.
            // { x: 10.00, y: 25.00, z: 0.00 },
            // { x: 8.66, y: 25.00, z: 5.00 },
            // { x: 5.00, y: 25.00, z: 8.66 },
            // { x: 0.00, y: 25.00, z: 10.00 },
            // { x: -5.00, y: 25.00, z: 8.66 },
            // { x: -8.66, y: 25.00, z: 5.00 },
            // { x: -10.00, y: 25.00, z: 0.00 },
            // { x: -8.66, y: 25.00, z: -5.00 },
            // { x: -5.00, y: 25.00, z: -8.66 },
            // { x: 0.00, y: 25.00, z: -10.00 },
            // { x: 5.00, y: 25.00, z: -8.66 },
            // { x: 8.66, y: 25.00, z: -5.00 },
            // origin.
            { x: 0.00, y: 25.00, z: 0.00 },

            // pole.
            { x: 0.00, y: 35.00, z: 0.00 },
            { x: 0.00, y: 15.00, z: 0.00 },

            // 90.
            { x: 0, y: 33.66, z: 5.00 },
            { x: 0.00, y: 33.66, z: -5.00 },
            { x: 5.00, y: 33.66, z: 0 },
            { x: -5.00, y: 33.66, z: 0 },
            //
            { x: 0, y: 33.16, z: 4.5 },
            { x: 0.00, y: 33.16, z: -4.5 },
            { x: 4.5, y: 33.16, z: 0 },
            { x: -4.5, y: 33.16, z: 0 },

            { x: 0, y: 16.34, z: 5.00 },
            { x: 0.00, y: 16.34, z: -5.00 },
            { x: 5.00, y: 16.34, z: 0 },
            { x: -5.00, y: 16.34, z: 0 },
            //
            { x: 0, y: 15.84, z: 4.5 },
            { x: 0.00, y: 15.84, z: -4.5 },
            { x: 4.5, y: 15.84, z: 0 },
            { x: -4.5, y: 15.84, z: 0 },

            // 45.
            { x: 0.00, y: 30.00, z: 8.66 },
            { x: 6.20, y: 30.00, z: 6.20 },
            { x: -6.20, y: 30.00, z: 6.20 },
            { x: 8.60, y: 30.00, z: 0 },
            { x: -8.60, y: 30.00, z: 0 },
            { x: 6.20, y: 30.00, z: -6.20 },
            { x: -6.20, y: 30.00, z: -6.20 },
            { x: 0.00, y: 30.00, z: -8.66 },
            //
            { x: 0.00, y: 29.5, z: 8.16 },
            { x: 5.7, y: 29.5, z: 5.7 },
            { x: -5.70, y: 29.5, z: 5.7 },
            { x: 8.1, y: 29.5, z: 0 },
            { x: -8.1, y: 29.5, z: 0 },
            { x: 5.7, y: 29.5, z: -5.7 },
            { x: -5.7, y: 29.5, z: -5.7 },
            { x: 0.00, y: 29.5, z: -8.16 },

            { x: 0.00, y: 20.00, z: 8.66 },
            { x: 6.20, y: 20.00, z: 6.20 },
            { x: -6.20, y: 20.00, z: 6.20 },
            { x: 8.60, y: 20.00, z: 0 },
            { x: -8.60, y: 20.00, z: 0 },
            { x: 6.20, y: 20.00, z: -6.20 },
            { x: -6.20, y: 20.00, z: -6.20 },
            { x: 0.00, y: 20.00, z: -8.66 },
            //
            { x: 0.00, y: 19.5, z: 8.16 },
            { x: 5.70, y: 19.5, z: 5.70 },
            { x: -5.70, y: 19.5, z: 5.70 },
            { x: 8.16, y: 19.5, z: 0 },
            { x: -8.1, y: 19.5, z: 0 },
            { x: 5.7, y: 19.5, z: -5.7 },
            { x: -5.7, y: 19.5, z: -5.7 },
            { x: 0.00, y: 19.5, z: -8.16 },

            // 30.
            { x: 10.00, y: 25.00, z: 0.00 },
            { x: 8.66, y: 25.00, z: 5.00 },
            { x: 5.00, y: 25.00, z: 8.66 },
            { x: 0.00, y: 25.00, z: 10.00 },
            { x: -5.00, y: 25.00, z: 8.66 },
            { x: -8.66, y: 25.00, z: 5.00 },
            { x: -10.00, y: 25.00, z: 0.00 },
            { x: -8.66, y: 25.00, z: -5.00 },
            { x: -5.00, y: 25.00, z: -8.66 },
            { x: 0.00, y: 25.00, z: -10.00 },
            { x: 5.00, y: 25.00, z: -8.66 },
            { x: 8.66, y: 25.00, z: -5.00 },
            //
            { x: 9.5, y: 25.5, z: 0.00 },
            { x: 8.16, y: 25.5, z: 4.5 },
            { x: 4.5, y: 25.5, z: 8.16 },
            { x: 0.00, y: 25.5, z: 9.5 },
            { x: -4.5, y: 25.5, z: 8.16 },
            { x: -8.16, y: 25.5, z: 4.5 },
            { x: -9.5, y: 25.5, z: 0.00 },
            { x: -8.16, y: 25.5, z: -4.5 },
            { x: -4.50, y: 25.5, z: -8.16 },
            { x: 0.00, y: 25.5, z: -9.5 },
            { x: 4.5, y: 25.5, z: -8.16 },
            { x: 8.16, y: 25.5, z: -4.5 },
            //
            { x: 9.5, y: 24.5, z: 0.00 },
            { x: 8.16, y: 24.5, z: 4.5 },
            { x: 4.5, y: 24.5, z: 8.16 },
            { x: 0.00, y: 24.5, z: 9.5 },
            { x: -4.5, y: 24.5, z: 8.16 },
            { x: -8.16, y: 24.5, z: 4.5 },
            { x: -9.5, y: 24.5, z: 0.00 },
            { x: -8.16, y: 24.5, z: -4.5 },
            { x: -4.5, y: 24.5, z: -8.16 },
            { x: 0.00, y: 24.5, z: -9.5 },
            { x: 4.5, y: 24.5, z: -8.16 },
            { x: 8.16, y: 24.5, z: -4.5 },
        ],
        CHAIN_BURST: {
            ORIGIN: [
                { x: 1, y: 2, z: 5 },
                { x: -1, y: 2, z: -4.5 },
                { x: -4.5, y: 2, z: -1 },
                { x: 5, y: 2, z: 1 },
                { x: -4, y: 2, z: 3 },
                { x: 3, y: 2, z: -4 },
            ],
            OFFSET: [
                { x: 0.65, y: 14, z: 2.42 },  // 75°
                { x: -2.35, y: 13, z: 0.86 },  // 160°
                { x: -1.44, y: 13, z: -2.05 }, // 235°
                { x: 1.92, y: 14, z: -1.61 }, // 320°

                { x: 5.00, y: 12, z: 0.00 }, // 0°
                { x: 4.33, y: 11, z: 2.50 }, // 30°
                { x: 2.50, y: 11, z: 4.33 }, // 60°
                { x: 0.00, y: 12, z: 5.00 }, // 90°
                { x: -2.50, y: 12, z: 4.33 }, // 120°
                { x: -4.33, y: 11, z: 2.50 }, // 150°
                { x: -5.00, y: 11, z: 0.00 }, // 180°
                { x: -4.33, y: 12, z: -2.50 }, // 210°
                { x: -2.50, y: 12, z: -4.33 }, // 240°
                { x: -0.00, y: 11, z: -5.00 }, // 270°
                { x: 2.50, y: 11, z: -4.33 }, // 300°
                { x: 4.33, y: 12, z: -2.50 }, // 330°

                { x: 3.50, y: 10, z: 0.00 },  // 0°
                { x: 2.48, y: 9, z: 2.48 },  // 45°
                { x: 0.00, y: 9, z: 3.50 },  // 90°
                { x: -2.48, y: 10, z: 2.48 }, // 135°
                { x: -3.50, y: 10, z: 0.00 }, // 180°
                { x: -2.48, y: 9, z: -2.48 }, // 225°
                { x: 0.00, y: 9, z: -3.50 },  // 270°
                { x: 2.48, y: 10, z: -2.48 }, // 315°
            ],
        },
    }
}

console.log(POINT)

export default POINT

// Back up.
// { x: 10.0, y: 12, z: 0.0 }, // 0°
// { x: 9.96, y: 12, z: 0.87 }, // 5°
// { x: 9.85, y: 12, z: 1.74 }, // 10°
// { x: 9.66, y: 12, z: 2.59 }, // 15°
// { x: 9.4, y: 12, z: 3.42 }, // 20°
// { x: 9.06, y: 12, z: 4.23 }, // 25°
// { x: 8.66, y: 12, z: 5.0 }, // 30°
// { x: 8.19, y: 12, z: 5.74 }, // 35°
// { x: 7.66, y: 12, z: 6.43 }, // 40°
// { x: 7.07, y: 12, z: 7.07 }, // 45°
// { x: 6.43, y: 12, z: 7.66 }, // 50°
// { x: 5.74, y: 12, z: 8.19 }, // 55°
// { x: 5.0, y: 12, z: 8.66 }, // 60°
// { x: 4.23, y: 12, z: 9.06 }, // 65°
// { x: 3.42, y: 12, z: 9.4 }, // 70°
// { x: 2.59, y: 12, z: 9.66 }, // 75°
// { x: 1.74, y: 12, z: 9.85 }, // 80°
// { x: 0.87, y: 12, z: 9.96 }, // 85°
// { x: 0.0, y: 12, z: 10.0 }, // 90°
// { x: -0.87, y: 12, z: 9.96 }, // 95°
// { x: -1.74, y: 12, z: 9.85 }, // 100°
// { x: -2.59, y: 12, z: 9.66 }, // 105°
// { x: -3.42, y: 12, z: 9.4 }, // 110°
// { x: -4.23, y: 12, z: 9.06 }, // 115°
// { x: -5.0, y: 12, z: 8.66 }, // 120°
// { x: -5.74, y: 12, z: 8.19 }, // 125°
// { x: -6.43, y: 12, z: 7.66 }, // 130°
// { x: -7.07, y: 12, z: 7.07 }, // 135°
// { x: -7.66, y: 12, z: 6.43 }, // 140°
// { x: -8.19, y: 12, z: 5.74 }, // 145°
// { x: -8.66, y: 12, z: 5.0 }, // 150°
// { x: -9.06, y: 12, z: 4.23 }, // 155°
// { x: -9.4, y: 12, z: 3.42 }, // 160°
// { x: -9.66, y: 12, z: 2.59 }, // 165°
// { x: -9.85, y: 12, z: 1.74 }, // 170°
// { x: -9.96, y: 12, z: 0.87 }, // 175°
// { x: -10.0, y: 12, z: 0.0 }, // 180°
// { x: -9.96, y: 12, z: -0.87 }, // 185°
// { x: -9.85, y: 12, z: -1.74 }, // 190°
// { x: -9.66, y: 12, z: -2.59 }, // 195°
// { x: -9.4, y: 12, z: -3.42 }, // 200°
// { x: -9.06, y: 12, z: -4.23 }, // 205°
// { x: -8.66, y: 12, z: -5.0 }, // 210°
// { x: -8.19, y: 12, z: -5.74 }, // 215°
// { x: -7.66, y: 12, z: -6.43 }, // 220°
// { x: -7.07, y: 12, z: -7.07 }, // 225°
// { x: -6.43, y: 12, z: -7.66 }, // 230°
// { x: -5.74, y: 12, z: -8.19 }, // 235°
// { x: -5.0, y: 12, z: -8.66 }, // 240°
// { x: -4.23, y: 12, z: -9.06 }, // 245°
// { x: -3.42, y: 12, z: -9.4 }, // 250°
// { x: -2.59, y: 12, z: -9.66 }, // 255°
// { x: -1.74, y: 12, z: -9.85 }, // 260°
// { x: -0.87, y: 12, z: -9.96 }, // 265°
// { x: -0.0, y: 12, z: -10.0 }, // 270°
// { x: 0.87, y: 12, z: -9.96 }, // 275°
// { x: 1.74, y: 12, z: -9.85 }, // 280°
// { x: 2.59, y: 12, z: -9.66 }, // 285°
// { x: 3.42, y: 12, z: -9.4 }, // 290°
// { x: 4.23, y: 12, z: -9.06 }, // 295°
// { x: 5.0, y: 12, z: -8.66 }, // 300°
// { x: 5.74, y: 12, z: -8.19 }, // 305°
// { x: 6.43, y: 12, z: -7.66 }, // 310°
// { x: 7.07, y: 12, z: -7.07 }, // 315°
// { x: 7.66, y: 12, z: -6.43 }, // 320°
// { x: 8.19, y: 12, z: -5.74 }, // 325°
// { x: 8.66, y: 12, z: -5.0 }, // 330°
// { x: 9.06, y: 12, z: -4.23 }, // 335°
// { x: 9.4, y: 12, z: -3.42 }, // 340°
// { x: 9.66, y: 12, z: -2.59 }, // 345°
// { x: 9.85, y: 12, z: -1.74 }, // 350°
// { x: 9.96, y: 12, z: -0.87 },  // 355°