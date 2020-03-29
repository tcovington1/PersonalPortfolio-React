// icons
import postgresqlIcon from '@iconify/icons-logos/postgresql';
import html5 from '@iconify/icons-logos/html-5';
import reactIcon from '@iconify/icons-logos/react';
import githubIcon from '@iconify/icons-logos/github-icon';
import languageRubyOnRails from '@iconify/icons-mdi/language-ruby-on-rails';
import gatsbyIcon from '@iconify/icons-logos/gatsby';
import graphqlIcon from '@iconify/icons-logos/graphql';
import css3 from '@iconify/icons-logos/css-3';
import netlifyIcon from '@iconify/icons-logos/netlify';
import herokuIcon from '@iconify/icons-logos/heroku-icon';

import mongodbIcon from '@iconify/icons-logos/mongodb';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import expressIcon from '@iconify/icons-logos/express';







//images
import cwtImage from '../../../assets/codewithtaylor.jpeg';
import GenHuImage from '../../../assets/genhuscreenshot.jpeg';
import DevChat from '../../../assets/devchat.png';
// const genhuImage = {GenHuImage}
// const codeWithTaylor = {cwtImage}

const projectData = [
  {
    id: 1,
    name: 'DevChat',
    website: 'http://devchatconnect.herokuapp.com/',
    about: 'Still a work in progress full-stack application. Create a developer profile, create posts, comment on other developer posts to connect in the community',
    image: DevChat,
    github: 'https://github.com/tcovington1/devchat',
    icons: [ reactIcon, nodejsIcon, mongodbIcon, herokuIcon  ]
    
  },
  {
    id: 2,
    name: 'Code With Taylor',
    website: 'https://codewithtaylor.com/',
    about: 'This is my personal blog where I share my code journey, dad stories, and technical posts to help others learn. ',
    image: cwtImage,
    github: 'https://github.com/tcovington1/CodeWithTaylor-blog',
    icons: [ gatsbyIcon, graphqlIcon, netlifyIcon ]
    
  },
  {
    id: 3,
    name: 'Generations Humanitarian',
    website: 'https://genhu.herokuapp.com',
    about: 'During my part-time full-stack web dev bootcamp at DevPoint Labs I was assigned to GenHu with 4 other developers. Our goal was to rebuild GenHu.org, a local non-profit site. This site is built with a Ruby on Rails back-end giving our client access to an admin page. We then used React.js for the front-end to build reusable components. ',
    image: GenHuImage,
    github: 'https://github.com/harlanevans/genhu',
    icons: [ reactIcon, languageRubyOnRails, postgresqlIcon, herokuIcon ]
    
  },
  // {
  //   id: 2,
  //   name: 'Code With Taylor',
  //   website: 'https://codewithtaylor.com/',
  //   about: 'This is my personal blog where I share my code journey, dad stories, and technical posts to help others learn. ',
  //   image: cwtImage,
  //   github: 'https://github.com/tcovington1/CodeWithTaylor-blog',
  //   icons: [ gatsbyIcon, graphqlIcon ]
    
  // },
];

export default projectData;