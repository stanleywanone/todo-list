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
import { Note } from '@/core/common/boundary/Note';
import { useEditNote } from '@/core/hooks/editNote';

interface NoteDetailFormProps {
  note: Note;
}
export const NoteDetailForm: FC<NoteDetailFormProps> = ({ note }) => {
  console.log('note, ', note);
  const {
    setTitle,
    setDescription,
    setPriority,
    priority,
    title,
    description,
  } = useEditNote(note);
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
        <RadioGroup onChange={setPriority} value={priority}>
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
