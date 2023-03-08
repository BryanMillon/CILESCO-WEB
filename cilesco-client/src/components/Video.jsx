import React, { useEffect } from "react";
import { getVideoDetail, resetDetail } from '../actions'
import { useDispatch, useSelector } from "react-redux";


const Video = (props) => {

const dispatch = useDispatch()
const detail = useSelector(state => state.videoDetail)

useEffect(()=>{
dispatch(getVideoDetail(props.match.params.id))
dispatch(resetDetail())
},[dispatch], props.match.params.id)
console.log(detail)
console.log(Object.keys(detail))

  return (
    <div>
      {Object.keys(detail).length?(
        <div>
          <h1>{detail.title}</h1>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${detail.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      ):
      <h1>Loading...</h1>}
    </div>
  )
}

export default Video