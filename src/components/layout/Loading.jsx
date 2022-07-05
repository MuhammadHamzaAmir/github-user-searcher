import Loader from "./assets/loading.gif";

function Loading() {
  return (
    
    <div  className="w-140 mt-20">
        <img className="text-center mx-auto" width={249} src={Loader} alt="Loading..."/>    
    </div>
  )
}

export default Loading 