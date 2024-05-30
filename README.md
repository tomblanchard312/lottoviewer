# Lottoviewer

Lottoviewer is a React application that displays data from the New York State Government's open data portal. The application allows users to view the most recent data, search by date using a calendar control for draw dates.

## Features

- Displays the most recent data.
- Allows searching data by date using a calendar control.
- Highlights draw dates in the calendar.
- Uses Material-UI for styling.
- Displays the source of the data in the footer.

## Installation

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/tomblanchard312/lottoviewer.git
    ```

2. Navigate to the project directory:

    ```bash
    cd lottoviewer
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment

This project can be deployed to GitHub Pages by following these steps:

1. Install the `gh-pages` package if you haven't already:

    ```bash
    npm install gh-pages --save-dev
    ```

2. Add the following to your `package.json`:

    ```json
    {
      "homepage": "https://tomblanchard312.github.io/lottoviewer",
      "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
      }
    }
    ```

3. Deploy the application:

    ```bash
    npm run deploy
    ```

4. Your application will be available at `https://tomblanchard312.github.io/lottoviewer`.

## Usage

### Viewing Data

- The application displays the most recent data upon loading.
- Use the date picker to select a date and view data for that specific date.
- Draw dates are highlighted in the calendar control.

### Footer

- The footer displays the data source and licensing information.

## Technologies Used

- React
- Material-UI
- date-fns
- gh-pages

## License

Data sourced from [data.ny.gov](https://data.ny.gov) using Creative Commons License. Licensed by Tyler Technologies under [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/).

## Acknowledgements

- [Material-UI](https://mui.com/)
- [date-fns](https://date-fns.org/)
- [Create React App](https://create-react-app.dev/)

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Tom Blanchard - [tomblanchard312@gmail.com](tomblanchard312@gmail.com)

Project Link: [https://github.com/tomblanchard312/lottoviewer](https://github.com/tomblanchard312/lottoviewer)
