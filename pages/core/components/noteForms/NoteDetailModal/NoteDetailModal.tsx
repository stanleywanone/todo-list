import { Dispatch, FC, SetStateAction } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import { NoteDetailForm } from '@/core/components/noteForms/NoteDetailForm/NoteDeailForm';
import { Note } from '@/core/common/boundary/Note';

interface NoteDetailModalProps {
  note: Note;
  openDetailModal: boolean;
  setOpenModalTitle: Dispatch<SetStateAction<string>>;
}

export const NoteDetailModal: FC<NoteDetailModalProps> = ({
  note,
  openDetailModal,
  setOpenModalTitle,
}) => {
  return (
    <>
      <Modal
        isOpen={openDetailModal}
        onClose={() => setOpenModalTitle('')}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NoteDetailForm note={note} />
          </ModalBody>

          {/* <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={() => setOpenDetailModal(false)}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={addNote}>
              Add
            </Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};
