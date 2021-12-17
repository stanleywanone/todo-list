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

interface NoteDetailFormProps {
  setTitle: Dispatch<SetStateAction<string>>;
  setDescription: Dispatch<SetStateAction<string>>;
  setPriority: Dispatch<SetStateAction<string>>;
  priority: string;
  title: string;
  description: string;
  id: string;
  setOpenModalId: Dispatch<SetStateAction<string>>;
}
export const NoteDetailForm: FC<NoteDetailFormProps> = ({
  setTitle,
  setDescription,
  setPriority,
  priority,
  title,
  description,
}) => {
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