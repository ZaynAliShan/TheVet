import React from "react";
import BlogItem from "./BlogItem";
import { useEffect } from "react";
import { useState } from "react";
import BlogDetails from "./BlogDetails";

export default function Blog() {
  //If we want to add Blog Functionality
    const [currentComponent, setcurrentComponent] = useState({
        component:"componentBlog",
        content:null
    });
    function handleBlogClick(newComponent){
     setcurrentComponent(newComponent)
    }
    //Dummy News
  const dummy = [
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Caitlin McCabe, Caitlin Ostroff, Weilun Soon",
      title:
        "Stock Market Today: Dow Futures Fall in Year's Last Trading Day - The Wall Street Journal",
      description: "Follow The Wall Street Journal’s full markets coverage.",
      url: "https://www.wsj.com/livecoverage/stock-market-news-today-12-30-2022",
      urlToImage: "https://images.wsj.net/im-589547/social",
      publishedAt: "2022-12-30T12:19:00Z",
      content: null,
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Southwest promises refunds as airline sees 'certain' financial impact - Reuters",
      description:
        'Southwest Airlines <a href="https://www.reuters.com/companies/LUV.N" target="_blank">(LUV.N)</a> promised to reimburse passengers for expenses such as hotels and car rentals in addition to refunding tickets after it canceled thousands of flights due to a mass…',
      url: "https://www.reuters.com/business/aerospace-defense/southwest-unions-say-they-warned-company-about-outdated-systems-years-2022-12-29/",
      urlToImage:
        "https://www.reuters.com/resizer/eg2W2Cy0Xn04IR1rM7Qm6aAkA7w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I4GO5UPG4ZKPFKRCDDB6K2L5KM.jpg",
      publishedAt: "2022-12-30T11:52:00Z",
      content:
        "WASHINGTON, Dec 29 (Reuters) - Southwest Airlines (LUV.N) promised to reimburse passengers for expenses such as hotels and car rentals in addition to refunding tickets after it canceled thousands of … [+4314 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title: "Hershey sued in US over metal in dark chocolate claim - BBC",
      description:
        "The lawsuit alleges that three Hershey products contain harmful levels of lead and cadmium.",
      url: "https://www.bbc.com/news/business-64123157",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/4DDF/production/_128153991_7ad82c3ef6b27b0d6ff8d7880758d76ffd47936c.jpg",
      publishedAt: "2022-12-30T10:30:37Z",
      content:
        "Chocolate manufacturer Hershey has been sued in the US over claims the firm is selling products containing harmful levels of metal.\r\nThe lawsuit brought by Christopher Lazazzaro alleges the firm misl… [+2322 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "China's Huawei sees 'business as usual' as U.S. sanctions impact wanes - Reuters",
      description:
        "Chinese tech giant Huawei Technologies Co Ltd (HWT.UL) estimated on Friday its 2022 revenue remained flat, suggesting that its sales decline due to U.S. sanctions had come to a halt.",
      url: "https://www.reuters.com/technology/chinas-huawei-sees-2022-revenue-6369-bln-yuan-report-2022-12-30/",
      urlToImage:
        "https://www.reuters.com/resizer/E1rdAj_yVLV_ZdPAx-dseCVEYUU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BEAV3RBVLVOETJPTJMUQYFDWDM.jpg",
      publishedAt: "2022-12-30T07:27:00Z",
      content:
        "SHANGHAI, Dec 30 (Reuters) - Chinese tech giant Huawei Technologies Co Ltd (HWT.UL) estimated on Friday its 2022 revenue remained flat, suggesting that its sales decline due to U.S. sanctions had com… [+2033 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Jihye Lee",
      title: "Asia markets: South Korea inflation, China reopening - CNBC",
      description:
        "Stocks in the Asia-Pacific are set to trade higher after Wall Street rebounded overnight, recovering most losses from the previous session.",
      url: "https://www.cnbc.com/2022/12/30/asia-markets-south-korea-inflation.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107172471-1672365838654-gettyimages-1245864022-HK_COVID.jpeg?v=1672365953&w=1920&h=1080",
      publishedAt: "2022-12-30T06:47:00Z",
      content:
        'Chinese markets will likely see a "tactical bounce" of a recovery in the coming year, Port Shelter Investment Management said.\r\n"It\'s only obvious to say that we\'re likely to see a tactical bounce," … [+538 chars]',
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Sam Reynolds",
      title:
        "Regulators in the Bahamas Are Holding $3.5 Billion in FTX Customer Assets - Yahoo Finance",
      description:
        "Concerns over the security of assets in FTX custody prompted the Bahamian regulator to step in, a statement says.",
      url: "https://finance.yahoo.com/news/regulators-bahamas-holding-3-5-063534370.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/kxlYEcbE4JAF20.1Dq2DRw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDA-/https://media.zenfs.com/en/coindesk_75/86c57b74035fadc7ba96ca218d5a5ad7",
      publishedAt: "2022-12-30T06:35:00Z",
      content:
        "The Bahamian Securities Commission has taken custody of FTX deposits valued at more than $3.5 billion as of Nov. 12, according to a media release published late Thursday by the BSC.\r\nShortly after FT… [+919 chars]",
    },
    {
      source: {
        id: "financial-times",
        name: "Financial Times",
      },
      author: "Richard Waters",
      title:
        "Musk breaks the spell he had woven around Tesla - Financial Times",
      description:
        "As auto industry faces an uncertain 2023, entrepreneur must take some of the blame for company’s problems",
      url: "https://www.ft.com/content/cf81ea51-d1bb-4145-8157-e514025c63ef",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F9df742c1-785e-4a0e-a2f7-2188312f964c.jpg?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2022-12-30T05:00:06Z",
      content:
        "For much of this year, as other growth stocks collapsed, Tesla appeared to defy gravity. The bulls complained that shares in Elon Musks electric carmaker were suffering because of his offer for Twitt… [+4117 chars]",
    },
    {
      source: {
        id: "bloomberg",
        name: "Bloomberg",
      },
      author: "Jan-Patrick Barnert",
      title:
        "Stock Market 2023: After $18 Trillion Rout, Equity Faces More Hurdles Next Year - Bloomberg",
      description:
        "More tech tantrums. China’s Covid surge. And above all, no central banks riding to the rescue if things go wrong. Reeling from a record $18 trillion wipeout, global stocks must surmount all these hurdles and more if they are to escape a second straight year i…",
      url: "https://www.bloomberg.com/news/articles/2022-12-30/after-18-trillion-rout-global-stocks-face-more-hurdles-in-2023",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iQWc1jSAYHaQ/v0/1200x800.jpg",
      publishedAt: "2022-12-30T05:00:00Z",
      content:
        "More tech tantrums. China’s Covid surge. And above all, no central banks riding to the rescue if things go wrong. Reeling from a record $18 trillion wipeout, global stocks must surmount all these hur… [+343 chars]",
    },
    {
      source: {
        id: null,
        name: "Benzinga",
      },
      author: "Bhavik Nair",
      title:
        "Cathie Wood Loads Up On Tesla Shares For Third Straight Day: Also Makes Over $5M Purchase In This Crypto-Related Stock - Tesla (NASDAQ:TSLA), Coinbase Global (NASDAQ:COIN) - Benzinga",
      description:
        "As Tesla shares continued to rally for the second day, Cathie Wood-led ARK Investment Management bought 22,514 shares of the EV-maker at an estimated valuation of over $2.74 million.",
      url: "https://www.benzinga.com/markets/cryptocurrency/22/12/30233249/cathie-wood-loads-up-on-tesla-shares-for-third-straight-day-also-makes-over-5m-purchase-in",
      urlToImage:
        "https://cdn.benzinga.com/files/images/story/2022/12/29/vlad-tchompalov-jwyo3nhpzkq-unsplash.jpg?width=1200&height=800&fit=crop",
      publishedAt: "2022-12-30T02:39:14Z",
      content:
        "As Tesla shares continued to rally for the second day, Cathie Wood-led ARK Investment Management bought 22,514 shares of the EV-maker at an estimated valuation of over $2.74 million.\r\nWhat Happened: … [+1387 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Venugopal Dhoot: How debt and bad loan led to Videocon owner's downfall - BBC",
      description:
        "Venugopal Dhoot was arrested earlier this week in a case of fraud, which he denies.",
      url: "https://www.bbc.com/news/world-asia-india-64073467",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/5A99/production/_128139132_gettyimages-486154904-594x594.jpg",
      publishedAt: "2022-12-30T01:25:14Z",
      content:
        "Venugopal Dhoot, one of India's best-known business tycoons, was arrested earlier this week - nearly four years after India's federal investigation agency filed a case of criminal conspiracy and frau… [+5596 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Jeremy C. Owens",
      title:
        "Tesla is not alone: 18 (and a half) other big stocks are headed for their worst year on record - MarketWatch",
      description:
        "Meta Platforms and PayPal are also among S&P 1500 stocks with $30 billion market cap or larger that are headed for their biggest percentage declines yet in 2022",
      url: "https://www.marketwatch.com/story/tesla-is-not-alone-18-and-a-half-other-big-stocks-are-headed-for-their-worst-year-on-record-11672361991",
      urlToImage: "https://images.mktw.net/im-587536/social",
      publishedAt: "2022-12-30T00:59:00Z",
      content:
        "In the worst year for stocks since the Great Recession, several big names are headed for their worst year on record with just one trading day left in 2022.The S&amp;P 500 index \r\n SPX,\r\n +1.75%\r\nand … [+4511 chars]",
    },
    {
      source: {
        id: null,
        name: "OPB News",
      },
      author: "April Ehrlich",
      title:
        "PGE, Pacific Power electricity rates increase Jan. 1 - Oregon Public Broadcasting",
      description:
        "Oregon’s utility regulator on Thursday announced approved rate increases for Portland General Electric and Pacific Power customers, citing increased costs to produce and purchase electricity.",
      url: "https://www.opb.org/article/2022/12/29/portland-general-electric-pacific-powe-electricity-rates-increase-jan-1-pge/",
      urlToImage:
        "https://opb-opb-prod.cdn.arcpublishing.com/resizer/tipl2rKQVZeE3DYIvuRNfs80mEc=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/opb/XLHO4LUNQ5AXTFY66FEIHPEPKU.jpg",
      publishedAt: "2022-12-30T00:56:33Z",
      content:
        "Portland General Electric's Beaver Power Plant has been in operation since 1974.\r\nCourtesy of PGE\r\nMany Oregonians can expect higher electricity bills starting on New Years Day.\r\nOregons utility regu… [+1739 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Oil drops on China uncertainty; U.S. demand limits decline - Reuters",
      description:
        "Oil prices fell for a second straight session on Thursday on an uncertain demand outlook as more countries considered restrictions on Chinese travelers with COVID-19 infections spreading in the top oil-importing nation.",
      url: "https://www.reuters.com/business/energy/oil-prices-ease-china-covid-spike-hurts-demand-outlook-2022-12-29/",
      urlToImage:
        "https://www.reuters.com/resizer/2J_VHOCyXbmW-54CbBreqHlcNcc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TUK6CK5VQJOQFHOBP5WX7P3IRA.jpg",
      publishedAt: "2022-12-30T00:40:00Z",
      content:
        "NEW YORK, Dec 29 (Reuters) - Oil prices fell for a second straight session on Thursday on an uncertain demand outlook as more countries considered restrictions on Chinese travelers with COVID-19 infe… [+2566 chars]",
    },
    {
      source: {
        id: null,
        name: "Newsday",
      },
      author: "Matthew Chayes",
      title: "Grand Central Madison will not open in 2022, MTA says - Newsday",
      description:
        '"One particular zone in the 700,000 square-foot terminal requires additional work that will take more than a few days," MTA Construction and Development president Jamie Torres-Springer said in a statement. The agency\'s chairman, Janno Lieber, had repeatedly p…',
      url: "https://www.newsday.com/long-island/transportation/grand-central-madison-opening-plan-yqs17iwg",
      urlToImage:
        "https://cdn.newsday.com/ace/c:ZTExMGMwZDUtMzRhMC00:ZGVlNTZh/landscape/1280",
      publishedAt: "2022-12-30T00:03:40Z",
      content:
        "The Metropolitan Transportation Authority will miss its own year-end deadline for Long Island Rail Road trains to begin stopping at Grand Central Terminal, the agency conceded Thursday afternoon. \r\n … [+2323 chars]",
    },
    {
      source: {
        id: null,
        name: "Fox Business",
      },
      author: "Aislinn Murphy",
      title:
        "Starbucks to change number of rewards 'stars' needed for free drinks in February - Fox Business",
      description:
        'The number of "stars" Starbucks customers will need to get certain food and drinks for free through its rewards program is slated to go up in February.',
      url: "https://www.foxbusiness.com/lifestyle/starbucks-change-number-rewards-stars-needed-free-drinks-february",
      urlToImage:
        "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/10/0/0/Starbucks-Logo2a.jpg?ve=1&tl=1",
      publishedAt: "2022-12-29T23:58:31Z",
      content:
        'The number of "stars" that Starbucks customers in the U.S. and Canada will need to get certain food and drinks for free through the company\'s rewards program is slated to go up in February.\r\nWhen mem… [+3802 chars]',
    },
    {
      source: {
        id: null,
        name: "CoinDesk",
      },
      author: "Sam  Kessler",
      title: "FBI Investigating 3Commas Data Breach - CoinDesk",
      description:
        "This week, an anonymous person leaked 100,000 API keys connected to the crypto trading service.",
      url: "https://www.coindesk.com/business/2022/12/29/fbi-investigating-3commas-data-breach/",
      urlToImage:
        "https://www.coindesk.com/resizer/4GNZUdu67D-uMrxXqEhym0EFzDo=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/2HYIYJ3VNZBLZHG5WV4GRVGEOE.jpg",
      publishedAt: "2022-12-29T23:48:00Z",
      content:
        "The FBI is investigating the 3Commas data breach, CoinDesk has learned. The investigation comes after weeks of criticism from users of the Estonia-based crypto trading service, who say its CEO repeat… [+1605 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Peter Valdes-Dapena",
      title:
        "Tax credit confusion could create a rush for electric vehicles in early 2023 - CNN",
      description:
        "As the new year begins, a number of popular electric vehicles, specifically Tesla and General Motors models, could be eligible for $7,500 tax credits they weren't eligible for in 2022.",
      url: "https://www.cnn.com/2022/12/28/business/ev-tax-credit/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221222123330-us-electric-vehicle-tax-credit.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-29T23:33:00Z",
      content:
        "As the new year begins, a number of popular electric vehicles, specifically some Tesla and General Motors models, could be eligible for $7,500 worth of tax credits they werent eligible for in 2022. B… [+5839 chars]",
    },
    {
      source: {
        id: null,
        name: "The Daily Hodl",
      },
      author: "Daily Hodl Staff",
      title:
        "Bitcoin (BTC) Hitting New All-Time High Next Bull Cycle Not Guaranteed, Says Top Analyst - The Daily Hodl",
      description:
        "Popular crypto analyst and trader Jason Pizzino is warning that Bitcoin (BTC) is not guaranteed to hit a new record high like it did in previous bull cycles.",
      url: "https://dailyhodl.com/2022/12/29/bitcoin-btc-hitting-new-all-time-high-next-bull-cycle-not-guaranteed-says-top-analyst/",
      urlToImage:
        "https://dailyhodl.com/wp-content/uploads/2022/12/btc-Cycle-Not-Guaranteed.jpg",
      publishedAt: "2022-12-29T23:06:06Z",
      content:
        "Popular crypto analyst and trader Jason Pizzino is warning that Bitcoin (BTC) is not guaranteed to hit a new record high like it did in previous bull cycles.\r\nIn a new video, Pizzino tells his 279,00… [+1777 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Kelsey Vlamis,Madison Hall",
      title:
        "Home Depot's 93-year-old cofounder who said 'nobody works' anymore because of 'socialism' has donated $64 million to elect Trump and the Republican party over the years - Yahoo News",
      description:
        "Bernie Marcus, who has donated millions to Trump, said Thursday he did not think Home Depot would be as successful if it was founded today.",
      url: "https://www.businessinsider.com/home-depot-cofounder-nobody-works-donated-64-million-gop-trump-2022-12",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/0g5ij45oyps.vVMUELSSQg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04OTk-/https://media.zenfs.com/en/insider_articles_922/c276f120ee70cf3822986104ab6cc507",
      publishedAt: "2022-12-29T22:15:22Z",
      content:
        '<ul><li>Bernie Marcus, the billionaire cofounder of Home Depot, said Thursday "nobody works" anymore.\r\n</li><li>Marcus said he believed if he founded Home Depot today it wouldn\'t be as successful.\r\n<… [+3234 chars]',
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title: "Waffle House employee catches chair mid-air - FOX 11 Los Angeles",
      description:
        "The video posted to Twitter has gone viral.Subscribe to FOX 11 Los Angeles: https://www.youtube.com/channel/UCHfF8wFnipMeDpJf8OmMxDg?sub_confirmation=1Watch ...",
      url: "https://www.youtube.com/watch?v=FliJTGOQ0fQ",
      urlToImage: "https://i.ytimg.com/vi/FliJTGOQ0fQ/hqdefault.jpg",
      publishedAt: "2022-12-29T22:04:28Z",
      content: null,
    },
    {
        source: {
          id: null,
          name: "YouTube",
        },
        author: null,
        title: "Waffle House employee catches chair mid-air - FOX 11 Los Angeles",
        description:
          "The video posted to Twitter has gone viral.Subscribe to FOX 11 Los Angeles: https://www.youtube.com/channel/UCHfF8wFnipMeDpJf8OmMxDg?sub_confirmation=1Watch ...",
        url: "https://www.youtube.com/watch?v=FliJTGOQ0fQ",
        urlToImage: "https://i.ytimg.com/vi/FliJTGOQ0fQ/hqdefault.jpg",
        publishedAt: "2022-12-29T22:04:28Z",
        content: null,
      },
  ];

  const [state, setState] = useState({
    articles: dummy,
    totalResults: 0,
  });
  //States to handle pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setitemPerPage] = useState(2);
  const [pageLimit, setpageLimit] = useState(4);
  const [minPageLimit, setminPageLimit] = useState(0);
  const [maxPageLimit, setmaxPageLimit] = useState(4);

  const handlePageClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  //Working Logic of Pagination
  const Pages = [];
  for (let i = 1; i <= Math.ceil(state.articles.length / itemPerPage); i++) {
    Pages.push(i);
  }
  const indexOfLastPage = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastPage - itemPerPage;
  const currentItem = state.articles.slice(indexOfFirstItem, indexOfLastPage);
  const renderData = (data) => {
    return (
      <div>
        {data.map((article) => {
          return (
            <BlogItem
              title={article.title}
              description={article.description}
              image={article.urlToImage}
              content={article.content}
              onComponentChange={handleBlogClick}
            />
          );
        })}
      </div>
    );
  };
  //To move to next page and also changing  displaying pages accordingly
  const handleNextClick=()=>{
    setCurrentPage(currentPage+1);
    if(currentPage+1>maxPageLimit)
    {
        setmaxPageLimit(maxPageLimit+pageLimit);
        setminPageLimit(minPageLimit+pageLimit);
    }
  }
  //To go to previous page and also changing  displaying pages accordingly
  const handlePrevClick=()=>{
    setCurrentPage(currentPage-1);
    if((currentPage-1)%pageLimit==0)
    {
        setmaxPageLimit(maxPageLimit-pageLimit);
        setminPageLimit(minPageLimit-pageLimit);
    }
  }
  const[result,setResult]=useState();
