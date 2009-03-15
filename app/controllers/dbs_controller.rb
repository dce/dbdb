class DbsController < ApplicationController
  def index
    @dbs = Db.all
    render :action => "with_profiles" if params[:with_profiles]
  end

  def show
    @db = Db.find(params[:id])
    respond_to do |format|
      format.html
      format.js do
        render :partial => "profile", :locals => { :db => @db }
      end
      format.json do
        render :json => { :bagfactor => @db.bagfactor }
      end
    end
  end

  def new
    @db = Db.new(:avatar => {})
  end

  def create
    @db = Db.new(params[:db])
    if @db.save
      redirect_to dbs_url
    else
      render :action => "new"
    end
  end
end
