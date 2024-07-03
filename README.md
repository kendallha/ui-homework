# UI Custom Table

## Table of Contents

- [Commands](#commands)
- [Technologies Used](#technologies-used)
- [My Approach](#my-approach)
- [Additional Notes](#a-few-extras-I'd-like-to-point-out)

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

## A few extras I'd like to point out:

### Responsive Design

- At smaller screen sizes, the table has a horizontal scrollbar to view overflow content.

### Error Handling

- An error message displays when no table data could be found. In future iterations, this could be updated to pass more informative error messages to the `Table` component.
