import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Card as CardProps } from '@/core/common/boundary/Card';
import { Card } from './Card';
import { AddIcon } from '@chakra-ui/icons';
import { NoteDetailModal } from '@/core/components/noteForms/NoteDetailModal/NoteDetailModal';

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
  const [openModalTitle, setOpenModalTitle] = useState('');
  return (
    <Flex
      w={'400px'}
      bgColor="#5584AC"
      flexDir={'column'}
      p={2}
      borderRadius={5}
    >
      <Text mb={4} fontWeight="bold">
        {groupName}
      </Text>
      {items.map((item) => {
        return (
          <>
            <Card
              item={item}
              key={item.title}
              mb={4}
              onClick={() => setOpenModalTitle(item.title)}
            />
            <NoteDetailModal
              note={item as any}
              openDetailModal={item.title === openModalTitle}
              setOpenModalTitle={setOpenModalTitle}
            />
          </>
        );
      })}
      {groupName === 'To Do' && (
        <Flex>
          <AddIcon
            w={4}
            h={4}
            mt={1}
            mr={2}
            cursor="pointer"
            onClick={() => setOpenAddModal(true)}
          />
          <Text>Add another note</Text>
        </Flex>
      )}
    </Flex>
  );
};
