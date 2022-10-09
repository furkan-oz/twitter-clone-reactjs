import './Bookmarks.css'

const Bookmarks = () => {
    document.title = "Bookmarks / Twitter";

    return(
        <div className="bookmarks border min-vh-100 w-100">
            <div className="bookmarks-header mt-1 ms-3">
                <div className="fw-bold fs-5">Bookmarks</div>
                <div className="bookmarks-nickname text-secondary">@frkan_oz</div>
            </div>
            <div className="bookmarks-info w-100 text-center">
            <img className='bookmarks-info-image mt-5' src="https://abs.twimg.com/sticky/illustrations/empty-states/book-in-bird-cage-400x200.v1.png" alt="" />
            <div className='bookmarks-text m-auto'>
            <div className="fs-2 fw-bold mt-4 text-start">Save Tweets for later</div>
            <div className='d-inline-block text-secondary text-start'>Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.</div>
            </div>
            </div>
        </div>
    )
}

export default Bookmarks;