export const blogPosts = [
    {
        id: 1,
        title: "Understanding Convolutional Neural Networks from Scratch",
        date: "December 1, 2024",
        preview: "What I learned diving deep into the mathematics and implementation of convolutional neural networks using only NumPy.",
        featured: true,
        content: `
        <h2>Starting Without the “Right” Background</h2>

      <p>
I started this project out of pure curiosity. I kept hearing about object detection models like YOLO and how they are able to understand what is inside an image almost instantly. Cars, people, signs — it felt impressive, but also mysterious. I wanted to understand how models like that actually work under the hood.
As I dug deeper, I learned that many of the strongest computer vision systems rely on something called convolutional neural networks. I didn’t fully understand what that meant at the time, but I knew that if I wanted to understand modern computer vision, this was where I needed to start.
</p>


<p>
When I began working on this, I hadn’t taken any university courses in machine learning or artificial intelligence yet. I didn’t have a structured curriculum guiding me forward, which made the process harder — but also more meaningful.
Very quickly, I realized how challenging this topic really was. I struggled with things like matrix multiplication, understanding how images are represented as numbers, and figuring out how small numerical changes could affect the model’s output. Many times, I felt like I was missing some fundamental piece of understanding.
</p>

<h2>How I Approached Learning Something Difficult</h2>

<p>
Instead of giving up, I leaned into the way I naturally like to learn. I used textbooks, blog posts, Math Stack Exchange discussions, and videos to slowly piece things together. Often I would read something, get confused, step away, and then come back later with a clearer perspective.
This cycle of confusion, reflection, and iteration became the core of how I made progress. Over time, ideas that once felt overwhelming started to make sense.
</p>

<p>
At a certain point, I realized that reading and watching explanations wasn’t enough. I needed to actually build something to truly understand it. That’s when I decided to implement a convolutional neural network entirely from scratch using Python and NumPy.
By avoiding high-level frameworks, I was forced to confront every step of the process — how convolution works on images, how activations change values, how errors propagate backward through the network, and why training improves predictions over time.
</p>

<p>
To solidify my understanding, I documented the mathematics alongside the code in a Jupyter Notebook. Writing explanations in my own words helped me identify gaps in my understanding and correct them.
</p>

<h2>What This Project Represents to Me</h2>

<p>
On the surface, this project is a convolutional neural network trained on handwritten digits. But for me, it represents something deeper. It represents curiosity, persistence, and a willingness to struggle with difficult ideas rather than avoiding them.
This project taught me how to break down complex systems, how to rely on mathematics as a tool for understanding, and how powerful iteration can be when learning something new.
Now, when I look at advanced models like YOLO, they no longer feel like complete black boxes. I may not understand every detail yet, but I understand where those details come from — and that makes all the difference.
</p>

<p>
This notebook captures a snapshot of that learning journey. It’s not the end goal, but the foundation for deeper exploration into machine learning and computer vision moving forward.
</p>

    `,
        tags: ["Machine Learning", "Python", "NumPy"],
    },
];
