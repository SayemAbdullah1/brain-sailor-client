import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
                <h1 className='text-center mt-5 mb-5 fw-bold text-primary'>Blog post</h1>
                <hr />
                <div className="container text-center">
                    <div className="row g-2">
                        <div className="col-12 col-lg-6">
                            <div className="p-3 border bg-light">
                                <h4>What is cors?</h4>
                                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                                </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="p-3 border bg-light">
                                <h4>Why are you using firebase? What other options we have to implement authentication?</h4>
                                <p>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p> <br />
                                <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                                </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="p-3 border bg-light">
                                <h4>How does the private route work?</h4>
                                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                                </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="p-3 border bg-light">
                                <h4>What is Node? How does Node work?</h4>
                                <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                                <br />
                                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                                </div>
                        </div>
                        
                        
                            
                        
                        
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Blog;