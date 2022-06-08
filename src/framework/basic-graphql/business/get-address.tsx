import BusinessService from '../../../services/address.service';

export const fetchBusiness = async () => {
    const data = await BusinessService.getAll();
  
    return { data: data };
  };
