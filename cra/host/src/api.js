// api.js
export async function fetchData() {
  try {
    const response = await fetch(
      'https://65c380e839055e7482c10bde.mockapi.io/microfront/api/v1/test',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}
