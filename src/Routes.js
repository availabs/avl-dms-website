
// --- Public Pages ------


import NoMatch from 'pages/404';
import Home from "pages/home"
import Auth from "pages/Auth"

import CMS from 'pages/CMS/edit'
import Public from 'pages/CMS/view'

export default [
	// -- public
	//Home,
	...Public,
	CMS,
	Auth,
	// -- util
	NoMatch
];
