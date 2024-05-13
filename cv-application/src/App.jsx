import { useState } from "react"
import General from "./components/General"
import Education from "./components/Education"
import Preview from "./components/Preview"
import styles from "./styles/layout.module.css"

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: 'Jon Smith', 
    email: 'jon@fakemail.com',
    phone: '123-456-7890',
    address: '42 Blazer Trail'
  })

  const handleGeneralInfoChange = (updatedInfo) => {
    setGeneralInfo(updatedInfo)
  }

  const [educationInfo, setEducationInfo] = useState({
    school: 'Big Brain Academy',
    degree: 'Bachelor of Science',
    startDate: 'Fall 2020',
    endDate: 'Spring 2024'
  })

  const handleEducationInfoChange = (updatedInfo) => {
    setEducationInfo(updatedInfo)
  }

  return (
    <div className={styles.gridContainer}>
      <General generalInfo={generalInfo} setGeneralInfo={handleGeneralInfoChange} />
      <Education educationInfo={educationInfo} setEducationInfo={handleEducationInfoChange} />
      <Preview 
        generalInfo={generalInfo} 
        educationInfo={educationInfo}
      />
    </div>
  )
}