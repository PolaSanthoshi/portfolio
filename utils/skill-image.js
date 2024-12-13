
import angular from '/public/svg/skills/angular.svg';



import css from '/public/svg/skills/css.svg';

import firebase from '/public/svg/skills/firebase.svg';

import git from '/public/svg/skills/git.svg';

import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';


import nextJS from '/public/svg/skills/nextJS.svg';



import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';

import tailwind from '/public/svg/skills/tailwind.svg';
import typescript from '/public/svg/skills/typescript.svg';

import wix from '/public/svg/skills/wix.svg';
import jquery from '/public/svg/skills/jquery.svg';
import spring from '/public/svg/skills/spring.svg'



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {

    case 'html':
      return html;

    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
  
    case 'react':
      return react;
  
    case 'typescript':
      return typescript;
   
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
  
    case 'java':
      return java;
    case 'jquery':
      return jquery
    case 'wix':
        return wix
    case 'springboot':
        return spring
  
    case 'python':
      return python;
    
    
    case 'firebase':
      return firebase;
   
    case 'git':
      return git;
   
    
    case 'selenium':
      return selenium;
    
    case 'wordpress':
      return wordpress;
   
    default:
      break;
  }
}
