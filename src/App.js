import './App.css';
import img1 from './image/logo.png';
import img2 from './image/dream.jpeg';
import img3 from './image/join.jpeg';
import img4 from './image/join-2.png';
import i1 from './image/i1.png';
import i2 from './image/i2.png';
import i3 from './image/i3.png';
import i4 from './image/i4.png';
import i5 from './image/i5.png';
import i6 from './image/i6.png';
import i7 from './image/i7.png';
import i8 from './image/i8.png';
import i9 from './image/i9.png';
import i10 from './image/i10.png';
import i11 from './image/i11.png';
import i12 from './image/i12.png';
import i13 from './image/i13.png';
import i14 from './image/i14.png';
import i15 from './image/i15.png';
import i16 from './image/i16.png';
import i17 from './image/i17.png';
import i18 from './image/i18.png';
import i19 from './image/i19.png';
import i20 from './image/i20.png';
import i21 from './image/i21.png';
import i22 from './image/i22.png';
import i23 from './image/i23.png';
import i24 from './image/i24.png';
import f1 from './image/f1.png';
import f2 from './image/f2.jpeg';
import f3 from './image/f3.png';
import f4 from './image/f4.png';
import f5 from './image/f5.png';
import f6 from './image/f6.png';
import f7 from './image/f7.png';
import f8 from './image/f8.png';
import f9 from './image/f9.png';
import f10 from './image/f10.png';
import f11 from './image/f11.png';
import f12 from './image/f12.png';
import a1 from './image/a1.png';
import a2 from './image/a2.png';
import j1 from './image/job.png';
import b1 from './image/branch1.jpeg';
import b2 from './image/branch2.jpeg';
import b3 from './image/branch3.jpeg';
import s1 from './image/s1.jpeg';
import s2 from './image/s2.jpeg';
import s3 from './image/s3.jpeg';

import { RiContactsLine } from "react-icons/ri";
import { IoCallOutline,IoPlayCircleSharp } from "react-icons/io5";
import { FaAngleDown} from "react-icons/fa";
import {  IoLogoInstagram } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { PiBrainLight } from "react-icons/pi";



