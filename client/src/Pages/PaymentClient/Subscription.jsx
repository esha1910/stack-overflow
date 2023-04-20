import React from 'react'
import "./Subscription.css"
import {NavLink} from 'react-router-dom'
const Card = () => {

    return(  
          <section className='premium-section'>
                <div className='pre-container'>
                    <div className='container-1'>
                        <div className='title'>Free Premium</div>
                        <h3> Free (1 Question/ Day)</h3>
                        <p> No credit card required</p>
                        <p>ChatOps integrations - Slack & Microsoft Teams</p>
                        <p>Your own private space hosted on stackoverflowteams.com</p>
                        <p>Structured and searchable knowledge base</p>
                        <NavLink className='payment-btn' to='/'> Try Now</NavLink>
                    </div>

                    <div className='container-2'>
                        <div className='title-2'>Silver Premium <br />&#8377;100 per month</div>
                        <h3> 5 Questions/Day</h3>
                            <p>Post questions</p>
                            <p>Answer the Questions of Another users</p>
                            <p>Your own private space hosted on stackoverflow.com</p>
                            <p>Structured and searchable knowledge base</p>
                            <NavLink className='payment-btn' to= 'https://rzp.io/i/KIG3BFP'>Buy Now</NavLink>
                    </div>
                    
                    <div className='container-3'>
                        <div className='title-3'> Gold Premium <br />&#8377;1000 per month</div>
                        <h3> Unlimited Questions/Day
                            </h3>
                            <p>Post questions</p>
                            <p>Answer the Questions of Another users</p>
                            <p>Your own private space hosted on stackoverflow.com</p>
                            <p>Structured and searchable knowledge base</p>
                            <NavLink className='payment-btn' to='https://rzp.io/i/KGsuwA8'>Buy now</NavLink>     
                    </div>
                </div>
            </section>
    );
}

export default Card