class Avatar < ActiveRecord::Base
  has_one :db
  has_attached_file :image, :styles => { :profile => "150x150#", :thumb => "50x50#" }

  before_save :sit_and_wait

  private

  def sit_and_wait
    sleep(5) unless RAILS_ENV == "test"
  end
end
