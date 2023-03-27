import React from 'react';

function Content() {
    return(
        <body class="pt-5">
            <div class="container-fluid">
                <header role="banner" className="fixed-top">
                    <nav role="navigation" aria-label="Main navigation" className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <div className="container">
                            <a className="navbar-brand" href="/">MyWebClass.org</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Toggle navigation</span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link" href="content.html">Content Template</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                <main>
                    <div className="container my-5">
                        <div className="row p-4 pb-0 pe-lg-0 pt-lg-0 align-items-center rounded-3 border shadow-lg ">
                            <div className="col-lg-7 p-3 p-lg-3 pt-lg-1">
                                <h1 className="display-6 fw-bold lh-1">Revolutionize your teaching</h1>
                                <p className="lead">
                                    Empower your students with cutting-edge software engineering skills. Join MyWebClass and discover advanced
                                    technologies that will transform your teaching and their learning journey.
                                </p>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                                    <button type="button" className="btn btn-success btn-lg px-4 me-md-2 fw-bold">
                                        Start Here
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                                <img
                                    className="rounded-lg-3 img-fluid"
                                    src="assets/images/teacher.gif"
                                    alt="a teacher with students"
                                    width="720"
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </body>
    )
}

export default Content;