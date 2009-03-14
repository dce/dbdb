class DbsController < ApplicationController
  def index
    @dbs = Db.all
  end
end
