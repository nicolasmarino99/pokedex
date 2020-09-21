import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faArrowLeft, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Filter = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <>
      <Collapse in={open}>
          <div id="example-collapse-text">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
        <a onClick={() => setOpen(!open)} >
          <FontAwesomeIcon icon={faGripHorizontal} size="sm" />
        </a>
        
      </>
    );
  }

export default Filter;