"use client";
import { useState, useEffect } from 'react';
import Tab from '../../components/blog/Tab';
import SearchBar from '../../components/blog/SearchBar';
import Card from '../../components/blog/Card';

export default function Blog() {
    const [selectedOption, setSelectedOption] = useState('All');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch("http://localhost:3000/api/posts", { cache: 'no-store' });
                const fetchedPosts = await res.json();
                setPosts(fetchedPosts);
            } catch (error) {
                console.log("Failed to fetch posts:", error);
            }
        };
        fetchPosts();
    }, []); 

    return (
        <div className='px-3 md:px-[60px] mt-[60px] w-full flex flex-col'>
            <h1 className='font-itim font-bold text-3xl'>Featured</h1>
            <div className='w-full relative'>
                <img className='w-full my-5 h-[350px] rounded-3xl object-cover' src='https://shorturl.at/t9M5u'></img>
                <p className='text-white text-2xl absolute font-itim font-bold'>A Fun Travel to South Beach, Miami</p>
            </div>
            <h1 className='font-itim font-bold mt-4 text-3xl'>Explore</h1>
            <Tab selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={['All', 'Itineraries', 'Blogs']} />
            <SearchBar />
            <div className='grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-10 mx-auto'>
                {posts.map((post, index) => (
                    <Card key={index} post={post} />
                ))}
            </div>
        </div>
    );
}