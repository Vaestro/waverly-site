import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Influencer from './Influencer';

export default() => {

  return (
      <div className='columns is-multiline'>
      <div className="column is-one-third">
        <Influencer url='https://bit.ly/2HSTYk2' imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/socialspeedster-work.png")' title='Social Speedster' subtitle='Social Speedster is the first platform that helps increase your organic Instagram engagement.' hexColor="#f3a4b5"/>
      </div>

        <div className="customer column is-one-third">
          <Influencer url='https://getstoryflow.app' imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/storyflow-layouts.png")' title='Storyflow' subtitle='Create amazing stories for Instagram, Snapchat, and more' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url="https://dareyouapp.com" imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/dareyou-work.png")' title='Dare You' subtitle='The challenge network' hexColor="#f3a4b5"/>
        </div>
        <div className="column is-one-third">
          <Influencer url='https://waverlysocial.com' imgUrl='url("https://s3.amazonaws.com/flauntappbucket/waverlysocial.png")' title='Waverly Social' subtitle='Social media management agency specializing in Influencers, Models, and Photographers' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url='https://useflaunt.com' imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/flaunt-work.png")' title='Flaunt' subtitle='Easy to use subscription creation and management tools to modernize payment collection for your business' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url='#' imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/Desktop+HD.png")' title='Allstate CMS' subtitle='Tax & Accounting Management Platform' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url='https://2020influencers.com' imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/Screenshot-2018-4-23+2020+Influencers+-+The+%231+Social+Media+Influencer+Agency.jpg")' title='2020 Social' subtitle='The leading social media influencer agency' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url="https://moved.com" imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/moved.png")' title='Moved iOS' subtitle='Your moving assistant' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url="https://cointelligent.io" imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/cointelligent-case-study.png")' title='Cointelligent' subtitle='Keep on top of the crypto world' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url="https://thememegod.com" imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/memes-case-study.png")' title='Memes Against Friends' subtitle='The memes party game for iOS' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url="https://maxwork.co" imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/maxicom-case-study.png")' title='Maxicom' subtitle='The platform to get paid for your network' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url="https://duriteusa.com" imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/durite-case-study.png")' title='Durite' subtitle='The best terrazo manufacturing company in NYC' hexColor="#f3a4b5"/>
        </div>
        <div className="customer column is-one-third">
          <Influencer url='#' imgUrl='url("https://s3.amazonaws.com/waverly-marketing-site/hype-case-study.png")' title='Hype' subtitle='Nightlife made easy in NYC' hexColor="#f3a4b5"/>
        </div>
      </div>

  )
}
