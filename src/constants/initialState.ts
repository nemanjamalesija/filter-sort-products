import { stateType } from './types';

export const initialState: stateType = {
  products: [
    {
      id: '',
      category: '',
      description: '',
      company: '',
      colors: ['', '', ''],
      image: '',
      name: '',
      price: 0,
      shipping: false,
    },
  ],
  filteredProducts: [
    {
      id: '',
      category: '',
      description: '',
      company: '',
      colors: ['', '', ''],
      image: '',
      name: '',
      price: 0,
      shipping: false,
    },
  ],
  filters: {
    searchTerm: '',
    category: 'all',
    company: 'all',
    price: 0,
    shipping: false,
    colors: ['', '', ''],
    currentColor: 'all',
  },
  loading: true,
};
