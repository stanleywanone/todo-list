import { FC } from 'react';
import { PageComponent } from '@/core/common/types/page';
import { ChakraProvider } from '@chakra-ui/react';

export const App: FC<{
  Component: PageComponent;
  pageProps: any;
}> = ({ Component, pageProps }) => {
  return (
    <div style={{ height: '100vh' }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
};

export default App;
