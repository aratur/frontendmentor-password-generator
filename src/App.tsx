/* eslint-disable react/require-default-props */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import themeMain from './themeMain';
import {
  Password,
  ButtonCustomized,
  CheckboxCustomized,
  SliderCustomized,
  CharacterLength,
  Strength,
} from './components';
import useMediaHook from './hooks/mediaHook';
import usePasswordGenerator, {
  PasswordGeneratorProps,
} from './hooks/usePasswordGenerator';

const App = (props: PasswordGeneratorProps) => {
  const { t } = useTranslation(['passwordGenerator']);
  const media = useMediaHook();

  const {
    password,
    placeholder,
    charLength,
    maxCharLength,
    handleChange,
    upperCase,
    setUpperCase,
    lowerCase,
    setLowerCase,
    includeNumbers,
    setIncludeNumbers,
    includeSymbols,
    setIncludeSymbols,
    getStrength,
    generatePassword,
  } = usePasswordGenerator(props);

  return (
    <div className="App">
      <main className="main">
        <ThemeProvider theme={themeMain}>
          <Stack spacing={media ? 4 : 2}>
            <Box>
              <Typography
                variant={media ? 'h2' : 'h3'}
                component="h1"
                color="primary.light"
                textAlign="center"
              >
                {t('appName')}
              </Typography>
            </Box>
            <Stack spacing={media ? 3 : 2}>
              <Password
                copyLabel={t('copied')}
                password={password}
                placeholder={placeholder}
              />
              <Box
                sx={{
                  backgroundColor: 'primary.dark',
                  paddingInline: media ? 4 : 2,
                  paddingBottom: media ? 4 : 2,
                  paddingTop: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: media ? 4 : 2,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: 2,
                  }}
                >
                  <CharacterLength
                    label={t('characterLength')}
                    charLength={charLength}
                  />
                  <SliderCustomized
                    handleChange={handleChange}
                    max={maxCharLength}
                    value={charLength}
                  />
                  <Box
                    sx={{
                      backgroundColor: 'primary.dark',
                      padding: 0,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <CheckboxCustomized
                      checked={upperCase}
                      setStateFunction={setUpperCase}
                      label={t('includeUppercase')}
                    />
                    <CheckboxCustomized
                      checked={lowerCase}
                      setStateFunction={setLowerCase}
                      label={t('includeLowercase')}
                    />
                    <CheckboxCustomized
                      checked={includeNumbers}
                      setStateFunction={setIncludeNumbers}
                      label={t('includeNumbers')}
                    />
                    <CheckboxCustomized
                      checked={includeSymbols}
                      setStateFunction={setIncludeSymbols}
                      label={t('includeSymbols')}
                    />
                  </Box>
                </Box>
                <Strength label={t('strength')} strength={getStrength()} />
                <ButtonCustomized
                  name={t('generate')}
                  onClick={generatePassword}
                />
              </Box>
            </Stack>
          </Stack>
        </ThemeProvider>
      </main>
    </div>
  );
};

export default App;
