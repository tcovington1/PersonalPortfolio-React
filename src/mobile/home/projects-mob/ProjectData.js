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
import sassIcon from '@iconify/icons-logos/sass';


import mongodbIcon from '@iconify/icons-logos/mongodb';
import nodejsIcon from '@iconify/icons-logos/nodejs-icon';
import expressIcon from '@iconify/icons-logos/express';







//images
import cwtImage from '../../../assets/codewithtaylor.jpeg';
import TruckStopImage from '../../../assets/truckstop.jpeg';
import DevChat from '../../../assets/devchat.png';
// const genhuImage = {GenHuImage}
// const codeWithTaylor = {cwtImage}

const projectData = [
  {
    id: 1,
    name: 'The Truck Stop',
    website: 'https://truckstopdesign.netlify.app/',
    about: 'Mobile businesses need help getting their business online. The Truck Stop solves this problem by offering design, development, SEO, analytics, and social media management.',
    image: TruckStopImage,
    github: 'https://github.com/tcovington1/truck-stop',
    icons: [ reactIcon, sassIcon, netlifyIcon ]
    
  },
  {
    id: 2,
    name: 'DevChat',
    website: 'http://devchatconnect.herokuapp.com/',
    about: 'Still a work in progress full-stack application. DevChat makes it easy to connect with other developers by creating a profile, posting, and it allows the ability to comment and like other posts.',
    image: DevChat,
    github: 'https://github.com/tcovington1/devchat',
    icons: [ reactIcon, nodejsIcon, mongodbIcon, herokuIcon  ]
    
  },
  {
    id: 3,
    name: 'Code With Taylor',
    website: 'https://codewithtaylor.com/',
    about: 'This is my personal blog where I share my code journey, dad stories, and technical posts to help others learn. I use the Netlify CMS to manage my blog posts.  ',
    image: cwtImage,
    github: 'https://github.com/tcovington1/CodeWithTaylor-blog',
    icons: [ gatsbyIcon, graphqlIcon, netlifyIcon ]
    
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