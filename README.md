# Image to Grayscale Converter

A simple Web App that allows you to upload images and view them converted
to a grayscaled image.
This is my initial introduction to processing images with python so I figured
hooking this up as an api endpoint and building a simple web interface for it.

## Built With:

- [Flask](https://flask.palletsprojects.com/en/2.0.x/) A python web-framework
- [Flask-Restful](https://flask-restful.readthedocs.io/en/latest/) - Flask Rest api library
- [Pillow](https://pillow.readthedocs.io/en/stable/) - A python image processing library
- [React](https://reactjs.org/) - A javascript frontend library
- [Material-UI](https://material-ui.com/) - A Design System
- [Axios](https://www.npmjs.com/package/axios) - Sending http requests easily

## How to run?

### Flask - Backend

- Activate the virtual environment inside /venv/scripts,
- Install the project's requirements inside the main directory using:

### `pip install -r requirements.txt`

- Inside the project directory run:

### `python app.py`

### React - Frontend

Inside /image-converter-frontend/src run:

### `npm install`

and then after its done running:

### `npm start`
