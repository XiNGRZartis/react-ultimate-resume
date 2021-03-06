import React from 'react';

import makeStyles from '@mui/styles/makeStyles';

import { Typography } from '@welovedevs/ui';

import { styles } from './profile_card_section_title_styles';

const useStyles = makeStyles(styles);

const ProfileCardSectionTitleComponent = ({ children }) => {
    const classes = useStyles();
    return (
        <Typography variant="h2" component="h3" classes={{ container: classes.container }}>
            {children}
        </Typography>
    );
};

export const ProfileCardSectionTitle = ProfileCardSectionTitleComponent;
