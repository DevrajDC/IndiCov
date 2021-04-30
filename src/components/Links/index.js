import React, { useState,useEffect } from "react";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Importing Components

import style from "./style";
import linkedInLogo from '../../assets/social-icons/LinkedInIcon.svg'
import instagramLogo from '../../assets/social-icons/InstagramIcon.svg'
import githubLogo from '../../assets/social-icons/GithubIcon.svg'
import websiteLogo from '../../assets/social-icons/WebsiteIcon.svg'

const useStyles = makeStyles(style);

function Links({ linkedIn, instagram, github, website }) {
  const classes = useStyles();

  let icon = [ linkedIn, instagram, github, website ];
  let iconLogo = [ linkedInLogo, instagramLogo, githubLogo, websiteLogo ];

  return (
   <div>
    {icon.map((i,index)=>{
      if(i !== undefined){
          return(
            <a href={i}>
              <img src={iconLogo[index]} className={classes.link}/>
            </a>
          )
      }
    })}
    </div>
  );
  
}

export default Links;
