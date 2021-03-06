/** @license
 *  Copyright 2016 - present The Midicast Authors. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not
 *  use this file except in compliance with the License. You may obtain a copy
 *  of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 *  WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 *  License for the specific language governing permissions and limitations
 *  under the License.
 */

// Using a single entry for all our pages to make Hot Module Replacement work on
// all pages with a single bundle. Each module checks if the current page
// matches its expectations before running.

import { run } from '@cycle/rxjs-run';
import { makeDOMDriver } from '@cycle/dom';

import makeInstrumentAndConnectionDriver from 'cycle-midi';

import {
  hostPageDriver,
  makeMessagesDriver,
} from 'cycle-extensions';

import Popup from './cycles/Popup';
import Background from './cycles/Background';

const {
  instrumentDriver,
  connectionDriver,
} = makeInstrumentAndConnectionDriver();

const isBackgroundPage = window.innerWidth === 0 && window.innerHeight === 0;

if (!isBackgroundPage) {
  history.replaceState(null, 'Popup', 'index.html?cycle=popup');

  run(
    Popup,
    {
      DOM: makeDOMDriver('#root'),
      hostPage: hostPageDriver,
      messages: makeMessagesDriver({ shouldInitiate: true }),
    }
  );

} else {
  history.replaceState(null, 'Background', 'index.html?cycle=background');

  run(
    Background,
    {
      messages: makeMessagesDriver({ shouldInitiate: false }),
      instrument: instrumentDriver,
      instrumentConnection: connectionDriver,
    }
  );
}

if (module.hot) {
  module.hot.accept(
    () => {
      location.reload();
    }
  );
}
