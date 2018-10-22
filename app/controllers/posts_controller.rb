class PostsController < ApplicationController
    def index
      render json: Post.all
    end
  
    def show
    end
  
    def new
    end
  
    def edit
    end
  
    def delete
      Post.find(params[:id]).destroy
      render json: { message: 'Post deleted' }
    end
  
  
    private
  
    def post_params
      params.require(:post).permit(:first_name, :last_name, :body)
    end
  end