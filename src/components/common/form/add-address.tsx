import { useState, useContext } from 'react'
import Input from '@components/ui/form/input';
import Button from '@components/ui/button';
import TextArea from '@components/ui/form/text-area';
import { useForm } from 'react-hook-form';
import { useModalState } from '@components/common/modal/modal.context';
import { useModalAction } from '@components/common/modal/modal.context';
import CloseButton from '@components/ui/close-button';
import Heading from '@components/ui/heading';
import Map from '@components/ui/map';
import { useTranslation } from 'next-i18next';
import { createBusiness } from 'src/framework/basic-graphql/business/get-address';
import { GlobalContext } from 'src/pages/_app';

interface ContactFormValues {
  name: string;
  default: boolean;
  phoneNumber: string;
  lng: number;
  address: string;
}

const AddAddressForm: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useModalState();
  const [isLoading, setIsLoading] = useState(false)

  const { closeModal } = useModalAction();

  const { user } = useContext(GlobalContext)

  async function onSubmit(values: ContactFormValues, e: any) {  
    const newValues = {
      name: values.name,
      phoneNumber: values.phoneNumber,
      address: values.address,
      authUid: user.authUid
    }

    setIsLoading(true)
    createBusiness(newValues).then(() => {
      setIsLoading(false)
      location.reload()
    }).catch((error) => {
      console.error(error)
    })
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: data || data?.title ? data.title : '',
      default: data || data?.default ? data.default : '',
      phoneNumber: data || data?.phoneNumber ? data.phoneNumber : '',
      address:
        data || data?.address?.address
          ? data?.address?.address
          : '',
    },
  });

  return (
    <div className="w-full md:w-[600px] lg:w-[900px] xl:w-[1000px] mx-auto p-5 sm:p-8 bg-brand-light rounded-md">
      <CloseButton onClick={closeModal} />
      <Heading variant="title" className="mb-8 -mt-1.5">
        {t('common:text-add-delivery-address')}
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <Input
            variant="solid"
            label="Nombre de la nueva dirección"
            {...register('name', { required: 'Debes agregar un nombre' })}
            error={errors.name?.message}
          />
        </div>
        <div className="grid grid-cols-1 mb-6 gap-7">
{/*           <Map
            lat={data?.address?.lat || 1.295831}
            lng={data?.address?.lng || 103.76261}
            height={'420px'}
            zoom={15}
            showInfoWindow={false}
            mapCurrentPosition={(value: string) =>
              setValue('formatted_address', value)
            }
          /> */}
          <Input
            label="Dirección"
            {...register('address', {
              required: 'Necesitamos una dirección de entrega',
            })}
            error={errors.address?.message}
            className="text-brand-dark"
            variant="solid"
          />
          <Input
            label="Número de teléfono"
            {...register('phoneNumber', {
              required: 'Un teléfono al que podamos llamarte',
            })}
            error={errors.phoneNumber?.message}
            className="text-brand-dark"
            variant="solid"
          />
        </div>
        <div className="flex justify-end w-full">
          <Button
            className="h-11 md:h-12 mt-1.5"
            type="submit"
            loading={isLoading}
            disabled={isLoading}  
          >
            {t('common:text-save-address')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAddressForm;
