import { FC } from 'react';
import {
  Select as ChakarSelect,
  SelectProps as ChakarSelectProps,
} from '@chakra-ui/select';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends ChakarSelectProps {
  options?: SelectOption[];
}

export const SelectConfig = {
  baseStyle: {
    field: {
      color: 'lightBlue.300',
      mt: 2,
      mb: 2,
      '> option': {
        pl: 0,
        ml: 0,
      },
    },
  },
  sizes: {
    lg: {
      field: {
        fontSize: 'sm',
        p: 3,
        h: 12,
        borderRadius: 'md',
      },
      icon: {
        color: 'gray.500',
        right: 2.5,
        '> svg': {
          w: 2.5,
          h: 2.5,
        },
      },
    },
  },
  defaultProps: {
    focusBorderColor: 'darkBlue.900',
    errorBorderColor: 'red.500',
    size: 'lg',
  },
};

export const Select: FC<SelectProps> = ({
  options,
  placeholder = '--select--',
  ...props
}) => {
  return (
    <ChakarSelect {...props} placeholder={placeholder}>
      {options.map((option) => (
        <option value={option.value} key={`${option.value} option`}>
          {option.label}
        </option>
      ))}
    </ChakarSelect>
  );
};
