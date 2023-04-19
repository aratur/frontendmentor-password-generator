/* eslint-disable react/require-default-props */
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import useMediaHook from '../hooks/mediaHook';

type Props = {
  checked: boolean;
  setStateFunction: Dispatch<SetStateAction<boolean>>;
  label: string;
};

const CheckboxCustomized = (props: Props) => {
  const { checked, setStateFunction, label } = props;

  const handleCheckboxClicked = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      setState: Dispatch<SetStateAction<boolean>>
    ): void => {
      const t = e.target;
      setState(t.checked);
    },
    []
  );

  const matches = useMediaHook();

  return (
    <FormControlLabel
      sx={{
        marginInline: 0,
        height: '42px',
        '&:hover .checkbox__img, &:focus .checkbox__img': {
          borderColor: 'primary.main',
        },
        '& .MuiFormControlLabel-label': {
          fontSize: matches ? '18px' : '16px',
          lineHeight: matches ? '24px' : '21px',
        },
      }}
      control={
        <Checkbox
          sx={{
            marginLeft: -1,
            marginRight: matches ? '16px' : '12px',
            '&:hover *': {
              borderColor: 'secondary.dark.',
            },
          }}
          checked={checked}
          icon={<Icon4Checkbox />}
          checkedIcon={<Icon4Checkbox checked />}
          onChange={(e) => handleCheckboxClicked(e, setStateFunction)}
        />
      }
      label={label}
    />
  );
};

type IconProps = {
  checked?: boolean;
};

const Icon4Checkbox = (props: IconProps) => {
  const { checked = false } = props;
  return (
    <span className={`checkbox__img ${checked && 'checkbox__img_checked'}`}>
      {checked && (
        <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="#18171F"
            strokeWidth="3"
            fill="none"
            d="M1 5.607 4.393 9l8-8"
          />
        </svg>
      )}
    </span>
  );
};

export default CheckboxCustomized;
