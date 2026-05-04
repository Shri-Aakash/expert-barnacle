import React, { useState, useEffect } from 'react';
import { 
  Moon, Sun, Mail, Github, Linkedin, MapPin, 
  Briefcase, GraduationCap, Award, ChevronRight, Terminal, Cpu, X, Code, Download
} from 'lucide-react';

const experienceData = [
  {
    id: 'se',
    title: 'Software Engineer',
    subtitle: 'Siemens Healthineers',
    date: 'July 2023 - Present',
    shortDesc: 'Designed real-time PET-MR calibration workflows and automated firmware updates. Resolved critical memory leaks and improved DevOps pipelines.',
    points: [
      'Designed and implemented robust PET-MR calibration workflows for real-time image acquisition and monitoring on MR consoles to support clinical imaging diagnostics.',
      'Built firmware update automation for PET systems with versioning logic, reducing manual overhead and ensuring compatibility with MR systems.',
      'Resolved critical memory leaks, reducing RAM usage by 40% and improving runtime performance on clinical systems.',
      'Developed Azure DevOps (YAML) pipelines to improve automated test coverage from 30% to 65%, accelerating regression testing by 40%.',
      'Handled integration of PET delivery packages into MRI systems by collaborating between two teams, reducing integration time significantly.',
      'Streamlined release branching and check-in workflows, halving feature delivery latency to release testing environments.',
      'Worked with clinical and agile teams to resolve 15+ critical field defects.'
    ],
    tags: ['C#', 'C++', 'Azure DevOps', 'YAML', 'Git']
  },
  {
    id: 'intern',
    title: 'Software Engineering Intern',
    subtitle: 'Siemens Healthineers',
    date: 'Jan 2023 - July 2023',
    shortDesc: 'Prototyped PET-MR calibration using C# and C++/CLI and implemented backend error reporting for UI display layers.',
    points: [
      'Conducted manual testing to uncover crash and edge-case scenarios; logged and tracked bugs in Azure Boards.',
      'Implemented backend error reporting mechanisms integrated into UI display layers.',
      'Prototyped PET-MR calibration workflow using service-oriented modules in C# and C++/CLI with a component-based architecture.'
    ],
    tags: ['C#', 'C++/CLI', 'Azure Boards']
  }
];

const academicProjectData = [
  {
    id: 'alpha',
    title: 'Humanoid Robot - Alpha X',
    subtitle: 'Academic Project',
    date: 'Jul 2022 - Dec 2022',
    year: '2022',
    shortDesc: 'Modular humanoid assistant with voice and vision-based interaction on Jetson Xavier AGX. Integrated wake-word detection and facial recognition.',
    points: [
      'Built a modular humanoid assistant with voice and vision-based interaction on Jetson Xavier AGX.',
      'Integrated wake-word detection ("Hey Alpha") with Google Cloud STT and local NLP models for real-time voice responses (15ms latency).',
      'Facial recognition (dlib) achieved 90% accuracy with 10ms latency under varied lighting.',
      'Enabled person-tracking, and visitor management using embedded systems.'
    ],
    tags: ['Jetson AGX', 'NLP', 'dlib', 'Google Cloud STT']
  },
  {
    id: 'scara',
    title: 'Modified SCARA for Tomato Sorting',
    subtitle: 'Academic Project & Paper',
    date: 'Jul 2022 - Dec 2022',
    year: '2022',
    shortDesc: 'Robotic SCARA system for tomato classification using YOLOv5, achieving 97% mAP. Engineered coordinate transforms and inverse kinematics.',
    points: [
      'Designed a robotic SCARA system for tomato classification using YOLOv5; achieved 97% mAP with 22ms/frame inference on Jetson Nano.',
      'Engineered coordinate transforms and inverse kinematics for precision robotic arm control.',
      'Validated full motion pipeline using MATLAB simulations.',
      'Presented Paper: 2nd Place Advitya 2022 for Modified SCARA Tomato Sorting System.'
    ],
    tags: ['YOLOv5', 'Jetson Nano', 'MATLAB', 'Robotics']
  }
];

