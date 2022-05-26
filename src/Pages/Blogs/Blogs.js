import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-12'>
            <h1 className='text-3xl mb-2'>Simple question and answer:</h1>
            <div className="col-md-6 col-12 container mb-12">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                                How will you improve the performance of a React Application?                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show grid justify-items-start leading-8 p-3"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <p>1. Disable all extensions temporarily, especially React Developer Tools, because they can mess with the result of the analysis. You can easily disable extensions by running your browser in incognito mode.</p>
                            <p>2. Make sure the application is running in development mode. That is, the application should be running on your localhost.</p>
                            <p>3. Open Chrome’s Developer Tools, click on the “Performance” tab, and then click the “Record” button.
                            </p>
                            <p className=''>
                                4.  we could configure every component to only render or diff when necessary, to avoid wasting resources and time.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne4">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne4" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseOne4">
                                What are the different ways to manage a state in a React application?                          </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne4" className="accordion-collapse collapse grid justify-items-start leading-8 p-3"
                            aria-labelledby="panelsStayOpen-headingOne4">
                            <p>1. Local state - Local state is most often managed in React using the useState hook.</p>
                            <p>2. Global state - Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</p>
                            <p>3. Server state - Data that comes from an external server that must be integrated with our UI state.
                            </p>
                            <p className=''>
                                4. URL state - Data that exists on our URLs, including the pathname and query parameters.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne3">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne3" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseOne3">
                                How does prototypical inheritance work?
                                </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne3" className="accordion-collapse collapse grid justify-items-start leading-8 p-3"
                            aria-labelledby="panelsStayOpen-headingOne3">
                            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne1">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne1" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseOne1">
                                What is a unit test?Why should write unit tests?
                                </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne1" className="accordion-collapse collapse grid justify-items-start leading-8 p-3"
                            aria-labelledby="panelsStayOpen-headingOne1">
                            <p>UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.</p>
                            <p>Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
                            
                        </div>
                    </div>
                </div>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne2">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne2" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseOne2">
                                Why you do not set the state directly in React.For example, if you have const[products, setProducts]= useState([]).Why you do not set products =[...]instead, you use the setProducts                       </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne2" className="accordion-collapse collapse grid justify-items-start leading-8 p-3"
                            aria-labelledby="panelsStayOpen-headingOne2">
                            <div class="mockup-code">
                                <pre data-prefix="1"><code>const[products, setProducts]= useState([])</code></pre>
                            </div>
                            <p>
                                The names on the left aren’t a part of the React API. You can name your own state variables:
                                This JavaScript syntax is called “array destructuring”. It means that we’re making two new variables products and setProducts, where fruit is set to the first value returned by useState, and setProducts is the second.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;