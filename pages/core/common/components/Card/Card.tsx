import { FC } from 'react';
import {
  Card as CardType,
  Priority as PriorityLevel,
} from '@/core/common/boundary/Card';
import { Box, Flex, BoxProps, TextProps } from '@chakra-ui/react';

export interface CardProps extends BoxProps {
  item: CardType;
  titleProps?: TextProps;
}

interface PriorityProps {
  priority: string;
}

export const Priority: FC<PriorityProps> = ({ priority }) => {
  return (
    <Box
      h={3}
      w={3}
      mb={2}
      borderRadius={'100%'}
      bgColor={
        priority === PriorityLevel.High
          ? 'red'
          : priority === PriorityLevel.Medium
          ? 'yellow'
          : 'gray'
      }
    />
  );
};

export const Card: FC<CardProps> = ({
  item = {},
  titleProps = {},
  ...props
}) => {
  const cardStyleProps = {
    w: 'full',
    bgColor: 'white',
    borderRadius: 5,
    p: 2,
    ...props,
  };
  return (
    <Flex {...cardStyleProps} flexDir="column">
      <Box {...titleProps} mb={2}>
        {item.title}
      </Box>
      <Box mb={2}>{item.deadline}</Box>
      <Priority priority={item.priority} />
    </Flex>
  );
};