const openSourceProjectData = [
  {
    id: 'pr-review',
    title: 'AI PR Review Agent',
    subtitle: 'Open Source Project',
    date: '2026',
    year: '2026',
    shortDesc: 'Diff-aware AI system to analyze multi-file pull requests using LLM reasoning and static analysis.',
    points: [
      'Built a diff-aware AI system to analyze multi-file pull requests, combining static analysis with LLM reasoning to detect code quality issues and design risks.',
      'Designed a pluggable architecture enabling extensible rule-based and ML-based analysis, supporting integration of multiple code analysis signals.',
      'Implemented incremental processing to analyze only changed code, reducing analysis scope and enabling scalable review workflows.',
      'Evaluated on real-world repositories (Flask, Django), successfully identifying high-severity issues and generating structured review outputs.'
    ],
    tags: ['LLMs', 'AI Agents', 'Code Analysis', 'Python'],
    github: 'https://github.com/Shri-Aakash'
  },
  {
    id: 'devsecops',
    title: 'AI DevSecOps Code Modernizer',
    subtitle: 'Open Source Project',
    date: '2026',
    year: '2026',
    shortDesc: 'AI-powered modernization agent to detect security vulnerabilities and generate safe refactoring patches using LLMs.',
    points: [
      'Developed an AI-powered modernization agent to detect security vulnerabilities (e.g., SQL injection) and generate safe refactoring patches using LLMs.',
      'Combined regex-based static analysis with LLM reasoning to identify multiple vulnerability patterns and produce secure transformations while preserving business logic.',
      'Generated developer-ready patch files (Unified Diff format), enabling safe integration into existing workflows via git apply.',
      'Validated on real-world vulnerable codebases, automatically detecting critical security flaws and producing actionable remediation outputs.'
    ],
    tags: ['LLMs', 'DevSecOps', 'Static Analysis', 'Security'],
    github: 'https://github.com/Shri-Aakash'
  },
  {
    id: 'objdetmicro',
    title: 'Object Detection Microservice',
    subtitle: 'Open Source Project',
    date: '2023 - 2024',
    year: '2024',
    shortDesc: 'Production-ready microservices architecture for object detection using YOLOv8, FastAPI, and OpenVINO with Docker containerization.',
    points: [
      'Developed a scalable microservices architecture using FastAPI, separating the AI inference backend from the UI file-handling backend.',
      'Optimized YOLOv8 object detection inference speed utilizing Intel OpenVINO.',
      'Implemented robust request queuing, semaphore-based concurrency control, and distributed rate limiting with Redis.',
      'Containerized the entire application ecosystem using Docker and Docker Compose for seamless deployment.'
    ],
    tags: ['FastAPI', 'YOLOv8', 'OpenVINO', 'Docker', 'Microservices'],
    github: 'https://github.com/Shri-Aakash/ObjecDetMicro'
  }
];

