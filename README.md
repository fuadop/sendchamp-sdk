# Sendchamp Node.js SDK
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
The wrapper provides convinient access to the Sendchamp api from applications written in Node.js.
<br/>
<br/>
[![NPM](https://nodei.co/npm/sendchamp-sdk.png?compact=true)](https://npmjs.com/package/sendchamp-sdk/)

## Documentation
Take a look at the [API docs here](https://developers.sendchamp.com).

## Install 
You can install the pacakge from [npm](https://npmjs.org) by running:

```shell
$ npm install --save https://github.com/fuadop/sendchamp-sdk.git

# using npm
$ npm install --save sendchamp-sdk

# using yarn
$ yarn add sendchamp-sdk
```

## Usage
The package needs to be configured with your business public key (test/live) and your development mode (test/live).
<br/><br/>
NB: Using this package with typescript you need to set `esModuleInterop` to `true` in your tsconfig.json file. [See related issue](https://github.com/fuadop/sendchamp-sdk/issues/6): https://github.com/fuadop/sendchamp-sdk/issues/6

```javascript
import Sendchamp from 'sendchamp-sdk';

const sendchamp = new Sendchamp({
  mode: 'test', // this is set to live by default
  publicKey: 'sendchamp_test_$2y$10$U2SHG5T2F/cr0jfzNCKgguHv.23plvJP/75EzZjF5MtLXz65SDrQi'
});

// Initialize a service
const sms = sendchamp.SMS;

// Use the service
const options = {
  to: ['2348153207998'],
  message: 'Hello from postman',
  sender_name: 'sendchamp',
  // optional option to set route
  route: 'international' // can be set to non_dnd, dnd or international, default it non_dnd
};

sms.send(options)
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });

```

## Initialization
Initialize the SDK by doing :
```javascript
  import Sendchamp from 'sendchamp-sdk'; // es6 import
  const Sendchamp = require('sendchamp-sdk'); // commonjs require

  const sendchamp = new Sendchamp(options);
  // options is an object of publicKey and mode
  // See usage
```
After initialization, you can get instances of offered services as follows:

- SMS Service : ```sendchamp.SMS```
- Whatsapp Service : ```sendchamp.WHATSAPP```
- Voice Service : ```sendchamp.VOICE```
- VERIFICATION Service: ```sendchamp.VERIFICATION```

## Services
All methods are asynchronous.<br/>
All phone numbers are international format (without the plus symbol). e.g <mark>2348153207998</mark>.

### SMS Service
```javascript
    const sms = sendchamp.SMS;
```

- ```sms.send({to, message, sender_name, route})```: API for sending SMS. Refer to sms test file([__tests__/sms.spec.ts](__tests__/sms.spec.ts)) to see usage.
  
  - ```to``` : This represents the destination phone number. The phone number(s) must be in the international format (Example: 23490126727). You can also send to multiple numbers. To do that put numbers in an array (Example: [ '234somenumber', '234anothenumber' ]). <br/><mark>REQUIRED</mark>
  
  - ```message``` : Text message being sent. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>
  
  - ```sender_name``` : Represents the sender of the message. This Sender ID must have been requested via the dashboard or use "Sendchamp" as default.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```route``` : Here you can specify a route you want your SMS to go through. Read [this guide](https://support.sendchamp.com/article/14-sms-delivery-routing-guide) for routing options. You should pass either of the following: <b>non_dnd</b>, <b>dnd</b>, or <b>international</b>. <br/> <mark>STRING</mark> <mark>OPTIONAL</mark>

- ```sms.getStatus(sms_message_id)```: API to retrieve the status of an already sent SMS. 

  - ```sms_message_id``` : ID of the SMS that was sent.  <br/><mark>REQUIRED</mark>

- ```sms.registerSender({name, use_case, sample})```: API to register Sender ID for sending SMS.

  - ```name```: Represents the sender of the message. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```use_case```: You should pass either of the following: <b>Transactional</b>, <b>Marketing</b>, or <b>Transactional & Marketing</b>. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```sample```: This should contain your sample message. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>

### VOICE Service
```javascript
    const voice = sendchamp.VOICE;
```

- ```voice.send({message, customer_mobile_number, type, repeat})```: This method allows you to send a text-to-speech voice call. Refer to the voice test file ([__tests__/voice.spec.ts](__tests__/voice.spec.ts)) to see usage.

  - ```message```: The text message you to send with voice.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```customer_mobile_number```: The number represents the destination phone number. The number must be in international format (E.g. <b>2348012345678</b>) <br/> <mark>string[]</mark> <mark>REQUIRED</mark>

  - ```type```: The voice type, Only one type exists currently which is "outgoing".<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```repeat```: The amount of times the message should be repeated.<br/> <mark>INTEGER</mark> <mark>REQUIRED</mark>


### VERIFICATION Service
```javascript
    const verification = sendchamp.VERIFICATION;
```

- ```verification.sendOTP({channel, sender, token_type, token_length, expiration_time, customer_email_address, customer_mobile_number, meta_data})```: This method is used to send Verification OTP (One Time Password) to your customer contact address.

  - ```channel```: <b>VOICE</b>, <b>SMS</b>, <b>WHATSAPP</b> or <b>EMAIL</b>.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```sender```: Specify the sender you want to use. This is important when using SMS OR Whatsapp Channel or we will select a default sender from your account. Eg: KUDA OR +234810000000.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```token_type```: <b>NUMERIC</b> or <b>ALPHANUMERIC.</b><br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```token_length```: The length of the token you want to send to your customer. Minimum is 4.<br/> <mark>INTEGER</mark> <mark>REQUIRED</mark>

  - ```expiration_time```: How long you want to the to be active for in minutes. (E.g 10 means 10 minutes ).<br/> <mark>INTEGER</mark> <mark>REQUIRED</mark>

  - ```customer_email_address```: The email address of your customer. It's required if you're using Email Channel.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```customer_mobile_number```: The phone number of your customer. It must be in international format (E.g 2348012345678). It is required if you're using the SMS or Voice Channel.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```meta_data```: To pass additional information as an object.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

- ```verification.verifyOTP({verification_reference, verification_code})```: This method is used to confirm the OTP that was sent to your customer.

  - ```verification_reference```: The unique reference that was returned as response when the OTP was created.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```verification_code```: The OTP that was sent to the customer.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

### WHATSAPP Service
```javascript
    const whatsapp = sendchamp.WHATSAPP;
```
Refer to the whatsapp test file ([__tests__/whatsapp.spec.ts](__tests__/whatsapp.spec.ts)) for usage.

- ```whatsapp.sendTemplate({sender, recipient, template_code, meta_data})```: Send highly structured messages to your customers based on approved template.

  - ```sender```: Your approved Whatsapp number on Sendchamp. You can use our phone number if you have not registered a number <b>2347067959173</b>.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```recipient```: Whatsapp number of the customer you are sending the message to.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```template_code```: You can find this on the template page under Whatsapp Channel of your Sendchamp dashboard.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```meta_data```: This is the template custom data.<br/> <mark>OBJECT</mark> <mark>REQUIRED</mark>

- ```whatsapp.sendText({sender, recipient, message})```: Utilize this method to send text messages via WhatsApp.

  - ```sender```: This will be the activated Whatsapp phone number E.g 234810000000.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```recipient```: This will be the phone number of the customer E.g 234811111111.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```message```: message to customer.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

- ```whatsapp.sendVideo({sender, recipient, link })```: Utilize this method to send videos via WhatsApp.

  - ```sender```: This will be the activated Whatsapp phone number E.g 234810000000.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```recipient```: This will be the phone number of the customer E.g 234811111111.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```link```: This is the URL to the video resource.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

- ```whatsapp.sendAudio({sender, recipient, link, message})```: Utilize this method to send audio via WhatsApp.

  - ```sender```: This will be the activated Whatsapp phone number E.g 234810000000.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```recipient```: This will be the phone number of the customer E.g 234811111111.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```link```: This is the URL to the audio resource.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```message```: This is the caption to be displayed under the audio in the chat.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

- ```whatsapp.sendLocation({sender, recipient, name, address, latitude, longitude})```: Utilize this method to send locations via WhatsApp.

  - ```sender```: This will be the activated Whatsapp phone number E.g 234810000000.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```recipient```: This will be the phone number of the customer E.g 234811111111.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```longitude```: The longitude of the location E.g <b>-46.662787</b>.<br/> <mark>NUMBER</mark> <mark>REQUIRED</mark>

  - ```latitude```: The latitude of the location E.g <b>-23.55361</b>.<br/> <mark>NUMBER</mark> <mark>REQUIRED</mark>

  - ```name```: The name of the location E.g <b>Robbu Brazil</b>. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```address```: The address of the location E.g <b>Av. Angélica, 2530 - Bela Vista, São Paulo - SP, 01228-200</b>. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>

- ```whatsapp.sendSticker({sender, recipient, link })```: Utilize this method to send stickers via WhatsApp.

  - ```sender```: This will be the activated Whatsapp phone number E.g 234810000000.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```recipient```: This will be the phone number of the customer E.g 234811111111.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```link```: This is the URL to the video resource.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>


## Contributing
PRs are greatly appreciated, help us build this hugely needed tool so anyone else can easily integrate sendchamp into their JavaScript based projects and applications.

1. Create a fork
2. Create your feature branch: git checkout -b my-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request 🚀
## Issues
If you find a bug, please file an issue on [the issue tracker](https://github.com/fuadop/sendchamp-sdk/issues).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/sadiqful"><img src="https://avatars.githubusercontent.com/u/39303081?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aliyu Abubakar</b></sub></a><br /><a href="#blog-sadiqful" title="Blogposts">📝</a> <a href="#business-sadiqful" title="Business development">💼</a> <a href="#content-sadiqful" title="Content">🖋</a> <a href="#financial-sadiqful" title="Financial">💵</a> <a href="#ideas-sadiqful" title="Ideas, Planning, & Feedback">🤔</a> <a href="#mentoring-sadiqful" title="Mentoring">🧑‍🏫</a> <a href="#platform-sadiqful" title="Packaging/porting to new platform">📦</a> <a href="#question-sadiqful" title="Answering Questions">💬</a> <a href="#tutorial-sadiqful" title="Tutorials">✅</a> <a href="#talk-sadiqful" title="Talks">📢</a></td>
    <td align="center"><a href="http://fuadolatunji.me"><img src="https://avatars.githubusercontent.com/u/65264054?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fuad Olatunji</b></sub></a><br /><a href="https://github.com/fuadop/sendchamp-sdk/issues?q=author%3Afuadop" title="Bug reports">🐛</a> <a href="https://github.com/fuadop/sendchamp-sdk/commits?author=fuadop" title="Code">💻</a> <a href="#infra-fuadop" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-fuadop" title="Maintenance">🚧</a> <a href="#design-fuadop" title="Design">🎨</a> <a href="#example-fuadop" title="Examples">💡</a> <a href="#security-fuadop" title="Security">🛡️</a> <a href="#tool-fuadop" title="Tools">🔧</a> <a href="#userTesting-fuadop" title="User Testing">📓</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!