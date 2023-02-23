import React from 'react';
import Slider from '@mui/material/Slider';
import { Box } from '@mui/material';

type Props = {
  value: number;
  max: number;
  handleChange: (e: Event) => void;
};

const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const SliderCustomized = (props: Props) => {
  const { value, max, handleChange } = props;

  return (
    <Box sx={{ marginInline: 2, marginTop: 0 }}>
      <Slider
        value={value}
        max={max}
        min={0}
        sx={{
          borderRadius: 0,
          '& .MuiSlider-track': {
            borderRadius: 0,
            height: '8px',
          },
          '& .MuiSlider-rail': {
            opacity: 1,
            backgroundColor: 'secondary.dark',
            height: '8px',
          },
          '& .MuiSlider-thumb': {
            height: 28,
            width: 28,
            backgroundColor: '#fff',
            transition: 'background-color 100ms ease-in-out',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'secondary.light',
            boxShadow: iOSBoxShadow,
            '&:focus, &:hover, &.Mui-active': {
              boxShadow:
                '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
              // Reset on touch devices, it doesn't add specificity
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: 'primary.main',
              backgroundColor: 'secondary.dark',
              '@media (hover: none)': {
                boxShadow: iOSBoxShadow,
              },
            },
          },
        }}
        color="secondary"
        onChange={(e) => handleChange(e)}
      />
    </Box>
  );
};

export default SliderCustomized;
