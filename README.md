## Demo

App deplyed on heroku here -> [demo](https://my-ab-testing-demo.herokuapp.com/india)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.

Installation:

`npm install`

To Start Server:

`npm start`

To Visit App:

`localhost:3000/`

## Installation and Setup Instructions

# How to Add a new Country?

1.) Open constants File

`/src/constants/countryContent.js`

2.) Add another JSON object for other country lets say UK

```
UK:{
    variant: <1 is for US or 2 is For INDIA>
    content:[
        {
        image:
          "image link (cdn)",
        content:
          "Doggo ipsum big ol such treat adorable doggo bork very jealous pupper, smol borking doggo with a long snoot for pats fat boi borkf corgo big ol pupper, borking doggo h*ck smol.",
        name: "Anthony Amazo",
        designation: "Designer",
        },
        ...
    ]
}

```

3.) Open DropDown Options constant file
`/src/constants/navbarDropdownOptions.js`

4.) Add following snippet

```
{
  title: "UK",
  link: "/uk",
}
```

5.) Finally Add a Route for it in `/src/App.js`

```
<Router>
...
<Route
    exact
    path="/uk"
    render={() => (
        <Testimonial
            country="UK"
            variant={COUNTRY_CONTENT["UK"].variant}
        />
    )}
/>
</Router>
```
