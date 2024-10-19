import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import api from '../../utilities/config';

// Define a type for the category data
interface Category {
  id: string;
  categoryname: string;
  image: string;
  categorydescription: string;
  // Add other fields as needed
}

// Function to fetch categories
const fetchCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get('/categories');
    console.log(response.data);
    return response.data; // Ensure this matches your expected data structure
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories'); // Propagate the error for query error handling
  }
};

// Custom hook to use categories
export const useCategory = ( UseQueryOptions<Category[]>) => {
  return useQuery<Category[], Error>('categories', fetchCategories);
};
