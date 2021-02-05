import React, { useState} from 'react'
import { Nav} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

import PendingMatchs from './PendingMatchs';
import Matchs from './Matchs';

import './styles.css';

const Profiles = () => {
    const [dataAux, setDataAux] = useState([]);
    const [data, setData] = useState(<Matchs data={dataAux}/>);
    const [activeNav, setActiveNav] = useState('Matchs');
   
    
    const handleNav = (eventKey) =>{
      if(eventKey === 'matchs'){
        setData(<Matchs data={dataAux}/>);
      }else if( eventKey === 'pendingMatchs'){
        setData(<PendingMatchs handleData = {handleData}/>);
      }
      setActiveNav(eventKey);
    }
  
    const handleData = (elemento) =>{
      let list = dataAux;
      list.push(elemento);
      setDataAux(list);
    }
  
      return(
          <React.Fragment>
              <div className= 'matchesContainer'>
                <Nav onSelect={handleNav} activeKey={activeNav} appearance={'tabs'}>
                  <Nav.Item eventKey={'matchs'}>Associações</Nav.Item>
                  <Nav.Item eventKey={'pendingMatchs'}>Associações Pendentes</Nav.Item>
                </Nav>
                {data}
              </div>
          </React.Fragment>
      )
}

export default Profiles;