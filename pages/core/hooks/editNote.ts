import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import { Note } from '@/core/common/boundary/Note';

interface UseEditNoteReturn {
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setPriority: Dispatch<SetStateAction<string>>;
  setProgress: Dispatch<SetStateAction<string>>;
  progress: string;
  priority: string;
  title: string;
  description: string;
  updateNote: () => Promise<any>;
}

export const useEditNote = (
  item: Note,
  setOpenModalId: Dispatch<SetStateAction<string>>
): UseEditNoteReturn => {
  const router = useRouter();
  const _id = item._id;
  const [priority, setPriority] = useState(item.priority);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [progress, setProgress] = useState(item.progress);

  const updateNote = async (): Promise<any> => {
    try {
      // update note

      const note = { _id, title, description, priority, progress };

      const response = await fetch('/api/notes', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
      });

      if (response.status === 200) {
        setOpenModalId('');
      }

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return {
    setTitle,
    setDescription,
    setPriority,
    progress,
    setProgress,
    priority,
    title,
    description,
    updateNote,
  };
};
