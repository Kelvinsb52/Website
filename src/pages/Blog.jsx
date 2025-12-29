import React from 'react';
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Footer } from "../components/Footer";
import { BlogCard } from "../components/BlogCard";
import { blogPosts } from "../data/blogData";

const Blog = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main className="pt-20 flex-grow">
                <div className="container mx-auto px-4 py-16 max-w-6xl">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                        My <span className="text-primary">Blog</span>
                    </h1>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Thoughts on web development, machine learning, and building great software.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Blog;