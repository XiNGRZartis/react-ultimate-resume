import { withCustomVerticalScrollbar } from '../../../../../utils/styles/styles_utils';

export const styles = (theme) => {
    const { miscellaneous: { spacing } } = theme;
    return ({
        paper: {
            maxWidth: [1000, '!important']
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            padding: [[spacing, spacing * 6], '!important'],
            overflow: 'overlay',
            ...withCustomVerticalScrollbar()
        }
    });
};