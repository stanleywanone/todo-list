import { FC, Dispatch, SetStateAction } from 'react';
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
import { AddNoteForm } from '@/core/components/noteForms/AddNoteForm/AddNoteForm';

interface AddNoteModalProps {
  setOpenAddModal: Dispatch<SetStateAction<boolean>>;
  openAddModal: boolean;
}

export const AddNoteModal: FC<AddNoteModalProps> = ({
  setOpenAddModal,
  openAddModal,
}) => {
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
            <Button colorScheme="blue">Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};