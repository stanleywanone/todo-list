import { Dispatch, SetStateAction, useState } from 'react';

export interface UseNoteReturn {
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setPriority: Dispatch<SetStateAction<string>>;
  setDeadline: Dispatch<SetStateAction<string>>;
  setOpenAddModal: Dispatch<SetStateAction<boolean>>;
  priority: string;
  title: string;
  description: string;
  deadline: string;
  openAddModal: boolean;
}

export const useNote = (): UseNoteReturn => {
  const [priority, setPriority] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [openAddModal, setOpenAddModal] = useState(false);

  return {
    setTitle,
    setDescription,
    setPriority,
    setDeadline,
    deadline,
    priority,
    title,
    description,
    openAddModal,
    setOpenAddModal,
  };
};
