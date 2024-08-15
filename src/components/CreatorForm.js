import React, { useState } from 'react';
import Select from 'react-select';
import './CreatorForm.css';

const skillsOptions = [
  "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "HTML", "CSS",
  "TypeScript", "GraphQL", "REST APIs", "Docker", "Kubernetes", "AWS", "Azure",
  "Google Cloud Platform", "Git", "Agile Methodologies", "DevOps", "Continuous Integration",
  "Microservices", "Python", "Django", "Flask", "Ruby on Rails", "Java", "Spring Boot",
  "C#", ".NET", "PHP", "Laravel", "Swift", "Kotlin", "Android Development", "iOS Development",
  "Flutter", "React Native", "Angular", "Vue.js", "Graphic Design", "UI/UX Design", "Web Design",
  "Mobile App Design", "Prototyping", "Wireframing", "Adobe Photoshop", "Adobe Illustrator",
  "Adobe XD", "Sketch", "Figma", "InVision", "3D Modeling", "Animation", "Motion Graphics",
  "Video Editing", "Photography", "Branding", "Typography", "Copywriting", "Content Writing",
  "Blogging", "Social Media Management", "SEO", "Digital Marketing", "Video Production",
  "Podcasting", "Influencer Marketing", "Email Marketing", "Storytelling", "Scriptwriting",
  "Creative Writing", "Market Research", "Data Analysis", "Lead Generation", "Customer Relationship Management (CRM)",
  "Sales Strategy", "E-commerce", "PPC Advertising", "Affiliate Marketing", "Conversion Rate Optimization (CRO)",
  "Brand Management", "Public Relations (PR)", "Project Management", "Product Management", "Business Analysis",
  "Strategic Planning", "Financial Management", "Risk Management", "Operations Management", "Human Resources",
  "Talent Acquisition", "Negotiation", "Leadership", "Team Management", "Business Development", "Cybersecurity",
  "Ethical Hacking", "Blockchain", "Machine Learning", "Data Science", "Artificial Intelligence", "Data Engineering",
  "Data Visualization", "Business Intelligence", "Network Administration", "System Administration", "Communication",
  "Teamwork", "Problem-Solving", "Time Management", "Adaptability", "Critical Thinking", "Creativity",
  "Emotional Intelligence", "Conflict Resolution", "Decision Making", "Language Proficiency", "Customer Service",
  "Technical Writing", "Event Planning", "Public Speaking", "Research"
];

function CreatorForm() {
  const [bio, setBio] = useState('');
  const [skills, setSkills] = useState([]);
  const [portfolio, setPortfolio] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handleBioChange = (event) => setBio(event.target.value);
  const handlePortfolioChange = (event) => setPortfolio(event.target.value);
  const handleProfileImageChange = (event) => setProfileImage(event.target.value);
  const handleSkillsChange = (selectedOptions) => setSkills(selectedOptions);

  const handleSubmit = (event) => {
    event.preventDefault();
    const creatorData = {
      bio,
      skills: skills.map(skill => skill.value),
      portfolio,
      profileImage,
    };
    console.log('Creator Data:', creatorData);
    // You can make an API call here to save the creator data
  };

  const skillOptions = skillsOptions.map(skill => ({ value: skill, label: skill }));

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'transparent',
      border: 'none',
      borderBottom: '2px solid #ccc',
      borderRadius: '0',
      boxShadow: 'none',
      '&:hover': {
        borderBottom: '2px solid #888',
      },
      minHeight: '40px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '0',
    }),
    input: (provided) => ({
      ...provided,
      margin: '0',
      padding: '0',
    }),
    placeholder: (provided) => ({
      ...provided,
      margin: '0',
      padding: '0',
    }),
    multiValue: (provided) => ({
      ...provided,
      backgroundColor: '#e397ffa8',
      color: 'white',
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      color: 'white',
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: 'white',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#d277e3',
        color: 'white',
      },
    }),
  };

  return (
    <div className='creator-div'>
    <div className='creator-img'></div>
    <div className="creator-form">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bio">Bio:</label>
          <textarea id="bio" value={bio} onChange={handleBioChange} />
        </div>
        <div className="form-group">
          <label htmlFor="skills">Skills:</label>
          <Select
            id="skills"
            isMulti
            options={skillOptions}
            onChange={handleSkillsChange}
            value={skills}
            placeholder="Select your skills"
            styles={customStyles}
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolio">Instagram Profile Url:</label>
          <input id="portfolio" type="text" value={portfolio} onChange={handlePortfolioChange} />

          <label htmlFor="portfolio">Youtube Profile Url:</label>
          <input id="portfolio" type="text"  value={portfolio} onChange={handlePortfolioChange} />
        </div>
        <div className="form-group">
          <label htmlFor="profileImage">Profile Image:</label>
          <input id="profileImage" type="file" value={profileImage} onChange={handleProfileImageChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default CreatorForm;
