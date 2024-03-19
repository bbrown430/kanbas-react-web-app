function Status() {
    return(
        <div className="d-none d-lg-block ms-3">
            <button className="btn btn-secondary me-2 mb-2">Publish</button>
            <button className="btn btn-secondary mb-2">Un-Publish</button>
            <br />
            <button className="btn btn-secondary mb-2">Import Existing Content</button>
            <br />
            <button className="btn btn-secondary mb-2">Import From Commons</button>
            <br />
            <button className="btn btn-secondary mb-2">Choose Home Page</button>
            <br />
            <button className="btn btn-secondary mb-2">View Course Stream</button>
            <h4>To-Do</h4>
            <hr className="m-0 mb-2"/>
            <p>Nothing!</p>
            <h4>Coming Up</h4>
            <hr className="m-0 mb-2"/>
            <p>Nothing!</p>
        </div>
        
    );
}
export default Status