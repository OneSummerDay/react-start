const videos = [
    {
        name: 'Closures from A to Z',
        duration: '12 minutes',
        id: 1,
    },
    {
        name: 'JS Functions',
        duration: '15 minutes',
        id: 2,
    },
    {
        name: 'Array',
        duration: '8 minutes',
        id: 3,
    },
]
export function VideoList(){
    return(
        <>
            <h1>Video List</h1>
            {
                videos.map((video) => {
                    return(
                        <div key={video.id}>
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