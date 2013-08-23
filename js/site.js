$(function() {
});

<div id='cse' style='width: 20%;'>Loading</div>
<script src='//www.google.com/jsapi' type='text/javascript'></script>
<script type='text/javascript'>
google.load('search', '1', {language: 'en', style: google.loader.themes.V2_DEFAULT});
google.setOnLoadCallback(function() {
  var customSearchOptions = {};
  var orderByOptions = {};
  orderByOptions['keys'] = [{label: 'Relevance', key: ''} , {label: 'Date', key: 'date'}];
  customSearchOptions['enableOrderBy'] = true;
  customSearchOptions['orderByOptions'] = orderByOptions;
  customSearchOptions['overlayResults'] = true;
  var customSearchControl =   new google.search.CustomSearchControl('011037256899612617804:1iwttqkfzuo', customSearchOptions);
  customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
  var options = new google.search.DrawOptions();
  options.setAutoComplete(true);
  customSearchControl.draw('cse', options);
}, true);
