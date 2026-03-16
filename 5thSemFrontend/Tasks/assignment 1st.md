## Task 1: Fetch and Display User Data  
Objective: Test API fetching using async/await and DOM rendering.
Instructions:
- Use the JSONPlaceholder API.
- Fetch all users asynchronously and display their name, email, and city in a table.
- Add a “Refresh” button to re-fetch and update the data on the DOM.
Bonus: Show a loading spinner while data is being fetched.

## Task 2: Random Joke Generator
Objective: Understand Promises and UI updates dynamically.
Instructions:
- Fetch a random joke from https://official-joke-api.appspot.com/random_joke.
- Display the setup and punchline on the webpage.
- Include a “Next Joke” button that fetches a new joke every time.
- Use .then() and .catch() for handling success and errors.
Bonus: Disable the button during the API call to prevent multiple clicks.

## Task 3: Weather Information App
Objective: Combine API fetching and async functions with DOM manipulation.
Instructions:
- Create an input box for the user to enter a city name.
- On button click, fetch current weather data from the OpenWeatherMap API.
- Display the temperature, humidity, and condition on the page.
Bonus: Show error messages for invalid city names or API errors.

## Task 4: Post Loader with Delayed Promise
Objective: Simulate delayed data loading using Promises.
Instructions:
- Create a Promise that resolves after 2 seconds with an array of blog post titles.
- Use async/await to “load” posts and display them as a list in the DOM.
- While loading, show a message: “Loading posts…”
Bonus: Add a retry mechanism if the Promise rejects.

## Task 5: Product Search Filter
Objective: Combine async data fetching, event handling, and DOM manipulation.
Instructions:
- Fetch product data from https://fakestoreapi.com/products.
- Display product names and prices in a grid.
- Add a search box to filter displayed products dynamically as the user types.
Bonus: Implement debounce logic for efficient searching.

## Task 6: Sequential Promise Execution
Objective: Demonstrate understanding of Promise chaining and async flow.
Instructions:
- Create three Promises that resolve after 1 second each, returning “Step 1 done”, “Step 2
done”, and “Step 3 done”.
- Chain them using .then() or use async/await to log each step sequentially in the DOM (as
list items).
Bonus: Highlight the current step in bold as it executes.

## Task 7: Image Gallery Loader
Objective: Practice multiple async fetch calls and DOM updates.
Instructions:
- Fetch a list of random images from the Unsplash API using async/await.
- Display the images in a grid layout.
- Add a “Load More” button that fetches more images asynchronously.
Bonus: Add fade-in animation for new images using CSS.