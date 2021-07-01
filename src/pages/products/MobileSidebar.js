import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import CustomizedAccordions from "../products/Sidebar";
import Filter from "../../assets/filter.png";
import RangeSlider from "../products/RangeSlider";
// import Arrow from '../../assets/down.png';
import Line from "../../assets/line.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

import Checkbox from "@material-ui/core/Checkbox";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

const Accordion = withStyles({
  root: {
    // border: '1px solid rgba(0, 0, 0, .125)',
    marginTop: "20px",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderTop: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    marginTop: 8,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function SimpleDialog(props) {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();
  const { onClose, selectedValue, open, values } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      className="heading-home test"
      PaperProps={{
        style: {
          //   backgroundColor: 'transparent',
          //   boxShadow: 'none',
          marginTop: "32",
          marginLeft: "0",
          paddingTop: "10px",
        },
      }}
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      style={{ width: 400 }}
    >
      <div className="mobile">
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
            <Typography>
              Hahmot<span className="notify">{values.characterCount}</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={"sidebar-inner"}>
              <ul className="side-bar">
                {values.characterFilter.map((character) => {
                  return (
                    <li key={character.id}>
                      <span className="check">
                        <Checkbox
                          inputProps={{ "aria-label": "checkbox A" }}
                          onChange={values.changeCharacter}
                          id={character.id}
                        />{" "}
                        <span className="name">{character.name}</span>
                        <span className="options">{character.count}</span>
                      </span>
                    </li>
                  );
                })}
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
              Vari <span className="notify">{values.colorCount}</span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={"sidebar-inner"}>
              <ul className="side-bar">
                {values.colorFilter.map((color) => {
                  return (
                    <li key={color.id}>
                      <span className="check">
                        <Checkbox
                          value="checkedA"
                          inputProps={{ "aria-label": "Checkbox A" }}
                          onChange={values.changeColor}
                          id={color.id}
                        />
                      </span>
                      <span className="name">{color.name}</span>
                      <span className="options">{color.count}</span>
                    </li>
                  );
                })}
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
              <span className="notify">{values.priceCount}</span>
              {/* <img src={Arrow} alt="arrow"></img> */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={"sidebar-inner"}>
              <ul className="side-bar rang-slide">
                <li className="mt-5">
                  <span className="up">{values.price[0]}</span>
                  <span className="mid">
                    <img src={Line} alt="line" />
                  </span>
                  <span className="down">{values.price[1]}</span>
                </li>
                <li className="mt-4">
                  <RangeSlider
                    value={values.price}
                    handleChange={values.changeRange}
                    max={values.priceMax}
                    min={values.priceMin}
                  />
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
              <span className="notify">{values.yearCount}</span>
              {/* <img src={Arrow} alt="arrow"></img> */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={"sidebar-inner"}>
              <ul className="side-bar rang-slide">
                <li className="mt-5">
                  <span className="up">{values.year[0]}</span>
                  <span className="mid">
                    <img src={Line} alt="line" />
                  </span>
                  <span className="down">{values.year[1]}</span>
                </li>
                <li className="mt-4">
                  <RangeSlider
                    value={values.year}
                    handleChange={values.changeYear}
                    max={values.yearMax}
                    min={values.yearMin}
                  />
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo(props) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
 const values = props
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  return (
    <div className="mobile-mod heading-home">
        
      <Button className="bttn" variant="outlined" color="primary" onClick={handleClickOpen}>
            <img className="" src={Filter} alt="loading"></img>
      </Button>
      <SimpleDialog selectedValue={selectedValue} values={values} open={open} onClose={handleClose} />
      
    </div>
  );
}
