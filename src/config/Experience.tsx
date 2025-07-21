import ArgoCD from '@/components/technologies/ArgoCD';
import Aurora from '@/components/technologies/Aurora';
import AWS from '@/components/technologies/AWS';
import Azure from '@/components/technologies/Azure';
import Confluence from '@/components/technologies/Confluence';
import Cuelang from '@/components/technologies/Cuelang';
import Dart from '@/components/technologies/Dart';
import DynamoDB from '@/components/technologies/DynamoDB';
import Flutter from '@/components/technologies/Flutter';
import GCP from '@/components/technologies/GCP';
import Go from '@/components/technologies/Go';
import Helm from '@/components/technologies/Helm';
import HtmlIcon from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import Kotlin from '@/components/technologies/Kotlin';
import Kuberentes from '@/components/technologies/Kubernetes';
import MySQL from '@/components/technologies/MySQL';
import NextJs from '@/components/technologies/NextJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prometheus from '@/components/technologies/Prometheus';
import Pulumi from '@/components/technologies/Pulumi';
import Python from '@/components/technologies/Python';
import Redis from '@/components/technologies/Redis';
import Snowflake from '@/components/technologies/Snowflake';
import Sumologic from '@/components/technologies/Sumologic';
import Swift from '@/components/technologies/Swift';
import TailwindCss from '@/components/technologies/TailwindCss';
import Terraform from '@/components/technologies/Terraform';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'CloudZero',
    position: 'Software Engineer 2',
    location: 'Boston, MA (Remote)',
    image: '/company/cloudzero.png',
    description: [
      'Architected and developed a scalable Kubernetes telemetry data pipeline to ingest Prometheus metrics from customer K8s clusters into our cost observability platform, enabling real-time infrastructure cost monitoring.',
      'Led the design and implementation of a revolutionary collection-shipment paradigm with intelligent batching system, achieving an 80% reduction in operational cost overhead while maintaining data integrity.',
      'Engineered full-stack solutions spanning Go-based Kubernetes agents, Helm chart deployments, and Python API services on AWS infrastructure, ensuring seamless integration across diverse customer environments.',
      'Collaborated directly with engineering teams at Fortune 500 companies to iterate on product features and optimize telemetry collection, driving continuous improvement in platform performance and reliability.',
      'Developed and maintained cloud-native monitoring solutions that transformed cost visibility for enterprise customers, enabling data-driven infrastructure optimization decisions.',
    ],
    startDate: 'December 2024',
    endDate: 'Present',
    technologies: [
      {
        name: 'Golang',
        href: 'https://go.dev/',
        icon: <Go />,
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'DynamoDB',
        href: 'https://aws.amazon.com/dynamodb/',
        icon: <DynamoDB />,
      },
      {
        name: 'Snowflake',
        href: 'https://www.snowflake.com',
        icon: <Snowflake />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'GCP',
        href: 'https://cloud.google.com',
        icon: <GCP />,
      },
      {
        name: 'Azure',
        href: 'https://azure.microsoft.com/en-us/',
        icon: <Azure />,
      },
      {
        name: 'Kubernetes',
        href: 'https://kubernetes.io/',
        icon: <Kuberentes />,
      },
      {
        name: 'Helm',
        href: 'https://helm.sh/',
        icon: <Helm />,
      },
      {
        name: 'Sumologic',
        href: 'https://www.sumologic.com/',
        icon: <Sumologic />,
      },
      {
        name: 'Prometheus',
        href: 'https://prometheus.io/',
        icon: <Prometheus />,
      },
      {
        name: 'Pulumi',
        href: 'https://www.pulumi.com/',
        icon: <Pulumi />,
      },
      {
        name: 'Confluence',
        href: 'https://www.atlassian.com/software/confluence',
        icon: <Confluence />,
      },
    ],
    website: 'https://www.cloudzero.com/',
    github: 'https://github.com/jake-cloudzero',
  },
  {
    isCurrent: false,
    company: 'New Relic',
    position: 'Software Engineer 1',
    location: 'Portland, OR',
    image: '/company/newrelic.png',
    description: [
      'Designed and implemented a fully managed Database-as-a-Service (DBaaS) platform on AWS EKS, leveraging custom Kubernetes operators for automated provisioning, scaling, and self-healing of database clusters.',
      'Developed a GitOps-driven manifest state management solution using CUELang, enabling declarative configuration, drift detection, and zero-downtime rollouts for database infrastructure.',
      'Enhanced existing data ingestion pipelines by optimizing throughput and fault tolerance, reducing end-to-end data processing latency by 40% and improving reliability under peak load.',
      'Authored and maintained reusable Terraform modules and internal templates for database infrastructure, standardizing deployments across multiple environments and accelerating developer onboarding.',
      'Collaborated with cross-functional teams to define DBaaS SLAs and performance benchmarks, implementing monitoring, alerting, and auto-remediation workflows that achieved 99.9% availability.',
    ],
    startDate: 'May 2023',
    endDate: 'December 2024',
    technologies: [
      {
        name: 'Golang',
        href: 'https://go.dev/',
        icon: <Go />,
      },
      {
        name: 'Cuelang',
        href: 'https://cuelang.org/',
        icon: <Cuelang />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'Kubernetes',
        href: 'https://kubernetes.io/',
        icon: <Kuberentes />,
      },
      {
        name: 'Helm',
        href: 'https://helm.sh/',
        icon: <Helm />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'MySQL',
        href: 'https://www.mysql.com/',
        icon: <MySQL />,
      },
      {
        name: 'Redis',
        href: 'https://redis.io/',
        icon: <Redis />,
      },
      {
        name: 'AWS Aurora',
        href: 'https://aws.amazon.com/rds/aurora/',
        icon: <Aurora />,
      },
      {
        name: 'Terraform',
        href: 'https://developer.hashicorp.com/terraform',
        icon: <Terraform />,
      },
      {
        name: 'ArgoCD',
        href: 'https://argo-cd.readthedocs.io/en/stable/',
        icon: <ArgoCD />,
      },
      {
        name: 'Confluence',
        href: 'https://www.atlassian.com/software/confluence',
        icon: <Confluence />,
      },
    ],
    website: 'https://newrelic.com',
  },
  {
    isCurrent: true,
    company: 'Sapphire NW',
    position: 'Business Development',
    location: 'Portland, OR',
    image: '/company/sapphirenw.svg',
    description: [
      'Founded and led Sapphire Consulting, a Portland-based firm specializing in end-to-end AI and full-stack application development for small and mid-sized businesses, driving digital transformation and innovation across diverse industries.',
      'Architected and delivered Workout Notepad, a cross-platform iOS/Android mobile app featuring industry-leading exercise visualizations.',
      'Designed and built a custom LLM-powered AI Platform in beta, enabling seamless integration of chatbots, knowledge-base search, and automated content generation for multiple clients, accelerating time-to-market by 50%.',
      'Developed Crosscheck Sports, a tailored scheduling and roster management app for local sports teams, improving event coordination efficiency by 60% and reducing administrative overhead.',
      'Engineered robust web hosting and site maintenance solutions, achieving 99.9% uptime for clients such as ETSI and CheetahLearning.com over a 15-year partnership, with rapid incident response and proactive performance tuning.',
    ],
    startDate: 'January 2020',
    endDate: 'Present',
    website: 'https://sapphirenw.com',
    technologies: [
      {
        name: 'Flutter',
        href: 'https://flutter.dev/',
        icon: <Flutter />,
      },
      {
        name: 'Swift UI',
        href: 'https://www.swift.org/',
        icon: <Swift />,
      },
      {
        name: 'Dart',
        href: 'https://dart.dev/',
        icon: <Dart />,
      },
      {
        name: 'Kotlin',
        href: 'https://kotlinlang.org/',
        icon: <Kotlin />,
      },
      {
        name: 'Golang',
        href: 'https://go.dev/',
        icon: <Go />,
      },
      {
        name: 'Python',
        href: 'https://www.python.org/',
        icon: <Python />,
      },
      {
        name: 'AWS',
        href: 'https://aws.amazon.com/',
        icon: <AWS />,
      },
      {
        name: 'PostgreSQL',
        href: 'https://www.postgresql.org/',
        icon: <PostgreSQL />,
      },
      {
        name: 'DynamoDB',
        href: 'https://aws.amazon.com/dynamodb/',
        icon: <DynamoDB />,
      },
      {
        name: 'HTML',
        href: 'https://en.wikipedia.org/wiki/HTML',
        icon: <HtmlIcon />,
      },
      {
        name: 'Javascript',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        icon: <JavaScript />,
      },
      {
        name: 'Typescript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'Next JS',
        href: 'https://nextjs.org/',
        icon: <NextJs />,
      },
      {
        name: 'Tailwind',
        href: 'https://tailwindcss.com/',
        icon: <TailwindCss />,
      },
    ],
    linkedin: 'https://www.linkedin.com/company/sapphirenw',
  },
];
