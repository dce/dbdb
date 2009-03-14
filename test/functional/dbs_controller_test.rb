require 'test_helper'

class DbsControllerTest < ActionController::TestCase
  context "A DbsController" do
    context "listing DBs" do
      setup do
        get :index
      end
      
      should_respond_with :success
      should_render_template :index
      should_assign_to :dbs
    end
  end
end
