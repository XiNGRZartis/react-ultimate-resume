import React from 'react';

export const PALETTES_LIST_TRANSITIONS_SPRING_PROPS = Object.freeze({
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
});

export const PALETTES_ITEM_TRANSITIONS_SPRING_PROPS = Object.freeze({
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0
    }
});
