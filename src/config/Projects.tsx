import Dart from '@/components/technologies/Dart';
import DynamoDB from '@/components/technologies/DynamoDB';
import Flutter from '@/components/technologies/Flutter';
import Go from '@/components/technologies/Go';
import MySQL from '@/components/technologies/MySQL';
import NextJs from '@/components/technologies/NextJs';
import Python from '@/components/technologies/Python';
import ReactIcon from '@/components/technologies/ReactIcon';
import Swift from '@/components/technologies/Swift';
import TypeScript from '@/components/technologies/TypeScript';
import { Project } from '@/types/project';
import React from 'react';

export const projects: Project[] = [
  {
    title: 'Workout Notepad',
    description:
      'p',
    image: '/project/workout-notepad.png',
    // video: 'https://ik.imagekit.io/hokb3mrdr/notesbuddy.mp4?tr=orig',
    link: 'https://workoutnotepad.co/',
    technologies: [
      { name: "Flutter", icon: <Flutter key="flutter" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: "Golang", icon: <Go key="go" /> },
      { name: "Python", icon: <Python key="python" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: "MySQL", icon: <MySQL key="mysql" /> },
      { name: "DynamoDB", icon: <DynamoDB key="dynamodb" /> },
    ],
    github: 'https://github.com/jake-landersweb/workout_notepad_v2',
    live: 'https://workoutnotepad.co/',
    details: true,
    projectDetailsPageSlug: '/projects/workout-notepad',
    isWorking: true,
  },
  {
    title: 'Crosscheck Sports',
    description:
      'Crosscheck Sports gives you unmatched features and customization to easily manage your sports team.',
    image: '/project/xcheck.png',
    link: 'https://crosschecksports.com',
    technologies: [
      { name: "Flutter", icon: <Flutter key="flutter" /> },
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: "Python", icon: <Python key="python" /> },
      { name: "MySQL", icon: <MySQL key="mysql" /> },
      { name: "DynamoDB", icon: <DynamoDB key="dynamodb" /> },
    ],
    github: 'https://github.com/jake-landersweb/crosscheck_mobile',
    live: 'https://crosschecksports.com',
    details: true,
    projectDetailsPageSlug: '/projects/crosscheck-sports',
    isWorking: true,
  },
  {
    title: 'Sapphire NW',
    description:
      'Marketing website for my business built with NextJS. Focused on creating a beautiful user experience and flawless design.',
    image: '/company/sapphirenw.svg',
    link: 'https://sapphirenw.com',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: "React", icon: <ReactIcon key="react" /> },
    ],
    live: 'https://sapphirenw.com',
    details: true,
    projectDetailsPageSlug: '/projects/sapphirenw',
    isWorking: true,
  },
  {
    title: 'Calorie Me',
    description:
      'This hyper-elegant calorie-tracking app, built with SwiftUI and a custom document-style backend database, was a weekend experiment in mobile development and data persistence.',
    image: '/project/calorieme.png',
    link: 'https://nn.jakelanders.com',
    technologies: [
      { name: "Swift UI", icon: <Swift key="swift" /> },
    ],
    github: 'https://github.com/jake-landersweb/calorie_me',
    live: 'https://nn.jakelanders.com',
    details: true,
    projectDetailsPageSlug: '/projects/calorie-me',
    isWorking: true,
  },
  {
    title: 'Neural Network From Scratch',
    description:
      'Implementation of a functioning neural network implemented entirely in the dart programming language without the aid of packages.',
    image: '/project/nn.png',
    link: 'https://nn.jakelanders.com',
    technologies: [
      { name: "Flutter", icon: <Flutter key="flutter" /> },
      { name: 'Dart', icon: <Dart key="dart" /> },
    ],
    github: 'https://github.com/jake-landersweb/workout_notepad_v2',
    live: 'https://nn.jakelanders.com',
    details: true,
    projectDetailsPageSlug: '/projects/neural-network',
    isWorking: true,
  },
];
