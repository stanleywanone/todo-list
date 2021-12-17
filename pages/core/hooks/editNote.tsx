import { Dispatch, SetStateAction, useState } from 'react';
import { Note } from '../common/boundary/Note';

interface UseEditNoteReturn {
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setPriority: Dispatch<SetStateAction<string>>;
  priority: string;
  title: string;
  description: string;
}

export const useEditNote = (item: Note): UseEditNoteReturn => {
  const [priority, setPriority] = useState(item.priority);
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);

  return {
    setTitle,
    setDescription,
    setPriority,
    priority,
    title,
    description,
  };
};
