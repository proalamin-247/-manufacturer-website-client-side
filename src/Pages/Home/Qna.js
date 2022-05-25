import React from 'react';

const qna = () => {
    return (
        <section className="container my-5" id="faq">
            <h1 className="text-center text-3xl">Simple QNA and <span className='text-primary'>all are Benefits</span></h1>
            <div className="row  m-5">
                <div className="col-md-6 col-12">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                    Which market top motorcycle brand your top client?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">
                                    The motorcycle parts we have developed for the applicable brands include:HONDA、YAMAHA、SUZUKI、BAJAJ、 HAOJIN、HAOJUE、ZONGSHEN、LONGXIN and LIFAN etc. in Main-engine Market and After-Sale-Market.With more than 500 cooperative suppliers
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                    In addition to manufacturing, wholesale and selling general motorcycle parts?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div className="accordion-body">
                                    We also provides retail services of modified parts for KTM, BMW, KAWASAKI, BENELLI, YAMAHA and other brands as well as motorcycle parts problem solutions and related parts product development services
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                    What is yur philosophy ?
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    Our philosophy is: with Customer-Focused、Specialty and Concentration oriented, to create value for the customers overseas with first-rate products but attractive price!
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                    More than 500 cooperative suppliers
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div className="accordion-body">
                                    A motorcycle spare parts manufacturer with standard and perfect supple system. More than 500 cooperative suppliers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src="https://i.ibb.co/2SqXBY8/factory-one.jpg" width="400" alt="" />
                </div>
            </div>
        </section>
    );
};

export default qna;