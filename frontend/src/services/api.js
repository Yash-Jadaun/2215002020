import axios from 'axios';

const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY';

export const fetchNews = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      image: article.urlToImage,
      category: article.source.name.toLowerCase(), // Mock category
    }));
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};