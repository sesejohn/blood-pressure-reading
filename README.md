# Blood Pressure Reading

This project is a web-based tool for calculating and visually displaying blood pressure readings. It allows users to input blood pressure readings, and display result with an color-coded easy-to-understand interface.

## Features
- **Input systolic and diastolic values**: Users can enter their blood pressure readings for an instant result.
- **Visual feedback**: Blood pressure results are displayed with color-coded feedback.
- **Responsive UI (mobile first)**: Designed to work across various devices with an animated heartbeat icon and a reset button to clear the form.
- **Dropdown Selection**: Users can choose how the blood pressure reading was done (at home or by a healthcare professional).
  - Why are we asking this? - blood pressure targets for readings done at home are different to those done in a clinic or pharmacy by a healthcare professional.

## Instructions
1. Enter your **systolic** and **diastolic** blood pressure readings.
2. Select how the reading was done from the dropdown menu.
3. Click on **Get your result** to see the result.
4. To clear the input, click the **Reset** button.

## How it Works
- The systolic and diastolic numbers are evaluated and displayed in the circle, with colors representing the condition of the blood pressure:
  - **Red**: High blood pressure
  - **Orange**: Slightly raised blood pressure
  - **Green**: Healthy blood pressure
  - **Purple**: Low blood pressure
  - **Gray**: Invalid reading
- The results is updated according to the evaluation.

## Demo
A live demo can be found [here](https://bp.sesejohn.com).

## Technologies
- HTML5
- CSS3 (with animations)
- JavaScript (for calculations and DOM manipulation)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/johnsese/blood-pressure-reading
   ```
2. Open the index.html file in your browser to use the tool.

## Credits
-  [John Sese](https://github.com/johnsese/)

## License
This project is licensed under the [MIT License](License).


This provides an overview of the project, its features, how to use it, and setup instructions!