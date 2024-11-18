"use client";
import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { CiLocationOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import Tab from "../../../components/blog/Tab";
import Section from "../../../components/post/Section";

export default function Post({ params }) {
    const unwrappedParams = React.use(params);
    const { slug } = unwrappedParams;

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        async function fetchPostData() {
            try {
                const res = await fetch(`http://localhost:3000/api/posts`, {
                    cache: "no-store",
                });
                const posts = await res.json();
                const foundPost = posts.find((p) => p.slug === slug);

                if (foundPost) {
                    setPost(foundPost);
                    setSelectedOption(foundPost.sections[0]?.name || "");
                } else {
                    setError("Post not found.");
                }
            } catch (err) {
                setError("Failed to fetch post data.");
            } finally {
                setLoading(false);
            }
        }

        fetchPostData();
    }, [slug]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const opts = post.sections.map((section, index) => section.name)

    return (
        <div className="flex flex-col w-full">
            <div className="relative w-full h-[400px]">
                <img className="w-full h-full rounded-b-[20px] object-cover" src={post.media[0].link} alt={post.title} />

                <div className="absolute bottom-0 left-0 w-full p-3 text-center text-white flex flex-col gap-1">
                    <h3 className="text-md md:text-xl lg:text-2xl font-semibold font-poppins">{post.title}</h3>
                    <div className="flex justify-center items-center gap-2 text-sm md:text-md lg:text-lg">
                        <IconContext.Provider value={{ size: '15px' }}>
                            <CiLocationOn />
                        </IconContext.Provider>
                        <p>{post.location}</p>
                    </div>
                    <div className="flex justify-center items-center gap-2 text-sm md:text-md lg:text-lg">
                        <IconContext.Provider value={{ size: '15px' }}>
                            <FaRegUserCircle />
                        </IconContext.Provider>
                        <p>{post.author.name}</p>
                    </div>
                </div>
            </div>

            
            <div className="max-w-3xl mx-auto border-b w-full px-4">
                <Tab options={opts} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>

            {(post.sections.length > 0) && (
                post.sections.map((section, index) => (
                    <Section key={index} section={section} />
                ))
            )}
        </div>
    )
}