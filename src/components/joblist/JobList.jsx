import AmazonIcons from '../../assets/amazon.webp'
import styles from './JobList.module.css'
import Flags from '../../assets/flag.png'
import NumberOfMemeber from '../../assets/companyMemeber.png'
function JobList() {
    const tags = ['Frontend', 'CSS', 'JavaScript', 'HTML'];
    return (
        <div className={styles.main}>
            <div className={styles.joblist}>
                <div className={styles.jobListLeft}>
                    <div className={styles.companyIcons}>
                        <img src={AmazonIcons} alt="" />
                    </div>
                    <div className={styles.jobDetails}>
                        <h3>Frontend Developer</h3>
                        <div className={styles.salaryData}>
                            <div className={styles.people}>
                                <img src={NumberOfMemeber} alt="" />
                                <p>11-50</p>
                            </div>
                            <div className={styles.rupees}>
                                <p> ₹</p>
                                <p> 5000000</p>
                            </div>
                            <div className={styles.flags}>
                                <img src={Flags} alt="" />
                                <p>Delhi</p>
                            </div>
                        </div>
                        <div className={styles.officeDetails}>
                            <p>Office</p>
                            <p>Full Time</p>
                        </div>
                    </div>

                </div>
                <div className={styles.jobListRight}>
                    <div className={styles.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className={styles.buttonstyle}>
                        <button className={styles.viewDetailsButton}>View details</button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobList