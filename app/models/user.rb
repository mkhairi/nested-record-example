class User < ApplicationRecord
  has_one_nested :profile, attributes_writer: { strategy: :rewrite }
  has_many_nested :emails,
                  attributes_writer: {
                    strategy: :rewrite,
                    reject_if: ->(attributes) { attributes['_destroy'].present? }
                  },
                  primary_key: :email

  validates :username, presence: true
end
