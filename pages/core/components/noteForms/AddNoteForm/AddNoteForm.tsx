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
import { useNote } from '@/core/hooks/note';

export const AddNoteForm: FC = () => {
  const {
    setTitle,
    setDescription,
    setPriority,
    setDeadline,
    priority,
    title,
    description,
  } = useNote();
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
        <FormLabel>DEADLINE</FormLabel>
        <Input
          placeholder="Deadline..."
          onChange={(e) => setDeadline(e.target.value)}
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
    </Flex>
  );
};
