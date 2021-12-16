import { FC } from 'react';
import { Flex } from '@chakra-ui/layout';

const Header: FC = () => {
  return (
    <Flex
      h={14}
      w={'full'}
      bgColor="#5584AC"
      alignItems="center"
      p={2}
      fontSize={'lg'}
      fontWeight={'bold'}
      color="white"
    >
      TODO LIST
    </Flex>
  );
};

export default Header;
