/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import JavaScript from '@/components/technologies/JavaScript';
import Kubernetes from '@/components/technologies/Kubernetes';
import Flutter from '@/components/technologies/Flutter';
import AWS from '@/components/technologies/AWS';
import MongoDB from '@/components/technologies/MongoDB';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
// Technology Components
import TypeScript from '@/components/technologies/TypeScript';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  Kubernetes: Kubernetes,
  Flutter: Flutter,
  AWS: AWS,
};

export const heroConfig = {
  // Personal Information
  name: 'Jake',
  title: 'A true full-stack developer',
  avatar: '/assets/logo.png',

  // Skills Configuration
  skills: [
    {
      name: 'Kubernetes',
      href: 'https://kubernetes.io/',
      component: 'Kubernetes',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
    {
      name: 'Flutter',
      href: 'https://flutter.dev/',
      component: 'Flutter',
    },
    {
      name: 'React / Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
  ],

  // Description Configuration
  description: {
    template:
      'With my expertise covering all paradigms of development: {skills:0} {skills:1} {skills:2} {skills:3} + more, I turn<b>ideas</b>into<b>reality</b>.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Get in touch',
      href: '/contact',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/jakerlanders',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'www.linkedin.com/in/jakerlanders',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/jake-landersweb',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'mailto:me@jakelanders.com',
    icon: <Mail />,
  },
];
