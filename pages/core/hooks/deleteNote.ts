import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';

interface UseDeleteNoteReturn {
  deleteNote: (id: string) => Promise<any>;
  openDeleteModal: string;
  setOpenDeleteModal: Dispatch<SetStateAction<string>>;
}

export const useDeleteNote = (): UseDeleteNoteReturn => {
  const router = useRouter();
  const [openDeleteModal, setOpenDeleteModal] = useState('');

  const deleteNote = async (_id: string): Promise<any> => {
    try {
      // update note
      const note = { _id };

      const response = await fetch('/api/notes', {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });

      if (response.status === 200) {
        setOpenDeleteModal('');
      }

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return {
    deleteNote,
    openDeleteModal,
    setOpenDeleteModal,
  };
};