export default function App() {
  // Default to dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (modalContent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [modalContent]);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-900 text-slate-200' : 'bg-gray-50 text-gray-800'}`}>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
            Shri Aakash
          </div>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        
        {/* Header / Hero Section */}
        <header className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Shri Aakash Padmanabhan
          </h1>
          <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium">
            Software Engineer <span className="text-gray-400 dark:text-gray-600">|</span> AI Systems & Robotics
          </p>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Building robust firmware, optimizing C++ performance, and developing LLM-based agents and machine learning systems. Currently working on clinical imaging diagnostics at Siemens Healthineers.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="/ShriAakash-Resume.pdf" 
              download="ShriAakash-Resume.pdf"
              className="flex items-center gap-2 px-5 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-sm"
            >
              <Download size={18} /> Download Resume
            </a>
            <a href="mailto:aakaash2001@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-200 transition">
              <Mail size={18} /> aakaash2001@gmail.com
            </a>
            <a href="https://github.com/Shri-Aakash" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-200 transition">
              <Github size={18} /> Shri-Aakash
            </a>
            <a href="https://linkedin.com/in/shri-aakash-49aa631b2" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-200 transition">
              <Linkedin size={18} /> LinkedIn
            </a>
            <div className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-400">
              <MapPin size={18} /> Bengaluru, India
            </div>
          </div>
        </header>

        {/* Timelines Section */}
        <section className="grid md:grid-cols-2 gap-12">
          
          {/* Experience Graph */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-blue-600 dark:text-blue-400" size={28} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
            </div>
            
            <div className="relative border-l-2 border-gray-200 dark:border-slate-700 ml-3">
              
              {experienceData.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`ml-8 cursor-pointer group ${index !== experienceData.length - 1 ? 'mb-10' : ''}`}
                  onClick={() => setModalContent(exp)}
                >
                  <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -left-[9px] ring-4 ring-gray-50 dark:ring-slate-900 bg-blue-600 dark:bg-blue-500 group-hover:scale-125 transition-transform duration-300"></span>
                  <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300">
                    <h3 className="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="block mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">{exp.subtitle}</div>
                    <time className="block mb-3 text-sm font-normal text-gray-500 dark:text-gray-400">{exp.date}</time>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{exp.shortDesc}</p>
                    <div className="mt-3 text-xs font-semibold text-blue-500 dark:text-blue-400 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                      Click to expand <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Education Graph */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-blue-600 dark:text-blue-400" size={28} />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            
            <div className="relative border-l-2 border-gray-200 dark:border-slate-700 ml-3">
              
              <div className="mb-10 ml-8">
                <span className="absolute flex items-center justify-center w-4 h-4 rounded-full -left-[9px] ring-4 ring-gray-50 dark:ring-slate-900 bg-blue-600 dark:bg-blue-500"></span>
                <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
                  B.E. Automation and Robotics
                </h3>
                <div className="block mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">KLE Technological University</div>
                <time className="block mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">2019 - 2023 • Hubballi, Karnataka</time>
                <div className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <p><strong>Minor:</strong> Computer Science and Engineering</p>
                  <p><strong>CGPA:</strong> 9.5/10 (Rank 1, Gold Medalist)</p>
                </div>
              </div>

            </div>

            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-blue-600 dark:text-blue-400" size={24} />
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Achievements</h2>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong>Paper Presentation:</strong> 2nd Place Advitya 2022 for Modified SCARA Tomato Sorting System.</span>
                </li>
                <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
                  <ChevronRight size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span><strong>National Rank 1:</strong> InMovidu Tech All-India Scholarship Test (2020).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Terminal className="text-blue-600 dark:text-blue-400" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Programming</h3>
              <div className="flex flex-wrap gap-2">
                {['C#', 'C++', 'Python', 'JavaScript'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-mono bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md border border-blue-100 dark:border-blue-800/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">AI / ML</h3>
              <div className="flex flex-wrap gap-2">
                {['PyTorch', 'OpenCV', 'YOLOv5', 'dlib', 'scikit-learn'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-mono bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md border border-purple-100 dark:border-purple-800/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">AI Systems</h3>
              <div className="flex flex-wrap gap-2">
                {['LLM-based Agents', 'Code Analysis', 'Prompt Engineering'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-mono bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-md border border-indigo-100 dark:border-indigo-800/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['Azure DevOps', 'Git', 'Docker', 'Kubernetes'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-mono bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-md border border-teal-100 dark:border-teal-800/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-200 dark:border-slate-700">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Embedded & Robotics</h3>
              <div className="flex flex-wrap gap-2">
                {['ROS', 'ROS2', 'Jetson AGX/Nano', 'Arduino', 'Raspberry Pi'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-mono bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-md border border-orange-100 dark:border-orange-800/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Open Source Projects */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Code className="text-blue-600 dark:text-blue-400" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Open Source & AI Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {openSourceProjectData.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 flex flex-col h-full cursor-pointer hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
                onClick={() => setModalContent(project)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-slate-700">
                  {project.tags.slice(0,3).map(tag => (
                    <span key={tag} className="text-xs font-mono text-gray-500 dark:text-gray-400">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 text-xs font-semibold text-blue-500 dark:text-blue-400 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  View full details <ChevronRight size={14} />
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* Academic Projects */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="text-blue-600 dark:text-blue-400" size={28} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Projects & Publications</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {academicProjectData.map((project) => (
              <div 
                key={project.id}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 flex flex-col h-full cursor-pointer hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 group"
                onClick={() => setModalContent(project)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-slate-700">
                  {project.tags.slice(0,3).map(tag => (
                    <span key={tag} className="text-xs font-mono text-gray-500 dark:text-gray-400">{tag}</span>
                  ))}
                </div>
                <div className="mt-4 text-xs font-semibold text-blue-500 dark:text-blue-400 flex items-center gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
                  View full details <ChevronRight size={14} />
                </div>
              </div>
            ))}

          </div>
        </section>

      </main>
      
      {/* Modal Overlay */}
      {modalContent && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          onClick={() => setModalContent(null)}
        >
          <div 
            className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-2xl max-w-2xl w-full shadow-2xl relative border border-gray-200 dark:border-slate-700 transform transition-all max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-600 dark:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 pr-8">{modalContent.title}</h2>
            <div className="text-blue-600 dark:text-blue-400 font-medium mb-1">{modalContent.subtitle}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-6">{modalContent.date}</div>
            
            <ul className="space-y-3 text-gray-600 dark:text-gray-300 text-sm md:text-base list-disc list-inside mb-8">
              {modalContent.points.map((point, i) => (
                <li key={i} className="leading-relaxed">{point}</li>
              ))}
            </ul>
            
            {modalContent.github && (
              <a 
                href={modalContent.github} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-gray-800 dark:text-slate-200 transition-colors text-sm font-medium"
              >
                <Github size={16} /> View on GitHub
              </a>
            )}
            
            <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100 dark:border-slate-700">
              {modalContent.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-mono bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-gray-200 dark:border-slate-800 mt-12 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Shri Aakash Padmanabhan. Built for performance and reliability.</p>
      </footer>
    </div>
  );
}