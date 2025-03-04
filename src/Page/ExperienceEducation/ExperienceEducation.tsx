import './ExperienceEducation.css';

const experiences = [
  {
    date: '2022 - Present',
    title: 'Front End Developer at Golden Click Marketing Agency',
    description:
      'Working as a front-end developer, building and maintaining websites for multiple clients across different industries, ensuring high performance, responsiveness, and creative UI designs.',
  },
  {
    date: 'Freelance Projects',
    title: 'Freelance Front End',
    description:
      'Delivered multiple freelance projects including  reservation platforms, and custom dashboards for businesses across various industries.',
  },
];

const education = [
  {
    date: '2016 - 2021',
    title: 'Bachelor Degree in Computer Engineering and Automatic Control',
    description: 'Tishreen University - Syria',
  },
  {
    date: '2023',
    title: 'Front-End Development Certificate',
    description: 'Focal X Agency - Syria',
  },
  {
    date: '2024',
    title: 'Full Stack Development Certificate',
    description: 'Focal X Agency - Syria',
  },
  {
    date: '2022',
    title: 'English Certificate',
    description: 'British Council - Syria',
  },
];

const ExperienceEducation = () => {
  return (
    <div className="ExperienceEducation">
      <h1 className="AboutMe-title">
        Experience <span>&</span> Education
      </h1>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">💼</div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <span>{exp.date}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
        {education.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">🎓</div>
            <div className="timeline-content">
              <h3>{edu.title}</h3>
              <span>{edu.date}</span>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExperienceEducation;
