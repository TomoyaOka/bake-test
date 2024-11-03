export default class ImageElements {
  constructor(images) {
    this.images = images; //DOM画像
    this.elementData = [];
  }

  _init() {
    this.#getImageElementsData();
  }

  #getImageElementsData() {
    this.images.forEach((image) => {
      const rect = image.getBoundingClientRect();

      const src = image.src;
      const width = rect.width;
      const height = rect.height;
      const top = rect.top;
      const left = rect.left;
      const naturalWidth = image.naturalWidth;
      const naturalHeight = image.naturalHeight;

      //画像情報をpushして格納
      const datas = {
        src: src,
        width: width,
        height: height,
        top: top,
        left: left,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
      };
      this.elementData.push(datas);
    });

    // console.log(this.elementData);
  }

  elementUpdata() {
    this.images.forEach((image, index) => {
      const rect = image.getBoundingClientRect();

      this.elementData[index].src = image.src;
      this.elementData[index].width = rect.width;
      this.elementData[index].height = rect.height;
      this.elementData[index].top = rect.top;
      this.elementData[index].left = rect.left;
      this.elementData[index].naturalWidth = image.naturalWidth;
      this.elementData[index].naturalHeight = image.naturalHeight;
    });
  }
}
