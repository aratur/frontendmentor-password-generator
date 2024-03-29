import React, { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import copyImg from '../assets/images/icon-copy.svg';
import useMediaHook from '../hooks/mediaHook';

type Props = {
  password: string;
  placeholder: string;
  copyLabel: string;
};

const Password = (props: Props) => {
  const { password, placeholder, copyLabel } = props;
  const [showCopied, setShowCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(password);
    setShowCopied(true);
    const handle = setTimeout(() => {
      setShowCopied(false);
    }, 2000);
    return () => clearTimeout(handle);
  }, [password]);

  const media = useMediaHook();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'primary.dark',
        padding: 1,
        height: '80px',
      }}
    >
      <FormControl sx={{ width: '100%' }}>
        <OutlinedInput
          placeholder={placeholder}
          value={password}
          readOnly
          sx={{
            height: '100%',
            fontSize: '32px',
            lineHeight: '42px',
            color: 'secondary.light',
            paddingLeft: media ? 3 : 1,
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
              top: 0,
            },
            '& *': {
              padding: 0,
            },
            '& input::placeholder': {
              opacity: 0.25,
            },
          }}
        />
      </FormControl>
      <div className="copy-password__container">
        <div
          data-testid="copied"
          className={`copy-password__message ${
            showCopied ? 'copy-password__message--visible' : ''
          }`}
        >
          {copyLabel}
        </div>
      </div>
      <IconButton onClick={handleCopy}>
        <img className="copy-password" src={copyImg} alt="copy" />
      </IconButton>
    </Box>
  );
};

export default Password;
