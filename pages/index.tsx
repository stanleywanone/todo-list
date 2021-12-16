import { Flex } from '@chakra-ui/layout';
import { NextPage } from 'next';
import Header from '@/core/common/components/Header';
import { CardContainer } from '@/core/common/components/Card/CardContainer';
import { Note } from '@/core/common/boundary/Note';
import { AddNoteModal } from '@/core/components/noteForms/AddNoteModal/AddNoteModal';
import { useNote, NoteDetailProvider } from '@/core/hooks/note';

interface HomeProps {
  notes: Note[];
}

const Home: NextPage<HomeProps> = ({ notes }) => {
  const noteDetails = useNote();
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
          items={notes}
          groupName="To Do"
          setOpenAddModal={noteDetails.setOpenAddModal}
        />
        <CardContainer items={notes} groupName="In Progress" />
        <CardContainer items={notes} groupName="Done" />
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
