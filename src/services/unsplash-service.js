import Unsplash, { toJson } from 'unsplash-js';

export default class unsplashService extends Unsplash {
  constructor() {
    super({
      applicationId:
        '494555fbd3a4845f048f75a49e4e2714283cd6d46e45cefaafacf41997ca838b',
      secret:
        '200db19660f8603baed20d25918dbc15053b86255dcf2ac3baa705d95d5f74b8',
    });
  }

  getLatestPhotos = async () => {
    const res = await this.photos.listPhotos(1, 10, 'popular').then(toJson);

    return res;
  };
}

const unsplash = new unsplashService();

unsplash.getLatestPhotos().then((res) => {
  console.log(res);
});
