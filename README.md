# UI Custom Table

## Table of Contents

- [Commands](#commands)
- [Technologies Used](#technologies-used)
- [My Approach](#my-approach)
- [Accessibility](#accessibility)
- [Responsive Design](#responsive-design)
- [Error Handling](#error-handling)

## Commands

- `npm i` to install all project dependencies
- `npm run dev` to start the server at `http://localhost:5173`
- `npm test` to run the test suite

## Technologies Used

- Vite
- React
- Styled Components
- Vitest
- React Testing Library
- Jest

## My Approach

In approaching this project, I chose to make the `Table` component as reusable as possible. To accomplish this, I created a custom hook, `useTableData`, that is called in the `App` component where `Table` is rendered. This hook takes the input data and calls a few utility functions to get the column labels for the table, the list of entries available to download. I chose to store the data in state to highlight how I would use this hook if the data were fetched from an api and not imported from a static file.

This architecture gives developers more control over the prop data that is passed to the `Table` component, making it more reusable. If we wanted the `Table` component to be more fit to purpose, the hook could be moved into the component itself and called there.

## Accessibility

- 100% Lighthouse accessibility score
<img src="https://github.com/kendallha/ui-homework/assets/25498241/d7a82a77-4d38-4fa9-8a4e-b73ddce47d5d" width="400">

## A few extras I'd like to point out:

### Responsive Design

- At smaller screen sizes, the table has a horizontal scrollbar to view overflow content. Gif displays iPhone Pro 12 from responsive tool in Chrome dev tools.

<img src="https://github.com/kendallha/ui-homework/assets/25498241/ff923fb6-9d93-4289-a30b-0669036af38a" width="200">


### Error Handling

- An error message displays when no table data could be found. In future iterations, this could be updated to pass more informative error messages to the `Table`component.

<img src="https://github.com/kendallha/ui-homework/assets/25498241/29058396-1535-4bdd-9dd3-e40b7afd7e83" width="400">




