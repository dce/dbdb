class Db < ActiveRecord::Base
  belongs_to :avatar
  validates_presence_of :name, :occupation

  def avatar=(attrs = {})
    self.build_avatar(attrs)
  end

  def bagfactor
    sleep(2) unless RAILS_ENV == "test"
    rand(50) / 10.0
  end
end
