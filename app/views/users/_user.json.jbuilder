json.extract! user, :id, :username, :pin, :profile, :created_at, :updated_at
json.url user_url(user, format: :json)
