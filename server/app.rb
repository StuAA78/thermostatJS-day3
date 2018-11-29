require 'sinatra/base'

class ThermostatApp < Sinatra::Base
  run! if app_file == $0

  enable :sessions

  get '/' do
    erb :index
  end
  
end
