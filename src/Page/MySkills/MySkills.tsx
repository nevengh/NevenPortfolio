import "./MySkills.css";

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 85 },
  { name: "Java Script", percentage: 80 },
  { name: "Redux", percentage: 75 },
  { name: "React Hooks", percentage: 85 },
  { name: "React Hook Form", percentage: 80 },
  { name: "RestFull APIs", percentage: 75 },
  { name: "React AG Grid", percentage: 70 },
  { name: "Typescript", percentage: 75 },
  { name: "Responsive App", percentage: 85 },
  { name: "Wordpress", percentage: 80 },
  { name: "Bootstrap", percentage: 70 },
  { name: "Git Basics", percentage: 65 },
  { name: "Problem Solving", percentage: 90 },
  { name: "Teamwork", percentage: 85 },
  { name: "Adaptability", percentage: 80 },
  { name: "Cpanel", percentage: 80 },
  { name: "Trello", percentage: 70 },
];

const MySkills = () => {
  return (
    <div className="MySkills">
      <h1 className="AboutMe-title">
        My <span>Skills</span>
      </h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div
              className="circular-progress"
              style={{
                "--percentage": skill.percentage,
              } as React.CSSProperties}
            >
              <span className="progress-text">{skill.percentage}%</span>
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default MySkills;
