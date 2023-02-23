import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import useMediaHook from '../utils/mediaHook';

export type StrengthTypes = 'too weak!' | 'weak' | 'medium' | 'strong' | '';

type Props = {
  strength: StrengthTypes;
};

const Strength = (props: Props) => {
  const { strength } = props;
  const media = useMediaHook();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: media ? '72px' : '56px',
        backgroundColor: 'secondary.dark',
        paddingBlock: 2,
        paddingInline: 3,
      }}
    >
      <Typography
        variant={media ? 'body2' : 'body1'}
        component="p"
        textTransform="uppercase"
        color="primary.light"
      >
        Strength
      </Typography>
      <div className="strength">
        <Typography
          variant={media ? 'h2' : 'body2'}
          component="h2"
          textTransform="uppercase"
        >
          {strength}
        </Typography>
        <div />
        <div
          className="strength__bar strength__bar__1"
          data-testid="bar"
          data-type={strength}
        />
        <div
          className="strength__bar strength__bar__2"
          data-testid="bar"
          data-type={strength}
        />
        <div
          className="strength__bar strength__bar__3"
          data-testid="bar"
          data-type={strength}
        />
        <div
          className="strength__bar strength__bar__4"
          data-testid="bar"
          data-type={strength}
        />
      </div>
    </Box>
  );
};

export default Strength;
