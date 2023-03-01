import headlineImgDesktop from '../../assets/images/image-web-3-desktop.jpg'
import headlineImgMobile from '../../assets/images/image-web-3-mobile.jpg'
import recommendedImg1 from '../../assets/images/image-retro-pcs.jpg'
import recommendedImg2 from '../../assets/images/image-top-laptops.jpg'
import recommendedImg3 from '../../assets/images/image-gaming-growth.jpg'


const Content = () => {
  return (
    <main className="main-content" role="main">
      <div className="headline-news">
        <picture className="headline-news__img">
          <source srcSet={headlineImgDesktop} media="(min-width: 768px)"/>
          <img src={headlineImgMobile} alt="" />
        </picture>
        <div className="headline-news__content">
          <h1 className="content__title">The Bright Future of Web 3.0?</h1>
          <div className="content__text">
            <p>
              We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
            </p>
            <a href="#" className="headline-cta">READ MORE</a>
          </div>
        </div>
      </div>
      <div className="new-news">
        <h2 className="new-news__heading">New</h2>
        <div className="new-news__news-items">
          <div className="news-items__content">
            <h3 className="content-title">Hydrogen vs Electric Cars</h3>
            <p className="content-text">Will hydrogen-fueled case ever catch up to EVs?</p>
          </div>
          <div className="news-items__content">
            <h3 className="content-title">The Downsides of Ai Artistry</h3>
            <p className="content-text">What are the possible adverse effects of on-demand Ai image generation?</p>
          </div>
          <div className="news-items__content">
            <h3 className="content-title">Is VC Funding Drying Up?</h3>
            <p className="content-text">Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </div>
        </div>
      </div>
      <div className="recommended-news">
        <div className="recommended-news__news-items">
          <div className="news-items__img">
            <img src={recommendedImg1} alt="" />
          </div>
          <div className="news-items__content">
            <span>01</span>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="recommended-news__news-items">
          <div className="news-items__img">
            <img src={recommendedImg2} alt="" />
          </div>
          <div className="news-items__content">
            <span>02</span>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets</p>
          </div>
        </div>
        <div className="recommended-news__news-items">
          <div className="news-items__img">
            <img src={recommendedImg3} alt="" />
          </div>
          <div className="news-items__content">
            <span>03</span>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Content