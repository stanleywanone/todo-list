import { Dispatch, FC, SetStateAction } from 'react';
import {
  Card as CardType,
  Priority as PriorityLevel,
} from '@/core/common/boundary/Card';
import { Box, Flex, BoxProps, TextProps } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

export interface CardProps extends BoxProps {
  item: CardType;
  titleProps?: TextProps;
  setOpenDeleteModal: Dispatch<SetStateAction<string>>;
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
          ? 'yellow.300'
          : 'gray'
      }
    />
  );
};

export const Card: FC<CardProps> = ({
  setOpenDeleteModal,
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
      <Flex>
        <Priority priority={item.priority} />
      </Flex>
      <Flex justifyContent="flex-end">
        <DeleteIcon
          mr={2}
          onClick={(e) => {
            setOpenDeleteModal(item._id);
            e.stopPropagation();
          }}
        />
      </Flex>
    </Flex>
  );
};
