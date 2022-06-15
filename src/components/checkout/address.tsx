import React, { useEffect, useState, useContext } from 'react'
import { useAddressQuery } from '@framework/address/address';
import AddressGrid from '@components/address/address-grid';

import { fetchBusiness } from 'src/framework/basic-graphql/business/get-address';
import { GlobalContext } from 'src/pages/_app';

const AddressPage: React.FC = () => {

  const [address, setAddresses] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
  
  const { user } = useContext(GlobalContext)

  useEffect(() => {
    fetchBusiness(user?.authUid).then((data) => {
      setAddresses(data)
      setIsLoading(false)
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  return !isLoading ? (
    <AddressGrid address={address?.data} />
  ) : (
    <div>Loading...</div>
  );
};

export default AddressPage;