//Api fetch
  useEffect(() => {
   
  
  });

  return (
    <div>
        
      <main>
        {/* <!--? Hero Start --> */}
        <div className="slider-area2">
          <div className="slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap hero-cap2 text-center">
                    <h2>What's New</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Hero End -->
        <!--================News Area =================--> */}
        <section className="blog_area section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="blog_right_sidebar">
                  <aside className="single_sidebar_widget search_widget">
                    <form action="#">
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search Keyword"
                            onfocus="this.placeholder = ''"
                            onblur="this.placeholder = 'Search Keyword'"
                          />
                          <div className="input-group-append">
                            <button className="btns" type="button">
                              <i className="ti-search"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </aside>
                  <aside className="single_sidebar_widget post_category_widget">
                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                      Category
                    </h4>
                    <ul className="list cat-list">
                      <li>
                        <a href="#" className="d-flex">
                          <p>Resaurant food</p>
                          <p>(37)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Travel news</p>
                          <p>(10)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Modern technology</p>
                          <p>(03)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Product</p>
                          <p>(11)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Inspiration</p>
                          <p>21</p>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="d-flex">
                          <p>Health Care (21)</p>
                          <p>09</p>
                        </a>
                      </li>
                    </ul>
                  </aside>

                  <aside className="single_sidebar_widget newsletter_widget">
                    <h4 className="widget_title" style={{ color: "#2d2d2d" }}>
                      Newsletter
                    </h4>
                    <form action="#">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email'"
                          placeholder="Enter email"
                          required
                        />
                      </div>
                      <button
                        className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                  </aside>
                </div>
              </div>
              <div className="col-lg-8 mb-5 mb-lg-0">
               {/* if we want to add actual Blog Functionality */}
                    {currentComponent.component==='componentBlog'&&(
                        <div className="blog_left_sidebar">
                 
                        {renderData(currentItem)}
      
                        <nav className="blog-pagination justify-content-center d-flex">
                          <ul className="pagination">
                            <li className="page-item page-link" aria-label="Previous">                     
                                <button className="ti-angle-left" disabled={currentPage==Pages[0]?true:false} onClick={handlePrevClick}></button>
                            </li>
                            {Pages.map((number) => {
                              if (
                                number < maxPageLimit + 1 &&
                                number > minPageLimit
                              ) {
                                return (
                                  <li
                                    className={`page-item page-link ${
                                      currentPage == number ? "active" : null
                                    }`}
                                    key={number}
                                    id={number}
                                    value={number}
                                    onClick={handlePageClick}
                                  >
                                    {number}
                                  </li>
                                );
                              } else {
                                return null;
                              }
                            })}
      
                            <li className="page-item page-link" aria-label="Next">
                             
                                <button className="ti-angle-right" disabled={currentPage==Pages[Pages.length-1]?true:false} onClick={handleNextClick}></button>
                              
                            </li>
                          </ul>
                        </nav>
                      </div>
                    )}
                    {currentComponent.component==='componentBlogDetails'&&<BlogDetails content={currentComponent.content}/>

                    }
                  
                
              </div>
            </div>
          </div>
        </section>
        {/* <!--================New's Area =================--> */}
      </main>
    </div>
  );
}
