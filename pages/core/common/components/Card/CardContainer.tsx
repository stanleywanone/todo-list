import { Dispatch, FC, SetStateAction } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Card as CardProps } from '@/core/common/boundary/Card';
import { Card } from './Card';
import { AddIcon } from '@chakra-ui/icons';

interface CardContainer {
  items?: CardProps[];
  groupName: string;
  setOpenAddModal?: Dispatch<SetStateAction<boolean>>;
}

export const CardContainer: FC<CardContainer> = ({
  items = [],
  groupName,
  setOpenAddModal,
}) => {
  return (
    <Flex
      w={'400px'}
      bgColor="#5584AC"
      flexDir={'column'}
      p={2}
      borderRadius={5}
    >
      <Text mb={4}>{groupName}</Text>
      {items.map((item) => {
        return <Card item={item} key={item.id} mb={4} />;
      })}
      <Flex>
        <AddIcon
          w={4}
          h={4}
          mt={1}
          mr={2}
          onClick={() => setOpenAddModal(true)}
        />
        <Text>Add another note</Text>
      </Flex>
    </Flex>
  );
};
