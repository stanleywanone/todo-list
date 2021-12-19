import { FC } from 'react';
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
import { useNoteDetailContext } from '@/core/hooks/addNote';
import { Select } from '@/core/common/components/Select/Select';

const progressOptions = [
  { value: 'To Do', label: 'To Do' },
  { value: 'In Progress', label: 'In Progress' },
  { value: 'Done', label: 'Done' },
];

export const AddNoteForm: FC = () => {
  const {
    setTitle,
    setDescription,
    setPriority,
    priority,
    title,
    description,
    progress,
    setProgress,
  } = useNoteDetailContext();

  return (
    <Flex flexDir="column" p={2}>
      <FormControl mb={4}>
        <FormLabel>TITLE</FormLabel>
        <Input
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>DESCRIPTION</FormLabel>
        <Textarea
          placeholder="Description..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Priority</FormLabel>
        <RadioGroup
          defaultValue="Itachi"
          onChange={setPriority}
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
          onChange={(e) => setProgress(e.target.value) as any}
        />
      </FormControl>
    </Flex>
  );
};
