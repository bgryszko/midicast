/** @license
 *  Copyright 2016 - present The Material Motion Authors. All Rights Reserved.
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

import './popup';
import './background';

if (module.hot) {
  module.hot.accept(
    () => {
      location.reload();
    }
  );
}
