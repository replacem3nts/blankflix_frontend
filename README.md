## 🍿🎬  [blank]FLIX  🎬🍿
There's a lot of great free movies out there on YouTube and Vimeo, but having them spread out on different platforms makes it a pain to stream them all. [blank]FLIX intends to solve that by allowing you create your own custom Netflix-style streaming service by collecting all your favorite movies, organizing them in your own custom channels, and streaming them.

## Getting Started
These instructions provide a step-by-step guide to get a copy of this project on your local machine to test, develop, or watch awesome movies. If you'd like to skip all that and just want to use the app, a free version is deployed and available [here]().

### Installation 📋
NOTE: Once you've installed the backend, you'll then need to install and run the frontend to use the web application. Once you've completed the below, follow the instructions on the frontend README which you can find [here](https://github.com/replacem3nts/blankflix_api).

1. Clone this repository and navigate into the folder:
```
$ git clone git@github.com:your_username_here/cryptolitAPI.git
$ cd cryptolitAPI
```

2. Install dependencies:
```
$ bundle install
```

3. Create the database, migrate, and seed the data:
```
$ rails db:create
$ rails db:migrate
$ rails db:seed
```

4. Make sure PostgreSQL is running, then start the server:
```
$ rails server
```

5. If you have not yet cloned the frontend, click this [link](https://github.com/replacem3nts/blankflix_api) and follow the instructions.

## Domain Model

## Languages and Tools 🛠️
### Frontend:
- [React](https://reactjs.org/docs/getting-started.html)
- [Redux](https://redux.js.org/)
- [React-Player](https://github.com/CookPete/react-player)
- [Custom CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
### Backend:
- [Ruby](https://www.ruby-lang.org/) - Primary backend API language 
- [Ruby on Rails](https://rubyonrails.org/) - Backend API MVC framework
- [PostgreSQL](https://www.postgresql.org/) - Database
- [Active Record](https://guides.rubyonrails.org/active_record_basics.html) - Object Relational Mapping
- [Active Model Serializers](https://github.com/rails-api/active_model_serializers) - Serializer for structuring exposed API data 
- [JWT Tokens](https://github.com/jwt/ruby-jwt) - Used for encrypting user information for authentification

## License
[MIT](https://choosealicense.com/licenses/mit/)