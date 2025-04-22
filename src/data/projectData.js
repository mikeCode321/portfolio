import placeholderImg1 from '../img/smart_workout_buddy.png';
import placeholderImg2 from '../img/drawing_recognizer.png';
import placeholderImg3 from '../img/media_mix_modeling.png';
import placeholderImg4 from '../img/yolo_object_detect.png';
import placeholderImg5 from '../img/tumor_detect.png';
import placeholderImg6 from '../img/ebooks.png';
import placeholderImg7 from '../img/8_bit_computer.png';
import placeholderImg8 from '../img/ai_car_sim.png';
import placeholderImg9 from '../img/algo_sim_1.png';
import placeholderImg10 from '../img/gpt2.png';
import placeholderImg11 from '../img/soccer-cv-ai.png';
// import video from '../img/deep-learning-soccer.mp4'

export const getProjects = () => {
  return [
    {
      title: 'Smart Workout Buddy',
      description: 'An AI-powered workout buddy that tracks your exercises and provides feedback.',
      image: placeholderImg1,
      link: 'https://dx.doi.org/10.7302/24869',
      demo: 'https://docs.google.com/presentation/d/1Dqh8c6I8UeLtqE49n_uqsVCD3K4QQGWkdAEo0cYCNzo/edit?usp=sharing',
      demo_coming_soon: false,
      asset: null,
      video: null
    },
    {
      title: 'Deep Learning Soccer Analysis and Player Tracking',
      description: 'A computer vision approach to derive player metrics and tracking.',
      image: placeholderImg11,
      link: null,
      demo: null,
      demo_coming_soon: false,
      asset: true,
      video: true
    },
    {
      title: 'Media Mix Modeling',
      description: 'A marketing model that helps companies optimize their advertising budget.',
      image: placeholderImg3,
      link: 'https://www.canva.com/design/DAGbvO3CoaY/P3qtjO6CgYOIMIyzpZ4Ucg/view#2',
      demo: null,
      demo_coming_soon: false,
      asset: null,
      video: null
    },
    {
      title: 'Drawing Recognizer',
      description: 'A drawing recognition model that identifies the object you draw.',
      image: placeholderImg2,
      link: 'https://www.canva.com/design/DAGbvO3CoaY/P3qtjO6CgYOIMIyzpZ4Ucg/view#1',
      demo: 'https://mikecode321.github.io/drawing_recognizer_ml/',
      demo_coming_soon: false,
      asset: null,
      video: null
    },
    {
      title: 'Algorithm Simulations',
      description: 'Interactive simulations for pathfinding and sorting, with advanced visuals and animations.',
      image: placeholderImg9,
      link: 'https://mikecode321.github.io/algo-visualizer/',
      demo: 'https://mikecode321.github.io/algo-visualizer/',
      demo_coming_soon: false,
      asset: null,
      video: null
    },
    {
      title: 'AI Car Simulation',
      description: 'An AI model that learns to drive a car in a simulation environment.',
      image: placeholderImg8,
      link: 'https://mikecode321.github.io/ai-car-sim/',
      demo: 'https://mikecode321.github.io/ai-car-sim/',
      demo_coming_soon: false,
      asset: null,
      video: null
    },
    {
      title: 'YOLO Object Detection',
      description: 'An object detection model that identifies objects in images and videos.',
      image: placeholderImg4,
      link: 'https://www.canva.com/design/DAGbvO3CoaY/P3qtjO6CgYOIMIyzpZ4Ucg/view#3',
      demo: null,
      demo_coming_soon: false,
      asset: null,
      video: null
    },
    {
      title: 'Tumor Detection',
      description: 'A medical model that detects tumors in X-ray and MRI images.',
      image: placeholderImg5,
      link: 'https://www.canva.com/design/DAGbvO3CoaY/P3qtjO6CgYOIMIyzpZ4Ucg/view#3',
      demo: null,
      demo_coming_soon: false,
      asset: null,
      video: null
    },
    {
      title: 'GPT-2 From Scratch: Story Teller AI',
      description: 'Building a GPT-2 architecture from scratch to generate stories like outputs.',
      image: placeholderImg10,
      link: 'https://github.com/mikeCode321/echoGPT/blob/main/echoGPT.ipynb',
      demo: null,
      demo_coming_soon: false,
      asset: null,
      video: null
    },
    {
      title: 'My E-Books',
      description: 'Free interactive e-books I will be authoring. Topics range from mathematics to embedded systems.',
      image: placeholderImg6,
      link: null,
      demo: null,
      demo_coming_soon: true,
      asset: null,
      video: null
    },
    {
      title: '8-Bit Computer From Scratch (TTL Chips)',
      description: 'Building an 8-bit computer from scratch using TTL chips',
      image: placeholderImg7,
      link: null,
      demo: null,
      demo_coming_soon: true,
      asset: null,
      video: null
    },
  ];
};
