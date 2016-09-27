class GamesController < ApplicationController
  def index
  end
  def data
    ary = Array.new(7)
    -2.upto(ary.length-1) {|n| ary[n] = Game.where(season: 1949, goaldif: n).count
    }
    respond_to do |format|
      format.json {
        render :json => ary
      }
    end
  end
end