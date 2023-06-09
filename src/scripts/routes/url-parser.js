const UrlParser = {
  parseActiveUrlCaseSensitive() {
    const url = window.location.hash.slice(1);
    return this._urlSplitter(url);
  },
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splittedUrl = this._urlSplitter(url);
    return this._urlCombiner(splittedUrl);
  },
  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },
  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
            + (splitedUrl.id ? '/:id' : '')
            + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};
export default UrlParser;
