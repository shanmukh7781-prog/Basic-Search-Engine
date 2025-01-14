import { SearchResult } from '../types/search';

const WIKIPEDIA_API_URL = 'https://en.wikipedia.org/w/api.php';

export async function searchWikipedia(query: string): Promise<SearchResult[]> {
  const params = new URLSearchParams({
    action: 'query',
    list: 'search',
    srsearch: query,
    format: 'json',
    origin: '*',
    utf8: '1',
    srlimit: '10'
  });

  try {
    const response = await fetch(`${WIKIPEDIA_API_URL}?${params}`);
    const data = await response.json();
    
    return data.query.search.map((result: any) => ({
      title: result.title,
      url: `https://en.wikipedia.org/wiki/${encodeURIComponent(result.title)}`,
      description: result.snippet.replace(/<\/?[^>]+(>|$)/g, ''),
      source: 'Wikipedia'
    }));
  } catch (error) {
    console.error('Error fetching Wikipedia results:', error);
    return [];
  }
}