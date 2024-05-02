# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<!-- Class based components vs functional based components -->

Functional Components:
Syntax:
    Functional components are defined as JavaScript functions.
    They are typically arrow functions that return JSX (JavaScript XML) elements.

    State Management:
    Before React Hooks (introduced in React 16.8), functional components were stateless. They couldn't manage state or use lifecycle methods.
    With React Hooks (like useState, useEffect, etc.), functional components can now manage state and utilize other React features previously available only in class components.

    Lifecycle Methods:
    Functional components don't have lifecycle methods like componentDidMount, componentDidUpdate, etc., which were used in class components.
    Instead, React Hooks (useEffect) can be used for managing side effects and mimicking lifecycle behavior.

    Code Simplicity:
    Functional components are generally more concise and easier to read/write compared to class components.

    They promote a more functional programming style, which can be more intuitive for developers familiar with JavaScript functions.

Class-Based Components
Syntax:
    Class-based components are ES6 classes that extend from React.Component.
    They use the render() method to return JSX for rendering UI.

    State Management:
    Class components can manage state using this.state and this.setState() methods.
    State is initialized in the constructor (constructor(props)) and updated via setState().

    Lifecycle Methods:
    Class components have access to lifecycle methods (componentDidMount, componentDidUpdate, etc.) that allow developers to perform actions during different stages of a component's lifecycle.
    Lifecycle methods are useful for tasks like fetching data, subscribing to events, and managing updates.

    Legacy Usage:
    Class-based components were the traditional way of defining components in React prior to the introduction of functional components with hooks.
    Many existing React codebases still use class components, but functional components with hooks are now the recommended approach for new projects.

Recommendation:
For Beginners: Learn functional components with hooks. They are simpler and align with modern React best practices.

Legacy Understanding: Introduce class components briefly for understanding existing codebases, but focus on functional components for new development.

Emphasize Hooks: Explain the importance of React Hooks for state management (useState), side effects (useEffect), and context (useContext), which are fundamental concepts in React development today.
