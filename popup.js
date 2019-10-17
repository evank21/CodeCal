// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// let changeColor = document.getElementById('changeColor');
// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
//   changeColor.onclick = function(element) {
//     let color = element.target.value;
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       chrome.tabs.executeScript(tabs[0].id, {
//         code: 'document.body.style.backgroundColor = "' + color + '";'
//       });
//     });
//   };
// });

// const schedule = document.createElement('div');
// schedule.add;

fetch('http://slack-server.elasticbeanstalk.com/calendar/LA/32')
  .then(data => data.json())
  .then(res => {
    const date = document.createElement('div');
    date.classList.add('date');
    for (let x in res) {
      if (x === 'Oct 07 2019') {
        date.innerText = x;
      }
    }

    document.getElementById('dateContainer').appendChild(date);

    // const flexbox = document.createElement('div');
    // flexbox.classList.add('flex-container');
    // document.body.appendChild(flexbox);

    // const leftArrow = document.createElement('button');
    // leftArrow.type('button');
    // leftArrow.innerText = '<';
    // document.body.flexbox.appendChild(leftArrow);

    // const events = document.createElement('div');

    function getEvent(object) {
      console.log(object);
      let name = '';
      let start = '';
      let end = '';
      for (let i = 0; i < object['Oct 07 2019'].length; i++) {
        name = object['Oct 07 2019'][i].summary;
        start = object['Oct 07 2019'][i].start.dateTime;
        end = object['Oct 07 2019'][i].end.dateTime;

        let event = document.createElement('div');
        event.innerText = name + '\n' + start + '-' + end;
        event.classList.add('individualEvents');
        document.getElementById('events').appendChild(event);
      }
    }
    getEvent(res);
  });
