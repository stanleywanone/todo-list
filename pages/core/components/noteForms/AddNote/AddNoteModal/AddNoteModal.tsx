import { FC } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { AddNoteForm } from '@/core/components/noteForms/AddNote/AddNoteForm/AddNoteForm';
import { useNoteDetailContext } from '@/core/hooks/addNote';

export const AddNoteModal: FC = () => {
  const { setOpenAddModal, openAddModal, addNote } = useNoteDetailContext();
  return (
    <>
      <Modal
        isOpen={openAddModal}
        onClose={() => setOpenAddModal(false)}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <AddNoteForm />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={() => setOpenAddModal(false)}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={addNote}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
