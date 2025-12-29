import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export const FeaturedBlogSection = () => {
    const featuredPost = blogPosts.find((post) => post.featured);

    if (!featuredPost) return null;

    return (
        <section className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Blog Post</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Check out my latest writing on machine learning and software development.
                </p>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-card rounded-lg overflow-hidden shadow-lg card-hover p-8">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {featuredPost.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-3">
                            {featuredPost.title}
                        </h3>

                        <div className="flex items-center gap-2 text-muted-foreground mb-4">
                            <Calendar size={16} />
                            <span>{featuredPost.date}</span>
                        </div>

                        <p className="text-muted-foreground text-base leading-relaxed mb-6">
                            {featuredPost.preview}
                        </p>

                        <Link
                            to={`/blog/${featuredPost.id}`}
                            className="cosmic-button inline-flex items-center gap-2"
                        >
                            Read Full Post <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
