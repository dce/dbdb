require 'test_helper'

class DbTest < ActiveSupport::TestCase
  context "A DB" do
    should_have_one :avatar
    should_validate_presence_of :name, :occupation

    should "have a bagfactor" do
      db = Db.new
      assert_equal Float, db.bagfactor.class
    end

    should "accept an avatar_id" do
      avatar = Avatar.create(:image => File.open(RAILS_ROOT + "/test/criss_angel.jpg"))
      db = Db.create(:name => "Criss Angel", :occupation => "Illusionist", :avatar_id => avatar.id)
      assert_equal avatar, db.reload.avatar
    end
  end
end
