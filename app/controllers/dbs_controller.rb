class DbsController < ApplicationController
  def index
    @dbs = Db.all
  end

  def new
    @db = Db.new
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
