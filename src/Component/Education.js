import React from 'react'
import './Style.css'
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';

const Education = () => {
  return (
    <section id="education">

    <h1 class="section-heading mb75px">
        <span>
            <i class="fas fa-briefcase"></i>
        </span>
        <span> Education </span>
    </h1>


    <div class="timeline">
        <div class="timeline-box ">
          <h3 class="box1-heading"> Govt Sr.Sec School Shatalai<br/><span class="heading-color">+2</span><br/><br/><span class="duration">2019</span></h3>
        </div>

        <div class="timeline-box ">
            <h3 class="box1-heading">A.I.M.T College Ambala City<br/><span class="heading-color">B.C.A</span><br/><br/><span class="duration">2022</span></h3>
        </div>

        <div class="timeline-box ">
            <h3 class="box1-heading"><br/><span class="heading-color"></span><br/><br/><span class="duration"></span></h3>
        </div>

        <div id="timeline-divider">
            <div class="timeline-traveller">
                <div style={{marginLeft:"-14.5px"}}>
                    <i class="fas fa-plane"></i>
    <AirplanemodeActiveIcon className='plane' />

                </div>

            </div>
            </div>
            
    </div>
  </section>
  )
}

export default Education