from PIL import Image, ImageOps
import numpy as np


def convert_to_grayscale(file_path):
    # convert image to grayscale and output new image file
    img_path, ext = file_path.split('.')
    img = Image.open(file_path)
    pixels = img.load()
    gray_pixels = []
    for i in range(img.size[1]):
        gray_pixels.append([])
        for j in range(img.size[0]):
            red, green, blue = pixels[j, i]
            gray_pixels[i].append(
                int(red * 0.299 + green * 0.587 + blue * 0.114))
    im = np.array(gray_pixels)
    gray_image = Image.fromarray(im)
    # gray_image = gray_image.transpose(Image.ROTATE_270).convert('L')
    gray_image = gray_image.convert('L')
    gray_img_path = f'{img_path}-gray.{ext}'
    gray_image.save(gray_img_path)

    return file_path, gray_img_path


# if __name__ == '__main__':
#     convert_to_grayscale('image.jpg')
