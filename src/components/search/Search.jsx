
import { useState } from 'react';
import styles from './Search.module.css';
import SearchBtn from '../../assets/search.png'
const Search = () => {
  const [skills, setSkills] = useState(['Frontend', 'CSS', 'JavaScript']);

  const handleCloseSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div>
          <img src={SearchBtn} className={styles.searchbtns} alt="" />
          <input
            type="text"
            className={styles.input}
            placeholder="Type any job title"
          />
        </div>

        <div className={styles.skillsContainer}>
          {skills.map((skill) => (
            <div className={styles.skill} key={skill}>
              <span className={styles.skillText}>{skill}</span>
              <span
                className={styles.closeIcon}
                onClick={() => handleCloseSkill(skill)}
              >
                &times;
              </span>
            </div>
          ))}
          <button className={styles.filterButton}>Apply Filter</button>
          <button className={styles.clearButton}>Clear</button>
        </div>

      </div>
    </div>
  );
};

export default Search;