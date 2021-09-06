from PIL import Image
from flask import Flask
from flask_restful import Resource, Api, reqparse
from image_convert import convert_to_grayscale
import werkzeug
import uuid

app = Flask(__name__, static_url_path='/static')
api = Api(app)


class ConvertImage(Resource):
    def post(self):
        #  parse.add_argument('file', type=werkzeug.datastructures.FileStorage, location='files')
        parse = reqparse.RequestParser()
        parse.add_argument(
            'file', type=werkzeug.datastructures.FileStorage, location='files')
        args = parse.parse_args()
        print(args)
        image_file = args['file']
        if image_file:
            image_path = f'static/{uuid.uuid1()}.jpg'
            image_file.save(image_path)
            gray_img_path = convert_to_grayscale(image_path)
            return f'http://127.0.0.1:5000/{gray_img_path}'
        return {'mesage': 'File image not provided.'}
        # image_file.save("your_file_name.jpg")


api.add_resource(ConvertImage, '/')

if __name__ == '__main__':
    app.run(debug=True)
