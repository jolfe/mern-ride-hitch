# Hitch Exercise — Node/MongoDB

Dependencies:

- mongoose
- express
- bcrypt - used for 1 way pw encryption
- jsonwebtoken
- nodemon
- dotenv
- dinero.js - storing money in cents (IEEE 754 floating point numbers innacuracies)

## Documentation

`npm install` to install dependencies
`npm start` to run the server

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

ATLAS_URI = `URI_TOKEN`

JWT_SECRET = `provided in env`

PORT = `####`

## Authors

- [Jack Wolfe](https://www.github.com/jolfe)

## API Reference

#### BALANCE

```
GET /balance => returns current user's balance

GET /balance/history => returns current user's balance history over time

POST /balance/deposit => deposits {"amount": number} to user account

POST /balance/withdraw => withdraws {"amount": number} to user account

POST /balance/history/breakdown => sorts by type (withdraw or deposit) and timestamp in ascending order (newest), ex req body:

{
    "start_at": "2022-01-13T20:06:11.586Z", --> (timestamp)
    "end_at": "2022-01-13T20:06:13.843Z", --> (timestamp)
    "type": "deposit", --> (deposit, withdraw)
    "step": "days" --> (months, weeks, days)
}


# TODO: Implement step feature; ran out of time and focused on security/auth
```

#### AUTH

```
POST /login => ex req:

{
    "username": "usernameEx",
    "password": "passwordEx"
}

# Requires valid email (7+ chars)
```

#### USERS

```
POST /users => same req body as /login

GET /users => returns your user info & transactions

```

## Notes

If I had more time I am certain I could implement the step feature. I have been very busy and haven't had enough time to dedicate to this project, though I am planning on implementing the step tomorrow probably, and subsequently building a SPA frontend
