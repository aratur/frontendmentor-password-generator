import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaHook from '../utils/mediaHook';

type Props = {
  charLength: number;
};

const CharacterLength = (props: Props) => {
  const { charLength } = props;
  const media = useMediaHook();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant={media ? 'body2' : 'body1'} component="p">
        Character Length{' '}
      </Typography>
      <Typography variant={media ? 'h1' : 'h2'} component="p" color="primary">
        {charLength}
      </Typography>
    </Box>
  );
};

export default CharacterLength;
