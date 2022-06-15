import React, { useState, useContext } from 'react'
import Layout from '@components/layout/layout';
import AddressGrid from '@components/address/address-grid';
import { fetchBusiness } from 'src/framework/basic-graphql/business/get-address';
import { GlobalContext } from 'src/pages/_app';
export default function AccountDetailsPage() {

  const [address, setAddresses] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useContext(GlobalContext)
  
  fetchBusiness(user?authUid).then((data) => {
    setAddresses(data)
    setIsLoading(false)
  }).catch((error) => {
    console.error(error);
  });

  return (
    <div className="pt-4">
      {!isLoading ? (
        <AddressGrid address={address?.data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

AccountDetailsPage.Layout = Layout;
