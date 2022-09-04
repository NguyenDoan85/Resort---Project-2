// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.use(passport.initialize());
app.use(passport.session());

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Serve files in 'public' directory
app.use(express.static('public'));

// Load routes
app.use(require('./controllers/index_controller'));
app.use(require('./controllers/guest_controller'));
app.use(require('./controllers/table_controller'));

require('./controllers/guest_auth_controller')(app, passport);
require('./controllers/admin_auth_controller')(app, passport);
require('./config/passport.js')(passport);

app.use('/', function (req, res) {
  res.render('homepage');
});

// Sync models then start the server to begin listening
sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => {
    console.log('----------------------');
    console.log('App listening on PORT ' + PORT);
  });
});
