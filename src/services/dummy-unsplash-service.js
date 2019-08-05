export default class DummyUnsplashService {
  itemId = 0;

  getRandomPhotos = (count = 9) => {
    const result = [];

    for (let i = 0; i < count; i++) {
      this.itemId++;
      result.push({
        alt: 'TEST-alt',
        description: 'Test-Description',
        color: '#EEE',
        id: this.itemId,
        urlThumb:
          'https://www.arborday.org/trees/lifestages/images/figure-life-stages.jpg',
        urlDownload:
          'https://www.arborday.org/trees/lifestages/images/figure-life-stages.jpg',
        urlSmall:
          'https://www.arborday.org/trees/lifestages/images/figure-life-stages.jpg',
        userName: 'Test-UserName',
      });
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(result);
      }, 300);
    });
  };

  searchPhotos = () => this.getRandomPhotos();
}
