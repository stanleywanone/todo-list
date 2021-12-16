import {
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from 'react';
import { useRouter } from 'next/router';

export interface UseNoteReturn {
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setPriority: Dispatch<SetStateAction<string>>;
  setDeadline: Dispatch<SetStateAction<string>>;
  setOpenAddModal: Dispatch<SetStateAction<boolean>>;
  addNote: () => Promise<any>;
  priority: string;
  title: string;
  description: string;
  deadline: string;
  openAddModal: boolean;
}

const NoteDetailContext = createContext({} as unknown as UseNoteReturn);

export const NoteDetailProvider = NoteDetailContext.Provider;

export const useNoteDetailContext = (): UseNoteReturn =>
  useContext(NoteDetailContext);

export const useNote = (): UseNoteReturn => {
  const router = useRouter();
  const [priority, setPriority] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [openAddModal, setOpenAddModal] = useState(false);

  const reset = useCallback(() => {
    setPriority('');
    setTitle('');
    setDescription('');
    setDeadline('');
  }, []);

  useEffect(() => {
    if (!openAddModal) reset();
  }, [openAddModal]);

  const addNote = async (): Promise<any> => {
    try {
      // add note
      const note = { title, description };
      const response = await fetch('/api/notes', {
        method: 'POST',
        body: JSON.stringify(note),
      });

      if (response.status === 200) {
        setOpenAddModal(false);
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
    setDeadline,
    addNote,
    deadline,
    priority,
    title,
    description,
    openAddModal,
    setOpenAddModal,
  };
};
