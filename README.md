# Sendchamp Node.js SDK
The wrapper provides convinient access to the Sendchamp api from applications written in Node.js.

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
- Email Service: ```sendchamp.EMAIL```
- VERIFICATION Service: ```sendchamp.VERIFICATION```

## Services
All methods are asynchronous
All phone numbers are international format (without the plus symbol). e.g <mark>2348153207998</mark>.

### SMS Service
```javascript
    const sms = sendchamp.SMS;
```

- ```sms.send({to, message, sender_name})```: API for sending SMS.
  
  - ```to``` : This represents the destination phone number. The phone number(s) must be in the international format (Example: 23490126727). You can also send to multiple numbers. To do that put numbers in an array (Example: [ '234somenumber', '234anothenumber' ]). <br/><mark>REQUIRED</mark>
  
  - ```message``` : Text message being sent. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>
  
  - ```sender_name``` : Represents the sender of the message. This Sender ID must have been requested via the dashboard or use "Sendchamp" as default.<br/> <mark>STRING</mark> <mark>REQUIRED</mark>

- ```sms.getStatus(sms_message_id)```: API to retrieve the status of an already sent SMS. 

  - ```sms_message_id``` : ID of the SMS that was sent.  <br/><mark>REQUIRED</mark>

- ```sms.registerSender({sender_name, use_case, sample})```: API to register Sender ID for sending SMS.

  - ```sender_name```: Represents the sender of the message. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```use_case```: You should pass either of the following: Transactional, Marketing, or Transactional & Marketing. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>

  - ```sample```: This should contain your sample message. <br/> <mark>STRING</mark> <mark>REQUIRED</mark>

### EMAIL Service
```javascript
    const email = sendchamp.EMAIL;
```