# Welcome to React Native Boilterplate 👋

This boilerplate provides a robust starting point for React Native development, pre-configured with essential libraries and a structured folder layout. Designed to streamline your development process, this template integrates key tools and practices to help you build high-quality mobile applications efficiently.

 It includes a bottom tab navigator and five sample dummy pages to help you get started quickly with navigation and screen management.

## Features

- **Expo Integration**: Leverage the power of Expo for a streamlined development experience across Android, iOS, and web platforms.
- **Pre-configured Libraries**: Includes essential libraries such as React Navigation for routing, React Native Paper for UI components, and many more
- **Bottom Tab Navigator**: Comes with a pre-configured bottom tab navigator to facilitate easy screen transitions.
- **Sample Dummy Pages**: Five dummy pages are included by default to provide a starting point for your app’s content and layout.

## Get started

1. Install dependencies

   ```bash
   yarn install
   ```

2. Start the app

   ```bash
    yarn expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo


## Libraries Used


### Navigation

- [React Navigation:](https://reactnavigation.org/docs/getting-started) Routing and navigation for Expo and React Native apps.

### Styling and UI

- [React Native Paper:](https://callstack.github.io/react-native-paper/docs/guides/getting-started/) A high-quality, standard-compliant Material Design library for React Native.

- [Styled Components:](https://www.npmjs.com/package/styled-components) Styling components with tagged template literals.

- [Expo Vector Icons:](https://icons.expo.fyi/Index) Icon library for Expo.

- [React Native SVG Transformer:](https://www.npmjs.com/package/react-native-svg-transformer) Transform SVG files into React components.

### Storage

- [Async Storage:](https://www.npmjs.com/package/@react-native-async-storage/async-storage) An asynchronous, unencrypted, persistent, key-value storage system for React Native.

- [Expo Secure Store:](https://www.npmjs.com/package/expo-secure-store) Provides a way to encrypt and securely store key–value pairs locally on the device.

### Additional Libraries

- [react-native-safe-area-context:](https://www.npmjs.com/package/react-native-safe-area-context) A library to handle safe area insets for iOS and Android devices.

- [react-native-size-matters:](https://www.npmjs.com/package/react-native-size-matters) A utility to scale and size elements consistently across different screen sizes and densities.


## Usage of ESLint

ESLint is used in this project to ensure code quality and consistency. It helps in identifying and fixing problematic patterns or code that doesn’t adhere to the defined coding standards. The ESLint configuration used in this project is based on the Airbnb JavaScript Style Guide, which is a popular style guide for JavaScript development.

To run ESLint, use the following command:

   ```bash
   yarn lint
   ```

This will check the codebase for any linting issues based on the configured rules.
