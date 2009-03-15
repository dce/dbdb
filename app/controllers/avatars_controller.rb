class AvatarsController < ApplicationController
  def new
    @avatar = Avatar.new
  end
  
  def create
    @avatar = Avatar.create(params[:avatar])
  end
end
