require 'test_helper'

class DbsControllerTest < ActionController::TestCase
  context "A DbsController" do
    context "listing DBs" do
      context "without profiles" do
        setup do
          get :index
        end

        should_respond_with :success
        should_render_template :index
        should_assign_to :dbs
      end
      
      context "with profiles" do
        setup do
          get :index, :with_profiles => true
        end

        should_respond_with :success
        should_render_template :with_profiles
        should_assign_to :dbs
      end
    end

    context "showing a DB" do
      setup do
        @db = Db.create(:name => "Tyler Hansbrough",
          :occupation => "UNC Basketball Player")
        get :show, :id => @db.id
      end

      should_respond_with :success
      should_render_template :show
      should_assign_to :db
    end

    context "rendering new DB form" do
      setup do
        get :new
      end

      should_respond_with :success
      should_render_template :new
      should_assign_to :db
    end

    context "creating a DB" do
      context "successfully" do
        setup do
          post :create, :db => { :name => "Tyler Hansbrough",
            :occupation => "UNC Basketball Player" }
        end

        should_respond_with :redirect
        should_redirect_to "dbs_url"
        should_change "Db.count", :by => 1
      end

      context "with an avatar" do
        setup do
          post :create, :db => { :name => "Tyler Hansbrough",
            :occupation => "UNC Basketball Player",
            :avatar => { :image => File.open(RAILS_ROOT + "/test/criss_angel.jpg") } }
        end

        should_respond_with :redirect
        should_redirect_to "dbs_url"
        should_change "Db.count", :by => 1
        should_change "Avatar.count", :by => 1
      end

      context "unsuccessfully" do
        setup do
          post :create, :db => { :name => "Tyler Hansbrough",
            :occupation => "" }
        end

        should_respond_with :success
        should_render_template :new
        should_not_change "Db.count"
        should_assign_to :db
      end
    end
  end
end
