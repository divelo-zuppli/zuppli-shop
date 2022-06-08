import { useState } from 'react'
import Layout from '@components/layout/layout';
import AccountLayout from '@components/my-account/account-layout';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AddressGrid from '@components/address/address-grid';
import { GetStaticProps } from 'next';
import Seo from '@components/seo/seo';

import { fetchBusiness } from 'src/framework/basic-graphql/business/get-address';

export default function AccountDetailsPage() {

  const [address, setAddresses] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
  fetchBusiness().then((data) => {
    setAddresses(data)
    setIsLoading(false)
  }).catch((error) => {
    console.error(error);
  });

  return (
    <>
      <Seo
        title="Address"
        description="Compra todo lo que tu negocio necesita al mejor precio y con la mejor calidad del mercado"
        path="my-account/address"
      />
      <AccountLayout>
        {!isLoading ? (
          <AddressGrid address={address?.data} />
        ) : (
          <div>Loading...</div>
        )}
      </AccountLayout>
    </>
  );
}

AccountDetailsPage.Layout = Layout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'common',
        'forms',
        'menu',
        'terms',
        'faq',
        'footer',
      ])),
    },
  };
};
