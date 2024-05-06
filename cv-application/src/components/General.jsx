import { useState } from "react"
import styles from '../styles/General.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";


export default function General() {
  return (
    <form className={styles.generalEdit} >
      <FontAwesomeIcon icon={faAddressCard} />
      <GeneralInput label='Name: ' name='name' autoComplete='on' />
      <GeneralInput label='Email: ' name='email' autoComplete='on' />
      <GeneralInput label='Phone: ' name='phone' autoComplete='on' />
      <GeneralInput label='Address: ' name='address' autoComplete='on' />
    </form>
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

