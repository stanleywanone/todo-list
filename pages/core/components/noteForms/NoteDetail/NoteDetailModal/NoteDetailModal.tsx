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
import { NoteDetailForm } from '@/core/components/noteForms/NoteDetail/NoteDetailForm/NoteDeailForm';
import { Note } from '@/core/common/boundary/Note';
import { useEditNote } from '@/core/hooks/editNote';

interface NoteDetailModalProps {
  note: Note;
  openDetailModal: boolean;
  setOpenModalId: Dispatch<SetStateAction<string>>;
}

export const NoteDetailModal: FC<NoteDetailModalProps> = ({
  note,
  openDetailModal,
  setOpenModalId,
}) => {
  const {
    setTitle,
    setDescription,
    setPriority,
    priority,
    title,
    description,
    updateNote,
  } = useEditNote(note, setOpenModalId);
  return (
    <>
      <Modal
        isOpen={openDetailModal}
        onClose={() => setOpenModalId('')}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Note</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <NoteDetailForm
              setOpenModalId={setOpenModalId}
              setDescription={setDescription}
              setPriority={setPriority}
              priority={priority}
              title={title}
              description={description}
              setTitle={setTitle}
              id={note._id}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={() => setOpenModalId('')}
            >
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={updateNote}>
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
