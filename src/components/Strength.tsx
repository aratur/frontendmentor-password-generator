import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import useMediaHook from '../hooks/mediaHook';

export type StrengthTypes = 'too weak!' | 'weak' | 'medium' | 'strong' | '';

type Props = {
  strength: StrengthTypes;
  label: string;
};

const Strength = (props: Props) => {
  const { strength, label } = props;
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
        {label}
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
          className="strength__bar strength__bar-1"
          data-testid="bar"
          data-type={strength}
        />
        <div
          className="strength__bar strength__bar-2"
          data-testid="bar"
          data-type={strength}
        />
        <div
          className="strength__bar strength__bar-3"
          data-testid="bar"
          data-type={strength}
        />
        <div
          className="strength__bar strength__bar-4"
          data-testid="bar"
          data-type={strength}
        />
      </div>
    </Box>
  );
};

export default Strength;
