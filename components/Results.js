import Thumbnail from "./Thumbnail"
import FlipMove from 'react-flip-move'
function Results({results}) {
    return (
        <FlipMove className="px-5 mx-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center ">
            {
                results.map((data) => (
                    <Thumbnail key={data.id} data={data}/>
                ))
            }           
        </FlipMove>
    )
}

export default Results
