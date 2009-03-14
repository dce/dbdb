class DbsController < ApplicationController
  def index
    @dbs = Db.all
    render :action => "with_profiles" if params[:with_profiles]
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
