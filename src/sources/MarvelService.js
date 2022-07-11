class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/'
  _apiKey = 'apikey=a352bdb01e9a5faf4c37a3fc40cd6ba6'

  getRes = async (url) => {
    const res = await fetch(url)

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
  }

  getAllChar = () => {
    return this.getRes(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
  }

  getChar = (id) => {
    return this.getRes(`${this._apiBase}characters/${id}?${this._apiKey}`)
  }
}

export default MarvelService
