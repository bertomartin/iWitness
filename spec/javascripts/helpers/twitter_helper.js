function makeTweet(params) {
  return _.extend(
    {"created_at":"Tue, 07 Feb 2012 13:18:29 +0000","from_user":"The__Juggernaut","from_user_id":28875574,"from_user_id_str":"28875574","from_user_name":"The__Juggernaut ™​","geo":{"coordinates":[25.7779,-80.2022],"type":"Point"},"id":166873466874761200,"id_str":"166873466874761216","iso_language_code":"en","metadata":{"result_type":"recent"},"profile_image_url":"http://a1.twimg.com/profile_images/1790181970/407997_10101065265566198_13722024_64095789_801952831_n_normal.jpeg","profile_image_url_https":"https://si0.twimg.com/profile_images/1790181970/407997_10101065265566198_13722024_64095789_801952831_n_normal.jpeg","source":"&lt;a href=&quot;http://twitter.com/#!/download/ipad&quot; rel=&quot;nofollow&quot;&gt;Twitter for iPad&lt;/a&gt;","text":"@bsmithavery hey hey","to_user":"bsmithavery","to_user_id":63798953,"to_user_id_str":"63798953","to_user_name":"Brandon Avery Smith","in_reply_to_status_id":166873002590478340,"in_reply_to_status_id_str":"166873002590478336"},
    params);
}

function makeTweets(num, params){
  var a = [];
  params = params || {};
  var tweet = makeTweet(params);
  _.times(num, function(){ a.push(tweet) });
  return a;
}
