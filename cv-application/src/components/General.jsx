import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/General.module.css';

export default function General() {
  const [expanded, setExpanded] = useState(true);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  }

  return (
    <div className={styles.generalContainer}>
      <div className={styles.generalHeader}>
        <FontAwesomeIcon icon={faAddressCard} />
        <h2>General Information</h2>
      </div>
      {expanded && (
        <form className="generalForm" >
        <GeneralInput label='Name: ' name='name' autoComplete='on' />
        <GeneralInput label='Email: ' name='email' autoComplete='on' />
        <GeneralInput label='Phone: ' name='phone' autoComplete='on' />
        <GeneralInput label='Address: ' name='address' autoComplete='on' />
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

function GeneralInput ({ label, name }) {
  const [text, setText] = useState('');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <label className={styles.generalSection}>
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

