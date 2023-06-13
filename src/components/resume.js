import React, { useState } from 'react';
import '../App.css';
import SkillInput from './skills';

const ResumeBuilder = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [education, setEducation] = useState([{ institution: '', year: '', degree: '' }]);
    const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
    const [skills, setSkills] = useState([]);

    const handleEducationChange = (index, event) => {
        const { name, value } = event.target;
        const updatedEducation = [...education];
        updatedEducation[index][name] = value;
        setEducation(updatedEducation);
    };

    const handleExperienceChange = (index, event) => {
        const { name, value } = event.target;
        const updatedExperience = [...experience];
        updatedExperience[index][name] = value;
        setExperience(updatedExperience);
    };

    const handleAddEducation = () => {
        setEducation([...education, { institution: '', year: '', degree: '' }]);
    };

    const handleDeleteEducation = (index) => {
        const updatedEducation = [...education];
        updatedEducation.splice(index, 1);
        setEducation(updatedEducation);
    };

    const handleAddExperience = () => {
        setExperience([...experience, { company: '', year: '', designation: '' }]);
    };

    const handleDeleteExperience = (index) => {
        const updatedExperience = [...experience];
        updatedExperience.splice(index, 1);
        setExperience(updatedExperience);
    };

    const handleSkillChange = (selectedSkills) => {
        setSkills(selectedSkills);
    };

    const containerStyle = {
        backgroundColor: "#ADD8E6",
    }
    const resumeStyle = {
        backgroundColor: "white",
    }
    const borderStyle={
        borderRadius: "10px",
    }
    return (
        <div className="container-fluid py-3" style={containerStyle}>
            <h1 className='py-3 mb-5 bg-warning ' style={borderStyle}>Resume Builder</h1>
            <div className='row mx-3'>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-6 text-left'>
                            <h2>Personal Information</h2>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone:</label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='col-md-6 text-left'>
                            <h2>Education</h2>
                            {education.map((edu, index) => (
                                <div key={index} className="mb-4">
                                    <b>Education {index + 1}*</b>
                                    {index>0? <a className='mx-2 text-dark' href='!#' onClick={() => handleDeleteEducation(index)}>X</a>: null}
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="institution">Institution:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="institution"
                                                name="institution"
                                                value={edu.institution}
                                                onChange={(e) => handleEducationChange(index, e)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="year">Year:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="year"
                                                name="year"
                                                value={edu.year}
                                                onChange={(e) => handleEducationChange(index, e)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="degree">Degree:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="degree"
                                                name="degree"
                                                value={edu.degree}
                                                onChange={(e) => handleEducationChange(index, e)}
                                            />
                                        </div>
                                    </form>
                                </div>
                            ))}
                            <button className="btn btn-warning" onClick={handleAddEducation}>
                                Add More Education
                            </button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6 text-left'>
                            <h2>Experience</h2>
                            {experience.map((exp, index) => (
                                <div key={index} className="mb-4">
                                    <b>Work experience {index + 1}*</b>
                                    {index>0? <a className='mx-2' href='!#' onClick={() => handleDeleteExperience(index)}>X</a>: null}
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="company">Company:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="company"
                                                name="company"
                                                value={exp.company}
                                                onChange={(e) => handleExperienceChange(index, e)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="year">Year:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="year"
                                                name="year"
                                                value={exp.year}
                                                onChange={(e) => handleExperienceChange(index, e)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="designation">Designation:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="designation"
                                                name="designation"
                                                value={exp.designation}
                                                onChange={(e) => handleExperienceChange(index, e)}
                                            />
                                        </div>
                                    </form>
                                </div>
                            ))}
                            <button className="btn btn-warning" onClick={handleAddExperience}>
                                Add More Experience
                            </button>
                        </div>
                        <div className='col-md-6 text-left'>
                            <h2>Skills</h2>
                            <div className="form-group">
                                <SkillInput onChange={handleSkillChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 text-left'>
                    <h2 className='text-left'>Preview</h2>
                    <div className='rounded p-3' style={resumeStyle}>
                        <h2 className='text-center bg-warning p-2 rounded'>Resume</h2>
                        <h3 className='text-warning'>Personal Details</h3>
                        <hr className='bg-warning' />
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Address: {address}</p>
                        <p>Phone: {phone}</p>
                        <h3 className='text-warning'>Education Details</h3>
                        <hr className='bg-warning' />
                        {education.map((edu, index) => (
                            <div key={index}>
                                <b>Education {index + 1} *</b>
                                <p>Institution: {edu.institution}</p>
                                <p>Year: {edu.year}</p>
                                <p>Degree: {edu.degree}</p>
                            </div>
                        ))}
                        <h3 className='text-warning'>Work Experience</h3>
                        <hr className='bg-warning' />
                        {experience.map((exp, index) => (
                            <div key={index}>
                                <b>Work experience {index + 1} *</b>
                                <p>Company: {exp.company}</p>
                                <p>Year: {exp.year}</p>
                                <p>Designation: {exp.designation}</p>
                            </div>
                        ))}
                        <h3 className='text-warning'>Skills</h3>
                        <hr className='bg-warning' />
                        <p>{skills.join(', ')}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ResumeBuilder;
