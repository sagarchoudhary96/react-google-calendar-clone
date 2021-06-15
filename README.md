# React Google Calendar Clone

### [Live Version](https://sagarchoudhary96.github.io/react-google-calendar-clone/)

A Basic google calendar Weekview clone to display events and store the list of event to indexedDB

## Requirements

- yarn

## Libraries/Language Used

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [IDB](https://github.com/jakearchibald/idb)
- [TypeScript](https://www.typescriptlang.org/)

## How to run:

1. [Download](https://github.com/sagarchoudhary96/react-google-calender-clone/archive/refs/heads/master.zip) or [Clone](https://github.com/sagarchoudhary96/react-google-calender-clone.git) the Repository.
2. Run `yarn install` to install the project dependencies.

3. Run `yarn start` to run the app in development mode.

4. App can be seen at: `http://localhost:3000/`

## Page Load Time

Page Load TIme has been calculated by using the [Lighthouse Tool](https://developers.google.com/web/tools/lighthouse).

![img](https://user-images.githubusercontent.com/16102594/121949976-bd423580-cd76-11eb-9687-661617031c3d.png)

### Steps taken to Optimize

1. There was render blocking javascript for google font causing delay, used method mentioned [here](https://pagespeedchecklist.com/asynchronous-google-fonts) to overcome the problem.

2. Only importing used Module in a component from library rather than importing whole library.

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/master/packages/cra-template/template/README.md).
