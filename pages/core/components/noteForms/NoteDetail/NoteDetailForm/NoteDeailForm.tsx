import { Dispatch, FC, SetStateAction } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  HStack,
  RadioGroup,
  Radio,
  Flex,
} from '@chakra-ui/react';
import { Select } from '@/core/common/components/Select/Select';

const progressOptions = [
  { value: 'To Do', label: 'To Do' },
  { value: 'In Progress', label: 'In Progress' },
  { value: 'Done', label: 'Done' },
];

interface NoteDetailFormProps {
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setPriority: Dispatch<SetStateAction<string>>;
  priority: string;
  title: string;
  description: string;
  progress: string;
  setProgress: Dispatch<SetStateAction<string>>;
  id: string;
  setOpenModalId: Dispatch<SetStateAction<string>>;
  editId: string;
}
export const NoteDetailForm: FC<NoteDetailFormProps> = ({
  setTitle,
  setDescription,
  setPriority,
  progress,
  setProgress,
  priority,
  title,
  id,
  description,
  editId,
}) => {
  return (
    <Flex flexDir="column" p={2}>
      <FormControl mb={4}>
        <FormLabel>TITLE</FormLabel>
        <Input
          placeholder="Title..."
          isReadOnly={editId !== id}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>DESCRIPTION</FormLabel>
        <Textarea
          placeholder="Description..."
          isReadOnly={editId !== id}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Priority</FormLabel>
        <RadioGroup
          isDisabled={editId !== id}
          onChange={editId === id ? setPriority : null}
          value={priority}
        >
          <HStack spacing="24px">
            <Radio value="high">High</Radio>
            <Radio value="medium">Medium</Radio>
            <Radio value="low">Low</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Progress</FormLabel>
        <Select
          options={progressOptions}
          value={progress}
          isDisabled={editId !== id}
          onChange={(e) => setProgress(e.target.value) as any}
        />
      </FormControl>
    </Flex>
  );
};
