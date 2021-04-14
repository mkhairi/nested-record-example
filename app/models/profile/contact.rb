class Profile::Contacts < NestedRecord::Base
  attribute :email, :string
  attribute :phone, :string
  has_many_nested :socials
end
