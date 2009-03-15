require 'test_helper'

class AvatarsControllerTest < ActionController::TestCase
  context "An AvatarsController" do
    context "showing new avatar form" do
      setup do
        get :new
      end
      
      should_respond_with :success
      should_render_template :new
      should_assign_to :avatar
      should_render_a_form
    end
    
    context "creating an avatar" do
      setup do
        post :create, :avatar => { :image => File.open(RAILS_ROOT + "/test/criss_angel.jpg") }
      end
      
      should_respond_with :success
      should_render_template :create
      should_assign_to :avatar
      should_change "Avatar.count", :by => 1
    end
  end
end
