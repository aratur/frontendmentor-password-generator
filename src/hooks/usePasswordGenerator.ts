import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { randomInteger, shuffle } from '../utils/util';
import { StrengthTypes } from '../components/Strength';

export type PasswordGeneratorProps = {
  initCharLength?: number;
  initUpperCase?: boolean;
  initLowerCase?: boolean;
  initNumbers?: boolean;
  initSymbols?: boolean;
};

type GeneratorOption = {
  setter: Dispatch<SetStateAction<boolean>>;
  value: boolean;
  charset: string;
};

const upperCaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseCharset = 'abcdefghijklmnopqrstuvwxyz';
const numbersCharset = '0123456789';
const symbolsCharset = '!@#$%^&*()_+=<>';
const maxCharsetLength = 26 + 26 + 10 + 15;

const usePasswordGenerator = (props: PasswordGeneratorProps) => {
  const {
    initCharLength = 0,
    initLowerCase = false,
    initNumbers = false,
    initSymbols = false,
    initUpperCase = false,
  } = props;

  const maxCharLength = 20;
  const placeholder = 'P4$5W0rD!';

  const [upperCase, setUpperCase] = useState<boolean>(initUpperCase);
  const [lowerCase, setLowerCase] = useState<boolean>(initLowerCase);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(initNumbers);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(initSymbols);
  const [charLength, setCharLength] = useState(initCharLength);
  const [password, setPassword] = useState(placeholder);

  const handleChange = useCallback((e: Event): void => {
    const t = e.target as HTMLInputElement;
    setCharLength(parseInt(t.value, 10));
  }, []);

  const generatorOptions = useMemo(
    () =>
      new Array<GeneratorOption>(
        {
          setter: setIncludeSymbols,
          value: includeSymbols,
          charset: symbolsCharset,
        },
        {
          setter: setIncludeNumbers,
          value: includeNumbers,
          charset: numbersCharset,
        },
        { setter: setLowerCase, value: lowerCase, charset: lowerCaseCharset },
        { setter: setUpperCase, value: upperCase, charset: upperCaseCharset }
      ),
    [includeNumbers, includeSymbols, lowerCase, upperCase]
  );

  const getStrength = useCallback((): StrengthTypes => {
    const passwordLength = charLength;
    const sizeCharset = generatorOptions
      .filter((m) => m.value === true)
      .reduce((prev, curr) => prev + curr.charset.length, 0);
    if (passwordLength === 0 || sizeCharset === 0) return '';
    // actual probability would be calculated with ** instead of *
    // but it jumps too fast to generate a sensible UI feedback
    const numberOfPossiblePasswords = sizeCharset * passwordLength;
    const maxNumberOfPossiblePasswords = maxCharsetLength * maxCharLength;
    const percent = Math.floor(
      (numberOfPossiblePasswords / maxNumberOfPossiblePasswords) * 100
    );

    if (percent < 10) return 'too weak!';
    if (percent < 30) return 'weak';
    if (percent < 60) return 'medium';
    return 'strong';
  }, [charLength, generatorOptions]);

  const generatePassword = useCallback(() => {
    // filter out checked password generation options
    const checked = generatorOptions.filter((m) => m.value === true);
    if (charLength > 0 && checked.length > 0) {
      // generate one character from each group to satisfy selected options
      const oneFromEachSet = checked.reduce(
        (prev, curr) =>
          prev + curr.charset.at(randomInteger(0, curr.charset.length - 1)),
        ''
      );
      const oneFromEachSetTrimmed = oneFromEachSet.substring(0, charLength);

      // combine all selected char-sets
      const charset = checked.reduce((prev, curr) => prev + curr.charset, '');
      // calculate how many characters need to be drawn to meet the length criteria
      const toDraw = charLength - oneFromEachSetTrimmed.length;
      let result = oneFromEachSetTrimmed;

      for (let i = toDraw; i > 0; i -= 1) {
        const newChar = charset.at(randomInteger(0, charset.length - 1));
        result += newChar || '';
      }
      // shuffle selected characters
      // **otherwise oneFromEachSet would always come first and in the same order
      const shuffledResult = shuffle(result);
      setPassword(shuffledResult);
    } else {
      // if there are 0 options selected or character length equals zero
      setPassword('');
    }
  }, [charLength, generatorOptions]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return {
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
  };
};

export default usePasswordGenerator;
