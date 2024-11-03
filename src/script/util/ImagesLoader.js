import { TextureLoader } from "three";
export class ImagesLoader {
  constructor() {
    this.images = [];
    this.imagesData = [];
    this.textures = [];
    this.loader = new TextureLoader();
  }

  getImages(images) {
    images.forEach((image) => {
      const data = image.getBoundingClientRect();

      const datas = {
        src: image.src,
        w: data.width,
        h: data.height,
        top: data.top,
        left: data.left,
      };

      this.imagesData.push(datas);
      this.images.push(image);
    });
  }

  setTexture(images) {
    images.forEach((image, index) => {
      const texture = this.loader.load(image);
      this.textures.push(texture);
    });
    return this.textures;
  }

  onImagesUpdate() {
    this.images.forEach((image, index) => {
      const data = image.getBoundingClientRect();

      this.imagesData[index].src = image.src;
      this.imagesData[index].width = data.width;
      this.imagesData[index].height = data.height;
      this.imagesData[index].top = data.top;
      this.imagesData[index].left = data.left;
    });
  }
}
