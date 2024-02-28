# Bookify

Bookify is a React Native app that allows users to explore and discover books from various categories. With Bookify, users can browse different book categories, view book overviews, read reviews from other users, and leave their own reviews after logging into the system. The app utilizes Firebase Realtime Database for efficient data storage and retrieval, and Firebase Email Authentication for user authentication.

## Features

- Browse Book Categories: Users can explore books across different categories, including Literature & Fiction, Mystery, Romance, Science Fiction, and more.
- Book Overviews: Users can view detailed overviews and descriptions of individual books, providing them with insights into the plot, characters, and themes.
- User Reviews: Read reviews from other users to get a sense of the book's reception and quality. Reviews can help users make informed decisions about which books to read.
- Leave Reviews: After logging into the system using Firebase Email Authentication, users can leave their own reviews for books they have read. This feature fosters a sense of community and allows users to share their thoughts and recommendations.

## Installation

- Clone the repository:

```bash
git clone https://github.com/shz-code/bookify
```

- Install dependencies:

```bash
cd bookify
npm install
```

- Set up Firebase project and enable Firebase Email Authentication and Realtime Database.
  - Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com).
  - Enable Firebase Email Authentication and configure it for your project.
  - Enable Firebase Realtime Database and set up the necessary rules.
- See .env.examle file for the environment variables.
- Start the development server:

```bash
npm start
```

- Follow the instructions provided by the development server to run the app on a physical device or emulator.

## Technologies Used

- **React Native**: A JavaScript framework for building cross-platform mobile applications.
- **Redux**: A state management library for managing application state.
- **React Navigation**: A routing and navigation library for React Native applications.
- **Firebase Realtime Database**: A NoSQL database for storing account and transaction data.
- **Firebase Email Authentication**: Authentication service for user registration and login.

## Future Enhancements

Bookify has great potential for further enhancements and features. Some ideas for future improvements include:

- User Profiles: Implement user profiles where users can customize their preferences, track their reading history, and follow other users.
- Book Recommendations: Develop a recommendation engine that suggests books based on a user's reading history and preferences.
- Social Sharing: Allow users to share book recommendations, reviews, and reading progress on social media platforms.
- Bookmarks and Reading Lists: Enable users to create bookmarks and reading lists to keep track of books they want to read or are currently reading.

## Contributing

Contributions to Bookify are welcome! If you have any ideas, bug reports, or feature requests, please open an issue on the GitHub repository

When contributing, please adhere to the following guidelines:

- Fork the repository and create a new branch for your feature or bug fix.
- Follow the existing coding style and conventions.
- Provide clear and detailed commit messages.
- Write tests for any new functionality and ensure existing tests pass.

## License

Bookify is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions or suggestions, feel free to contact the development team at web.shahidul.alam@gmail.com.
