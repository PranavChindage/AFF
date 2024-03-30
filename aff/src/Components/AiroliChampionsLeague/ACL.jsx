import { useState } from 'react';
import Season1 from './Season1';
import Season2 from './Season2';
import './ACL.css'
import ACLposter from '../../img/ACL.png'

const ACL = () => {
  const [season, setSeason] = useState('Season1');

  return (
    <section className='acl-container'>
      <div className="acl-poster">
        <img src={ACLposter} alt="" />
      </div>
      <div className="breadcrumb">
        <span
          className={`breadcrum-season ${season === 'Season1' ? 'active' : ''}`}
          onClick={() => setSeason('Season1')}
        >
          Season 1
        </span>
        <span className="breadcrumb-separator">|</span>
        <span
          className={`breadcrumb-season ${season === 'Season2' ? 'active' : ''}`}
          onClick={() => setSeason('Season2')}
        >
          Season 2
        </span>
      </div>
      
      {season === 'Season1' ? <Season1 /> : <Season2 />}
    </section>
  );
};

export default ACL;

