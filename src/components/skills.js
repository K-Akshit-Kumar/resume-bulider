import React, { useState } from 'react';
import Select from 'react-select';

const SkillInput = ({ onChange }) => {

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleSkillChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
    const skillNames = selectedOptions.map((option) => option.label);
    onChange(skillNames);
  };

  const options = [
      { label: 'HTML', value: 'HTML' },
      { label: 'CSS', value: 'CSS' },
      { label: 'Bootstrap', value: 'Bootstrap' },
      { label: 'JavaScript', value: 'JavaScript' },
      { label: 'React', value: 'React' },
      { label: 'Java', value: 'Java' },
      { label: 'PHP', value: 'PHP' },
      { label: 'SQL', value: 'SQL' },
      { label: 'PLSQL', value: 'PLSQL' },
  ];

  return (
    <Select isMulti options={options} value={selectedSkills} onChange={handleSkillChange} placeholder="Select skills"/>
  );
};

export default SkillInput;
