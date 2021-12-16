import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Card as CardProps } from '@/core/common/boundary/Card';
import { Card } from './Card';
interface CardContainer {
  items?: CardProps[];
  groupName: string;
}

export const CardContainer: FC<CardContainer> = ({ items = [], groupName }) => {
  return (
    <Flex
      w={'400px'}
      bgColor="#5584AC"
      flexDir={'column'}
      p={2}
      borderRadius={5}
    >
      <Text mb={4} color="white">
        {groupName}
      </Text>
      {items.map((item) => {
        return <Card item={item} key={item.id} mb={4} />;
      })}
    </Flex>
  );
};
