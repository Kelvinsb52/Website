import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { Footer } from "../components/Footer";
import { blogPosts } from "../data/blogData";
import { Calendar, ArrowLeft } from "lucide-react";

export const BlogPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!post) {
        return (
            <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
                <ThemeToggle />
                <Navbar />
                <main className="pt-20 flex-grow flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                        <p className="text-muted-foreground mb-8">
                            The blog post you're looking for doesn't exist.
                        </p>
                        <Link to="/blog" className="cosmic-button">
                            Back to Blog
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
            <ThemeToggle />
            <Navbar />

            <main className="pt-20 flex-grow">
                <article className="container mx-auto px-4 py-16 max-w-4xl">
                    <button
                        onClick={() => navigate("/blog")}
                        className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
                    >
                        <ArrowLeft size={20} />
                        Back to Blog
                    </button>

                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                <span>{post.date}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div
                        className="prose prose-lg dark:prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </article>
            </main>

            <Footer />
        </div>
    );
};
