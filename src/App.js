import './App.css';
import ImgPlaceHolder from './assets/image/placeholder.jpeg'
import tick from './assets/image/tick.svg'
import clock from './assets/image/clock.jpg'

const skills=["HTML","CSS","JAVASCRIPT","REACT","GO","PYTHON","JAVA","C","HTML","CSS","JAVASCRIPT","REACT","GO","PYTHON","JAVA","C","HTML","CSS","JAVASCRIPT","REACT","GO","PYTHON","JAVA","C"]
const SkillsFormatted = skills.map((skill) => <p>{skill}</p>)

function UserCard() {
  return (
    <div className="user-card">

      <div className='pr-profile'>
        <section className='pr-heading'>
          <img className="place-holder-img" src={ImgPlaceHolder} alt='image_of_a_person'></img>
          <div className='pr-full-name'>
            <strong>Joel N</strong>
            <img src={tick} alt="verified" className='svg tiny-img'></img>
          </div> 
          Senior Dev, Kerala
        </section>
        <section className='pr-skills'>
          <h3>SKILLS</h3>
          {SkillsFormatted}
        </section>
        <div className='DOJ'>
          <img src={clock} alt='clock' className='tiny-img'></img>
          <p>Dec 11,2021</p>
        </div>
      </div>
    </div>
  ); 
}

export default UserCard;
