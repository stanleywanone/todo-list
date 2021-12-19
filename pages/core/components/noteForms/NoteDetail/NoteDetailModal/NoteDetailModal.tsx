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
  editId: string;
  setEditId: Dispatch<SetStateAction<string>>;
}

export const NoteDetailModal: FC<NoteDetailModalProps> = ({
  note,
  openDetailModal,
  setOpenModalId,
  editId,
  setEditId,
}) => {
  const {
    setTitle,
    setDescription,
    setPriority,
    priority,
    title,
    description,
    progress,
    setProgress,
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
              progress={progress}
              setProgress={setProgress}
              setTitle={setTitle}
              id={note._id}
              editId={editId}
            />
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              mr={3}
              onClick={() => {
                setOpenModalId('');
                setEditId('');
              }}
            >
              {editId === note._id ? 'Cancel' : 'Close'}
            </Button>
            {editId === note._id && (
              <Button colorScheme="blue" onClick={updateNote}>
                Save
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
