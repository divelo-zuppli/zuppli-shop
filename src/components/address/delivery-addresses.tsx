import React, { useEffect, useState, useContext } from 'react'
import { useAddressQuery } from '@framework/address/address';
import AddressGrid from '@components/address/address-grid';
import { useModalAction } from '@components/common/modal/modal.context';
import CloseButton from '@components/ui/close-button';
import Heading from '@components/ui/heading';
import { useTranslation } from 'next-i18next';
import { fetchBusiness } from 'src/framework/basic-graphql/business/get-address';
import { GlobalContext } from 'src/pages/_app';

const DeliveryAddresses: React.FC = () => {
  const { t } = useTranslation('common');
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

  const { closeModal } = useModalAction();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-[820px] text-brand-light p-10 border border-border-base rounded-md relative bg-white">
      <CloseButton onClick={closeModal} />
      <div className="w-full">
        <Heading variant="title" className="mb-8 -mt-1.5">
          {t('text-delivery-address')}
        </Heading>
        <AddressGrid address={address?.data} />
      </div>
    </div>
  );
};

export default DeliveryAddresses;
