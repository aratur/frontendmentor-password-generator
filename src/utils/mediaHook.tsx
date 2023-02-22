import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';

// same effect can be achieved by using [theme.breakpoints.up('sm')]
// and updating theme breakpoints
const useMediaHook = () => {
  const [matches, setMatches] = useState(false);
  const matchesMediaQuery = useMediaQuery('(min-width:700px)');
  useEffect(() => {
    setMatches(matchesMediaQuery);
  }, [matchesMediaQuery]);

  return matches;
};

export default useMediaHook;
