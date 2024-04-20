import React, { Component } from 'react'
import Title from'./Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
export default class Services extends Component {
  state={
    services:[
      {
        icon:<FaCocktail/>,
        title: 'Free Cocktails',
        info: "Sip on complimentary handcrafted cocktails with premium tropical ingredients."
      },
      {
        icon:<FaHiking/>,
        title: 'Endless Hiking',
        info: "Explore scenic coastal trails and lush landscapes with our guided hiking tours."
      },
      {
        icon:<FaShuttleVan/>,
        title: 'Free Shuttle Service',
        info: "Enjoy 24/7 complimentary shuttle service for easy exploration of the vibrant neighborhood."
      },
      {
        icon:<FaBeer/>,
        title: 'Craft Beers',
        info: "Relax by the shore with the city's strongest and most distinctive craft beers."
      }
    ]
  };
  render() {
    return (
      <section className='services'>
        <Title title='services'/>
        <div className='services-center'>
        {this.state.services.map((item, index)=>{
        return( 
        <article key={index} className='service'>
          <spann> {item.icon}</spann>
          <h6>{item.title}</h6>
          <p>{item.info}</p>
          </article>
       );
      })}
      </div>
      </section>
    );
  }
}
