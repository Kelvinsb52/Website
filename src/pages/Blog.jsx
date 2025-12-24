import React from 'react';
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Footer } from "../components/Footer";

const Blog = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />

            {/* Navbar */}
            <Navbar />
            {/* Main Content */}
            <main className="pt-20 flex-grow">
                <div className="container mx-auto px-4 py-8">
                    <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
                    <p className="text-center text-muted-foreground">Welcome to my blog! Content coming soon...</p>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Blog;