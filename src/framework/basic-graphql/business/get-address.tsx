import { NewAddressType } from '@framework/types';
import BusinessService from '../../../services/address.service';

export const fetchBusiness = async (authId: string) => {

    const data = await BusinessService.getAll({ authId });
  
    return { data: data };
};

export const createBusiness = async(addressInfo: NewAddressType) => {
    const data = await BusinessService.createBusiness(addressInfo)

    return { data: data }
}

export const updateBusiness = async(newAddressInfo: NewAddressType) => {
    const data = await BusinessService.updateBusiness(newAddressInfo)

    return { data: data }
}
