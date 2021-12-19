import { Dispatch, FC, SetStateAction, useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Card as CardProps } from '@/core/common/boundary/Card';
import { Card } from './Card';
import { AddIcon } from '@chakra-ui/icons';
import { NoteDetailModal } from '@/core/components/noteForms/NoteDetail/NoteDetailModal/NoteDetailModal';
import { useDeleteNote } from '@/core/hooks/deleteNote';
import { DeleteNoteModal } from '@/core/components/noteForms/DeleteNote/DeleteNoteModal';

interface CardContainerProps {
  items?: CardProps[];
  groupName: string;
  setOpenAddModal?: Dispatch<SetStateAction<boolean>>;
}

export const CardContainer: FC<CardContainerProps> = ({
  items = [],
  groupName,
  setOpenAddModal,
}) => {
  const [openModalId, setOpenModalId] = useState('');
  const [editId, setEditId] = useState('');
  const { deleteNote, openDeleteModal, setOpenDeleteModal } = useDeleteNote();

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
              key={item._id}
              mb={4}
              cursor="pointer"
              onClick={() => setOpenModalId(item._id)}
              setOpenDeleteModal={setOpenDeleteModal}
              setOpenModalId={setOpenModalId}
              setEditId={setEditId}
            />
            <NoteDetailModal
              note={item as any}
              openDetailModal={item._id === openModalId}
              setOpenModalId={setOpenModalId}
              editId={editId}
              setEditId={setEditId}
            />
            <DeleteNoteModal
              id={item._id}
              title={item.title}
              openDeleteModal={item._id === openDeleteModal}
              setOpenDeleteModal={setOpenDeleteModal}
              deleteNote={deleteNote}
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
