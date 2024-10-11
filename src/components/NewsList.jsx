import React, { useState } from 'react';
import { news } from '../components/NewsData';
import NewsCard from '../components/NewCard';
import NewsFilters from '../components/NewsFiltr';
import Pagination from './Pagination';

const NewsList = () => {
    const [filters, setFilters] = useState({
        keywords: '',
        fromDate: '',
        toDate: '',
        category: ''
    });

    // Pagination uchun state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Filtrlash funksiyasi
    const filteredNews = news.filter(n => {
        const keywordsMatch = n.title.toLowerCase().includes(filters.keywords.toLowerCase());
        const fromDateMatch = !filters.fromDate || new Date(n.date) >= new Date(filters.fromDate);
        const toDateMatch = !filters.toDate || new Date(n.date) <= new Date(filters.toDate);
        const categoryMatch = !filters.category || n.category?.toLowerCase().includes(filters.category.toLowerCase());

        return keywordsMatch && fromDateMatch && toDateMatch && categoryMatch;
    });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

    // Sahifa o'zgartirish funksiyasi
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="news-list">
            <NewsFilters filters={filters} setFilters={setFilters} />
            <div className="news-cards">
                {currentNews.map(n => (
                    <NewsCard key={n.id} news={n} image={n.imageUrl} title={n.title} date={n.date} views={n.views} />
                ))}
            </div>
            <Pagination totalPages={totalPages} paginate={paginate} currentPage={currentPage} />
        </div>
    );
};


export default NewsList;