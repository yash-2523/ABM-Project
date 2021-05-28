import React, { useState } from 'react'
import { colGap, rowGap } from '../../Dynamic Styles/styles'
import { FormControlLabel, Radio, RadioGroup, Checkbox, Switch, IconButton, withStyles } from '@material-ui/core'
import { AddCircleOutlineRounded, RemoveCircleOutlineRounded } from '@material-ui/icons'

export default function TableRow(props) {

    const [expand,setExpand] = useState(false)

    console.log(props.data)

    const IOSSwitch = withStyles((theme) => ({
        root: {
          width: 42,
          height: 26,
          padding: 0,
          margin: theme.spacing(1),
        },
        switchBase: {
          padding: 1,
          '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
              backgroundColor: 'rgba(39, 174, 96, 1)',
              opacity: 1,
              border: 'none',
            },
          },
          '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid rgba(149, 149, 155, 1)',
            backgroundColor: 'rgba(149, 149, 155, 1)',
          },
        },
        thumb: {
          width: 24,
          height: 24,
        },
        track: {
          borderRadius: 26 / 2,
          border: `1px solid rgba(149, 149, 155, 1)`,
          backgroundColor: 'rgba(149, 149, 155, 1)',
          opacity: 1,
          transition: theme.transitions.create(['background-color', 'border']),
        },
        checked: {},
        focusVisible: {},
      }))(({ classes, ...props }) => {
        return (
          <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
              root: classes.root,
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: classes.track,
              checked: classes.checked,
            }}
            {...props}
          />
        );
      });

    return (
        <>
            <tr className={expand ? "expanded" : ""}>
                <td className="text-right">{!expand ? <IconButton  onClick={() => setExpand(true)} children={<AddCircleOutlineRounded />}></IconButton> : <IconButton onClick={() => setExpand(false)} children={<RemoveCircleOutlineRounded />}></IconButton>}</td>
                <td>{props.data.Name}</td>
                <td>{!expand ? <div className={"w-100 access" + (props.data['Access Level']===2 ? " restricted" : (props.data['Access Level']===3 ? " no-access" : ""))}>{props.data['Access Level']===2 ? "Restricted Access" : (props.data['Access Level']===3 ? "No Access" : "All Access")}</div> : ''}</td>
                <td>{!expand ? 
                (props.data.Summary.length > 0 ? 
                    props.data.Summary.map((val,idx) => 
                        <span>{idx!==0 && "|"} {val} </span>
                    ) 
                    : 
                    "-")  
                : 
                ''}
                </td>
                <td>{props.data['Last Updated']}</td>
                <td><IOSSwitch checked={expand || props.data.switch}></IOSSwitch></td>
            </tr>
            {expand && <tr className="expanded-rows">
                <td colSpan="6">
                    <h6>All aspects in {props.data.Name.toLowerCase()} module</h6>
                    <div className="w-100 mt-4 px-lg-4 px-md-3 px-2 d-flex align-items-stretch" style={colGap(1)}>
                        <div className="d-flex flex-column" style={rowGap(1)}>
                            <h5>Access Control</h5>
                            <form className="d-flex flex-column" style={rowGap(1)}>

                                <RadioGroup aria-label="acces-level" value={props.data['Access Level']===1 ? "all" : "restricted"}>
                                    <FormControlLabel value="all" control={<Radio name="access level" style={{color:"rgba(103, 58, 183, 1)"}} />} 
                                    label={
                                        <div className="d-flex align-items-start flex-column">
                                            <p>All Access</p>
                                            <p className="text-secondary" style={{fontSize:"0.7rem"}}>Can access all items</p>
                                        </div>
                                    } 
                                    />
                                    <FormControlLabel className="mt-3" value="restricted" control={<Radio name="access level" style={{color:"rgba(103, 58, 183, 1)"}} />} 
                                    label={
                                        <div className="d-flex align-items-start flex-column">
                                            <p>Restricted Access</p>
                                            <p className="text-secondary" style={{fontSize:"0.7rem"}}>Can access only assigned or created items</p>
                                        </div>
                                    }
                                    />
                                </RadioGroup>
                            </form>
                        </div>
                        <div className="bg-secondary" style={{width: "1px"}}></div>
                        <div className="d-flex flex-column" style={rowGap(1)}>
                            <h5>Permission</h5>
                            <form className="d-flex flex-column align-items-start">
                                <div className="d-flex align-items-center" style={colGap(0.9)}>
                                    <Checkbox checked={props.data.Summary.includes("View")} style={{color: "rgba(103, 58, 183, 1)"}}></Checkbox>
                                    <p>View items in access</p>
                                </div>
                                <div className="d-flex align-items-center" style={colGap(0.9)}>
                                    <Checkbox checked={props.data.Summary.includes("Edit")} style={{color: "rgba(103, 58, 183, 1)"}}></Checkbox>
                                    <p>Edit items in access</p>
                                </div>
                                <div className="d-flex align-items-center" style={colGap(0.9)}>
                                    <Checkbox checked={props.data.Summary.includes("Create")} style={{color: "rgba(103, 58, 183, 1)"}}></Checkbox>
                                    <p>Create items in access</p>
                                </div>
                                <div className="d-flex align-items-center" style={colGap(0.9)}>
                                    <Checkbox checked={props.data.Summary.includes("Delete")} style={{color: "rgba(103, 58, 183, 1)"}}></Checkbox>
                                    <p>Delete items in access</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </td>
            </tr> }
        </>
    )
}
