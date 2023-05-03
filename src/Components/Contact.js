const Contact = () => {
    return (
        <main>
            <h1>Contact</h1>
            <h2>Have a feedback?</h2>
            <form>
                <div className="form-floating mb-3">
                    <input className="form-control" id="name" type="text" placeholder="Name" autoComplete="name"/>
                    <label for="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input className="form-control" id="email" type="email" placeholder="name@example.com" autoComplete="email"/>
                    <label for="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className="form-control" rows={"5"} placeholder="Max. 2000 characters" maxLength={"2000"} required/>
                    <label>Your Feedback</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </main>
    )
}

export default Contact