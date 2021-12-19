import { Flex } from '@chakra-ui/layout';
import { NextPage } from 'next';
import Header from '@/core/common/components/Header';
import { CardContainer } from '@/core/common/components/Card/CardContainer';
import { Note } from '@/core/common/boundary/Note';
import { AddNoteModal } from '@/core/components/noteForms/AddNote/AddNoteModal/AddNoteModal';
import { useAddNote, NoteDetailProvider } from '@/core/hooks/addNote';

interface HomeProps {
  notes: Note[];
}

const Home: NextPage<HomeProps> = ({ notes }) => {
  const noteDetails = useAddNote();

  return (
    <Flex flexDir="column" h={'full'}>
      <Header />
      <Flex
        justifyContent="space-around"
        mt="100px"
        alignItems="flex-start"
        h={'full'}
      >
        <CardContainer
          items={notes.filter((item) => item.progress === 'To Do')}
          groupName="To Do"
          setOpenAddModal={noteDetails.setOpenAddModal}
        />
        <CardContainer
          items={notes.filter((item) => item.progress === 'In Progress')}
          groupName="In Progress"
        />
        <CardContainer
          items={notes.filter((item) => item.progress === 'Done')}
          groupName="Done"
        />
      </Flex>
      <NoteDetailProvider value={noteDetails}>
        <AddNoteModal />
      </NoteDetailProvider>
    </Flex>
  );
};

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');

  const { data } = await res.json();
  return { notes: data };
};

export default Home;
