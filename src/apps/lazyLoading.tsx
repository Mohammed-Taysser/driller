import React from 'react';

const Homepage = React.lazy(() => import('../pages/Homepage'));
const AboutUs = React.lazy(() => import('../pages/AboutUs'));
const ContactUs = React.lazy(() => import('../pages/ContactUs'));
const Projects = React.lazy(() => import('../pages/Projects'));
const ProjectDetails = React.lazy(() => import('../pages/ProjectDetails'));
const Services = React.lazy(() => import('../pages/Services'));
const ServiceDetails = React.lazy(() => import('../pages/ServiceDetails'));
const Results = React.lazy(() => import('../pages/Results'));
const PageNotFound = React.lazy(() => import('../pages/404'));

export const PUBLIC_ROUTES = [
	{
		path: '/',
		component: Homepage,
	},
	{
		path: '/about-us',
		component: AboutUs,
	},
	{
		path: '/contact-us',
		component: ContactUs,
	},
	{
		path: '/projects',
		component: Projects,
	},
	{
		path: '/single-project',
		component: ProjectDetails,
	},
	{
		path: '/services',
		component: Services,
	},
	{
		path: '/single-service',
		component: ServiceDetails,
	},
	{
		path: '/results',
		component: Results,
	},
	{
		path: '*',
		component: PageNotFound,
	},
];
