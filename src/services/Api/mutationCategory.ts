import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import api from '../../utilities/config';

// Define a type for the category data (update this based on your actual data structure)
interface Category {
  id: string;
  name: string;
  // add other fields as needed
}

// Function to fetch categories
const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get('/product-category-list');
    console.log(response.data);
    return response.data; // Ensure this matches your expected data structure
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories'); // Propagate the error for query error handling
  }
};

// Custom hook to use categories
export const useCategory = (options?: UseQueryOptions<Category[]>) => {
  return useQuery<Category[], Error>('categories', fetchCategories, options);
};
