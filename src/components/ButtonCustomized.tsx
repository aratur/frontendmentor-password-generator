import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import arrowImg from '../assets/images/icon-arrow-right.svg';
import useMediaHook from '../hooks/mediaHook';

interface Props extends ButtonProps {
  onClick: () => void;
  name: string;
}

const ButtonCustomized = (props: Props) => {
  const { onClick, name, ...otherProps } = props;
  const media = useMediaHook();
  return (
    <Button
      onClick={onClick}
      endIcon={
        <img className="button__icon--hover" src={arrowImg} alt="arrow" />
      }
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: 0,
        height: media ? '65px' : '56px',
        border: '1px solid #a4ffaf',
        color: 'primary.dark',
        img: {
          transition: 'filter 200ms ease-in ',
          filter:
            'invert(12%) sepia(21%) saturate(430%) hue-rotate(207deg) brightness(97%) contrast(96%)',
        },
        '&:hover, &:focus ': {
          color: 'primary.main',
          backgroundColor: 'primary.dark',
          img: {
            filter:
              'invert(81%) sepia(33%) saturate(409%) hue-rotate(75deg) brightness(105%) contrast(103%)',
          },
        },
      }}
      {...otherProps}
    >
      <Typography variant={media ? 'body2' : 'h3'} component="span">
        {name}
      </Typography>
    </Button>
  );
};

export default ButtonCustomized;
