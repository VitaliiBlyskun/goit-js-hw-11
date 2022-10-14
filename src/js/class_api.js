import axios from 'axios';
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = '30520584-c0fa81cb9ba3feeaa4712e503';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '30520584-c0fa81cb9ba3feeaa4712e503';

export class API {
  #page = 1;
  #query = '';
  #totalPages = 0;

  async getPhotos() {
    // const urlAxios = `q=${this.#query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.#page}&per_page=40`
    // console.log(urlAxios);
    try {
      const response = await axios.get(
        `${BASE_URL}?key=${KEY}&q=${
          this.#query
        }&image_type=photo&orientation=horizontal&safesearch=true&page=${
          this.#page
        }&per_page=40`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  get query() {
    return this.query;
  }

  set query(newQuery) {
    this.#query = newQuery;
  }

  incrementPage() {
    this.#page += 1;
  }

  resetPage() {
    this.#page = 1;
  }

  calculateTotalPages(total) {
    this.#totalPages = Math.ceil(total / 40);
  }

  get isShowLoadMore() {
    return this.#page < this.#totalPages;
  }
}

