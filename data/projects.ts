export interface Project {
    title: string;
    period: string;
    problem: string;
    solution: string;
    techStack: string[];
    challenges: string[];
    outcome: string;
    githubUrl?: string;
    featured?: boolean;
}

export const projectsData: Project[] = [
    {
        title: "Smartphone-Based Augmented Reality Application for IIT Bombay Campus",
        period: "Jul 2025 - Nov 2025",
        problem: "Campus exploration needs contextual spatial information that is visible in the user's real-world view instead of being limited to static maps.",
        solution: "Developed a mobile AR geospatial visualization system using Unity, ARCore, and C#, integrating GPS, compass, and camera tracking for real-time overlays of campus points of interest.",
        techStack: ["Unity", "ARCore", "C#", "GPS", "Compass", "Computer Vision", "Geospatial Coordinates"],
        challenges: [
            "Fusing sensor data from GPS, compass, and camera tracking",
            "Aligning geospatial coordinates with AR overlays",
            "Designing an interactive interface for campus point-of-interest exploration",
        ],
        outcome: "Built an AR-based exploration experience that displays spatial campus information directly through a smartphone interface.",
        featured: true,
    },
    {
        title: "Flood Risk Prediction and Spatial Mapping Using Machine Learning",
        period: "Jan 2026 - Apr 2026",
        problem: "Flood risk assessment requires time-aware analysis of rainfall trends and interpretable spatial outputs for regional decision-making.",
        solution: "Built a machine learning pipeline using historical rainfall data across Indian subdivisions, engineering lag, rolling-average, and seasonal features for chronological model validation.",
        techStack: ["Python", "Machine Learning", "Logistic Regression", "Decision Tree", "Random Forest", "Geospatial Visualization"],
        challenges: [
            "Preventing temporal leakage with chronological train-test validation",
            "Benchmarking ML models against rule-based baselines",
            "Creating calibrated probabilistic outputs and state-level risk maps",
        ],
        outcome: "Produced interpretable flood-risk predictions and spatial visualizations that connect rainfall history with regional risk mapping.",
        featured: true,
    },
    {
        title: "Custom Deep Learning Framework (C++ Backend + Python Frontend)",
        period: "Academic Project",
        problem: "Modern deep learning libraries hide the mechanics of tensor computation, automatic differentiation, and model training behind high-level APIs.",
        solution: "Built a deep learning framework from scratch without PyTorch, TensorFlow, NumPy, or SciPy. Designed a C++ backend for tensor operations, automatic differentiation, convolution layers, pooling, and activation functions, with a Python frontend for dataset handling, training, evaluation, and optimization.",
        techStack: ["C++", "Python", "OpenCV"],
        challenges: [
            "Implemented backpropagation, SGD optimization with L2 regularization, early stopping, and model checkpointing",
            "Computed model complexity metrics including parameters, MACs, and FLOPs",
            "Designed and trained CNN models on image datasets through a complete training pipeline",
        ],
        outcome: "Delivered an end-to-end educational deep learning framework that exposes the internals of CNN training, optimization, evaluation, and model complexity analysis.",
        featured: true,
    },
    {
        title: "Deep Learning-Based Visual MCQ Solver",
        period: "Academic Project",
        problem: "Solving multiple-choice questions from images requires extracting visual question content and mapping it to a fixed-option answer format.",
        solution: "Developed an intelligent computer vision pipeline to process PNG images containing questions, apply preprocessing, extract meaningful visual representations, and run model inference for four-option MCQ answer prediction.",
        techStack: ["Python", "Deep Learning", "Computer Vision"],
        challenges: [
            "Structured input handling for fixed-option MCQ images with four answer choices",
            "Built model inference flow for visual question understanding and answer prediction",
            "Designed an evaluation strategy to compare predicted answers against labeled ground truth",
        ],
        outcome: "Created a visual reasoning prototype that combines image preprocessing, deep learning inference, and answer evaluation for automated MCQ solving.",
        featured: true,
    },
];
