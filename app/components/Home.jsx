import React from 'react';
import { Link } from 'react-router-dom';
import Campuses from './Campuses';

export default function Home() {

  return (
    <div>
      <div className="campusSection" >
        <Link to={'/campuses'} >
          <div className="homeContainer" >
            <img className="image" src="images/campuses.jpg" />
            <img src="images/spaceU.jpg" />
            {/* <div>
            <div className="backgroundBox" />
            <div className="bottom">EXPLORE <br /><span style={styles}>  OUR </span><br /> CAMPUSES</div>
          </div> */}
          </div> <br />
          <div className="caption" >
            <h3 className="homeText" >Explore our campuses</h3>
            <p className="homeParagraph" >locations across the universe</p>
          </div>
        </Link>
      </div>
      <Link to={'/students'} >
        <div className="studentSection" >
          <div className="homeContainer" >
            <img src="images/aliens.jpg" />
            <img className="image" src="images/students.jpg" />
          </div><br />
          <div className="caption">
            <h3 className="homeText" >Explore our students</h3>
            <p className="homeParagraph" >a truly diverse student body</p>
          </div>
        </div>
      </Link>

    </div>
  )
}

const styles = {
  color: "navy"
}
