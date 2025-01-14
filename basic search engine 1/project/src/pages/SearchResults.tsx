import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import SearchBox from '../components/SearchBox';
import SearchResultsList from '../components/SearchResults';
import Footer from '../components/Footer';
import { searchWikipedia } from '../services/searchApi';
import { SearchResult } from '../types/search';

export default function SearchResultsPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      try {
        const wikiResults = await searchWikipedia(query);
        setResults(wikiResults);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <div className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <SearchBox initialQuery={query} />
        </div>
      </div>

      <main className="flex-grow px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
          </div>
        ) : (
          <SearchResultsList results={results} query={query} />
        )}
      </main>

      <Footer />
    </div>
  );
}