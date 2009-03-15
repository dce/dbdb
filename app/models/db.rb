class Db < ActiveRecord::Base
  validates_presence_of :name, :occupation
  has_one :avatar

  after_save :set_avatar

  def avatar=(attrs = {})
    self.build_avatar(attrs)
  end

  def avatar_id=(num)
    @avatar = Avatar.find(num)
  end

  def bagfactor
    sleep(2)
    rand(50) / 10.0
  end

  private

  def set_avatar
    @avatar.update_attribute(:db_id, self.id) if @avatar
  end
end
