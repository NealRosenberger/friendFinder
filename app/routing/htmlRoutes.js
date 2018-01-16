module.exports = (app) => {

	app.get('/', (req, res) => {
		// res.sendFile(path.join(__dirname, 'home.html'));
		res.sendFile('home.html', { root: './app/public' });
	});

	app.get('/survey', (req,res) => {
		// res.sendFile(path.join(__dirname, 'survey.html'));
		res.sendFile('survey.html', { root: './app/public' });
	})

	app.get('/logic.js', (req,res) => {
		// res.sendFile(path.join(__dirname, 'survey.html'));
		res.sendFile('logic.js', { root: './' });
	})
};