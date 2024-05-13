import styles from '../styles/Education.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool} from "@fortawesome/free-solid-svg-icons";

export default function Education({ educationInfo, setEducationInfo }) {

  const handleChange = (e) => {
    const { name, value } = e.target
    setEducationInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value  
    }))
  }

  return (
    <div className={styles.educationContainer}>
      <div className={styles.educationHeader}>
        <FontAwesomeIcon icon={faSchool} />
        <h2>Education</h2>
      </div>
      <div className={styles.educationBody}>
        <label>School:</label>
        <input type="text" name="school" value={educationInfo.school} onChange={handleChange} />
        <label>Degree:</label>
        <input type="text" name="degree" value={educationInfo.degree} onChange={handleChange} />
        <label>Start Date:</label>
        <input type="text" name="startDate" value={educationInfo.startDate} onChange={handleChange} />
        <label>End Date:</label>
        <input type="text" name="endDate" value={educationInfo.endDate} onChange={handleChange} />
      </div>
    </div>
  )
}