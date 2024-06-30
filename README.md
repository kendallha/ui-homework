# UI Homework: Table

## Table of Contents

- [Project Requirements](#project-requirements)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Testing](#testing)
- [Walkthrough](#walkthrough)

## Project Requirements

### Mock Up
![image001](https://github.com/kendallha/ui-homework/assets/25498241/bc539ce2-0087-426e-80cd-163ef3cabcb4)

### Requirements
- Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.
- The select-all checkbox should be in an unselected state if no items are selected.
- The select-all checkbox should be in a selected state if all items are selected.
- The select-all checkbox should be in an indeterminate state if some but not all items are selected.
- The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.
- Clicking the select-all checkbox should select all items if none or some are selected.
- Clicking the select-all checkbox should de-select all items if all are currently selected.
- Status should be correctly formatted
- Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.
- Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover.

## Technologies Used
- Vite
- React
- Styled Components
- Vitest
- React Testing Library
- Jest

## Installation
1. Clone down this [repo](https://github.com/kendallha/ui-homework)
2. `cd` into project directory
3. Run `npm i` to install all project dependencies
4. Run `npm run dev` to start the server
5. Navigate to http://localhost:5173

## Testing
- Run `npm test` to run the test suite
- Tested using React Testing Library, Vitest, and Jest

## Accessibility
- 100% Lighthouse accessibility score

## Walkthrough

### Interactive Features

### Responsive Design
