// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'App La Re-Z', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/nail/',
    	url: 'nail.html',
    	name: 'nail',
  		},
		{
		path: '/blush/',
    	url: 'blush.html',
    	name: 'blush',
  		},
		{
		path: '/eyeshadow/',
    	url: 'eyeshadow.html',
    	name: 'eyeshadow',
  		},
		{
		path: '/profile/',
    	url: 'profile.html',
    	name: 'profile',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;





 

