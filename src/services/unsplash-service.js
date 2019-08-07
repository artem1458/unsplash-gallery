import Unsplash, { toJson } from 'unsplash-js';

export default class UnsplashService extends Unsplash {
  constructor() {
    super({
      applicationId:
        '494555fbd3a4845f048f75a49e4e2714283cd6d46e45cefaafacf41997ca838b',
      secret:
        '200db19660f8603baed20d25918dbc15053b86255dcf2ac3baa705d95d5f74b8',
    });
    // super({
    //   applicationId:
    //     'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9 ',
    //   secret:
    //     '896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043',
    // });
  }

  getResourse = async (method, ...args) => {
    const res = await method(...args);

    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }

    return toJson(res);
  };

  getRandomPhotos = async (count) => {
    const res = await this.getResourse(this.photos.getRandomPhoto, { count });
    return res.map((data) => {
      return this._transformData(data);
    });
  };

  searchPhotos = async (...args) => {
    const response = await this.getResourse(this.search.photos, ...args);
    const imageList = response.results.map((data) => {
      return this._transformData(data);
    });

    return imageList;
  };

  _transformData = (data) => {
    return {
      alt: data.alt_description,
      color: data.color,
      id: data.id,
      urlSmall: data.urls.small,
      userName: data.user.username,
    };
  };
}
