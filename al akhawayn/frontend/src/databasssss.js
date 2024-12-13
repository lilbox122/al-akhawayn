const books = [
    {
      "id": "1",
      "name": "Introduction to Physics",
      "category": "Science",
      "available": true,
      "description": "An introductory book on the principles of physics.",
      "picture": "/images/quantum-physics.jpg"
    },
    {
      "id": "2",
      "name": "Advanced Physics",
      "category": "Science",
      "available": true,
      "description": "A detailed exploration of advanced physics in the field of science.",
      "picture": "/images/quantum-physics.jpg"
    },
    {
      "id": "3",
      "name": "Biology Basics",
      "category": "Science",
      "available": false,
      "description": "A detailed exploration of biology basics in the field of science.",
      "picture": "/images/quantum-physics.jpg"
    },
    {
      "id": "4",
      "name": "Chemistry in Everyday Life",
      "category": "Science",
      "available": true,
      "description": "A detailed exploration of chemistry in everyday life in the field of science.",
      "picture": "/images/quantum-physics.jpg"
    },
    {
      "id": "5",
      "name": "The Universe Explained",
      "category": "Science",
      "available": false,
      "description": "A detailed exploration of the universe explained in the field of science.",
      "picture": "/images/quantum-physics.jpg"
    },
    {
      "id": "6",
      "name": "World War II Chronicles",
      "category": "History",
      "available": true,
      "description": "A detailed exploration of world war ii chronicles in the field of history.",
      "picture": "/images/quantum-physics.jpg"
    },
    {
      "id": "7",
      "name": "Art Through the Ages",
      "category": "Art",
      "available": true,
      "description": "A comprehensive guide to art history and famous works.",
      "picture": "/images/art-history.jpg"
    },
    {
      "id": "8",
      "name": "The Digital Revolution",
      "category": "Technology",
      "available": false,
      "description": "Understanding the impact of digital technology on society.",
      "picture": "/images/digital-revolution.jpg"
    },
    {
      "id": "9",
      "name": "Machine Learning Basics",
      "category": "Technology",
      "available": true,
      "description": "An introduction to machine learning and AI concepts.",
      "picture": "/images/machine-learning.jpg"
    },
    {
      "id": "10",
      "name": "Great Novels of the 20th Century",
      "category": "Literature",
      "available": true,
      "description": "A collection of the most impactful novels of the 20th century.",
      "picture": "/images/novels.jpg"
    },
    {
      "id": "11",
      "name": "Understanding Ecology",
      "category": "Science",
      "available": false,
      "description": "Exploring the relationship between organisms and their environments.",
      "picture": "/images/ecology.jpg"
    },
    {
      "id": "12",
      "name": "The History of Mathematics",
      "category": "Science",
      "available": true,
      "description": "Tracing the development of mathematical concepts throughout history.",
      "picture": "/images/math-history.jpg"
    },
    {
      "id": "13",
      "name": "The Rise of AI",
      "category": "Technology",
      "available": true,
      "description": "Examining the growth and impact of artificial intelligence.",
      "picture": "/images/ai-rise.jpg"
    },
    {
      "id": "14",
      "name": "Renaissance Art",
      "category": "Art",
      "available": false,
      "description": "A deep dive into the masterpieces of the Renaissance.",
      "picture": "/images/renaissance-art.jpg"
    },
    {
      "id": "15",
      "name": "Modern Fiction",
      "category": "Literature",
      "available": true,
      "description": "Exploring the most influential modern works of fiction.",
      "picture": "/images/modern-fiction.jpg"
    },
    {
      "id": "16",
      "name": "Ancient Civilizations",
      "category": "History",
      "available": true,
      "description": "A study of ancient civilizations and their contributions.",
      "picture": "/images/ancient-civilizations.jpg"
    },
    {
      "id": "17",
      "name": "Environmental Science",
      "category": "Science",
      "available": true,
      "description": "Understanding the principles of environmental science.",
      "picture": "/images/environmental-science.jpg"
    },
    {
      "id": "18",
      "name": "Space Exploration",
      "category": "Science",
      "available": false,
      "description": "The journey of humanity's exploration of space.",
      "picture": "/images/space-exploration.jpg"
    },
    {
      "id": "19",
      "name": "The Psychology of Art",
      "category": "Art",
      "available": true,
      "description": "Understanding the psychological aspects of art and creativity.",
      "picture": "/images/art-psychology.jpg"
    },
    {
      "id": "20",
      "name": "The Internet Age",
      "category": "Technology",
      "available": true,
      "description": "Exploring the effects of the internet on modern society.",
      "picture": "/images/internet-age.jpg"
    },
    {
      "id": "21",
      "name": "Medieval Europe",
      "category": "History",
      "available": false,
      "description": "A detailed study of medieval Europe and its culture.",
      "picture": "/images/medieval-europe.jpg"
    },
    {
      "id": "22",
      "name": "Quantum Mechanics",
      "category": "Science",
      "available": true,
      "description": "A beginner's guide to the principles of quantum mechanics.",
      "picture": "/images/quantum-mechanics.jpg"
    },
    {
      "id": "23",
      "name": "Data Science Explained",
      "category": "Technology",
      "available": true,
      "description": "An introduction to data science and its applications.",
      "picture": "/images/data-science.jpg"
    },
    {
      "id": "24",
      "name": "Shakespeare's Works",
      "category": "Literature",
      "available": true,
      "description": "A collection of plays and sonnets by William Shakespeare.",
      "picture": "/images/shakespeare.jpg"
    },
    {
      "id": "25",
      "name": "Modern Architecture",
      "category": "Art",
      "available": false,
      "description": "Exploring the designs of modern architecture.",
      "picture": "/images/modern-architecture.jpg"
    },
    {
      "id": "26",
      "name": "Advanced Robotics",
      "category": "Technology",
      "available": true,
      "description": "Understanding the advancements in robotics technology.",
      "picture": "/images/robotics.jpg"
    },
    {
      "id": "27",
      "name": "The Cold War",
      "category": "History",
      "available": false,
      "description": "A comprehensive guide to the Cold War and its impact.",
      "picture": "/images/cold-war.jpg"
    },
    {
      "id": "28",
      "name": "Digital Art",
      "category": "Art",
      "available": true,
      "description": "Understanding the techniques and impact of digital art.",
      "picture": "/images/digital-art.jpg"
    },
    {
      "id": "29",
      "name": "Renewable Energy",
      "category": "Science",
      "available": true,
      "description": "Exploring the technologies behind renewable energy.",
      "picture": "/images/renewable-energy.jpg"
    },
    {
      "id": "30",
      "name": "Literary Criticism",
      "category": "Literature",
      "available": true,
      "description": "An introduction to the principles of literary criticism.",
      "picture": "/images/literary-criticism.jpg"
    },
    {
      "id": "31",
      "name": "Biotechnology Advances",
      "category": "Science",
      "available": true,
      "description": "Understanding the latest advancements in biotechnology.",
      "picture": "/images/biotechnology.jpg"
    },
    {
      "id": "32",
      "name": "The Renaissance Period",
      "category": "History",
      "available": false,
      "description": "A study of the Renaissance and its impact on art and culture.",
      "picture": "/images/renaissance-period.jpg"
    },
    {
      "id": "33",
      "name": "Philosophy and Art",
      "category": "Art",
      "available": true,
      "description": "Exploring the intersection of philosophy and art.",
      "picture": "/images/philosophy-art.jpg"
    },
    {
      "id": "34",
      "name": "Cloud Computing",
      "category": "Technology",
      "available": true,
      "description": "An introduction to cloud computing and its applications.",
      "picture": "/images/cloud-computing.jpg"
    },
    {
      "id": "35",
      "name": "Ancient Mythology",
      "category": "Literature",
      "available": true,
      "description": "A collection of myths and legends from ancient cultures.",
      "picture": "/images/ancient-mythology.jpg"
    },
    {
      "id": "36",
      "name": "Space-Time Concepts",
      "category": "Science",
      "available": false,
      "description": "Exploring the concepts of space and time in physics.",
      "picture": "/images/space-time.jpg"
    },
    {
      "id": "37",
      "name": "Modern History",
      "category": "History",
      "available": true,
      "description": "Understanding the major events of modern history.",
      "picture": "/images/modern-history.jpg"
    },
    {
      "id": "38",
      "name": "The Science of AI",
      "category": "Technology",
      "available": true,
      "description": "Examining the science and ethics of artificial intelligence.",
      "picture": "/images/ai-science.jpg"
    },
    {
      "id": "39",
      "name": "Abstract Art",
      "category": "Art",
      "available": true,
      "description": "Exploring the techniques and impact of abstract art.",
      "picture": "/images/abstract-art.jpg"
    },
    {
      "id": "40",
      "name": "Contemporary Poetry",
      "category": "Literature",
      "available": false,
      "description": "A collection of contemporary poetry from around the world.",
      "picture": "/images/contemporary-poetry.jpg"
    },
    {
      "id": "41",
      "name": "Earth Sciences",
      "category": "Science",
      "available": true,
      "description": "Understanding the principles of earth sciences.",
      "picture": "/images/earth-sciences.jpg"
    },
    {
      "id": "42",
      "name": "Virtual Reality",
      "category": "Technology",
      "available": true,
      "description": "Exploring the technology behind virtual reality.",
      "picture": "/images/virtual-reality.jpg"
    },
    {
      "id": "43",
      "name": "The Age of Exploration",
      "category": "History",
      "available": true,
      "description": "Understanding the impact of the age of exploration.",
      "picture": "/images/age-exploration.jpg"
    },
    {
      "id": "44",
      "name": "Postmodern Literature",
      "category": "Literature",
      "available": false,
      "description": "A collection of works from the postmodern literature era.",
      "picture": "/images/postmodern-literature.jpg"
    },
    {
      "id": "45",
      "name": "Art and Technology",
      "category": "Art",
      "available": true,
      "description": "Exploring the integration of art and technology.",
      "picture": "/images/art-technology.jpg"
    },
    {
      "id": "46",
      "name": "The Solar System",
      "category": "Science",
      "available": true,
      "description": "Understanding the structure and dynamics of the solar system.",
      "picture": "/images/solar-system.jpg"
    },
    {
      "id": "47",
      "name": "Cybersecurity Essentials",
      "category": "Technology",
      "available": true,
      "description": "An introduction to the principles of cybersecurity.",
      "picture": "/images/cybersecurity.jpg"
    },
    {
      "id": "48",
      "name": "Romantic Poetry",
      "category": "Literature",
      "available": true,
      "description": "A collection of poems from the Romantic period.",
      "picture": "/images/romantic-poetry.jpg"
    },
    {
      "id": "49",
      "name": "Modern Art Movements",
      "category": "Art",
      "available": true,
      "description": "Understanding the key movements in modern art.",
      "picture": "/images/modern-art.jpg"
    },
    {
      "id": "50",
      "name": "Industrial Revolution",
      "category": "History",
      "available": true,
      "description": "Examining the impact of the industrial revolution on society.",
      "picture": "/images/industrial-revolution.jpg"
    }
  ];
  
  module.exports = books;
  