function App() {
  return (
    <div className='website'>
      {/* TOP-MENU START */}
      <div className="top-menu">
        <div className="d-flex container">
          <div className='right'>
            <div className='d-flex'>
              <div>
                <IoCallOutline className='icon'></IoCallOutline>
              </div>
              <div>
                <h3>(+91) 90813-12475</h3>
                <p>adtechinstitute1@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='logo'>
            <img src={img1}></img>
          </div>
          <div className='last'>
              <div className='d-flex'>
              <div>
                <RiContactsLine className='icon'></RiContactsLine>
              </div>
              <div className='color'>
                <p>Log In</p>
                <p>Register</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TOP-MENU END */}

      {/* MAIN-MENU START */}
      <div className='menu'>
        <div className='container'>
          <nav>
            <ul className='main-menu d-flex'>
              <li><a href=''>Home</a></li>
              <li><a href=''>Courses<FaAngleDown className='menu_icon'></FaAngleDown></a></li>
              <li><a href=''>About Us</a></li>
              <li><a href=''>Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* MAIN-MENU END */}

      {/* DREAM SECTION START */}
      <div className='dream'>
        <div className='container'>
          <div className='dream-1'>
            <h3>COMPLETE YOUR DREAMS WITH</h3>
            <h1>AD-Tech IT & Design Institute</h1>
          </div>
          <div className='d-flex flex-wrap dream-2'>
            <div className='w-50'><img src={img2} className='w-100'></img></div>
            <div className='w-50 dream-main'>
              <div className='dream-play-btn'>
                <IoPlayCircleSharp></IoPlayCircleSharp>
              </div>
              <div className='dream-22'>
                <p>WATCH VIDEO</p>
                <p>INTRO</p>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DREAM SECTION END */}

      {/* JOIN SECTION START */}
      <div className='join'>
        <div className='container'>
          <div className='d-flex join-1'>
            <div className='join-img'>
              <img src={img3} className='w-50 join1'></img>
              <div className='join-icon'>
                <img src={img4} alt='' />
              </div>
            </div>
            <div className='join-content'>
              <div className='join-content-block'>
                <h4>Join today!</h4>
                <p>A place to provide students with enough knowledge and skills in a complex world.</p>
                <button><h3>Learn more about admissions</h3></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* JOIN SECTION END */}
      {/* job placement start */}
      <div className='container'>
        <div className='job'>
          <div className='d-flex'>
            <div className='job1'>
              <div className='d-flex job-11'>
                <div><GrContactInfo className='job-icon'></GrContactInfo></div>
                <div className='job1-content'>
                  <h4>100% Job Placement</h4>
                  <p>Job fairs, campus placement drives, etc. conducted regularly for students to get job placements on successful course completion</p>
                </div>
              </div>

              <div className='d-flex job-11'>
                <div><BsReverseLayoutTextWindowReverse className='job-icon'></BsReverseLayoutTextWindowReverse></div>
                <div className='job1-content'>
                  <h4>Hi-Tech Syllabus</h4>
                  <p>Help people learn new skills, advance their careers, and explore their hobbies by sharing your knowledge.</p>
                </div>
              </div>

              <div className='d-flex job-11'>
                <div><PiBrainLight className='job-icon'></PiBrainLight></div>
                <div className='job1-content'>
                  <h4>Expert Faculty</h4>
                  <p>Take advantage of our active community of instructors to help you through your course creation process.</p>
                </div>
              </div>
            </div>
            <div className='job2'><img src={j1}></img></div>
          </div>
        </div>
      </div>
      {/* job placement end */}
      {/* Sharpen your skills START */}
      <div className='read-bg'>
        <div className='container read'>
          <h1>Sharpen your skills</h1>
          <p>Take your learning organisation to the next level.</p>
          <div className='d-flex flex-wrap read-img'>
            <div className='read-1 read1 skill-1'>
              <img src={s1}></img>
              <p>The job of a web designer is to give an attractive design to the website. while creating a website, a web designer must see that the website’s basic appearance is more important.</p>
            </div>

            <div className='read-1 read2 skill-1'>
              <img src={s2}></img>
              <p>Flutter is a very popular and dominant operating system in the mobile world. The main reason for Flutter to become such a name is the applications in it, oday there are more than 4.5 million applications in the Play Store</p>
            </div>

            <div className='read-1 read3 skill-1'>
              <img src={s3}></img>
              <p>Nowadays in this busy life people play Outdoor and Indore Games to refresh some time, in this urban area Outdoor Games cannot be played due to lack of ground so children and elders play games on mobile to fulfil their hobbies.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Sharpen your skills END */}
      {/* Access An Affordable start */}
      <div className='access'>
        <div className='container'>
          <h1>Access An Affordable Education & Pursue Your Passion.</h1>
          <img src={a1} className='a1'></img>
          <img src={a2} className='a2'></img>
          <img src={img4} className='a3'></img>
        </div>
      </div>
      {/* Access An Affordable end */}
      {/* Our Branch START */}
      <div className='read-bg'>
        <div className='container read'>
          <h1>Our Branch</h1>
          <p>Visit our campus</p>
          <div className='d-flex flex-wrap read-img'>
            <div className='read-1 read1'>
              <img src={b1}></img>
              <h3>Branch 1</h3>
              <p>Krushnakunj Society, near Ashadeep School,Simada Naka</p>
            </div>

            <div className='read-1 read2'>
              <img src={b2}></img>
              <h3>Branch 2</h3>
              <p>B1- civilize circle, Amardeep Society,Nana Varachha</p>
            </div>

            <div className='read-1 read3'>
              <img src={b3}></img>
              <h3>Branch 3</h3>
              <p>224, Tapi Arcade, Abrama Rd,Mota Varachha</p>
            </div>
          </div>
        </div>
      </div>
      {/* Our Branch END */}
      {/* Our Affiliations start */}
      <div className='our'>
        <div className='container'>
          <h3>Our Affiliations</h3>
          <div className='d-flex our-img'>
            <div className='our1'>
              <img src={i1}></img>
            </div>
            <div className='our1'>
              <img src={i2}></img>
            </div>
            <div className='our1'>
              <img src={i3}></img>
            </div>
            <div className='our1'>
              <img src={i4}></img>
            </div>
            <div className='our1'>
              <img src={i5}></img>
            </div>
            <div className='our1'>
              <img src={i6}></img>
            </div>
          </div>

          <div className='d-flex our-img'>
            <div className='our1'>
              <img src={i7}></img>
            </div>
            <div className='our1'>
              <img src={i8}></img>
            </div>
            <div className='our1'>
              <img src={i9}></img>
            </div>
            <div className='our1'>
              <img src={i10}></img>
            </div>
            <div className='our1'>
              <img src={i11}></img>
            </div>
            <div className='our1'>
              <img src={i12}></img>
            </div>
          </div>

          <div className='d-flex our-img'>
            <div className='our1'>
              <img src={i13}></img>
            </div>
            <div className='our1'>
              <img src={i14}></img>
            </div>
            <div className='our1'>
              <img src={i15}></img>
            </div>
            <div className='our1'>
              <img src={i16}></img>
            </div>
            <div className='our1'>
              <img src={i17}></img>
            </div>
            <div className='our1'>
              <img src={i18}></img>
            </div>
          </div>

          <div className='d-flex our-img'>
            <div className='our1'>
              <img src={i19}></img>
            </div>
            <div className='our1'>
              <img src={i20}></img>
            </div>
            <div className='our1'>
              <img src={i21}></img>
            </div>
            <div className='our1'>
              <img src={i22}></img>
            </div>
            <div className='our1'>
              <img src={i23}></img>
            </div>
            <div className='our1'>
              <img src={i24}></img>
            </div>
          </div>

        
        </div>
      </div>
      {/* Our Affiliations end */}
      {/* FEED SECTION START */}
      <div className='feed'>
        <div className='container'>
          <h3>Our Feed</h3>
          <div className='d-flex feed-img'>
            <div className='feed1'>
              <img src={f1}></img>
            </div>
            <div className='feed1'>
              <img src={f2}></img>
            </div>
            <div className='feed1'>
              <img src={f3}></img>
            </div>
            <div className='feed1'>
              <img src={f4}></img>
            </div>
          </div>

          <div className='d-flex feed-img'>
            <div className='feed1'>
              <img src={f5}></img>
            </div>
            <div className='feed1'>
              <img src={f6}></img>
            </div>
            <div className='feed1'>
              <img src={f7}></img>
            </div>
            <div className='feed1'>
              <img src={f8}></img>
            </div>
          </div>

          <div className='d-flex feed-img'>
            <div className='feed1'>
              <img src={f9}></img>
            </div>
            <div className='feed1'>
              <img src={f10}></img>
            </div>
            <div className='feed1'>
              <img src={f11}></img>
            </div>
            <div className='feed1'>
              <img src={f12}></img>
            </div>
          </div>
        </div>
       <button className='btn-all-courses'><a href=''><IoLogoInstagram className='arrow'></IoLogoInstagram>View In Instagram</a></button>
      </div>
      {/* FEED SECTION END */}
      {/* COPYRIGHT SECTION START */}
      <div className='copyright'>
        <div className='container'>
            <h3>Copyright © 2023. All rights reserved.</h3>
        </div>
      </div>
      {/* COPYRIGHT SECTION END */}
    </div> 
  );
}

export default App;
