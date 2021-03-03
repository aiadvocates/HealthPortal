# AysLabs

Sample app for [What's new with Azure Cognitive Services, Ignite 2021 session](https://myignite.microsoft.com/sessions/6f88c4fd-684e-431b-a5eb-1f101a0aba51?WT.mc_id=aiml-13738-ayyonet). Find more [Ignite Session Resources](https://www.microsoft.com/en-us/devrel/cognitiveservices?WT.mc_id=aiml-13738-ayyonet). 


| [![Form Recognizer Detecting IDs](/images/formRecognizerId.gif)](https://docs.microsoft.com/en-us/azure/cognitive-services/form-recognizer/whats-new?WT.mc_id=aiml-13738-ayyonet) |  [![Azure Spatial Analysis Distance Measuring](/images/spatialAnalysis.gif)](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/intro-to-spatial-analysis-public-preview?WT.mc_id=aiml--ayyonet) | [![Face API - Face Mask Detection](/images/FaceAPIMaskDetection.gif)](https://youtu.be/qiLBB4QkOH0) |
|:-- |:-- |:-- | 

## Technologies

* [Azure Cloud](https://azure.microsoft.com/en-us/free/ai/?WT.mc_id=aiml-13738-ayyonet)
* [Azure Cognitive Services](https://docs.microsoft.com/en-us/azure/cognitive-services/?WT.mc_id=aiml-13738-ayyonet)
* [Azure Health Bot](https://docs.microsoft.com/azure/health-bot/?WT.mc_id=aiml-13738-ayyonet)
* [Spatial Analysis](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/intro-to-spatial-analysis-public-preview?WT.mc_id=aiml-13738-ayyonet)
* [Text Analytics for Health](https://docs.microsoft.com/azure/cognitive-services/text-analytics/how-tos/text-analytics-for-health?tabs=ner&WT.mc_id=aiml-13738-ayyonet)
* [Form Recognizer](https://docs.microsoft.com/en-us/azure/cognitive-services/form-recognizer/whats-new?WT.mc_id=aiml-13738-ayyonet)
* [Face API](https://docs.microsoft.com/en-us/azure/cognitive-services/face/releasenotes?WT.mc_id=aiml-13738-ayyonet)
* [Text To Speech](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/index-text-to-speech?WT.mc_id=aiml-13738-ayyonet)
* [Angular CLI](https://github.com/angular/angular-cli)

## Development Set-up

### Azure Account & Resources

 - Start Free Azure AI 12 months [free popular services + $200 credit](https://azure.microsoft.com/en-us/free/ai/?WT.mc_id=aiml-13738-ayyonet)
 - [Create Cognitive Services Resources](https://docs.microsoft.com/azure/cognitive-services/cognitive-services-apis-create-account?tabs=multiservice%2Cwindows&WT.mc_id=aiml-13738-ayyonet) and copy account key, location and endpoint
 - Create and environments files for project as [in this example](/projects/health-portal/src/environments):

```json
export const environment = {
  production: false,
  cognitive: {
    key: 'your key here',
    endPoint: 'your end point here',
    location: 'your location here'
  },
  speech: {
    key: 'your key here',
    endPoint: 'your end point here',
    location: 'your location here'
  }
};
```

Install latest stable [NodeJS](https://nodejs.org/en/download/current/)
Optionally install [Angular CLI](https://github.com/angular/angular-cli) globally to be able to develop with it and to use `ng serve` command.

```
npm i
npm run start
```

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
