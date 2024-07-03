# UI Custom Table

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

In approaching this project, I chose to make the `Table` component as reusable as possible. To accomplish this, I created a custom hook, `useTableData`, that is called in the `App` component where `Table` is rendered. This hook takes the input data and calls a few utility functions to get the column labels for the table and the list of entries available to download. In a real-world application this data would likely be fetched from an api, which could be easily implemented in the hook by storing `data` in state with `useState`, and running `useEffect` to fetch the table data from an api and set the value in state.

This architecture gives developers more control over the prop data that is passed to the `Table` component, making it more reusable. If we wanted the `Table` component to be more fit to purpose, the hook could be moved into the component itself and called there.

## Additional Notes:

A few features I'd like to point out:

### Responsive Design

- At smaller screen sizes, the table has a horizontal scrollbar to view overflow content.

### Error Handling

- An error message displays when no table data could be found. In future iterations, this could be updated to pass more informative error messages to the `Table` component.
