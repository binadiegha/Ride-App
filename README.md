# Simple Ride App

## A simple demo of a ride hauling app like uber and lift

### this is a simple webapp for demo purpose and only uses images and js image app. NB: it is not a fully functional app. :car ©The african nerd 2021 //Binadiegha

#### Dependency

##### install Craco and ant design

```

$ yarn add antd

$ yarn add @craco/craco

$ yarn add craco-less

```
##### Create a craco.config.js file in your project root directory and input the following code:

```
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': 'red' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

```

##### You're good to go!



