import styles from '../styles/General.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";

export default function General({ generalInfo, setGeneralInfo }) {

  const handleChange = (e) => {
    const { name, value } = e.target
    setGeneralInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }))
  }

  return (
    <div className={styles.generalContainer}>
      <div className={styles.generalHeader}>
        <FontAwesomeIcon icon={faAddressCard} />
        <h2>General</h2>
      </div>
      <div className={styles.generalBody}>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={generalInfo.name} 
          onChange={handleChange} 
        />
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={generalInfo.email} 
          onChange={handleChange} 
        />
        <label>Phone:</label>
        <input 
          type="text" 
          name="phone" 
          value={generalInfo.phone} 
          onChange={handleChange} 
        />
        <label>Address:</label>
        <input 
          type="text" 
          name="address" 
          value={generalInfo.address} 
          onChange={handleChange} 
        />
      </div>
    </div>
  )
}