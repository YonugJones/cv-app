import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Education.module.css'

export default function Education() {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  return (
    <div className={styles.educationContainer}>
      <div className={styles.educationHeader}>
        <FontAwesomeIcon icon={faSchool} />
        <h2>Education</h2>
      </div>
      {expanded && (
        <form className="educationForm">
          <EducationInput label="School: " name="school" autoComplete="on" />
          <EducationInput label="Location: " name="location" autoComplete="on" />
          <EducationInput label="Degree: " name="degree" autoComplete="on" />
          <EducationInput label="Start: " name="start" autoComplete="on" />
          <EducationInput label="End: " name="end" autoComplete="on" />
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

function EducationInput ({ label, name }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label className={styles.educationSection}>
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
