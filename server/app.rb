require 'sinatra/base'
require 'sinatra/cross_origin'
require 'json'

class ThermostatApp < Sinatra::Base
  run! if app_file == $0

  enable :sessions
  enable :cross_origin


  before do
    session[:city] = "London, GB" if session[:city].nil?
    session[:temperature] = "19" if session[:temperature].nil?
    response.headers['Access-Control-Allow-Origin'] = '*'
  end

  get '/' do
    erb :index
  end

  get '/json' do
    city = session[:city]
    temperature = session[:temperature]
    content_type :json
    { :city => city, :temperature => temperature }.to_json
  end

  get '/jsonset' do
    session[:temperature] = params[:temperature] unless params[:temperature].nil?
    p session[:temperature]
    p params[:temperature]
    p session[:city] = params[:city] unless params[:city].nil?
  end

end
