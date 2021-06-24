import React, {useState} from 'react';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import RangeSlider from '../products/RangeSlider';
// import Arrow from '../../assets/down.png';
import Line from '../../assets/line.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    marginTop: '20px',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    marginTop: 8,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);



export default function CustomizedAccordions() {
  const [expanded, setExpanded] = useState('panel1');
  const [price, setPrice] = useState([10,100]);
  const [year, setYear] = useState([1900,2021]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };
    const changeRange = (event, newValue) => {
        setPrice(newValue)
    }

  return (
    <div className="sidebar-main">
      <div className="web border-bottom">
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>Hahmot</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={"sidebar-inner"}>
              <ul className="side-bar">
                <li>
                  <span className="check">
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                    />
                  </span>
                  <span className="name">Muumipeikko</span>
                  <span className="options">7</span>
                </li>
                <li>
                  <span className="check">
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                    />
                  </span>
                  <span className="name">Niiskuneiti</span>
                  <span className="options">7</span>
                </li>
                <li>
                  <span className="check">
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                    />
                  </span>
                  <span className="name">Muumipappa</span>
                  <span className="options">7</span>
                </li>
                <li>
                  <span className="check">
                    {/* <Checkbox value="checkedA"inputProps={{ 'aria-label': 'Checkbox A' }}/> */}
                  </span>
                  <span className="name2">Näytä kaikki</span>
                  {/* <span className="options">7</span> */}
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>
              Vari <span className="notify">13</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={"sidebar-inner"}>
              <ul className="side-bar">
                <li>
                  <span className="check">
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                    />
                  </span>
                  <span className="name">Muumipeikko</span>
                  <span className="options">7</span>
                </li>
                <li>
                  <span className="check">
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                    />
                  </span>
                  <span className="name">Niiskuneiti</span>
                  <span className="options">7</span>
                </li>
                <li>
                  <span className="check">
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                    />
                  </span>
                  <span className="name">Muumipappa</span>
                  <span className="options">7</span>
                </li>
                <li>
                  <span className="check">
                    {/* <Checkbox value="checkedA"inputProps={{ 'aria-label': 'Checkbox A' }}/> */}
                  </span>
                  <span className="name2">Näytä kaikki</span>
                  {/* <span className="options">7</span> */}
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography>
              Hintaluokka
              <span className="notify">01</span>
              {/* <img src={Arrow} alt="arrow"></img> */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={"sidebar-inner"}>
              <ul className="side-bar rang-slide">
                <li className="mt-5">
                  <span className="up">{price[0]}</span>
                  <span className="mid">
                    <img src={Line} alt="line" />
                  </span>
                  <span className="down">{price[1]}</span>
                </li>
                <li className="mt-4">
                  <RangeSlider value={price} handleChange={changeRange} />
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography>
              Valmistusvuosi
              <span className="notify">01</span>
              {/* <img src={Arrow} alt="arrow"></img> */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={"sidebar-inner"}>
              <ul className="side-bar rang-slide">
                <li className="mt-5">
                  <span className="up">{year[0]}</span>
                  <span className="mid">
                    <img src={Line} alt="line" />
                  </span>
                  <span className="down">{year[1]}</span>
                </li>
                <li className="mt-4">
                  <RangeSlider value={year} handleChange={changeRange} />
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          square
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>Teema</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={"sidebar-inner"}>
              <ul className="side-bar">
                <li>
                  <span className="check">
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                    />
                  </span>
                  <span className="name">Muumipeikko</span>
                  {/* <span className="options">7</span> */}
                </li>
                <li>
                  <span className="check">
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                    />
                  </span>
                  <span className="name">Niiskuneiti</span>
                  {/* <span className="options">7</span> */}
                </li>
                <li>
                  <span className="check">
                    <Checkbox
                      value="checkedA"
                      inputProps={{ "aria-label": "Checkbox A" }}
                    />
                  </span>
                  <span className="name">Muumipappa</span>
                  {/* <span className="options">7</span> */}
                </li>
                <li>
                  <span className="check">
                    {/* <Checkbox value="checkedA"inputProps={{ 'aria-label': 'Checkbox A' }}/> */}
                  </span>
                  <span className="name2">Näytä kaikki</span>
                  {/* <span className="options">7</span> */}
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      {/* mobile */}

      {/* <div className='mobile'>
            
        <Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Hahmot</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={'sidebar-inner'}>
                <ul className="side-bar">
                    <li>
                        <span className="check">
                            <Checkbox value="checkedA"inputProps={{ 'aria-label': 'Checkbox A' }}/>
                        </span>
                        <span className="name">Muumipeikko</span>
                        <span className="options">7</span>
                        
                    </li>
                    <li>
                        <span className="check">
                            <Checkbox value="checkedA"inputProps={{ 'aria-label': 'Checkbox A' }}/>
                        </span>
                        <span className="name">Muumipeikko</span>
                        <span className="options">7</span>
                        
                    </li>
                </ul>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Vari</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={'sidebar-inner'}>
                <ul className="side-bar">
                    <li>
                        <span className="check">
                            <Checkbox value="checkedA"inputProps={{ 'aria-label': 'Checkbox A' }}/>
                        </span>
                        <span className="name">Muumipeikko</span>
                        <span className="options">7</span>
                        
                    </li>
                    <li>
                        <span className="check">
                            <Checkbox value="checkedA"inputProps={{ 'aria-label': 'Checkbox A' }}/>
                        </span>
                        <span className="name">Muumipeikko</span>
                        <span className="options">7</span>
                        
                    </li>
                </ul>
            </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Hintaluokka</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography className={'sidebar-inner'}>
                <ul className="side-bar">
                    <li>
                        <span className="check">
                            <Checkbox value="checkedA"inputProps={{ 'aria-label': 'Checkbox A' }}/>
                        </span>
                        <span className="name">Muumipeikko</span>
                        <span className="options">7</span>
                        
                    </li>
                    <li>
                        <span className="check">
                            <Checkbox value="checkedA"inputProps={{ 'aria-label': 'Checkbox A' }}/>
                        </span>
                        <span className="name">Muumipeikko</span>
                        <span className="options">7</span>
                        
                    </li>
                </ul>
            </Typography>
            </AccordionDetails>
        </Accordion>
        </div> */}
      {/* Mobile */}
    </div>
  );
}
