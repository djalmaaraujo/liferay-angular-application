<%@ include file="/init.jsp" %>

<h1>Latest Posts</h1>

<section ng-controller="NewsFeedController as NewsFeed">
  <p ng-hide="NewsFeed.results.length">Loading News from <span class="label label-primary">http://jsonplaceholder.typicode.com/posts</span> ...</p>

  <ul class="media-list">
    <li class="media" ng-repeat="result in NewsFeed.results">
      <div class="media-left">
        <a href="#">
        <img class="media-object" src="http://placehold.it/64x64" alt="...">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ result.title }}</h4>
        {{ result.body }}
      </div>
    </li>
  </ul>
</section>

