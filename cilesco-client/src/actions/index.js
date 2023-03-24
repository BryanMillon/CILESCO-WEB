import axios from 'axios'
import { toast } from 'react-hot-toast';

export function getVideos(){
    return  async function(dispatch){
        try {
            let json = await axios.get("https://cilesco-web-api.vercel.app/api/videos/")
            return dispatch({
                type: 'GET_VIDEOS',
                payload:json.data
            })
        } catch (error) {
            return console.log(error)
        }
    }
}

export function getNameVideo(query){
    return async function(dispatch){
       try {
           let json = await axios.get(`https://cilesco-web-api.vercel.app/api/videos?query=${query}`)
           return dispatch({
            type: 'GET_NAME_VIDEOS',
            payload:json.data
           })
       } catch (error) {
        return toast.error("Lo sentimos no se encontro la palabra que buscas", {
            duration: 3500,})
       }
    }    
}

export function getVideoDetail(id){
        return async function(dispatch){
            try {
                let json = await axios.get(`https://cilesco-web-api.vercel.app/api/videos/${id}`)
                return dispatch({
                    type:'GET_VIDEO_DETAIL',
                    payload: json.data
                })
            } catch (error) {
                return console.log(error)
            }
        }
    }

    export function setCurrentPage(page){
        return {
          type: 'CURRENT_PAGE',
          payload: page
      
        }
      }

      export function resetDetail(){
        return (dispatch => {
          dispatch({
            type:"RESET_DETAIL",
          })
        })
      }