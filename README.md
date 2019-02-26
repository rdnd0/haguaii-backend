# haguaii

## Description

Create your own button shirt based on the coolest illustrations

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can save my configured shirt (can be configured without being logged in)
-  **Login:** As a user I can login to the platform so that I can save my shirt
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **Configure shirt** As a user I can configure my own shirt based on pre-designed illustrations (no login required)
-  **Create shirt** As a user I can create a shirt (an order it)
-  **List Shirts** As a user I want to see all the shirts I created
-  **Search Restaurants** As a user I want to search restaurants by name so that I know if it´s already in the platform


## Backlog

Configure shirt:
- Add more elements to the shirt
- Use canvan (or similar technique) to render the shirt based on the options selected
- Allow the user to change the background color

Payment screen:
- Show a map to where can you pick up the shirt
- Display a payment screen to simulate the transaction end to end
  
# Client

## Routes
| Method | Path | Component | Permissions | Behavior | 
|--------|------|--------|--| -------|
| `get`  | `/` | HomePageComponent| public | just promotional copy|
| `post` | `/auth/signup` | SignupPageComponent| anon only| signup form, link to login, navigate to homepage after signup|
| `post` | `/auth/login` | LoginPageComponent | anon only |login form, link to signup, navigate to homepage after login |
| `post` | `/auth/logout` | n/a| anon only | navigate to homepage after logout, expire session |
| `get`  | `/illustrations` | UserShirts| user only | shows all configured shirts
| `post`  | `/shirt` | UserShirts | user only | creates new shirt navigates to checkout after 
| `get`  | `/shirt` | UserShirts| user only | shows configured shirt(s)
| `get` | `/profile/me` | ProfilePageComponent | user only | my details, my shirts
| `get` | `**` | NotFoundPageComponent | public | 




## Components

- Main Screen
- Create shirt
  - Input: number of elements, illustrations
  - Output : shirt



## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous
- Shirt Service
  - shirt.list()
  - shirt.create(data)
  
# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
```

Shirt model

```
owner - ObjectID<User> // required
image - String // required
price - String
composition - String
size - Enum
```

## API Endpoints (backend routes)

- GET /auth/me
  - 404 if no user in session
  - 200 with user object
- POST /auth/signup
  - 401 if user logged in
  - body:
    - username
    - email
    - password
  - validation
    - fields not empty (422)
    - user not exists (409)
  - create user with encrypted password
  - store user in session
  - 200 with user object
- POST /auth/login
  - 401 if user logged in
  - body:
    - username
    - password
  - validation
    - fields not empty (422)
    - user exists (404)
    - passdword matches (404)
  - store user in session
  - 200 with user object
- POST /auth/logout
  - body: (empty)
  - 204
- GET /illustrations
  - Provide array with illustrations and images
  - 200 with array of illustrations
- GET /shirt
  - Provide array with user shirts
  - 200 with array of shirts
- POST /shirt
  - body:
    - name
    - phone
    - address
  - validation
    - fields not empty
  - create shirt
  - 200 with shirt object

  

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com) or picture of your physical board

### Git

The url to your repository and to your deployed project

[Client repository Link](http://github.com)
[Server repository Link](http://github.com)

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)