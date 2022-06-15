import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { ManagedUIContext } from '@contexts/ui.context';
import ManagedModal from '@components/common/modal/managed-modal';
import ManagedDrawer from '@components/common/drawer/managed-drawer';
import { useEffect, useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from '@components/seo/default-seo';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import firebaseApp from "../firebase";
import { getUser } from 'src/framework/basic-graphql/user/handle-user';


// external
import 'react-toastify/dist/ReactToastify.css';

// base css file
import '@assets/css/scrollbar.css';
import '@assets/css/swiper-carousel.css';
import '@assets/css/custom-plugins.css';
import '@assets/css/globals.css';
import { getDirection } from '@utils/get-direction'
import Cookies from 'js-cookie'

export const GlobalContext = React.createContext({ user: {}});

const Noop: React.FC = ({ children }) => <>{children}</>;

const CustomApp = ({ Component, pageProps }: AppProps) => {

  const [user, setUser] = useState();

  const authUid = Cookies.get('auth_uid')
  const token = Cookies.get('auth_token')

  if(!user && token) {
    getUser(authUid).then((data) => {
      setUser(data.user)
    }).catch((error) => {
      console.error(error)
    })
  }

  const queryClientRef = useRef<any>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const router = useRouter();
  const dir = getDirection(router.locale);
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  const Layout = (Component as any).Layout || Noop;

  return (
    <GlobalContext.Provider value={{ user }}>
      <QueryClientProvider client={queryClientRef.current}>
        <Hydrate state={pageProps.dehydratedState}>
          <ManagedUIContext>
            <>
              <DefaultSeo />
              <Layout pageProps={pageProps}>
                <Component {...pageProps} key={router.route} />
              </Layout>
              <ToastContainer />
              <ManagedModal />
              <ManagedDrawer />
            </>
          </ManagedUIContext>
        </Hydrate>
        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </GlobalContext.Provider>
  );
};

export default appWithTranslation(CustomApp);
