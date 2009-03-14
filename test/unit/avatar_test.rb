require 'test_helper'

class AvatarTest < ActiveSupport::TestCase
  context "An Avatar" do
    should_belong_to :db
    should_have_attached_file :image
  end
end
