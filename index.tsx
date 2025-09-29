/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Set current year in the footer
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear().toString();
}
