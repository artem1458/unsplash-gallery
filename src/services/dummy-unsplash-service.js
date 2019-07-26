export default class DummyUnsplashService {
  counter = 0;

  getRandomPhotos = (count) => {
    const result = [];

    for (let i = 0; i < count; i++) {
      this.counter++;
      result.push({
        alt: 'TEST-alt',
        description: 'Test-Description',
        color: '#EEE',
        id: this.counter,
        urlThumb:
          'http://www.mediacy.com/images/home/Image-Pro_Icon_256x256.png',
        urlDownload:
          'http://www.mediacy.com/images/home/Image-Pro_Icon_256x256.png',
        urlSmall:
          'http://www.mediacy.com/images/home/Image-Pro_Icon_256x256.png',
        userName: 'Test-UserName',
      });
    }

    return result;
  };
}
