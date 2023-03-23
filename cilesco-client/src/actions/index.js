import axios from 'axios'


export function getVideos(){
    return  async function(dispatch){
        try {
            let json = await axios.get("http://localhost:9000/api/videos/")
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
           let json = await axios.get(`http://localhost:9000/api/videos?query=${query}`)
           return dispatch({
            type: 'GET_NAME_VIDEOS',
            payload:json.data
           })
       } catch (error) {
        return console.log(error)
       }
    }    
}

export function getVideoDetail(id){
        return async function(dispatch){
            try {
                let json = await axios.get(`http://localhost:9000/api/videos/${id}`)
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