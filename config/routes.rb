ActionController::Routing::Routes.draw do |map|
  map.resources :dbs
  
  map.home "/home", :controller => "dbs", :with_profiles => true

  map.root :dbs
end
