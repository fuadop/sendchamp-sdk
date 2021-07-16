"use strict";
// import Sendchamp from './index';
// const sendchamp = new Sendchamp({
//   publicKey: 'sendchamp_live_$2y$10$jVkJCXZhq8RdXcPeniDgY.LCMT93MtCsHJvSG9hdF8oBSIjKYhg4S',
// });
// const sms = sendchamp.SMS;
// const voice = sendchamp.VOICE;
// const verification = sendchamp.VERIFICATION;
// const whatsapp = sendchamp.WHATSAPP;
// sms.registerSender({
//   sender_name: 'ASF',
//   use_case: 'Transactional',
//   sample: 'Your order to @sholawears has been made and would be delivered tommorow.',
// }).then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// });
// sms.send({
//   message: 'Hello from test.ts',
//   sender_name: 'INNOVATION',
//   to: '2348153207998',
// }).then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// });
// sms.getStatus('WuEfZ68lYuQLjx39aaWDFYABk').then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// });
// voice.send({
//   sender_name: 'INNOVATION',
//   customer_mobile_number: '2348153207998',
//   message: 'Hello your number is 08153207998',
// }).then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.error(error);
// });
// verification.sendOTP({
//   channel: 'WHATSAPP',
//   expiration_time: 5,
//   sender: 'INNOVATION',
//   token_length: 6,
//   token_type: 'NUMERIC',
//   customer_mobile_number: '2348153207998',
//   // meta_data: {
//   //   first_name: 'Fuad Olatunji',
//   // },
// }).then((response) => {
//   console.log(response);
// }).catch((error) => {
//   console.log(error);
// });
// whatsapp.sendText({
//   message: 'This is a whatsapp message',
//   recipient: '2348153207998',
//   sender: '2347067959173',
// }).then((response) =>
//   console.log(response))
//   .catch((error) =>
//     console.error(error));
