import { Dispatch, FC, SetStateAction } from 'react';
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

interface DeleteNoteModalProps {
  id: string;
  title: string;
  setOpenDeleteModal: Dispatch<SetStateAction<string>>;
  deleteNote?: (id: string) => Promise<any>;
  openDeleteModal?: boolean;
}

export const DeleteNoteModal: FC<DeleteNoteModalProps> = ({
  id,
  title,
  deleteNote,
  openDeleteModal,
  setOpenDeleteModal,
}) => {
  return (
    <>
      <Modal
        isOpen={openDeleteModal}
        onClose={() => setOpenDeleteModal('')}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Are you sure you want to delete {title} this note?
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={() => setOpenDeleteModal('')}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => {
                deleteNote(id);
              }}
            >
              Delete
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
