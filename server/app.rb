require 'sinatra/base'
require 'sinatra/cross_origin'
require 'json'

class ThermostatApp < Sinatra::Base
  run! if app_file == $0

  enable :sessions
  enable :cross_origin

  before do
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get '/' do
    erb :index
  end

  get '/json' do
    content_type :json
    { :city => "London, GB", :temperature => "22" }.to_json
  end

end
