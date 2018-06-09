var botui = new BotUI('my-botui-app');

$initial_delay = 375;
$writing_speed = 1000; // Words per minute, OG 1000ms

function calc_delay(words) {
    // Amout of words | Writing speed | to ms | Initial delay
    delay = words / $writing_speed * 60000 + $initial_delay;
    return delay;
}

// WORKING MESSAGE WITH ANSWER

// MESSAGE
// botui.message.bot({
//     content: 'Whats your name?'

    // GIVE REACTION
    // })
    // .then(function () { 
    //     return botui.action.text({
    //         action: {
    //         placeholder: 'Your name'
    //     }
    // });

// MESSAGE TO REACTION
    // })
    // .then(function (res) {
    //     botui.message.bot({
    //     content: 'Your name is ' + res.value
    //     });
    // });

// ----------------------------------------------------------------------------------------

// WORKING MESSAGES WITH DELAY, er staat er al eentje

// botui.message.bot({
//     content: 'Whats your name?'
// })

// botui.message.bot({
//     delay: 3000,
//     loading: true
//   })
//   .then(function (index) {
  
//     botui.message.update(index, {
//       loading: false,
//       content: 'Hello?'
//     });

//     botui.message.bot({
//         delay: 3000,
//         loading: true,
//         content: 'Hello, this is delayed message shown after a loading message.'
//     });
// });

// ----------------------------------------------------------------------------------------

// WORKING MESSAGES WITH DELAY, 2 met delay

// botui.message.bot({
//     delay: 3000,
//     loading: true
//   })
//   .then(function (index) {
  
//     botui.message.update(index, {
//       loading: false,
//       content: 'Hello?'
//     });

//     botui.message.bot({
//         delay: 3000,
//         loading: true,
//         content: 'Hello, this is delayed message shown after a loading message.'
//     });
// });

// ----------------------------------------------------------------------------------------

// WORKING MESSAGES WITH DELAY, eentje werkt

// botui.message.bot({
//     delay: 3000,
//     loading: true,
//     content: 'Hello, this is delayed message shown after a loading message.'
//   })
//   .then(function (index) {
  
//     botui.message.update(index, {
//       loading: false,
//       content: 'Hello?'
//     });
// });

// ----------------------------------------------------------------------------------------

// WORKING MESSAGES WITH DELAY, eerst de ene, dan de ander

// botui.message.add({
//     delay: 1000,
//     loading: true,
//     content: "Hello?"
//   })
//   .then(function() {
//     return botui.message.add({
//       delay: 3000,
//       loading: true,
//       content: "Hello, this is a delayed message shown after a loading message."
//     });
//   });

// ----------------------------------------------------------------------------------------

// WORKING MESSAGES WITH DELAY, eerst de ene, dan de ander, dan nog eentje erachteraan

// botui.message.add({
//     delay: 1000,
//     loading: true,
//     content: "Hello?"

//   }).then(function() {
//     return botui.message.add({
//       delay: 1000,
//       loading: true,
//       content: "Hello, this is a delayed message shown after a loading message."
//     });

//   }).then(function() {
//     return botui.message.add({
//       delay: 1000,
//       loading: true,
//       content: "nog eentje."
//     });

// });

// ----------------------------------------------------------------------------------------

// WORKING MESSAGES WITH DELAY, berichten met delay + vraag + antwoord

botui.message.add({
    delay: 1000,
    loading: true,
    content: "Delayed message 1"

    }).then(function() {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content: "Delayed message 2"
    });

    }).then(function() {
    return botui.message.add({
      delay: 1000,
      loading: true,
      content: "Delayed message + question"
    });

    }).then(function () { 
    return botui.action.text({
        action: {
        placeholder: 'insert answer'
    }

    }).then(function (res) {
        botui.message.bot({
        delay: 1000,
        loading: true,
        content: 'Your answer is ' + res.value
        });
    });

});

// ----------------------------------------------------------------------------------------

// WORKING MESSAGES WITH DELAY, berichten met delay + meerdere mogelijkheden om te sturen als gebruiker

// botui.message.add({
//     delay: 1000,
//     loading: true,
//     content: "Hello?"

//     }).then(function() {
//     return botui.message.add({
//       delay: 1000,
//       loading: true,
//       content: "Hello, this is a delayed message shown after a loading message."
//     });

//     }).then(function () {
//         return botui.action.button({
//             delay: 1000,
//             addMessage: true,
//             action: [{
//                 text: "Answer 1",
//                 value: 'a'
//             }, {
//                 text: "Answer 2",
//                 value: 'b'
//             }, {
//                 text: "Answer 3",
//                 value: 'c'
//             }],
//         });
//     });