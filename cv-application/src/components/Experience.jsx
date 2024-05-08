import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Experience.module.css';

export default function Experience() {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experienceHeader}>
        <FontAwesomeIcon icon={faCheck} />
        <h2>Experience</h2>
      </div>
      {expanded && (
        <form className="experienceForm">
        <ExperienceInput label="Company Name: " name="companyName" autoComplete="on" />
        <ExperienceInput label="Position Title: " name="positionTitle" autoComplete="on" />
        <ExperienceInput label="Company Name: " name="companyName" autoComplete="on" />
        <ExperienceInput label="Job Description: " name="jobDescription" autoComplete="on" />
        <ExperienceInput label="Start Date: " name="start" autoComplete="on" />
        <ExperienceInput label="End Date: " name="end" autoComplete="on" />
      </form>
      )}
      <div className={styles.buttonContainer}>
        <button onClick={toggleExpanded}>
          {expanded ? <FontAwesomeIcon icon={faCompress} /> : <FontAwesomeIcon icon={faExpand} />} {expanded ? 'Hide' : 'Expand'}
        </button>
      </div>
    </div>
  )
}

function ExperienceInput ({ label, name }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label className={styles.experienceSection}>
      {label}
      {' '}
      <input 
        name={name}
        value={text}
        onChange={handleChange}
      />
    </label>
  )
}