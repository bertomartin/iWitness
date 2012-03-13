var CuratedResultsCache = {
  add: function(result) {
    localStorage[this._key(result)] = result.serialize();
  },

  remove: function(result) {
    delete localStorage[this._key(result)];
  },

  forEach: function(callback) {
    for (var key in localStorage) {
      if(this._isKey(key)) {
        var obj = JSON.parse(localStorage[key]);
        var result = IWitness.resultFactory.create(obj.resultType, obj);
        callback(result);
      }
    }
  },

  _key: function(result){
    return 'curated_' + result.get('resultId');
  },

  _isKey: function(key) {
    return key.substring(0,8) == 'curated_';
  }
}
