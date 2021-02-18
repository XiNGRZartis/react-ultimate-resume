import { config } from 'react-spring';

export const GIFS_BACK_TRANSITIONS_SPRING_PROPS = {
    toTheLeft: {
        opacity: 0,
        x: '25%'
    },
    center: {
        opacity: 1,
        x: 0
    },
    toTheRight: {
        opacity: 0,
        x: '-25%'
    }
};
