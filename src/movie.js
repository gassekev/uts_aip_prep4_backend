class Movie {
  constructor(title='', releaseDate='', duration=0, genre='', synopsis='') {
    this.title = title;
    this.releaseDate = releaseDate;
    this.duration = duration;
    this.genre = genre;
    this.synopsis = synopsis;
  }

  static publicProps() {
    return ['title', 'releaseDate', 'duration', 'genre', 'synopsis'];
  }

  toJSON() {
    const json = {};
    const publicProps = Movie.publicProps();

    for (let i = 0; i < publicProps.length; i++) {
      json[publicProps[i]] = this[publicProps[i]];
    }
    return json;
  }
}

export default Movie;
