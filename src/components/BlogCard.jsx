import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogCard = ({ post }) => {
    return (
        <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4 min-h-[52px] items-start">
                    {post.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {post.preview}
                </p>

                <Link
                    to={`/blog/${post.id}`}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                >
                    Read More <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};
