ActionController::Routing::Routes.draw do |map|
  map.resources :dbs, :avatars
  
  map.home "/home", :controller => "dbs", :with_profiles => true
  map.version_4 "/v4", :controller => "dbs", :with_profiles => true, :hide_scores => true

  map.root :dbs
end
