const videos = [
    {
        name: 'Closures from A to Z',
        duration: '12 minutes',
    },
    {
        name: 'JS Functions',
        duration: '15 minutes',
    },
    {
        name: 'Array',
        duration: '8 minutes',
    },
]
export function VideoList(){
    return(
        <>
            <h1>Video List</h1>
            {
                videos.map((video) => {
                    return(
                        <div>
                            <p>
                                {video.name}
                            </p>
                            <p>
                                {video.duration}
                            </p>
                            <button>
                                Like!
                            </button>
                        </div>
                    )
                })
            }
        </>
        
    )
}