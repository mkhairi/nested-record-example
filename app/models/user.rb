class User < ApplicationRecord
  has_one_nested :profile
  has_many_nested :emails,
                  attributes_writter: {
                    strategy: :upsert,
                    reject_if: ->(attributes) { attributes['_destroy'].present? }
                  },
                  primary_key: :email

  validates :username, presence: true
end
