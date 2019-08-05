import Unsplash, { toJson } from 'unsplash-js';

export default class UnsplashService extends Unsplash {
  constructor() {
    super({
      applicationId:
        '494555fbd3a4845f048f75a49e4e2714283cd6d46e45cefaafacf41997ca838b',
      secret:
        '200db19660f8603baed20d25918dbc15053b86255dcf2ac3baa705d95d5f74b8',
    });
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

  searchPhotos = async (keyword) => {
    const response = await this.getResourse(this.search.photos, keyword, 1, 6);
    console.log(response);
    const results = await response.results;

    return results.map((data) => {
      return this._transformData(data);
    });
  };

  _transformData = (data) => {
    return {
      alt: data.alt_description,
      description: data.description,
      color: data.color,
      id: data.id,
      urlThumb: data.urls.thumb,
      urlDownload: data.urls.full,
      urlSmall: data.urls.small,
      userName: data.user.username,
    };
  };
}
