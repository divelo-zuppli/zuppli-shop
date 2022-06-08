import { useState } from 'react'
import Layout from '@components/layout/layout';
import AddressGrid from '@components/address/address-grid';
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
