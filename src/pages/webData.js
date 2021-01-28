import moment from 'moment';
import React from 'react';
import BETTERHALF_AI from '../assets/images/companyIcons/betterhalf.png';
import CBOX_PROJECTS from '../assets/images/companyIcons/cboxprojects.png';
import CELAL_BAYAR_UNIVERSITY from '../assets/images/schoolIcons/celalbayarUniversity.png';
import UDEMY from '../assets/images/licenseIcons/udemy.jpeg';
import {
  FACEBOOK,
  GMAIL,
  LINKEDIN,
  GITHUB,
  TWITTER,
} from '../assets/images';

// TODO: All of images are will move to index.js.

const CONTRIBUTE_URL = 'https://github.com/mrkacan/mrkacan.me';

const experience = {
  key: 'experience',
  link: '/experience',
};
const education = {
  key: 'education',
  link: '/education',
};
const licenses = {
  key: 'licenses',
  link: '/licenses',
};
const skills = {
  key: 'skills',
  link: '/skills',
};
const accomplishments = {
  key: 'accomplishments',
  link: '/accomplishments',
};
const cv = {
  key: 'cv',
  link: '/cv',
};

const PAGES_DATA = {
  experience: {
    key: experience.key,
    title: 'Experience',
    link: experience.link,
    nextPage: '',
    svg: (
      <svg
        className="w-9 group-hover:text-white transition-text  duration-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
        <path
          d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
        />
      </svg>
    ),
  },
  education: {
    key: education.key,
    title: 'Education',
    link: education.link,
    svg: (
      <svg
        className="w-9 group-hover:text-white transition-text  duration-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
        />
      </svg>
    ),
  },
  licenses: {
    key: licenses.key,
    title: 'Licenses & certifications',
    link: licenses.link,
    svg: (
      <svg
        className="w-9 group-hover:text-white transition-text  duration-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  skills: {
    key: skills.key,
    title: 'Skills & endorsements',
    link: skills.link,
    svg: (
      <svg
        className="w-9 group-hover:text-white transition-text  duration-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  accomplishments: {
    key: accomplishments.key,
    title: 'Accomplishments',
    link: accomplishments.link,
    isPending: true,
    svg: (
      <svg
        className="w-9 group-hover:text-white transition-text duration-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  cv: {
    key: cv.key,
    title: 'Download CV',
    link: cv.link,
    isPending: true,
    downloadable: true,
    svg: (
      <svg
        className="w-9 group-hover:text-white transition-text  duration-200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
};

const userExperienceData = [
  {
    id: 1,
    title: 'Senior React & React Native Developer',
    employmentType: 'Contract',
    company: 'Betterhalf.ai',
    companyIcon: BETTERHALF_AI,
    startedDate: moment('2019-10-25', 'YYYY-MM-DD'),
    endDate: 'PRESENT',
  },
  {
    id: 2,
    title: 'Project Execution Program Engineer',
    employmentType: 'Full-time',
    company: 'CBOX TECHNOLOGY',
    companyIcon: CBOX_PROJECTS,
    startedDate: moment('2019-01-25', 'YYYY-MM-DD'),
    endDate: moment('2021-01-25', 'YYYY-MM-DD'),
  },
];

const licenseData = [
  {
    id: 1,
    name: 'React Native ile iOS ve Android Uygulama Geliştirme ve Redux',
    issueOrganization: 'Udemy',
    organizationIcon: 'UDEMY',
    issuedDate: moment('2017-01-28', 'YYYY-MM-DD'),
    expireDate: null,
    licenseLink: 'https://www.udemy.com/certificate/UC-YKAF234M/',
  },
  {
    id: 2,
    name: 'Meteor and React for Realtime Apps',
    issueOrganization: 'Udemy',
    organizationIcon: UDEMY,
    issuedDate: moment('2018-01-28', 'YYYY-MM-DD'),
    expireDate: null,
    licenseLink: 'https://www.udemy.com/certificate/UC-EWWERLBC/',
  },
];

const userEducationData = [
  {
    id: 1,
    school: 'Celal Bayar University',
    degree: '2.86',
    fieldOfStudy: 'Software Engineering',
    schoolIcon: CELAL_BAYAR_UNIVERSITY,
    startedDate: moment('2014-06-18', 'YYYY-MM-DD'),
    endDate: moment('2019-06-20', 'YYYY-MM-DD'),
  },
];

const userSkillsData = [
  {
    id: 1,
    title: 'Featured Skills',
    color: 'secondaryColor',
    data: [
      {
        id: 1,
        text: 'React.JS',
        value: 90,
      },
      {
        id: 2,
        text: 'React-Native',
        value: 90,
      },
      {
        id: 3,
        text: 'JavaScript',
        value: 90,
      },
    ],
  },
  {
    id: 2,
    title: 'Tech Skills',
    data: [
      {
        id: 1,
        text: 'Redux',
        value: 90,
      },
      {
        id: 2,
        text: 'CSS',
        value: 90,
      },
      {
        id: 3,
        text: 'Animated',
        value: 80,
      },
      {
        id: 4,
        text: 'HTML5',
        value: 90,
      },
      {
        id: 5,
        text: 'Firebase',
        value: 90,
      },
    ],
  },
  {
    id: 3,
    title: 'Industry Knowledge',
    color: 'thirdColor',
    data: [
      {
        id: 1,
        text: 'Scrum',
        value: 80,
      },
      {
        id: 2,
        text: 'Team Leading',
        value: 75,
      },
      {
        id: 3,
        text: 'Project Management',
        value: 70,
      },
      {
        id: 4,
        text: 'User Experience (UX)',
        value: 85,
      },
      {
        id: 5,
        text: 'User Interface (UI)',
        value: 75,
      },
    ],
  }, {
    id: 4,
    title: 'Tools & Technologies',
    color: 'yellowColor',
    data: [
      {
        id: 1,
        text: 'GIT',
        value: 80,
      },
      {
        id: 2,
        text: 'Jira',
        value: 85,
      },
      {
        id: 3,
        text: 'Sketch',
        value: 75,
      },
    ],
  },
];

const userSocialAccounts = {
  github: {
    id: 1,
    url: 'github.com/mrkacan',
    Icon: GITHUB,
  },
  linkedIn: {
    id: 2,
    url: 'linkedin.com/in/mrkacan',
    Icon: LINKEDIN,
  },
  gmail: {
    id: 3,
    url: 'mailto:emrekacan@gmail.com',
    Icon: GMAIL,
  },
  facebook: {
    id: 4,
    url: null,
    Icon: FACEBOOK,
  },
  twitter: {
    id: 5,
    url: null,
    Icon: TWITTER,
  },
};

export {
  PAGES_DATA,
  experience,
  education,
  licenses,
  skills,
  accomplishments,
  cv,
  userExperienceData,
  userEducationData,
  userSkillsData,
  licenseData,
  CONTRIBUTE_URL,
  userSocialAccounts,
};
