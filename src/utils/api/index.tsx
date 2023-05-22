import axios from 'axios';

export async function fetchDataFromAPI() {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from API:', error);
    throw error;
  }
}
