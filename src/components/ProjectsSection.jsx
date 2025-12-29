import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Sneaker Hub App",
    description: "A unified app for young ambitious entrepreneurs to manage their business.",
    image: "/sneak.mp4",
    tags: ["Typescript", "React", "TailwindCSS", "Next.js", "LangChain"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kelvinsb52/SneakerHub",
  },
  {
    id: 2,
    title: "Latin Learning App",
    description:
      "Implementing LachChaing web app to help students learn Latin more effectively using AI.",
    image: "/ll.mp4",
    tags: ["Python", "LangChain", "RAG", "Streamlit"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kelvinsb52/Latin-Helper",
  },
  {
    id: 3,
    title: "Convolutional Neural Network",
    description:
      "Showed the math behind CNN's and build one from scratch using NumPy only.",
    image: "/ConvNN.jpg",
    tags: ["Numpy", "Python", "Jupyter Notebook"],
    demoUrl: "#",
    githubUrl: "https://github.com/Kelvinsb52/Convolutional-NN",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Feel free to explore and check out the code on my GitHub!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
            >
              <div
                className="h-48 overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                {project.image.endsWith('.mp4') || project.image.endsWith('.webm') ? (
                  <video
                    src={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4 min-h-[52px] items-start">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Kelvinsb52"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 hover:bg-background/30 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-white" />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.image.endsWith('.mp4') || selectedProject.image.endsWith('.webm') ? (
              <video
                src={selectedProject.image}
                controls
                autoPlay
                loop
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};
